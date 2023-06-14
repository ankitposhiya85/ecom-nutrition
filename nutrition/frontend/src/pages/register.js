import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register() {

    useEffect(() => {
        document.getElementById("header").classList.add("login-nav");
        document.getElementById("footer").classList.add("login-footer");
    }
    );

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:4000/register",
            data: {
                email,
                password,
                mobile,
                name,
                address,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
                window.location.href = "/"
            })
            .catch((error) => {
                error = new Error();
            });
    };

    return (
        <>
            <div className="login container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h1>Create Account</h1>
                        <div className="register">
                            <h4>Name</h4>
                            <input placeholder="Enter your name" name="Name" type="text" onChange={(e) => setName(e.target.value)} required></input>
                            <h4>Email</h4>
                            <input placeholder="Enter your mail address" name="email" type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                            <h4>Mobile</h4>
                            <input placeholder="Enter your mobile number" type="text" name="mobile" onChange={(e) => setMobile(e.target.value)} required></input>
                            <h4>Password</h4>
                            <input placeholder="Enter password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} required></input>
                            <h4>Address</h4>
                            <textarea placeholder="Enter your Address" type="Address" name="Address" onChange={(e) => setAddress(e.target.value)} required></textarea>
                            <Link to="/"><button className="btn1" onClick={(e) => handleSubmit(e)}>Create Account</button></Link>
                            {register ? (
                                <p className="text-success">You Are Registered Successfully</p>
                            ) : (
                                <p className="text-danger">You Are Not Registered</p>
                            )}
                            <div className="login1-txt">
                                <p>All ready have an account</p>
                                <Link to="/login"><h6>Log In</h6></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 login-img">
                        <img src="Img/login.png"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register