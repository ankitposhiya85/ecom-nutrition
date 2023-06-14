import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Address() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
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
                                    <Link to="/personal"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/user 1.png" className="menu-img"></img>
                                            <p>Personal data</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/orders"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/order.png" className="menu-img"></img>
                                            <p>Orders</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/changepassword"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/lock.png" className="menu-img"></img>
                                            <p>Change password</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                    <Link to="/address"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/home.png" className="menu-img"></img>
                                            <p>Address</p>
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
                                    <Link to="/admin"><div className="menu1">
                                        <div className="d-flex gap-3">
                                            <img src="Img/admin.png" className="menu-img"></img>
                                            <p>Admin</p>
                                        </div>
                                        <img src="Img/arrow.png" className="arrow"></img>
                                    </div></Link>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 orders">
                            <div className="row products-row1">
                                <div className="col-12 products-row2">
                                    <div className="d-flex gap-4">
                                        <h5>Home</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque condimentum rutrum. Suspendisse potenti.</p>
                                        <div>
                                            <img src="Img/delete.png" className="delete-img" id="remove"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row products-row1">
                                <div className="col-12 products-row2">
                                    <div className="d-flex gap-4">
                                        <h5>Work</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque condimentum rutrum. Suspendisse potenti.</p>
                                        <div>
                                            <img src="Img/delete.png" className="delete-img" id="remove"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/addaddress"><button className="btn1">Add new address</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address