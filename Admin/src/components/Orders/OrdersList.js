import "./OrdersList.css";
import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BsCart4, BsCartCheck, BsMinecartLoaded } from "react-icons/bs";
const OrdersList = () => {
    const [btnColor, setbtncolor] = useState("rgb(253, 193, 28)");
    const [orderBox, setOrderBox] = useState("new");
    return (
        <div className="orderslist">
            <IconContext.Provider
                value={{
                    color: `rgb(228, 24, 24)`,
                    size: "20px",
                }}
            >
                <h1 className="orderheader">All Orders</h1>

                {/* TOGLE BTN*/}
                <div className="orderbtns">
                    <button
                        style={{
                            backgroundColor:
                                btnColor == "rgb(253, 193, 28)" && btnColor,
                        }}
                        onClick={() => {
                            setOrderBox("new");
                            setbtncolor("rgb(253, 193, 28)");
                        }}
                    >
                        <p>
                            <BsMinecartLoaded />
                        </p>
                        <p> New Orders</p>
                    </button>
                    <button
                        style={{
                            backgroundColor:
                                btnColor == "rgb(128, 0, 255)" && btnColor,
                        }}
                        onClick={() => {
                            setOrderBox("processing");
                            setbtncolor("rgb(128, 0, 255)");
                        }}
                    >
                        <p>
                            <BsCart4 />
                        </p>
                        <p> Processing</p>
                    </button>
                    <button
                        style={{
                            backgroundColor:
                                btnColor == "rgb(82, 188, 11)" && btnColor,
                        }}
                        onClick={() => {
                            setOrderBox("completed");
                            setbtncolor("rgb(82, 188, 11)");
                        }}
                    >
                        <p>
                            <BsCartCheck />
                        </p>

                        <p> Completed</p>
                    </button>
                </div>
                {/* NEW ORDERS */}
                {orderBox == "new" && (
                    <div className="orderbox">
                        <div className="ordercard">
                            <img src="http://placeimg.com/640/480" alt="bla" />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/320/480"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/220/240"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/320/240"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="http://placeimg.com/640/360/any"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* PROCESSING*/}
                {orderBox == "processing" && (
                    <div className="orderbox">
                        <div className="ordercard">
                            <img
                                src="https://placekitten.com/640/360
                        "
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://picsum.photos/640/360"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>

                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/320/480"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/220/240"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/320/240"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="http://placeimg.com/640/360/any"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* COMPLETED */}
                {orderBox == "completed" && (
                    <div className="orderbox">
                        <div className="ordercard">
                            <img
                                src="https://placekitten.com/640/360
                    "
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://picsum.photos/640/360"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img src="https://picsum.photos/250" alt="bla" />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img src="https://picsum.photos/270" alt="bla" />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img src="http://placeimg.com/640/480" alt="bla" />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/320/480"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/220/240"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="https://loremflickr.com/320/240"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="ordercard">
                            <img
                                src="http://placeimg.com/640/360/any"
                                alt="bla"
                            />

                            <div className="detail">
                                <h5 className="username">Akin Alabi</h5>
                                <ul>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Full Computer System</li>
                                    <li> iPod</li>
                                    <li> Gass Cooker</li>
                                    <li> Gass Cooker</li>
                                    <li> Nigerian Football Jersy</li>
                                </ul>
                                <span>...</span>
                                <div className="stats">
                                    <p>Date</p> <p>ID</p> <p>Status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </IconContext.Provider>
        </div>
    );
};

export default OrdersList;
