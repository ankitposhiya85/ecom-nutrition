import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product41() {
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

    function buynow() {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        })
    }
    return (
        <>
            <div className="product1">
                <h1>GNC AMP GOLD SERIES 100% WHEY PROTEIN ADVANCED</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 37.jpg"></img>
                            <img src="Img/product 37.jpg"></img>
                            <img src="Img/product 37.jpg"></img>
                            <img src="Img/product 37.jpg"></img>
                            <img src="Img/product 37.jpg"></img>
                        </div>
                        <img src="Img/product 37.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC AMP GOLD SERIES 100% WHEY PROTEIN ADVANCED</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 5,500</h6>
                                <p>INR 8,999</p>
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
                                {cart.some((p) => p.id === product.id) ? (

                                    <Link to="/cart">
                                        <button
                                            className="btn1"
                                        >
                                            Go to Cart
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        className="btn1"
                                        onClick={buynow}
                                    >
                                        Buy Now
                                    </button>
                                )
                                }
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
                <h4>Category </h4><p>Protin</p>
                <h4>Description</h4>
                <p>
                    GNC AMP Gold Series 100% Whey Protein Advanced - 24g Protein, 5.5g BCAA, 4g Glutamine, 100mg Digestive Enzymes - 4.4 lbs, 2 kg (Double Rich Chocolate) <br></br>

                    What makes GNC AMP Gold Series 100% Whey Protein Advanced 2 kg Double Rich Chocolate the GOLD STANDARD <br></br>

                    It is a scientifically designed formulation which has WHEY PROTEIN ISOLATE as a leading source of protein, it also contains WHEY HYDROLYSATE for superior absorption and nutrient uptake. <br></br>
                    One serve (31 g) of AMP Gold Series 100% Whey Protein Advanced provides <br></br>
                    24g of Protein that help in gaining lean muscle mass <br></br>
                    5.5g of Branched Chain Amino Acids that help prevent muscle breakdown after strenuous workouts <br></br>
                    4g of Glutamine and Glutamine Precursors that help to speed up the muscle recovery process <br></br>
                    100mg Digestive Enzymes including Protease and Lactase that work to improve nutrient breakdown and absorption <br></br>
                    We ensure superior quality at every step of the process <br></br>
                    It mixes easily and tastes great <br></br>
                    This ultra & microfiltered protein formulation is one of the premium quality protein powders, which assists in quick muscle recovery and maximizing muscle gain for advanced bodybuilders. <br></br>


                    Product Description <br></br>

                    GNC AMP Gold Series 100% Whey Protein Advanced 2 kg Double Rich Chocolate is a premium whey protein formula which comes loaded with an optimum combination of Whey Protein Isolate, Whey Protein Concentrate and Whey Protein Hydrolysate. It helps to deliver 24g of rich protein per 31g serving to help with the superior protein needs of advanced bodybuilders and fitness enthusiasts. What else it comes in an all-New Improved Taste.
                </p>
            </div>
        </>
    )
}

export default Product41