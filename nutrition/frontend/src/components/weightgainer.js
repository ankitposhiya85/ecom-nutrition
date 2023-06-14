import React from "react";
import { Link } from "react-router-dom";

function Weightgainer() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product4"><div className="slide-img">
                        <img src="Img/product 13.jpg"></img>
                    </div>
                        <h5>GNC PRO PERFORMANCE WEIGHT GAINER - 6.6 LBS, 3 KG (DOUBLE CHOCOLATE)</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 2,500</h6>
                        <p>INR 3,199</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product3"><div className="slide-img">
                        <img src="Img/product 5.jpg"></img>
                    </div>
                        <h5>Labrada Muscle Mass Gainer 6.6 lbs Chocolate</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 3,200</h6>
                        <p>INR 4,199</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Weightgainer