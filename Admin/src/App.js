import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage/HomePage";
// import User from "./components/Users/User";
// import UsersList from "./components/Users/UsersList";
// import Login from "./Components/Login/Login";
// import SingleOrder from "./components/Orders/SingleOrder";
// import OrdersList from "./components/Orders/OrdersList";
// import Products from "./components/Products/Products";
// import SingleProduct from "./components/Products/SingleProduct";

const App = () => {
    // const theuser = useSelector((state) => state.LogIn.username);
    // var user = "Guest";
    // theuser ? (user = theuser) : (user = false);

    return (
        <div className="App">
            <Router>
                <Nav />

                <br />
                <br />

                <Routes>
                    {/* <Route
                        path="/register"
                        element={
                            theuser ? <Navigate replace to="/" /> : <Register />
                        }
                    /> */}
                    <Route
                        path="/login"
                        element={
                            theuser ? <Navigate replace to="/" /> : <Login />
                        }
                    />
                    <Route path="/" element={<HomePage />} />
                    {/* 
                    <Route path="/user" element={<User />} />
                    <Route path="/userslist" element={<UsersList />} />

                    <Route path="/orders" element={<OrdersList />} />
                    <Route path="/singleorder" element={<SingleOrder />} />

                    <Route path="/products" element={<Products />} />
                    <Route path="/singleproduct" element={<SingleProduct />} />
                */}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
