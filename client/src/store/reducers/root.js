import { combineReducers } from "redux";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProduct";
import { HomeProducts } from "./HomeProducts";
import {
    AddToCart,
    GetCart,
    UpdateCart,
    DeleteCart,
    CartSumTotal,
} from "./Cart";
import { LogIn } from "./User";

const rootReducer = combineReducers({
    Products,
    SingleProduct,
    HomeProducts,
    AddToCart,
    GetCart,
    UpdateCart,
    DeleteCart,
    CartSumTotal,
    LogIn,
});

export default rootReducer;
