import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from './productlist.json';
import { CartState } from "./contex";

function Productdetail() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [zipcode, setZipcode] = useState("");

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

    function checkPincode() {
        var res = document.getElementById("res");
        var delivery = document.getElementById("delivery")

        if (pincode.includes(parseInt(zipcode))) {
            res.textContent = "Available";
            res.classList.add("available");
            res.classList.remove("not-available");
            delivery.style.display = "block";
        } else if (zipcode.trim().length === 0) {
            res.textContent = "Please enter the Pincode";
            res.classList.add("not-available");
            res.classList.remove("available");
        } else if (zipcode.trim().length !== 6) {
            res.textContent = "Please enter a valid pincode";
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
            });
            alert("Product added to cart");
        } else if (zipcode.trim().length !== 6) {
            alert("Pincode must be of six digits");
        } else {
            alert("Pincode not Serviceble");
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
            <div className="product1" key={product.id}>
                <h1>{product.name}</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src={product.image}></img>
                            <img src={product.image}></img>
                            <img src={product.image}></img>
                            <img src={product.image}></img>
                        </div>
                        <img src={product.image} className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <h2>{product.shortname}</h2>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR {product.discountedprice}</h6>
                                <p>INR {product.price}</p>
                            </div>
                            <div className="buttons">
                                {cart.some((p) => p.id === product.id) ? (
                                    <button
                                        className="btn2"
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
                                        className="btn2"
                                        onClick={buynow}
                                    >
                                        Buy Now
                                    </button>
                                )
                                }

                            </div>
                            <div className="stock">
                                <h6>{product.stock}</h6>
                            </div>
                            <div className="pincode">
                                <h5>Pincode:-</h5>
                                <input type="text" placeholder="pincode" id="pincode" onChange={handlechange}></input>
                                <button onClick={checkPincode}>Check</button>
                            </div>
                            <div className="d-flex gap-5">
                                <span id="res"></span><span id="delivery">Deliverd in {product.deliverydays}</span>
                            </div>
                            <div className="social2">
                                <h3>Share :</h3>
                                <img src="/Img/whatsapp.png"></img>
                                <img src="/Img/facebook.png"></img>
                                <img src="/Img/twitter.png"></img>
                                <img src="/Img/linkedin.png"></img>
                                <img src="/Img/pinterest.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container description">
                <h4>Category </h4><p>{product.category}</p>
                <h4>Description</h4>
                <p>{product.description}</p>
                <p>{product.description1}</p>
                <p>{product.description2}</p>
                <p>{product.description3}</p>
                <p>{product.description4}</p>
                <p>{product.description5}</p>
                <p>{product.description6}</p>
                <p>{product.description7}</p>
                <p>{product.description8}</p>
                <p>{product.description9}</p>
                <p>{product.description10}</p>
                <p>{product.description11}</p>
                <p>{product.description12}</p>
                <p>{product.description13}</p>
                <p>{product.description14}</p>
                <p>{product.description15}</p>
                <p>{product.description16}</p>
                <p>{product.description17}</p>
                <p>{product.description18}</p>
                <p>{product.description19}</p>
                <p>{product.description20}</p>
                <p>{product.description21}</p>
                <p>{product.description22}</p>
                <p>{product.description23}</p>
                <p>{product.description24}</p>
                <p>{product.description25}</p>
                <p>{product.description26}</p>
                <p>{product.description27}</p>
                <p>{product.description28}</p>
                <p>{product.description29}</p>
                <p>{product.description30}</p>
                <p>{product.description31}</p>
                <p>{product.description32}</p>
                <p>{product.description33}</p>
                <p>{product.description34}</p>
                <p>{product.description35}</p>
            </div>
        </>
    )
}

export default Productdetail