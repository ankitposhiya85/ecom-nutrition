import React, { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );
    return (
        <>
            <div className="contact">
                <div className="container contact1">
                    <h1>Contact Us</h1>
                    <hr></hr>
                    <div className="main-div row">
                        <div className="contact-info col-lg-6 col-12">
                            <div className="d-flex gap-3 location">
                                <img src="Img/location.svg"></img>
                                <p>Shop No. 11, Park Avenue Complex, C.G.ROAD Opp. Parimal Garden, next to Mercedes Benz car showroom, Main Gate, Ambawadi, Ahmedabad</p>
                            </div>
                            <div className="d-flex gap-3">
                                <img src="Img/Icon - Mail.svg"></img>
                                <p>vikassood1980@gmail.com</p>
                            </div>
                            <div className="d-flex gap-3">
                                <img src="Img/call.svg"></img>
                                <p>08048040105</p>
                            </div>
                            <hr></hr>
                            <div className="social1">
                                <img src="Img/whatsapp.png"></img>
                                <img src="Img/facebook.png"></img>
                                <img src="Img/twitter.png"></img>
                                <img src="Img/linkedin.png"></img>
                                <img src="Img/pinterest.png"></img>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 contact-info1">
                            <form action="https://formsubmit.co/codeztech001@gmail.com" method="POST">
                                <input placeholder="Name" name="name" type="text" required></input>
                                <input placeholder="Email" type="email" name="email" required></input>
                                <input placeholder="Mobile" type="text" name="mobile" required></input>
                                <textarea placeholder="Massege" typeof="text" name="massage" required></textarea>
                                <button className="btn1 btn6" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe width="100%" src="https://www.google.com/maps/embed/v1/place?q=23.0194917,72.55775369999999&zoom=18&key=AIzaSyDz5vOp_4ebrlGOV0FyuSf_w5jHBIQz5iQ"></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact