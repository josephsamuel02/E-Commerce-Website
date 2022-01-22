import "./Cart.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePaystackPayment } from "react-paystack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerifyPayment } from "../../store/actions/Paystack";
import { GetCart } from "../../store/actions/Cart";
import { SendOrder } from "../../store/actions/Order";
import CartItems from "./CartItems";

const Cart = () => {
    const cartItems = useSelector((state) => state.GetCart);

    const cartSum = useSelector((state) => state.CartSumTotal[0]);
    const userId = useSelector((state) => state.LogIn._id);
    const userinfo = useSelector((state) => state.LogIn);
    const VerifyPaymentStatus = useSelector(
        (state) => state.VerifyPayment.status
    );
    const dispatch = useDispatch();

    const [cartSumStr, setCartSumStr] = useState();
    const [displayOrder, setDisplayOrder] = useState(false);
    const [displayPAyment, setDisplayPAyment] = useState(false);
    const [giftcartForm, setGiftcartForm] = useState(false);

    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    const [delvAdd, setDelvAdd] = useState();

    const settotal = () => {
        cartSum &&
            setTimeout(() => {
                cartSum && setCartSumStr(Number(cartSum.total));
            }, 5000);
    };
    settotal();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            alternatePhone: "",
            deleveryAddress: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(25, "name cannot exceed 25 characters")
                .required("required"),
            email: Yup.string().min(10, "check email ").required("required"),
            phone: Yup.string()
                .max(13, "phone cannot exceed 12 characters")
                .required("required"),
            alternatePhone: Yup.string().max(
                13,
                "phone cannot exceed 12 characters"
            ),
            deleveryAddress: Yup.string()
                .min(10, "address cannot be less than 10 characters")
                .required("required"),
        }),

        onSubmit: (formik) => {
            const thegiftConfig = {
                name: formik.name,
                reference: new Date().getTime().toString(),
                email: formik.email,
                phone: formik.phone,
                alternatePhone: formik.alternatePhone,
                amount: cartSumStr * 100,
                deleveryAddress: formik.deleveryAddress,
                publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY,
            };
            setGiftconfig(thegiftConfig);

            setTimeout(() => {
                initializeGiftPayment(onSuccess, onClose);
            }, 1000);
        },
    });

    const config = {
        name: userinfo.username,
        reference: new Date().getTime().toString(),
        email: userinfo.email,
        phone: userinfo.phone,
        amount: cartSumStr * 100,
        deleveryAddress: delvAdd,
        publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY,
    };
    const [orderdelvAdd, setOrderdelvAdd] = useState(config);
    const [giftConfig, setGiftconfig] = useState("thegiftConfig");

    const onSuccess = (reference) => {
        console.log(config);

        dispatch(VerifyPayment(reference.reference));

        setTimeout(() => {
            dispatch(SendOrder(orderObject));
            // save transaction info to db or send automaticaly fro backend
            // window.location.replace("/cart");
            console.log(orderObject);
        }, 2000);
    };

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };

    const initializePayment = usePaystackPayment(config);
    const initializeGiftPayment = usePaystackPayment(giftConfig);

    const orderObject = {
        userEmail: userinfo.email,
        products: cartItems,
        amount: cartSumStr,
        receiversInfo: orderdelvAdd,
    };

    return (
        <div id="cartpage">
            <CartItems />
            {/* you must clck this button to be able to get user sumTotal its
            important */}
            <button
                onClick={() => {
                    setDisplayOrder(true);
                    settotal();
                }}
            >
                Continue to Place Order
            </button>
            <br /> <br />
            {displayOrder && (
                <div className="OrdersFormBox">
                    {!displayPAyment && (
                        <button
                            onClick={() => {
                                setDisplayPAyment(true);
                                setGiftcartForm(false);
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
                                {cartSum && <li>Total: NGN {cartSum.total}</li>}

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
                                            setOrderdelvAdd(delvAdd);
                                            setTimeout(() => {
                                                initializePayment(
                                                    onSuccess,
                                                    onClose
                                                );
                                            }, 2000);
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
                                placeholder="Beneficiary's Name"
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
                                placeholder="Beneficiary's Email"
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
                                placeholder="Beneficiary's phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <p>{formik.errors.phone}</p>
                            ) : null}
                            <br /> <br />
                            <input
                                type="number"
                                id="alternatePhone"
                                placeholder="alternateive Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.alternatePhone}
                            />
                            {formik.touched.alternatePhone &&
                            formik.errors.alternatePhone ? (
                                <p>{formik.errors.alternatePhone}</p>
                            ) : null}
                            <br /> <br />
                            <input
                                type="text"
                                id="deleveryAddress"
                                placeholder="Beneficiary's Delevery Address"
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
            )}
        </div>
    );
};

export default Cart;
