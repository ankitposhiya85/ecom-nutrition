import React from "react";
import { Link } from "react-router-dom";

function Lglutamine() {
    return (
        <>
            <div className="row main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product21"><div className="slide-img">
                        <img src="Img/product 17.jpg"></img>
                    </div>
                        <h5>GNC PRO PERFORMANCE L-GLUTAMINE POWDER 5000 MG</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 1,100</h6>
                        <p>INR 1,299</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Lglutamine