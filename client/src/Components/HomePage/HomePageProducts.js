import "./HomePageProducts.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { HomeProducts } from "../../store/actions/HomeProducts";

import { useDispatch, useSelector } from "react-redux";

const HomePageProducts = () => {
    const theProducts = useSelector((state) => state.HomeProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(HomeProducts({}, 1, 6));
    }, [dispatch]);
    // GET MORE STAFF PROFILES
    // const getmore = () => {
    //     let page = theProducts.page + 1;

    //     dispatch(Products(theProducts, page, 4));
    // };

    return (
        <div id="products">
            {theProducts
                ? theProducts.map((item) => (
                      <Link to={`/product/${item._id}`} key={item._id}>
                          <div className="productsCard">
                              <img src={item.image} alt="" />
                              <div className="detail">
                                  <h3 className="name">{item.title}t</h3>
                                  <p className="price">{item.price}</p>
                              </div>
                          </div>
                      </Link>
                  ))
                : null}
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>{" "}
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>{" "}
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>{" "}
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>{" "}
            <div className="productsCard">
                <img src="photos/Musical.png" alt="" />
                <div className="detail">
                    <h3 className="name">Head Set</h3>
                    <p className="price">N50,00.00</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageProducts;
