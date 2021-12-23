import { combineReducers } from "redux";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProduct";
import { HomeProducts } from "./HomeProducts";
import { AddToCart, GetCart, UpdateCart } from "./Cart";

const rootReducer = combineReducers({
    Products,
    SingleProduct,
    HomeProducts,
    AddToCart,
    GetCart,
    UpdateCart,
});

export default rootReducer;
