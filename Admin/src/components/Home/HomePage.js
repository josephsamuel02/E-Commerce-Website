import "./HomePage.css";
import Chart from "./Chart";
import MobileSideNav from "../Nav/MobileSideNav";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const HomePage = () => {
    const [showSideNav, setShowSideNav] = useState(false);
    return (
        <div className="homepage">
            {showSideNav && <MobileSideNav />}
            <h4 className="showsidenav" onClick={() => setShowSideNav(true)}>
                <MdOutlineNavigateNext />
            </h4>
            <h1 className="header">Quick View</h1>

            <div className="chart">
                <Chart />
            </div>

            <div className="newOrders">
                <h5>New Orders</h5>
                <ul>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>Price</p>
                    </li>
                    <li>
                        <p>End</p>
                    </li>
                </ul>
            </div>
            <div className="procesingOrders">
                <h5> Orders Status</h5>
                <ul>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>{" "}
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>{" "}
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>
                    <li>
                        <p>User Name</p>
                        <p>Order Id</p>
                        <p>status</p>
                    </li>
                    <li>
                        <p>End</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
