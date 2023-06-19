import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product54() {
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
                <h1>FROTEIN PINEAPPLE FLAVOR</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 33.jpg"></img>
                            <img src="Img/product 33.jpg"></img>
                            <img src="Img/product 33.jpg"></img>
                            <img src="Img/product 33.jpg"></img>
                            <img src="Img/product 33.jpg"></img>
                        </div>
                        <img src="Img/product 33.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>FROTEIN PINEAPPLE FLAVOR</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 900</h6>
                                <p>INR 1,200</p>
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
                    Frotein is a world-first fruit-flavoured whey protein that is made using the finest quality of whey protein isolate and whey hydrolysed for maximum absorption and assimilation. <br></br>
                    Serves 26gm of High-quality protein per serving of 34gm along with 15gm essential amino acids, 6gm Glutamine, 5.5gm BCAAs, and 0gm sugar per serving. <br></br>
                    Frotein is not only bound to be used by fitness enthusiasts, even if you are leading an average sedentary lifestyle, having a scoop of Frotein is a great way to pack some high-quality protein in a refreshing and delicious way. <br></br>
                    100% Vegetarian, Gluten-Free and Soy-free.<br></br>
                    PRODUCT INFO<br></br>
                    Frotein is one of a kind innovation in the whey protein space, Bored of the standard ways to consume Whey protein in a chocolate or vanilla flavour? <br></br>
                    Try your hands on Frotein, which is a delicious and unique blend of high-quality protein with exciting fruit flavours like mango, mango orange, pineapple, blueberry, Lychee, Guava, and coconut. <br></br>
                    Frotein is a premium blend of Whey Hydrolysed and Whey isolate, ensuring efficient and complete absorption of protein in your body. <br></br>
                    One scoop of Frotein gives you 26gm of protein per serving of 34gm with 5.5gm BCAA, 15gm Essential amino acids, 6gm Glutamine 0 gm of Sugar <br></br>
                    You can consume Frotein at any time of the day, Post-workout, between meals, as a snack, or as a meal replacement as well, it doesn’t matter – Frotein is formulated to be your anytime healthy and refreshing meal <br></br>
                    DIRECTIONS TO USE <br></br>
                    1.	Mix 1 heaping scoop of Frotein in 300 ml of water in a shaker. <br></br>
                    2.	Shake generously for about 10–15 seconds and enjoy the refreshing whey protein like a fruit-flavored shake. <br></br>
                    3.	You can Take 1-2 servings of Frotein any time of day to meet your daily protein requirements according to your goals. <br></br>

                    Whey Protein Concentrate, Whey Protein Isolate, Hydrolysed Whey Protein. Whey Powder Nature Identical Flavors, Citric Acid. Malic Acid, Sucralose (INS 955) and Preservative (E211). ALLERGENS Contains Milk.
                </p>
            </div>
        </>
    )
}

export default Product54