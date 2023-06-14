import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product2() {
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
        if (zipcode.trim().length === 0) {
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
                <h1>GNC Pro Performance L-Carnitine 500 mg Capsule 60's</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 36.jpg"></img>
                            <img src="Img/product 36.jpg"></img>
                            <img src="Img/product 36.jpg"></img>
                            <img src="Img/product 36.jpg"></img>
                            <img src="Img/product 36.jpg"></img>
                        </div>
                        <img src="Img/product 36.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC Pro Performance L-Carnitine 500 mg Capsule 60's</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,100</h6>
                                <p>INR 1,499</p>
                            </div>
                            <div className="buttons">
                                {cart.some((p) => p.id === product.id) ? (
                                    <button
                                        className="btn1"
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: product,
                                            })
                                        }
                                    >
                                        Remove from Cart
                                    </button>
                                ) : (
                                    <button
                                        className="btn1"
                                        onClick={addtocart}
                                    >
                                        Add to cart
                                    </button>
                                )}
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
                <h4>Category </h4><p>Fat burner</p>
                <h4>Description</h4>
                <p>
                    GNC Pro Performance L-Carnitine 500mg (60 tablets) <br></br>
                    Key features<br></br>
                    Each serving of GNC Pro Performance L-Carnitine delivers 500 mg of this essential nutrient<br></br>
                    It facilitates muscle recovery and muscle growth<br></br>
                    Helps with weight loss and weight management<br></br>
                    GNC L-Carnitine tablets play an important role in metabolism of long chain fatty acids<br></br>
                    Helpful in converting fat into energy that can be used for muscular functions<br></br>
                    Product Description<br></br>
                    GNC Pro Performance L-Carnitine is one of the top selling L-Carnitine supplements in India. It is known for its high quality, potency, and delivers effective results. GNC L-Carnitine delivers 500 mg of this important nutrient in each serving which helps in weight loss and facilitates muscle recovery. It is a non-essential amino acid that can be synthesized in the body. But people who have a restricted diet, avoid eating meat especially red meat, or are vegetarians can get L-carnitine deficiency. The best way to get your daily dose is through GNC L-Carnitine tablets.<br></br>

                    Introduction<br></br>
                    L-Carnitine is such an important nutrient that’s needed by the body for various functions. But it gets overlooked a lot of times. It might not be possible to get the daily requirement of L-carnitine through your daily diet, that’s why it is recommended that you include premium quality GNC Pro Performance L-Carnitine supplement in your routine.<br></br>

                    L-Carnitine works effectively if taken on a regular basis. It is a known fact that amino acids are considered building blocks of protein and help fuel skeletal muscles. L-Carnitine is a non-essential amino acid and is stored in skeletal muscles where it is needed to transform fatty acids into energy for muscular activity.<br></br>

                    Benefits<br></br>
                    There is a common misconception that L-Carnitine is only beneficial in weight loss and weight management. But on consuming GNC Pro Performance L-Carnitine supplements on a regular basis, your body can reap various benefits like –<br></br>

                    It facilitates metabolism of long chain fatty acids<br></br>
                    Important for heart and brain function<br></br>
                    Helps in muscle movement and muscle recovery<br></br>
                    Nutritional Information<br></br>
                    Serving size – one tablet<br></br>

                    Serving per container – 60
                </p>
            </div>
        </>
    )
}

export default Product2