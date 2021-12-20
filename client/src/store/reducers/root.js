import { combineReducers } from "redux";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProduct";
import { HomeProducts } from "./HomeProducts";
import { AddToCart, GetCart, CartQuantity } from "./Cart";

const rootReducer = combineReducers({
    Products,
    SingleProduct,
    HomeProducts,
    AddToCart,
    GetCart,
    CartQuantity,
});

export default rootReducer;
