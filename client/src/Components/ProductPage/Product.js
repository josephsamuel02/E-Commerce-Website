import "./Product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../store/actions/Cart";
import { CartQuantity } from "../../store/actions/Cart";

import { SingleProduct } from "../../store/actions/SingleProduct";

const Product = () => {
    const theProducts = useSelector((state) => state.SingleProduct);
    const cartCount = useSelector((state) => state.CartQuantity);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const inquan = (add) => {
        quantity + add < 1 ? setQuantity(1) : setQuantity(quantity + add);
    };
    const product = [
        {
            productId: theProducts._id,
            title: theProducts.title,
            image: theProducts.image,
            price: theProducts.price,
            quantity: quantity,
        },
    ];
    const [totalcout, settotalcout] = useState(0);
    const addtocart = () => {
        dispatch(AddToCart(product));
        dispatch(CartQuantity(totalcout));
        settotalcout(cartCount);
        console.log(cartCount);
    };
    const { id } = useParams();
    useEffect(() => {
        dispatch(SingleProduct(id));
    }, [dispatch, id]);

    return (
        <div id="productpage">
            {theProducts ? (
                <div className="productCard" key={theProducts._id}>
                    <div className="imageBox">
                        <img src={theProducts.image} alt="" />
                    </div>
                    <div className="detail">
                        <h3 className="name">{theProducts.title}</h3>
                        <div className="description">
                            <p>{theProducts.desc}</p>
                        </div>
                        <h3 className="price"> {theProducts.price}</h3>
                        <h3 className="quantity">
                            <button onClick={() => inquan(1)}>+</button>
                            {quantity}
                            <button onClick={() => inquan(-1)}>-</button>
                        </h3>
                        <button onClick={() => addtocart()}>Add to cart</button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Product;
