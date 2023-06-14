import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product9() {
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
                <h1>TrueBasics Ultra Omega-3 Fatty Acids (EPA 525 mg DHA 400 mg), 90 capsules</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 10.jpg"></img>
                            <img src="Img/product 10.jpg"></img>
                            <img src="Img/product 10.jpg"></img>
                            <img src="Img/product 10.jpg"></img>
                            <img src="Img/product 10.jpg"></img>
                        </div>
                        <img src="Img/product 10.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>TrueBasics Ultra Omega-3 Fatty Acids (EPA 525 mg DHA 400 mg), 90 capsules</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 1,400</h6>
                                <p>INR 1,699</p>
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
                <h4>Category </h4><p>Fish oil</p>
                <h4>Description</h4>
                <p>
                    TrueBasics Ultra Omega 3 is a triple strength formula with 1250mg of omega-3 fatty acids, with 925mg EPA & DHA, for a healthy heart, strong bones & joints, and improved brain & eye health <br></br>
                    Promotes Heart Health<br></br>
                    Increases Muscle Mass<br></br>
                    Improves Performance<br></br>

                    toggle<br></br>
                    Benefits of Truebasics Ultra Omega 3<br></br>
                    Supports Fitness<br></br>
                    Potent dosages of EPA & DHA help in reducing inflammation and soreness in muscles to help you take your workout performance to the next level.<br></br>

                    Promotes Heart Health<br></br>
                    Truebasics Ultra Omega 3 acids help in maintaining cholesterol levels so that your heart is always able to pump you up through challenges<br></br>

                    Enhances Skin Health<br></br>
                    By eliminating inflammation, Truebasics Omega 3 helps protect your skin from harmful UV radiations, and helps the skin to be in its best health.<br></br>

                    Improves Brain Health<br></br>
                    DHA present in Truebasics Ultra Omega 3 is proven to enhance memory and improve visual analysis, allowing you to concentrate throughout those long working hours.<br></br>
                </p>
            </div>
        </>
    )
}

export default Product9