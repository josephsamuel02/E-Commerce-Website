import "./Cart.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePaystackPayment } from "react-paystack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    GetCart,
    UpdateCart,
    DeleteCart,
    CartSumTotal,
} from "../../store/actions/Cart";

// const dotenv = require("dotenv").config();

const Cart = () => {
    const cartItems = useSelector((state) => state.GetCart);
    const cartSum = useSelector((state) => state.CartSumTotal);
    const userId = useSelector((state) => state.LogIn._id);
    const userinfo = useSelector((state) => state.LogIn);
    const dispatch = useDispatch();
    const [cartSumStr, setCartSumStr] = useState();
    const [displayPAyment, setDisplayPAyment] = useState(false);
    const [giftcartForm, setGiftcartForm] = useState(false);
    const handlechange = (e, id) => {
        const q = e.target.value;
        dispatch(UpdateCart(q, id));
        setTimeout(() => {
            window.location.replace("/cart");
        }, 200);
    };

    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    useEffect(() => {
        userId && dispatch(CartSumTotal(userId));
    }, [dispatch, CartSumTotal]);
    const [delvAdd, setDelvAdd] = useState();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            deleveryAddress: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(25, "name cannot exceed 25 characters")
                .required("required"),
            email: Yup.string().min(10, "check email "),
            phone: Yup.string()
                .required("required")
                .max(12, "phone cannot exceed 12 characters")
                .required("required"),
            deleveryAddress: Yup.string()
                .min(10, "address cannot be less than 10 characters")
                .required("required"),
        }),

        onSubmit: (formik) => {
            const giftConfig = {
                username: formik.name,
                reference: new Date().getTime().toString(),
                email: formik.email,
                phone: formik.phone,
                amount: cartSumStr * 100,
                deleveryAddress: formik.deleveryAddress,
                publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY,
            };

            setConfig(giftConfig);
            setTimeout(() => {
                console.log(giftConfig);
                initializePayment(onSuccess, onClose);
            }, 500);
        },
    });

    const userConfig = {
        username: userinfo.username,
        reference: new Date().getTime().toString(),
        email: userinfo.email,
        phone: userinfo.phone,
        amount: cartSumStr * 100,
        deleveryAddress: delvAdd,
        publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY,
    };
    const [config, setConfig] = useState(userConfig);

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        console.log(config);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };

    const initializePayment = usePaystackPayment(config);
    return (
        <div id="cartpage">
            {cartItems.map((i) => (
                <div className="cartCard" key={i._id}>
                    <div className="productimage">
                        <img src={i.image} alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">{i.title}</h3>
                        <p className="productprice">price: {i.price}</p>

                        <h3 className="quantity">
                            <select
                                defaultValue={i.quantity}
                                onChange={(e) => {
                                    handlechange(e, i._id);
                                }}
                            >
                                <option value={1}>1 </option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                            </select>
                        </h3>

                        <h3 className="productprice">
                            sum:
                            {i.quantity * i.price}
                        </h3>
                    </div>
                    <button
                        id="removeItem"
                        onClick={() => {
                            dispatch(DeleteCart(i._id));
                            window.location.replace("/cart");
                        }}
                    >
                        remove
                    </button>
                </div>
            ))}
            <br />
            {cartSum &&
                cartSum.map((i) => <h3 key={i._id}>Total:{i.total}</h3>)}
            <br />
            <br />
            {/* you must clck this button to be able to get user sumTotal its
            important */}

            {!displayPAyment && (
                <button
                    onClick={() => {
                        setCartSumStr(cartSum[0].total);
                        setDisplayPAyment(true);
                        setGiftcartForm(false);

                        setConfig(userConfig);
                    }}
                >
                    Place Order
                </button>
            )}

            {displayPAyment && (
                <div>
                    <ul>
                        <li> {userinfo.username} </li>
                        <li>Email Address: {userinfo.email}</li>
                        <li>Phone: {userinfo.phone}</li>
                        {cartSum &&
                            cartSum.map((i) => (
                                <li key={i._id}>Total: NGN {i.total}</li>
                            ))}
                        <p>Delevery adress</p>
                        <input
                            required
                            type="text"
                            id="first-name"
                            onChange={(e) => setDelvAdd(e.target.value)}
                        />
                        <br />
                        {delvAdd ? (
                            <button
                                onClick={() => {
                                    initializePayment(onSuccess, onClose);
                                }}
                            >
                                make payment
                            </button>
                        ) : (
                            <button disabled>make payment</button>
                        )}
                    </ul>
                </div>
            )}

            {!giftcartForm && (
                <button
                    onClick={() => {
                        setCartSumStr(cartSum[0].total);
                        setGiftcartForm(true);
                        setDisplayPAyment(false);
                    }}
                >
                    Gift this cart to someone
                </button>
            )}
            {giftcartForm && (
                <form onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p>{formik.errors.name}</p>
                    ) : null}
                    <br /> <br />
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p>{formik.errors.email}</p>
                    ) : null}
                    <br /> <br />
                    <input
                        type="number"
                        id="phone"
                        placeholder="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <p>{formik.errors.phone}</p>
                    ) : null}
                    <br /> <br />
                    <input
                        type="text"
                        id="deleveryAddress"
                        placeholder="Delevery Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.deleveryAddress}
                    />
                    {formik.touched.deleveryAddress &&
                    formik.errors.deleveryAddress ? (
                        <p>{formik.errors.deleveryAddress}</p>
                    ) : null}
                    <br /> <br />
                    <br /> <br />
                    <input type="submit" value="Send Gift" id="btn" />
                    <br /> <br />
                </form>
            )}
        </div>
    );
};

export default Cart;
