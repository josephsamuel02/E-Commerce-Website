import "./Nav.css";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
    const theCount = useSelector((state) => state.CartQuantity);
    const [cartCount, setCartCount] = useState(theCount);

    useEffect(() => setCartCount(theCount), [theCount]);

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
                    {/* {cartCount ? <span>{cartCount}</span> : null} */}
                    {cartCount > 0 ? <span></span> : null}
                </h1>
            </Link>
        </div>
    );
};

export default Nav;
