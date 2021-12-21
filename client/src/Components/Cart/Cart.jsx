import "./Cart.css";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../store/actions/Cart";

// import { BsTrash } from "react-icons/bs";

const Cart = () => {
    const cariItems = useSelector((state) => state.GetCart);
    const dispatch = useDispatch();

    useEffect(() => dispatch(GetCart()), []);
    console.log(cariItems);
    return (
        <div id="cartpage">
            <IconContext.Provider
                value={{
                    color: "rgb(233, 121, 30)",
                    size: "17px",
                }}
            >
                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <h5 id="removeItem">{/* <BsTrash /> */} remove</h5>
                </div>

                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <button id="removeItem">remove</button>
                </div>

                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <button id="removeItem">remove</button>
                </div>

                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <button id="removeItem">remove</button>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Cart;
