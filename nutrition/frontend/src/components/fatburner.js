import React from "react";
import { Link } from "react-router-dom";

function Fatburner() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product1"><div className="slide-img">
                        <img src="Img/product 1.jpg"></img>
                    </div>
                        <h5>MUSCLETECH HYDROXYCUT HARDCORE ELITE</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,800</h6>
                        <p>INR 2,799</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product2"><div className="slide-img">
                        <img src="Img/product 36.jpg"></img>
                    </div>
                        <h5>GNC Pro Performance L-Carnitine 500 mg Capsule 60's</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,100</h6>
                        <p>INR 1,499</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Fatburner