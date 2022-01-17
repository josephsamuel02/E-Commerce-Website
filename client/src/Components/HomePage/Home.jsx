import "./Home.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "./Categories.jsx";
import HomePageProducts from "./HomePageProducts";
import { GetCart } from "../../store/actions/Cart";
import { userId } from "../../store/actions/User";
const Home = () => {
    const theCount = useSelector((state) => state.GetCart.length);
    const dispatch = useDispatch();

    useEffect(
        () =>
            setTimeout(() => {
                dispatch(GetCart(userId));
            }, 500),
        [dispatch]
    );

    return (
        <div className="home">
            <div className="ctegorylist">
                <span>Find by: </span>

                <select name="filter" id="category" defaultValue={"categories"}>
                    <option disabled>categories</option>
                    <option value="foodStuffs">Food Ftuffs </option>
                    <option value="vegitsblesandspices">
                        Vegitsbles and Spices
                    </option>
                    <option value="packaged foods">Groceries</option>
                    <option value="baked foods">Baked Foods</option>
                    <option value="Accessories">Computers </option>
                    <option value="oldest">Accessories</option>
                    <option value="Wears">Wears</option>
                    <option value="pets">Pets</option>
                </select>
            </div>
            <Categories />
            <HomePageProducts />
        </div>
    );
};

export default Home;
