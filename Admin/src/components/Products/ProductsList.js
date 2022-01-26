import { Link } from "react-router-dom";
import "./ProductsList.css";
const ProductsList = () => {
    return (
        <div className="productslist">
            <h2>Products </h2>
            <div className="listcategorybox">
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus:
                                <span style={{ color: "red" }}>
                                    out of stuck
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductsList;
