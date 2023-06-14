import React from "react";
import { Link } from "react-router-dom";

function Fishoil() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product8"><div className="slide-img">
                        <img src="Img/product 26.jpg"></img>
                    </div>
                        <h5>THE REAL OMEGA 3</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 500</h6>
                        <p>INR 615</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product9"><div className="slide-img">
                        <img src="Img/product 10.jpg"></img>
                    </div>
                        <h5>TRUEBASICS ULTRA OMEGA-3 FATTY ACIDS (EPA 525 MG DHA 400 MG), 90 CAPSULES</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,400</h6>
                        <p>INR 1,699</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Fishoil