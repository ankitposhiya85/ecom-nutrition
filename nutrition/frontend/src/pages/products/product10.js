import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product10() {
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
                <h1>GNC Pro Performance Creatine Monohydrate 3000 mg - 250gm (Unflavored)</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 7.jpg"></img>
                            <img src="Img/product 7.jpg"></img>
                            <img src="Img/product 7.jpg"></img>
                            <img src="Img/product 7.jpg"></img>
                            <img src="Img/product 7.jpg"></img>
                        </div>
                        <img src="Img/product 7.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC Pro Performance Creatine Monohydrate 3000 mg - 250gm (Unflavored)</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,200</h6>
                                <p>INR 1,699</p>
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
                    Key Features <br></br>

                    Each serving of GNC Pro Performance Creatine Monohydrate delivers 3 g of creatine monohydrate
                    Available as an unflavored powder, so add it to your favorite beverage and get all the benefits
                    GNC Creatine supplement improves athletic performance, builds strength, and enhances stamina
                    Can be used as pre-workout drink or post workout supplement
                    It is Informed Choice Certified and free from any harmful banned substances<br></br>

                    Product Description<br></br>

                    If you are looking for a pre-workout supplement that’ll help you power through your intense workouts and provide various benefits, then do check out GNC Pro Performance Creatine Monohydrate. It is a common misconception that creatine is only used for bulking. But that isn’t true. GNC Pro Performance Creatine Monohydrate is used for muscular energy which supports power, stamina, and performance. You can use it in conjugation with extra calories and optimal resistance training to build muscles.<br></br>


                    Introduction<br></br>

                    GNC Pro Performance Creatine Monohydrate is one of the top selling creating supplements. GNC is known for it amazing quality and the supplements are completely safe to consume. GNC creatine supplements are most helpful in improving exercise performance and increasing muscle mass.<br></br>

                    It is a great pre-workout supplement for athletes and fitness enthusiasts who want to push through their intense workouts and maximize their muscle gain. It comes in an unflavored powder form and each serving provides 3 g of high quality creatine monohydrate.<br></br>

                    Benefits of Creatine Monohydrate<br></br>

                    The main benefits of GNC Pro Performance Creatine Monohydrate are –<br></br>

                    In the body, creatine is converted to creatine phosphate which helps fuel skeletal muscles. It is also helpful in providing immediate energy production, especially during intense workouts.
                    GNC creatine supplement helps promote cellular hydration when taken on a regular basis.
                    Creatine is known to improve athletic performance and enhances stamina as well.
                </p>
            </div>
        </>
    )
}

export default Product10