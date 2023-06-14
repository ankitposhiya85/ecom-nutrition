import React from "react";
import { Link } from "react-router-dom";

function Musclerecover() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product17"><div className="slide-img">
                        <img src="Img/product 2.jpg"></img>
                    </div>
                        <h5>MUSCLETECH PLATINUM 100% GLUTAMINE, 0.66 LB, UNFLAVOURED</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,500</h6>
                        <p>INR 2,199</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product10"><div className="slide-img">
                        <img src="Img/product 6.jpg"></img>
                    </div>
                        <h5>LABRADA GLUTALEAN (VEGAN, NON GMO, ALLERGEN FREE)...</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,100</h6>
                        <p>INR 1,599</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Musclerecover