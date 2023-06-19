import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product40() {
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
        var delivery = document.getElementById("delivery");

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
                <h1>GNC PRO PERFORMANCE 100% WHEY PROTEIN - 4.4 LBS, 2 KG (CHOCOLATE FUDGE)</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 14.jpg"></img>
                            <img src="Img/product 14.jpg"></img>
                            <img src="Img/product 14.jpg"></img>
                            <img src="Img/product 14.jpg"></img>
                            <img src="Img/product 14.jpg"></img>
                        </div>
                        <img src="Img/product 14.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC PRO PERFORMANCE 100% WHEY PROTEIN - 4.4 LBS, 2 KG (CHOCOLATE FUDGE)</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 4,500</h6>
                                <p>INR 7,499</p>
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
                    If you are looking for a protein powder for everyday protein needs, then GNC Pro Performance 100% whey protein chocolate fudge is a great choice. It is an ultra-concentrated advanced formula that is enriched with all 9 essential amino acids needed by the body. Adding a good quality whey protein powder in your fitness routine will help in different ways like – builds and strengthens lean muscles, boosts immunity, helps with post workout recovery, and keeps your energy levels up throughout the day. <br></br>

                    GNC Pro Performance 100% whey protein is enriched with the goodness of digestive enzymes for better digestion and quick absorption.  The advanced formula provides clean and pure protein which becomes fuel for muscle building and repair.GNC supplements are World Anti-Doping Agency (WADA) Approved and Informed Choice Certified. Products that have these logos are tested for purity and are free from any banned substances. <br></br>

                    Product Description <br></br>
                    Each serving of GNC Pro Performance 100% whey protein delivers 24 g muscle building protein <br></br>
                    It has a gluten free formula and is enriched with digestive enzymes <br></br>
                    DigeZyme is an advanced multi enzyme complex which includes Alpha alylase, protease, lipase, cellulase, and lactase. <br></br>
                    GNC Pro Performance 100% whey protein has the perfect blend of whey protein concentrate and whey protein isolate <br></br>
                    It has the goodness of all 9 essential amino acids, non-essential and Branched Chain Amino Acids as well <br></br>
                    GNC whey protein helps with muscle building and post workout recovery
                </p>
            </div>
        </>
    )
}

export default Product40