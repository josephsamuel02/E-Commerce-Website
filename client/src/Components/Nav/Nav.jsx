import "./Nav.css";
import { MdShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetCart } from "../../store/actions/Cart";
import { userId } from "../../store/actions/User";
import { PURGE, persistStore, purge } from "redux-persist";
const Nav = () => {
    const theCount = useSelector((state) => state.GetCart.length);
    const changeAlart = useSelector((state) => state.AddToCart);

    const dispatch = useDispatch();

    useEffect(() => dispatch(GetCart(userId)), [changeAlart]);

    const logUserOut = () => {
        const persistor = persistStore();
        persistor
            .purge()
            .then(() => persistor.flush())
            .then(() => persistor.pause());
    };

    return (
        <div className="nav">
            <Link to="/">
                <div className="header">iRock.ng</div>
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

            <button className="logOut" onClick={() => logUserOut()}>
                LoggOut
            </button>

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
