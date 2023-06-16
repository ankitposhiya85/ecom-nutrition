import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product6() {
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
                <h1>GNC Mega Men One Daily Multivitamin 60 Tablets</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 16.jpg"></img>
                            <img src="Img/product 16.jpg"></img>
                            <img src="Img/product 16.jpg"></img>
                            <img src="Img/product 16.jpg"></img>
                            <img src="Img/product 16.jpg"></img>
                        </div>
                        <img src="Img/product 16.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <h2>GNC Mega Men One Daily Multivitamin 60 Tablets</h2>
                            <div className="fav">
                                <h2>GNC Mega Men Sport Multivitamin 60 Tablets</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,100</h6>
                                <p>INR 1,299</p>
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
                <h4>Category </h4><p>Mulitivitamin</p>
                <h4>Description</h4>
                <p>
                    GNC Mega Men One Daily Multivitamin (60 tablets) <br></br>
                    Key Features<br></br>
                    Multivitamins play a crucial role in supporting the various bodily functions; be it muscle building, providing energy, bone development, recovery after workout etc. GNC Men Multivitamin is customized as per the varying health needs of men and is easy to take.
                    One tablet is enough to provide you the daily dose of essential nutrients and minerals. It is packed with the goodness of 32 essential nutrients that are needed by the body for various functions.
                    It contains a balance of electrolytes to replace the loss due to sweat in heavy workouts and is also prevents muscle cramping.
                    GNC Mega Men One Daily Multivitamin contains B group vitamins that are known for supporting a healthy metabolism.<br></br>
                    Product description<br></br>
                    GNC Mega Men One Daily Multivitamin is a highly concentrated and effective tablet packed with the goodness of 32 essential nutrients. It provides most of the vitamins and minerals at 100% daily value, which means taking one tablet in the morning will keep you sorted and your health in check.<br></br>

                    GNC is known for its high quality supplements and multivitamins and this one particularly is perfect for active adult men. It fuels muscle performance by providing a balance of electrolytes and all essential amino acids needed by the body. Also features amino acids to help fuel skeletal muscles.<br></br>

                    Benefits of GNC Mega Men One Daily Multivitamin<br></br>
                    Supports brain health
                    Nutrients like choline and inositol present in GNC Mega Men One Daily Multivitamin are beneficial in supporting brain health.<br></br>

                    Great for overall health<br></br>
                    Your everyday diet cannot provide all the nutrients needed by the body. That’s why taking an enriched supplement is helpful. GNC Men Multivitamin is great for boosting immunity, supports heart and eye health, has the goodness of antioxidants to prevent oxidative stress and damage caused by free radicals, and boosts athletic performance as well.<br></br>

                    Promotes energy throughout the day
                    Vitamin B complex is needed by the body to support healthy metabolism and it also helps in maintaining energy levels throughout the day.<br></br>

                    Supports immunity
                    The need of the hour is to build a better immune system that can fight infections and keep you safe. GNC Mega Men One Daily Multivitamin is perfect to boost immunity. The combination of vitamins, minerals, and amino acids provides much needed power to your immune system.<br></br>

                    Useful in muscle building
                    If you’re someone who takes extra care of their health and fitness, then including multivitamins and supplements in your diet is a must. GNC Men One Daily Multivitamin has the perfect balance of nutrients and useful in muscle building. It is also beneficial to enhance athletic performance. Features amino acids to help fuel skeletal muscles.<br></br>

                    Supports eye health
                    Spending long hours glues to the screen can have a bad effect on your eyes. GNC multivitamin for men is enriched with lutein and zeaxanthin, both of which are known to support eye health.<br></br>

                    Q. When and how to take GNC Multivitamin for men?<br></br>
                    Multivitamins show best results when taken during the day. You can take one tablet of GNC multivitamin for men with breakfast or lunch.<br></br>

                    Q. Where to buy GNC Mega Men One Daily Multivitamin?<br></br>
                    If you’re looking to buy GNC men multivitamin online, then www.guardian.in is GNC India’s official website. The portal has complete range of supplements and multivitamins for men and women and for various health needs. Guardian.in is a reputable website and you can buy genuine products that are 100% safe, genuine, and reviewed by authentic customers.<br></br>

                    Warnings<br></br>
                    It is highly recommended that you talk to your doctor before taking any multivitamins. If you have any medical conditions then make sure you tell the doctor. Your doctor might suggest some alternate as some ingredients can interfere with medications. It is advised that if you notice any allergic reactions, then you must immediately stop taking this multivitamin and seek medical help. Stop consuming multivitamins 2 weeks before any surgery.<br></br>
                </p>
            </div>
        </>
    )
}

export default Product6