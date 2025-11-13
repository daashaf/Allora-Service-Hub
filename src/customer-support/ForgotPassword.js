import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending reset link
        console.log('Reset link sent to:', email);
        setSubmitted(true);
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            {submitted ? (
                <>
                    <p>A reset link has been sent to your email.</p>
                    <a href="/" className="back-login">Back to Login</a>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send Reset Link</button>
                </form>
            )}
        </div>
    );
}

export default ForgotPassword;
