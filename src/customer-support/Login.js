import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="login-page">
            <h1 className="title">ALLORA SERVICE HUB</h1>
            <p className="subtitle">AS AN CUSTOMER SUPPORT</p>

            <div className="login-container">
                <h2>Login</h2>

                <input type="email" placeholder="Email Address" className="input-box" />
                <div className="password-container">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-box"
                    />
                    <span className="eye-icon">👁</span>

                </div>

                <a href="/forgot-password" className="forgot-password">
                    Forgot Password
                </a>


                <button className="login-btn">Login</button>
            </div>
        </div>
    );
}

export default Login;
