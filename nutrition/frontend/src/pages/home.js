import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );

    return (
        <>
            <div className="banner container">
                <div className="row">
                    <div className="banner-txt col-lg-6 col-12">
                        <h1>V.S.</h1>
                        <h2>Nutrition</h2>
                        <div className="banner-btns">
                            <Link to="/product"><button className="btn1">Products</button></Link>
                            <Link to="/contact"><button className="btn1">Contact Us</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 protin-img">
                        <img src="Img/Protin.jpg" className="protin"></img>
                    </div>
                </div>
            </div>
            <div className="container about-us">
                <h1>About Us</h1>
                <hr></hr>
                <div className="row about">
                    <div className="col-lg-6 col-12">
                        <img src="Img/about.png" className="about-img"></img>
                    </div>
                    <div className="col-lg-6 col-12">
                        <p>
                            VS Nutrition is the Ahmedabad Based Store for Nutritional Food Supplements, We are Associated with The Brands Like Muscle Tech, MyFitness and Dymatize .
                            We Have the wide range of products - Whey Protein Supplements, Bodybuilding Supplements, Weight Loss & Fat Loss Products, Sports Nutrition Products, Energy Drinks, Mass Gain & Weight Gain Products, Performance Enhancing Supplements, Meal Replacement Products, Protein Bars, Muscle Gain Supplements, Pre workout & Post workout recovery products, General Health & Fitness, Wellness Products, Multi-Vitamins, Amino Acids, Soy, Egg & Casein Protein, Omega 3 and other Essential Fatty Acids, Nitric Oxide & many more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="photos container">
                <div className="about-us">
                    <h1>Gallery</h1>
                    <hr></hr>
                </div>
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
            {/* <div className="container">
                <div className="main-slider row g-3">
                    <div className="slide col-lg-4 col-12">
                        <Link to="/product1"><div className="slide-img">
                            <img src="Img/product 1.jpg"></img>
                        </div>
                            <h5>MUSCLETECH HYDROXYCUT HARDCORE ELITE</h5></Link>
                        <div className="d-flex align-items-center justify-content-center gap-5">
                            <h6>INR 1,800</h6>
                            <p>INR 2,799</p>
                        </div>
                    </div>
                    <div className="slide col-lg-4 col-12">
                        <Link to="/product17"><div className="slide-img">
                            <img src="Img/product 2.jpg"></img>
                        </div>
                            <h5>MUSCLETECH PLATINUM 100% GLUTAMINE, 0.66 LB, UNFLAVOURED</h5></Link>
                        <div className="d-flex align-items-center justify-content-center gap-5">
                            <h6>INR 1,500</h6>
                            <p>INR 2,199</p>
                        </div>
                    </div>
                    <div className="slide col-lg-4 col-12">
                        <Link to="/product39"><div className="slide-img">
                            <img src="Img/product 4.jpg"></img>
                        </div>
                            <h5>PRO JYM ULTRA BLEND PROTEIN - 1.830 KG (CHOCOLATE MOUSSE)</h5></Link>
                        <div className="d-flex align-items-center justify-content-center gap-5">
                            <h6>INR 5,900</h6>
                            <p>INR 7,300</p>
                        </div>
                    </div>
                </div>
                <div className="view-more">
                    <Link to="/product"><button className="btn1">View More</button></Link>
                </div>
            </div> */}
        </>
    )
}

export default Home