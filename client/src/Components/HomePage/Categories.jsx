import "./Categories.css";
// import "./App.css"
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <>
            <div className="categoriesBox">
                <Link to="/categoryList?category=foodstuffs">
                    <div className="categoriesCard">
                        <img src="photos/measure foods.jpg" alt="" />
                        <p>Food Stuffs</p>
                    </div>
                </Link>

                <Link to="/categoryList?category=packagedfoods">
                    <div className="categoriesCard">
                        <img src="photos/PackagedFoods.jpg" alt="" />
                        <p>Packaged Foods</p>
                    </div>
                </Link>
                <Link to="/categoryList?category=food">
                    <div className="categoriesCard">
                        <img src="photos/Baked food.jpg" alt="" />
                        <p>Baked Foods</p>
                    </div>
                </Link>
                <Link to="/categoryList?category=vegesandspices">
                    <div className="categoriesCard">
                        <img
                            src="photos/measure foods.jpg"
                            alt="Veges and Spices"
                        />
                        <p>Veges and Spices</p>
                    </div>
                </Link>
            </div>

            <div className="categoriesBox">
                <Link to="/categoryList?category=cusmethics">
                    <div className="categoriesCard">
                        <img src="photos/Pets.jpg" alt="cusmethics" />
                        <p>Cusmethics</p>
                    </div>
                </Link>
                <Link to="/categoryList?category=accesories">
                    <div className="categoriesCard">
                        <img src="photos/accesories.jpg" alt="" />
                        <p>Accesories</p>
                    </div>
                </Link>

                <Link to="/categoryList?category=computers">
                    <div className="categoriesCard">
                        <img src="photos/computers 1.jpg" alt="" />
                        <p>Computers</p>
                    </div>
                </Link>

                <Link to="/categoryList?category=wears">
                    <div className="categoriesCard">
                        <img src="photos/Wears.jpg" alt="" />
                        <p>Wears</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Categories;
