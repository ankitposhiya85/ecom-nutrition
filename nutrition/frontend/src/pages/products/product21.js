import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product21() {
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
        if (zipcode.trim().length === 0){
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
                <h1>GNC PRO PERFORMANCE L-GLUTAMINE POWDER 5000 MG - 50 SERVINGS - 0.55LBS, 250 GM (UNFLAVORED)</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 17.jpg"></img>
                            <img src="Img/product 17.jpg"></img>
                            <img src="Img/product 17.jpg"></img>
                            <img src="Img/product 17.jpg"></img>
                            <img src="Img/product 17.jpg"></img>
                        </div>
                        <img src="Img/product 17.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>GNC PRO PERFORMANCE L-GLUTAMINE POWDER 5000 MG - 50 SERVINGS - 0.55LBS, 250 GM (UNFLAVORED)</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,100</h6>
                                <p>INR 1,299</p>
                            </div>
                            <div className="buttons">
                                {/* <Link to="/contact"><button className="btn2">Add to cart</button></Link> */}
                                <button className="btn1" id="cart-btn" onClick={addtocart}>Add to cart</button>
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
                <h4>Category </h4><p>L - glutamine</p>
                <h4>Description</h4>
                <p>
                    GNC Pro Performance L-Glutamine Powder 5000 mg - 50 Servings - 0.55lbs, 250 gm (Unflavored) <br></br>
                    Product Description <br></br>
                    Glutamine [gloo-tuh-meen], a non-essential amino acid, is one of the most abundant amino acids found in muscles. It plays an important role in muscle function during and after exercise. <br></br>
                    Each serving of GNC L-Glutamine powder supplies 5,000mg of L-Glutamine and blends easily with and beverage or sports drinks.
                    It serves as fuel for the immune system and maintenance of proper intestinal function.
                    Pro Performance L-Glutamin is tested and certified Banned Substance Free.
                    GNC L-Glutamine powder is gluten and lactose free. <br></br>

                    Benefits<br></br>
                    Supplementation with GNC L-Glutamine may help maintain the glutamine levels that have been depleted as a result of intense exercise.
                    Glutamine, as an independent amino acids is involved in protein synthesis and plays a pivotal role in the body's nitrogen balance.
                    It helps fuel immune system and maintenance of proper intestinal function. <br></br>
                    Who should Consume <br></br>
                    Bodybuilders <br></br>
                    Weight Trainers<br></br>
                    Serious Athletes<br></br>
                    How to Consume<br></br>
                    As a dietary supplement, mix one scoop (5 g) twice daily in a beverage or shake. For maximum results, take one serving (5 g) post-exercise. <br></br>
                    When to Consume<br></br>
                    During Intense Exercise.<br></br>
                    Immediately Post Workout<br></br>
                    Storage:<br></br>

                    Store in a cool dry place. <br></br>
                    Warning:<br></br>

                    Keep Out of Reach of Children.<br></br>
                    FAQs<br></br>
                    What is Glutamine?<br></br>

                    Glutamine [gloo-tuh-meen], a non-essential amino acid, is one of the most abundant amino acids found in muscles. It plays an important role in muscle.
                </p>
            </div>
        </>
    )
}

export default Product21