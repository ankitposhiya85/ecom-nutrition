import React from "react";
import { Link } from "react-router-dom";

function Gainer() {
    return (
        <>
            <div className="row gy-3 main-slider gy-3">
                <div className="slide col-lg-4 col-12">
                    <Link to="/product22"><div className="slide-img">
                        <img src="Img/product 43.jpg"></img>
                    </div>
                        <h5>BODY FUEL HARDCORE MALT CHOCOLATE POWDER</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 4,500</h6>
                        <p>INR 6,349</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product23"><div className="slide-img">
                        <img src="Img/product 27.jpg"></img>
                    </div>
                        <h5>BODY FUEL HARDCORE 6 Lbs ( Strawberry Twirl )</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 2,700</h6>
                        <p>INR 3,899</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product24"><div className="slide-img">
                        <img src="Img/product 28.jpg"></img>
                    </div>
                        <h5>BODYFUEL HARDCORE 6 LBS MALT CHOCOLATE</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 2,700</h6>
                        <p>INR 3,899</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
                <div className="slide col-lg-4 col-12">
                    <Link to="/product25"><div className="slide-img">
                        <img src="Img/product 44.jpg"></img>
                    </div>
                        <h5>BODYFUEL HARDCORE 6 LBS (COOKIE & CREAM)</h5></Link>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <h6>INR 2,700</h6>
                        <p>INR 3,899</p>
                    </div>
                    <Link to="/contact"><button className="btn2">Add to cart</button></Link>
                </div>
            </div>

        </>
    )
}

export default Gainer