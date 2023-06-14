import React, { useEffect } from "react";

function Photos() {
    
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );
    return (
        <>
            <div className="product">
                <h1>Gallery</h1>
            </div>
            <div className="container photos">
                <div className="row gx-5 gy-3">
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 1.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 3.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 4.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 5.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 6.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 7.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 8.jpg" className="images"></img>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src="Img/img 2.jpg" className="images"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Photos