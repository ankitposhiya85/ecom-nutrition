import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product3() {
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
                <h1>GNC Pro Performance Weight Gainer - 6.6 lbs, 3 kg (Double Chocolate)</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 13.jpg"></img>
                            <img src="Img/product 13.jpg"></img>
                            <img src="Img/product 13.jpg"></img>
                            <img src="Img/product 13.jpg"></img>
                            <img src="Img/product 13.jpg"></img>
                        </div>
                        <img src="Img/product 13.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC Pro Performance Weight Gainer - 6.6 lbs, 3 kg (Double Chocolate)</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 2,500</h6>
                                <p>INR 3,199</p>
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
                                <span id="res"></span><span id="delivery">Deliverd in 4 Days</span>
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
                <h4>Category </h4><p>Weight gainer</p>
                <h4>Description</h4>
                <p>
                    Key Features <br></br>
                    Get all the extra calories with GNC Pro Performance weight gainer to put on weight and muscle mass<br></br>
                    It has the goodness of BCAAs and essential nutrients that one might not get from their daily diet<br></br>
                    You can easily mix it with milk, water, or any other beverage of your choice<br></br>
                    Each serving of 3 heaped scoops provides 700 calories, 73 g of protein, and 115 g of carbohydrates<br></br>
                    Gets mixed instantly, easy to digest, and has a delicious chocolate taste<br></br>
                    Product Description<br></br>
                    Choosing a supplement that supports your fitness goal is the best idea. If you want to put on weight in a healthy manner and build muscle mass, then adding a weight gainer in your routine will be beneficial. GNC Pro Performance Weight Gainer is one of the top selling GNC fitness supplements.<br></br>

                    Get those extra calories needed by the body to gain weight without adding any extra fat to your system. The goodness of essential nutrients like vitamins and minerals help perform various body functions. GNC Pro Performance Weight Gainer is ideal for beginners and intermediate fitness enthusiasts, especially those who are hard gainers.<br></br>

                    Introduction<br></br>
                    With GNC Pro Performance weight gainer double chocolate you can start gaining weight and building muscles in a natural way. It is a scientific formula that helps people with fast metabolism or those who find it hard to gain weight get best gains. It is one of the best compositions and has the right balance of extra calories, protein, carbohydrates, and other essential vitamins that one might not get from their daily diet. The added MCT help provide energy throughout the day.<br></br>

                    GNC supplements are World Anti Doping Agency (WADA) approved and Informed Choice Certified. The products bearing these logos have been tested for purity and don’t have any banned substances.<br></br>

                    Benefits<br></br>
                    Each serving provides 50 g high quality of fast, medium, and slow releasing protein for best gains<br></br>
                    It is enriched with the goodness of BCAAs which help reduce muscle breakdown after intense workouts<br></br>
                    GNC Pro Performance Weight Gainer is fortified with added medium chain triglycerides (MCT) which get quickly absorbed in the body to be used for energy<br></br>
                    It is a great source of essential amino acids and fiber<br></br>
                </p>
            </div>
        </>
    )
}

export default Product3