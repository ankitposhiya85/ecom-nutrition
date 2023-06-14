

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Adminorders() {
    useEffect(() => {
        document.getElementById("header").classList.add("login-nav");
        document.getElementById("footer").classList.add("login-footer");
    }
    );
    return (
        <>
            <div className="cart-product">
                <h1>My Account</h1>
            </div>
            <div className="details1">
                <div className="container-fluid">
                    <div className="row g-5">
                        <div className="col-lg-3 col-12">
                            <div className="user-menu">
                                <div className="user-menu-txt">
                                    <h3>Welcome</h3>
                                    <hr></hr>
                                    <Link to="/admin"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/dashboard.png" className="menu-img"></img>
                                            <p>Dashboard</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/adminorders"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/order.png" className="menu-img"></img>
                                            <p>Orders</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/adminproducts"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/products.png" className="menu-img"></img>
                                            <p>Products</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/sign-out.png" className="menu-img"></img>
                                            <p>Sign Out</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/admin.png" className="menu-img"></img>
                                            <p>Home</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 personal">
                            <h1>Hello, Suraj Soni</h1>
                            <hr></hr>
                            <div className="dashboard">
                                <div className="dash1">
                                    <h5>Delivered:</h5>
                                    <p>80</p>
                                </div>
                                <div className="dash1">
                                    <h5>In Transit:</h5>
                                    <p>34</p>
                                </div>
                                <div className="dash1">
                                    <h5>Pending:</h5>
                                    <p>16</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminorders