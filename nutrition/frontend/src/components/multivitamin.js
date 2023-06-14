import React from "react";
import { Link } from "react-router-dom";

function Mulitivitamin() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product5"><div className="slide-img">
                        <img src="Img/product 15.jpg"></img>
                    </div>
                        <h5>GNC MEGA MEN SPORT MULTIVITAMIN 120 TABLETS</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 2,000</h6>
                        <p>INR 2,399</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product6"><div className="slide-img">
                        <img src="Img/product 16.jpg"></img>
                    </div>
                        <h5>GNC MEGA MEN ONE DAILY MULTIVITAMIN 60 TABLETS</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,100</h6>
                        <p>INR 1,299</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product7"><div className="slide-img">
                        <img src="Img/product 12.jpg"></img>
                    </div>
                        <h5>TRUEBASICS MULTIVIT SPORT ONE DAILY VITAMINS MINERALS AMINO ACIDS WITH JOINT & ENERGY BLENDS</h5></Link>
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

export default Mulitivitamin