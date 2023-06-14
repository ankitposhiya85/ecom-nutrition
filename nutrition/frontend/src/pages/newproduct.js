

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Newproduct() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    }
    );
    return (
        <>
            <div className="product">
                <h1>Add new product</h1>
            </div>

            <div className="container">
                <div className="newproduct">
                    <div className="row">
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Name</h5>
                            <input type="text" placeholder="Name"></input>
                        </div>
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Short Name</h5>
                            <input type="text" placeholder="Short Name"></input>
                        </div>
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Category</h5>
                            <input type="text" placeholder="Catagory"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Price</h5>
                            <input type="text" placeholder="Price"></input>
                        </div>
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Discounted price</h5>
                            <input type="text" placeholder="Discounted"></input>
                        </div>
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Stock</h5>
                            <input type="text" placeholder="Stock"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Discription</h5>
                            <textarea type="text" placeholder="Discription"></textarea>
                        </div>
                        <div className="col-lg-3 col-12 newproduct1">
                            <h5>Images</h5>
                            <button className="img-btn">+</button>
                        </div>
                    </div>
                    <button className="btn1">Submit</button>
                </div>

            </div>
        </>
    )
}

export default Newproduct