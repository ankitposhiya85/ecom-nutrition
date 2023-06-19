import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "./contex";




function Cart() {
    useEffect(() => {
        document.getElementById("header").classList.remove("login-nav");
        document.getElementById("footer").classList.remove("login-footer");
    });

    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.discountedprice) * curr.qty, 0)
        );
    }, [cart]);
    
    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cart))
    }, [cart]);

    function checkout() {
        alert("Thanks for shopping");
        window.location.pathname = "/login"
    }


    return (
        <>
            <div className="cart">
                <div className="cart-product">
                    <h1>My Cart</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="row products-row">
                                <div className="row">
                                    {cart.map(product => (
                                        <div className="products-row1 row">
                                            <div className="col-lg-4 col-12 products-row2">
                                                <Link to={`/productdetail/${product.id}`}><img src={product.image} className="cart-p-img" alt="Image of producr"></img></Link>
                                            </div>
                                            <div className="col-lg-7 col-12 products-row2">
                                                <div>
                                                    <Link to={`/productdetail/${product.id}`}><h5>{product.shortname}</h5></Link>
                                                    <div className="cart-p-detail">
                                                        <div className="d-flex gap-3 align-items-center">
                                                            <h6>Qty.</h6>
                                                            <select
                                                                onChange={(e) =>
                                                                    dispatch({
                                                                        type: "CHANGE_CART_QTY",
                                                                        payload: {
                                                                            id: product.id,
                                                                            qty: e.target.value,
                                                                        },
                                                                    })
                                                                } >
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                            </select>

                                                            {/* <div className="quntity">
                                                                <input type="number" placeholder="1" onChange={(e) =>
                                                                    dispatch({
                                                                        type: "CHANGE_CART_QTY",
                                                                        payload: {
                                                                            id: product.id,
                                                                            qty: e.target.value,
                                                                        },
                                                                    })
                                                                }></input>
                                                            </div> */}
                                                        </div>
                                                        <h5>INR {product.discountedprice}</h5>
                                                        <img src="Img/delete.png" className="delete-img" id="remove" alt="delete img" onClick={() =>
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: product,
                                                            })
                                                        }></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="total">
                                <div className="total-txt">
                                    <div className="total1">
                                        <p>Subtotal:</p>
                                        <p>{total}</p>
                                    </div>
                                    {/* <div className="total1">
                                        <p>Delivery:</p>
                                        <p>50</p>
                                    </div>
                                    <hr></hr>
                                    <div className="total1">
                                        <h5>Total</h5>
                                        <h5>{total + 50}</h5>
                                    </div> */}
                                    <button className="btn5" onClick={checkout}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart