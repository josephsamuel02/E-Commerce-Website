import "./CategoryList.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Products } from "../../store/actions/Procucts";

import { useDispatch, useSelector } from "react-redux";

import { AddToCart, CartQuantity } from "../../store/actions/Cart";

const CategoryList = () => {
    const theProducts = useSelector((state) => state.Products.products);
    const dispatch = useDispatch();

    const cartCount = useSelector((state) => state.CartQuantity);

    const search = useLocation().search;
    const category = new URLSearchParams(search).get("category");

    //GET MORE STAFF PROFILES
    // const getmore = () => {
    //     let page = theProducts.page + 1;

    //     dispatch(Products(theProducts, page, 4, category));
    // };

    const [filterdObj, setFilterdObj] = useState("newest");
    const handleFilter = (e) => {
        setFilterdObj(e.target.value);
    };

    const [quantity, setQuantity] = useState(1);
    const inquan = (add) => {
        quantity + add < 1 ? setQuantity(1) : setQuantity(quantity + add);
    };

    const [showActions, setShowActions] = useState(false);
    const showbtn = () => {
        setShowActions(true);
    };
    // const product = [
    //     {
    //         productId: theProducts._id,
    //         quantity: quantity,
    //     },
    // ];
    const [totalcout, settotalcout] = useState(0);
    const addtocart = (id) => {
        dispatch(
            AddToCart([
                {
                    productId: id,
                    quantity: quantity,
                },
            ])
        );

        dispatch(CartQuantity(totalcout));
        settotalcout(cartCount);
    };

    useEffect(() => {
        dispatch(Products({}, 1, 4, category, filterdObj));
    }, [dispatch, category, filterdObj]);

    return (
        <div className=" CategoryList">
            <h3>{category}</h3>

            <div className="filterBox">
                <h4>Sort Products:</h4>

                <select name="filter" id="filter" onChange={handleFilter}>
                    <option disabled>options</option>
                    <option value="newest">newest</option>
                    <option value="oldest">oldest</option>
                    <option value="lowestPrice">lowest Price</option>
                    <option value="highestPrice">highest Price</option>
                </select>
            </div>

            <div className="CstegoryBox">
                {theProducts
                    ? theProducts.map((item) => (
                          <div
                              className=" CstegoryCard"
                              key={item._id}
                              onMouseOver={() => setShowActions(true)}
                              onMouseLeave={() => setShowActions(false)}
                          >
                              <Link to={`/product/${item._id}`}>
                                  <img src={item.image} alt="laptop" />
                                  <div className="Details">
                                      <h2>{item.title}</h2>
                                      <p> {item.price}</p>
                                      <p>{item.category}</p>
                                  </div>
                              </Link>
                              <h3 className="actions">
                                  {showActions && (
                                      <button
                                          onClick={() => addtocart(item._id)}
                                      >
                                          Add to cart
                                      </button>
                                  )}
                              </h3>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default CategoryList;

// <div className=" CstegoryCard">
// <img src="photos/laptop.jpg" alt="laptop" />
// <div className="Details">
//     <h2>Item Name</h2>
//     <p>$ Price</p>
// </div>
// </div>

// <div className=" CstegoryCard">
// <img src="photos/laptop.jpg" alt="laptop" />
// <div className="Details">
//     <h2>Item NameItem NameItem NameItem NameItem Name</h2>
//     <p>$ 200,000</p>
// </div>
// </div>

// <div className=" CstegoryCard">
// <img src="photos/laptop.jpg" alt="laptop" />
// <div className="Details">
//     <h2>Item Name</h2>
//     <p>$ Price</p>
// </div>
// </div>

// <div className=" CstegoryCard">
// <img src="photos/laptop.jpg" alt="laptop" />
// <div className="Details">
//     <h2>Item NameItem NameItem NameItem NameItem Name</h2>
//     <p>$ 200,000</p>
// </div>
// </div>
