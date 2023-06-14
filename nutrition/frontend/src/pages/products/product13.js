import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product13() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );

    const [zipcode, setZipcode] = useState("");
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    

    useEffect(() => {
        const selectedProduct = productsData.find(p => p.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const pincode = [382001, 322510, 211125, 222514, 211425, 114785, 111485, 111458, 111477, 885951, 555841, 362001, 336955, 225174, 362001, 362037, 362002, 362003]
    const handlechange = event => {
        setZipcode(event.target.value);
    }
    
    const {
        state: { cart },
        dispatch,
    } = CartState();

    function checkPincode() {
        var res = document.getElementById("res");

        if (pincode.includes(parseInt(zipcode))) {
            res.textContent = "Available";
            res.classList.add("available");
            res.classList.remove("not-available");
        } else if (zipcode.trim().length === 0) {
            res.textContent = "Plese enter the Pincode";
            res.classList.add("not-available");
            res.classList.remove("available");
        } else if (zipcode.trim().length !== 6) {
            res.textContent = "Pincode must be of six digits";
            res.classList.add("not-available");
            res.classList.remove("available");
        } else {
            res.textContent = "Not Available";
            res.classList.add("not-available");
            res.classList.remove("available");
        }
    }

    function addtocart() {
        if (zipcode.trim().length === 0){
            alert("Plese enter the pincode");
        } else if (pincode.includes(parseInt(zipcode))) { 
            dispatch({
                type: "ADD_TO_CART",
                payload: product,
            })
            alert("Product added to cart")
        } else if (zipcode.trim().length !== 6) {
            alert("Pincode must be of six digits")
        } else {
            alert("Pincode not Serviceble")
        }
        
    }
    return (
        <>
            <div className="product1">
                <h1>FREAK TROPICAL CYCLONE 30 SERVINGS</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 24.jpg"></img>
                            <img src="Img/product 24.jpg"></img>
                            <img src="Img/product 24.jpg"></img>
                            <img src="Img/product 24.jpg"></img>
                            <img src="Img/product 24.jpg"></img>
                        </div>
                        <img src="Img/product 24.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>FREAK TROPICAL CYCLONE 30 SERVINGS</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,000</h6>
                                <p>INR 1,250</p>
                            </div>
                            <div className="buttons">
                                {/* <Link to="/contact"><button className="btn2">Add to cart</button></Link> */}
                                <button className="btn1" id="cart-btn" onClick={addtocart}>Add to cart</button>
                            </div>
                            <div className="stock">
                                <h6>In Stock</h6>
                            </div>
                            <div className="pincode">
                                <h5>Pincode:-</h5>
                                <input type="text" placeholder="pincode" onChange={handlechange}></input>
                                <button onClick={checkPincode}>Check</button>
                            </div>
                            <div className="social2">
                                <h3>Share :</h3>
                                <img src="Img/whatsapp.png"></img>
                                <img src="Img/facebook.png"></img>
                                <img src="Img/twitter.png"></img>
                                <img src="Img/linkedin.png"></img>
                                <img src="Img/pinterest.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container description">
                <h4>Category </h4><p>Pre workout supplement</p>
                <h4>Description</h4>
                <p>
                    feel extreme energy, mental focus, powerful pumps. <br></br>
                    Breakthrough high boost matrix for maximum training intensity. <br></br>
                    freak next level pre-workout formulated increase feel extreme energy or mental focus. <br></br>

                    PRODUCT INFO <br></br>
                    A NEXT LEVEL PRE-WORKOUT FORMULATED FOR INCREASED ENERGY, FOCUS, AND STRENGTH. &.FEEL EXTREME ENERGY, MENTAL FOCUS, POWERFUL PUMPS, AND UNMATCHED STRENGTH. INTRINSIC FATIGUE BUFFER AND MUSCLE INTENSITY PUMPS FOR SUPERIOR ATHLETIC PERFORMANCE. BREAKTHROUGH HIGH BOOST MATRIX FOR MAXIMUM TRAINING INTENSITY. <br></br>

                    Direction Of Use: Mix 1 level scoop (approx. 6g) of FREAK with 250 ML of water. Stir and/or shake until dispersed and immediately drink 15 mins prior to workout. <br></br>

                    INGREDIENTS <br></br>
                    ARGININE ALPHA KETO GLUTERATE, BETA-ALANINE, GLUTAMINE, CREATINE NITRATE, L-TYROSINE, L-TAURINE, THEACRINE, ANTI CAKING, SUCRALOSE, CITRIC ACID.
                </p>
            </div>
        </>
    )
}

export default Product13