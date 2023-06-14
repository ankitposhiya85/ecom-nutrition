import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../pages/contex";

function Navbar() {

    const {
        state: { cart },
    } = CartState();


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="header" >
                <div className="container">
                    <Link to="/"><img src='/Img/logo.png'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><img src='/Img/Menu.png'></img> </span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/">Home</Link>
                            <Link to="/product">Products</Link>
                            <Link to="/photos">Gallery</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/cart"><img src="/Img/shopping-cart.png" className="cart-img"></img><span className="badge">{cart.length}</span></Link>
                            <Link to="/personal"><img src="/Img/user.png" className="cart-img" id="user-img"></img></Link>
                            <Link to="/login"><button className="btn4" id="login-btn">Log In</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar