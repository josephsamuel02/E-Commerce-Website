import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/HomePage/Home.jsx";
import CategoryList from "./Components/CategoryPage/CategoryList";
import Product from "./Components/ProductPage/Product";
import Cart from "./Components/Cart/Cart";
import Pay from "./Components/Paymentpage/Pay";
import Successful from "./Components/Paymentpage/Successful";
import Register from "./Components/Register";
import Login from "./Components/Login";

const App = () => {
    const user = true;

    return (
        
        <div className="App">
            <Router>
                <Nav />

                <br />
                <br />

                <Routes>
                    <Route
                        path="/register"
                        element={
                            user ? <Navigate replace to="/" /> : <Register />
                        }
                    />

                    <Route
                        path="/login"
                        element={user ? <Navigate replace to="/" /> : <Login />}
                    />

                    <Route path="/pay" element={<Pay />} />

                    <Route path="/successful" element={<Successful />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/product/:id" element={<Product />} />

                    <Route path="/categoryList" element={<CategoryList />} />

                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
