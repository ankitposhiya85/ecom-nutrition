import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../contex";

function Product23() {
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
                <h1>BODY FUEL HARDCORE 6 LBS ( STRAWBERRY TWIRL )</h1>
            </div>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex">
                        <div className="small-imgs">
                            <img src="Img/product 27.jpg"></img>
                            <img src="Img/product 27.jpg"></img>
                            <img src="Img/product 27.jpg"></img>
                            <img src="Img/product 27.jpg"></img>
                            <img src="Img/product 27.jpg"></img>
                        </div>
                        <img src="Img/product 27.jpg" className="product-img"></img>
                    </div>
                    <div className="col-md-6 col-12 product-txt">
                        <div className="product-detail1">
                            <div className="fav">
                                <h2>BODY FUEL HARDCORE 6 LBS ( STRAWBERRY TWIRL )</h2>                              
                                <img src="/Img/favorite.png"></img>
                            </div>
                            <div className="d-flex align-items-center gap-3 price">
                                <h6>INR 2,700</h6>
                                <p>INR 3,899</p>
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
                <h4>Category </h4><p>Gainer</p>
                <h4>Description</h4>
                <p>
                    Body Fuel Hardcore Ultimate blend of Creatine Protein Crabs. Muscle Development Power Endurance Mix 3 level scoop Body Fuel Hardcore with 250 ML water. <br></br>
                    Muscle Development. <br></br>
                    Power & Endurance. <br></br>

                    Bigmuscles nutrition body fuel hardcore is a advanced formula in the muscle optimizing technology which is brought to you from big muscle nutrition. Body fuel is the powerful combination of creatine, carb and protein with the balanced blend of carbohydrates, vitamins and minerals to increase power and size. Body fuel have combination of multiple protein sources as compared to other protein supplements which are available in one single source. This powdered body fuel comes in multiple flavours and is proven to provide a complete amino acid profile. Not only this, it is good for weight management and muscle development and is also suitable for vegetarians. <br></br>

                    Direction to use: Mix 3 level scoops of Bodyfuel Hardcore with 250 ml of water, For added calories add body fuel hardcore with milk. stir and/or until dispersed and immediately drink. <br></br>

                    Ingredients: Protein Matrix (50.2%), (Skimmed Milk Powder, Soy Protein Isolate, Whey Protein Concentrate), Maltodextrin (28%), Starch, Creatine Monohydrate, Cocoa Powder, Sucralose, Preservative (E211), Thickener (415).


                </p>
            </div>
        </>
    )
}

export default Product23