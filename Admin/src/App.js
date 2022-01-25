import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Nav from "./components/Nav/Nav";
import HomePage from "./components/Home/HomePage";
import User from "./components/Users/User";
import UsersList from "./components/Users/UsersList";
import Login from "./components/Login/Login";
import SingleOrder from "./components/Orders/SingleOrder";
import OrdersList from "./components/Orders/OrdersList";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
import Analytics from "./components/Analytics/Analytics";

const App = () => {
    const theuser = useSelector((state) => state.LogIn.username);
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
                        path="/login"
                        element={
                            theuser ? <Navigate replace to="/" /> : <Login />
                        }
                    /> */}
                    <Route path="/" element={<HomePage />} />

                    <Route path="/analytics" element={<Analytics />} />

                    <Route path="/orders" element={<OrdersList />} />

                    {/* <Route path="/user" element={<User />} />

                    <Route path="/userslist" element={<UsersList />} />

                    <Route path="/singleorder" element={<SingleOrder />} />

                    <Route path="/products" element={<Products />} />
                  
                  <Route path="/singleproduct" element={<SingleProduct />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
