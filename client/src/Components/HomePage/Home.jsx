import "./Home.css";
import Categories from "./Categories.jsx";
import HomePageProducts from "./HomePageProducts";

const Home = () => {
    return (
        <div className="home">
            <div className="ctegorylist">
                <span>Find: </span>

                <select name="filter" id="category" defaultValue={"categories"}>
                    <option disabled>categories</option>
                    <option value="foodStuffs">Food Ftuffs </option>
                    <option value="vegitsblesandspices">
                        Fegitsbles and Spices
                    </option>
                    <option value="packaged foods">Packaged Foods</option>
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
