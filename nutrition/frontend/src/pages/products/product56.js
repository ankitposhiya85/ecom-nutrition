import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product56() {
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
                <h1>MUSCLETECH NITRO TECH WHEY PROTEIN</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 52.jpg"></img>
                            <img src="Img/product 52.jpg"></img>
                            <img src="Img/product 52.jpg"></img>
                            <img src="Img/product 52.jpg"></img>
                            <img src="Img/product 52.jpg"></img>
                        </div>
                        <img src="Img/product 52.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>MUSCLETECH NITRO TECH WHEY PROTEIN</h2>
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 5,200</h6>
                                <p>INR 6,499</p>
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
                <h4>Category </h4><p>Protin</p>
                <h4>Description</h4>
                <p>
                    VS Nutrition Online Store  for MuscleTech Nitro tech <br></br>

                    Key features<br></br>

                    BCAA per scoop that increases muscle strength and repairs muscle wear post workout. <br></br>
                    It also consists of strength-enhancing creatine serving 3g per scoop. <br></br>
                    Muscletech Nitrotech Performance Series is excellent in increasing overall strength, stamina and vigour. It has excellent results on people willing bulk muscle. <br></br>
                    Muscletech Nitrotech is an ideal choice as a post-workout protein and boosts protein synthesis throughout the day

                </p>
            </div>
        </>
    )
}

export default Product56