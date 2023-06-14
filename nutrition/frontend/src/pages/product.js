import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import productsData from './productlist.json';



function Product() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    // const [item, setItem] = useState(productsData);

    // const menuItems = [...new Set(productsData.map((Val) => Val.category))];

    // const filterItem = (curcat) => {
    //     const newItem = productsData.filter((newVal) => {
    //         return newVal.category === curcat;
    //     });
    //     setItem(newItem);
    // };


    return (
        <>
            <div className="product">
                <h1>Products</h1>
            </div>

            <div className="container-fluid filter2">
                <div className="row">
                    {/* <div className="col-lg-2 col-12 filter1">
                        <div className="filter">
                            <h4>Categories</h4>
                            <Form.Check
                                inline
                                label="Weight Gainer"
                                name="group1"
                                type="radio"
                    
                            />
                            <Form.Check
                                inline
                                label="Mutivitamin"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Fish Oil"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Protin"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Pre Workout Suppliment"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Muscle Recover"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Fat burner"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Wellness"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="L - Glutamine"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Gainer"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Intra Workout"
                                name="group1"
                                type="radio"
                            />
                            <button className="btn3">Clear</button>
                        </div>
                    </div> */}
                    <div className="col-12 products">
                        <div>
                            <div className="row">
                                {products.map(product => (
                                    <div className="slide col-lg-4 col-12" key={product.id}>
                                        <Link to={`/productdetail/${product.id}`}>
                                            <div className="slide-img">
                                                <img src={product.image}></img>
                                            </div>
                                            <h5>{product.shortname}</h5></Link>
                                        <div className="d-flex align-items-center justify-content-center gap-5 my-2">
                                            <h6>INR {product.discountedprice}</h6>
                                            <p>INR {product.price}</p>
                                        </div>
                                        <h4>{product.stock}</h4>
                                        {/* <button className="btn2">Add to cart</button> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product