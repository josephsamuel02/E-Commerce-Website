import "./Nav.css";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetCart } from "../../store/actions/Cart";

const Nav = () => {
    const theCount = useSelector((state) => state.GetCart.length);
    const changeAlart = useSelector((state) => state.AddToCart);

    const dispatch = useDispatch();

    useEffect(() => dispatch(GetCart()), [changeAlart]);

    return (
        <div className="nav">
            <Link to="/">
                <div className="header">Home Store</div>
            </Link>

            <div className="search">
                <input type="text" className="searchInput" />

                <input type="button" value="search" className="searchBtn" />
            </div>
            <div id="logANDregisterBTN">
                <Link to="/login">
                    <button className="LoginBtn">Login</button>
                </Link>
                <Link to="/register">
                    <button className="registerBtn">Register</button>
                </Link>
            </div>

            <Link to="/cart">
                <h1 id="CartIcon">
                    <MdShoppingCart />
                    {theCount ? theCount > 0 && <span>{theCount}</span> : ""}
                </h1>
            </Link>
        </div>
    );
};

export default Nav;
