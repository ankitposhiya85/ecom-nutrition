import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product5() {
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
                <h1>GNC Mega Men Sport Multivitamin 120 Tablets</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 15.jpg"></img>
                            <img src="Img/product 15.jpg"></img>
                            <img src="Img/product 15.jpg"></img>
                            <img src="Img/product 15.jpg"></img>
                            <img src="Img/product 15.jpg"></img>
                        </div>
                        <img src="Img/product 15.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC Mega Men Sport Multivitamin 120 Tablets</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 2,000</h6>
                                <p>INR 2,399</p>
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
                            <div className="d-flex gap-5">
                                <span id="res"></span><span id="delivery">Deliverd in 6 Days</span>
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
                <h4>Category </h4><p>Mulitivitamin</p>
                <h4>Description</h4>
                <p>
                    GNC Mega Men Sport Multivitamin (120 tablets) <br></br>


                    Key features<br></br>
                    Each serving of GNC Mega Men Sport Multivitamin provides 43 superior and premium quality essential nutrients to help achieve your daily nutritional goals that everyday diet may not provide.
                    Supports heart health, prostate health, keeps eyes healthy, is great for overall health and well-being.
                    GNC Mega Men Sports is enriched with the goodness of antioxidants to prevent your body from free radicals generated during your intense workout.Antioxidants also help to slow down aging process.
                    It has components like L- glutamine, L- arginine, and taurine those help in enhancing exercise performance by reducing fatigue and decreasing muscle soreness.
                    GNC Mega Men Sport includes branched chain amino acids to help fuel muscles. It also supports muscles by providing the right electrolytes that may be lost during intensive exercise sessions, including calcium that plays a pivotal role in mediating muscle contraction.<br></br>
                    Product Description<br></br>
                    GNC Mega Men Sport provides a solid blend of essential nutrients and powerful ingredients to support men’s overall health, performance, and muscle function. One should know that not all multivitamins are the same. This one is especially designed by nutritional experts keeping in mind fitness enthusiasts. Along with super antioxidant blend, sports blend is being added in GNC Mega Men Sports Blend which includes L-Arginine, L-Taurine, L-Glutamine, Choline, Inositol, Boron and Hyaluronic Acid. These ingredients work together to improve to further fuel your muscle performance.Get the best quality multivitamins for men with GNC Mega Men Sport Multivitamin. It has more antioxidant power and is available in easy to swallow and digest tablets.<br></br>

                    Benefits of GNC Mega Men Sport Multivitamin<br></br>
                    Provides extra pump to fuel muscles<br></br>
                    If you’re looking for that extra something to fuel your muscles, then this is the best multivitamin. BCAA present in the formulation will help fuel your muscles to work harder without affecting them. The super ingredients present will also help reduce muscle soreness and fatigue.It also supports muscles by providing the right electrolytes that may be lost during intensive exercise sessions, including calcium that plays a pivotal role in mediating muscle contraction.<br></br>
                    Enriched with antioxidants<br></br>
                    It is packed with the goodness of antioxidants to protect the cells against oxidative damage caused by free radicals during intense workout.<br></br>

                    Has a host of water soluble vitamins<br></br>
                    Vitamins A, D, E, and K are excess fat soluble vitamins that are stored in the body. On the other hand, water soluble vitamins like Vitamin C and B are not stored and need to be taken regularly. These vitamins travel through the body and taking a multivitamin with water-soluble vitamins will have beneficial effects on your overall health.<br></br>

                    Beneficial for prostate support<br></br>
                    It has lycopene to support normal prostate functioning and keeping it healthy.<br></br>

                    Good for eye health<br></br>
                    Vitamins A, Lutein, and Zeaxanthin are some of the micronutrients that are great for eye health and all these are present in GNC Mega Men Sport Multivitamin. As per a recent study it was suggested that multivitamin enriched with the amalgamation of zeaxanthin, lutein and vitamins may lower the risk of macular degeneration.<br></br>

                    Decreases anxiety and stress<br></br>
                    GNC Mega Men Sports has a vitamin B complex. And it is proven that the Vitamin B family is responsible for boosting your mood, lowers anxiety and stress levels, alleviates tension, and increases overall energy levels.<br></br>

                    Main Ingredients<br></br>
                    Vitamin A, Vitamin C, Vitamin D, Vitamin E, Vitamin K, Thiamin, Niacin, Riboflavin, Folic Acid, Biotin,Vitamin B-12, Pantothenic Acid, Riboflavin, Niacin, Copper, Manganese, Chromium, Chloride, Zinc, Potassium, Selenium, Phosphorus, Molybdenum, Iodine, Calcium, Magnesium Sports Blend, Super Antioxidant Blend, Branched-Chain Amino Acids Blend.<br></br>

                    How to consume GNC Mega Men Sport Multivitamin?<br></br>
                    The GNC Mega Men Sport is available in tablet form making it super easy and convenient to take. You can take 2 tablets a day with food, or as suggested by your physician/dietician.<br></br>

                    When to consume GNC Mega Men Multivitamin?<br></br>
                    It can be taken at any time of the day, but ideally it is recommended you take these multivitamins with your breakfast and lunch/ afternoon snack. So take one tablet in the morning with breakfast and the other one after lunch or mid-evening snack.<br></br>

                    Who should consume GNC Mega Men Sport?<br></br>
                    It is ideal for men who want to take care of their fitness and are serious athletes.<br></br>

                    Where to buy GNC Multivitamin Sport?<br></br>
                    www.guardian.in is the one stop solution for all your health and fitness related supplements needs. You can buy GNC Mega Men Sport multivitamin online in India easily at guardian and get it delivered right at your doorstep. For best discounts and offers visit the website today.<br></br>

                    Warnings<br></br>
                    It is highly recommended that you consult your doctor before including any kind of multivitamin supplements in your diet. Discontinue immediately if you notice any allergic reaction and consult your doctor at the earliest. If you have a specific medical condition, do mention it to your doctor if you have decided to take GNC Mega Men Sport.<br></br>

                    Frequently Asked Questions (FAQs)<br></br>
                    Q. What is GNC Mega Men Sport Multivitamin?<br></br>
                    A. It is a complete multivitamin enriched with 43 premium and high quality ingredients. If you’re looking to improve your performance, muscle functions, and heart health, then consider this beneficial multivitamin. It’ll help you maintain a healthy lifestyle as it has the benefits of great ingredients and is packed with antioxidants. The GNC multivitamin also has the right balance of electrolytes to replace those lost during sweat during sports and exercising, and it also helps protect against muscle cramping, including calcium that plays an indispensable role in mediating muscle contraction.<br></br>
                </p>
            </div>
        </>
    )
}

export default Product5