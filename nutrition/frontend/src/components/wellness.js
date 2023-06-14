import React from "react";
import { Link } from "react-router-dom";

function Wellness() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product19"><div className="slide-img">
                        <img src="Img/product 9.jpg"></img>
                    </div>
                        <h5>LABRADA MARINE COLLAGEN PEPTIDES - 300 G</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 2,100</h6>
                        <p>INR 2,799</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product20"><div className="slide-img">
                        <img src="Img/product 32.jpg"></img>
                    </div>
                        <h5>ASHWAGANDHA</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 350</h6>
                        <p>INR 479</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Wellness