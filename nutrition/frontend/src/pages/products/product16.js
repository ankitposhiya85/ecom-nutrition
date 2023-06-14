import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product16() {
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
                <h1>ABSN 440 VOLT PRE-WORKOUT MANGO-ORANGE </h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 51.jpg"></img>
                            <img src="Img/product 51.jpg"></img>
                            <img src="Img/product 51.jpg"></img>
                            <img src="Img/product 51.jpg"></img>
                            <img src="Img/product 51.jpg"></img>
                        </div>
                        <img src="Img/product 51.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>ABSN 440 VOLT PRE-WORKOUT MANGO-ORANGE</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 2,000</h6>
                                <p>INR 2,800</p>
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
                    ABSN 440 volt PWO is a high caffeine formula with Beta-alanine, L–Arginine, and vitamin B3. Vitamin B3 contributes to normal energy-yielding metabolism, as well as contributes to the reduction of tiredness and fatigue. As it contains caffeine so it is not recommended for children and pregnant women. This supplement contains permitted artificial sweeteners. 440-volt pre-workout contains a mixture of sucralose and acesulfame potassium. This mango orange-flavored health supplement is not for medical purposes. You have to take this supplement 60-90 minutes before the walk or the workout to take its full effect. As this contains caffeine, taking it late in the evening can affect your sleep, but it is very important to get enough sleep before any workout. These supplements are safe and beneficial to health. <br></br>

                    Benefits<br></br>
                    This supplement contains permitted artificial sweeteners.<br></br>
                    440-volt pre-workout contains a mixture of sucralose and acesulfame potassium.<br></br>
                    These supplements are safe and beneficial to health.<br></br>
                    Vitamin B3 contributes to normal energy-yielding metabolism, as well as contributes to the reduction of tiredness and fatigue.<br></br>
                    Usage <br></br>
                    1 serving mixed with of water 20-30 minutes before training. <br></br>
                </p>
            </div>
        </>
    )
}

export default Product16