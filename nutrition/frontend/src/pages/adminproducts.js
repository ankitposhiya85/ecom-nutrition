import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsData from './productlist.json';

function Adminproducts() {
    useEffect(() => {
        document.getElementById("header").classList.add("login-nav");
        document.getElementById("footer").classList.add("login-footer");
    }
    );

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);
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
                        <div className="col-lg-8 col-12 orders">
                            <div className="row">
                                {products.map(product => (
                                    <div className="products-row1 row">
                                        <Link to={`/productdetail/${product.id}`}><div className="col-lg-3 col-12 products-row2">
                                            <img src={product.image} className="cart-p-img"></img>
                                        </div>
                                            <div className="col-lg-8 col-12 products-row2">
                                                <div className="adminpro">
                                                    <h5>{product.shortname}</h5>
                                                    <div>
                                                        <h5>INR: {product.discountedprice}</h5>
                                                    </div>
                                                    <div>
                                                        <img src="Img/delete.png" className="delete-img" id="remove"></img>
                                                    </div>
                                                </div>
                                                <div className="adminpro">
                                                    <h5>Avialable quntity : {product.currentstock}</h5>
                                                    <Link to="/newproduct"><img src="Img/edit.png" className="delete-img"></img></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <Link to="/newproduct"><button className="btn1">Add new product</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminproducts