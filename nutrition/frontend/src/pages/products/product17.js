import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product17() {
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
                <h1>MuscleTech Platinum 100% Glutamine, 0.66 lb, Unflavoured - 60 Servings Qt</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 2.jpg"></img>
                            <img src="Img/product 2.jpg"></img>
                            <img src="Img/product 2.jpg"></img>
                            <img src="Img/product 2.jpg"></img>
                            <img src="Img/product 2.jpg"></img>
                        </div>
                        <img src="Img/product 2.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>MuscleTech Platinum 100% Glutamine, 0.66 lb, Unflavoured - 60 Servings Qt</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,500</h6>
                                <p>INR 2,199</p>
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
                <h4>Category </h4><p>Muscle recover</p>
                <h4>Description</h4>
                <p>
                    Product Details <br></br>
                    Reduces muscle breakdown <br></br>
                    Stimulates muscle recovery post-workout <br></br>
                    Helps you gain and maintain a muscular physique
                </p>
            </div>
        </>
    )
}

export default Product17