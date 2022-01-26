import "./Products.css";
import { Link } from "react-router-dom";
const Products = () => {
    return (
        <div className="products">
            <h2>Products Categories</h2>

            <div className="categorybox">
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
                <Link to={"/productslist"}>
                    <div className="categorycard">
                        <img src="https://picsum.photos/250" alt="" />

                        <h4>Category name</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Products;
