import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 footer1">
                            <Link to="/"><img src="/Img/logo.png"></img></Link>
                            <div className="social">
                                <img src="/Img/whatsapp.png"></img>
                                <img src="/Img/facebook.png"></img>
                                <img src="/Img/twitter.png"></img>
                                <img src="/Img/linkedin.png"></img>
                                <img src="/Img/pinterest.png"></img>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 footer2">
                            <h5>Quick links</h5>
                            <Link to="/"><p>Home</p></Link>
                            <Link to="/product"><p>Products</p></Link>
                            <Link to="/photos"><p>Photos</p></Link>
                            <Link to="/personal"><p>My Account</p></Link>
                            <Link to="/contact"><p>Contact</p></Link>
                        </div>
                        <div className="col-lg-6 col-12 footer3">
                            <h5>Contact</h5>
                            <div className="d-flex gap-3 location">
                                <img src="/Img/location.svg"></img>
                                <p>Shop No. 11, Park Avenue Complex, C.G.ROAD Opp. Parimal Garden, next to Mercedes Benz car showroom, Main Gate, Ambawadi, Ahmedabad</p>
                            </div>
                            <div className="d-flex gap-3">
                                <img src="/Img/Icon - Mail.svg"></img>
                                <p>vikassood1980@gmail.com</p>
                            </div>
                            <div className="d-flex gap-3">
                                <img src="/Img/call.svg"></img>
                                <p>08048040105</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer