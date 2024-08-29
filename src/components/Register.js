import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Simulate storing user credentials to localStorage (for demonstration purposes)
        const userData = { email, password }; // In a real app, hash the password before storing
        localStorage.setItem('user', JSON.stringify(userData)); // Replace with API call if using backend

        alert("Registration successful! You can now login.");
        
        // Clear form fields
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
        // Redirect to login page after registration
        navigate('/login');
    };

    return (
        <form onSubmit={handleRegister} className="register-form">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="input"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="input"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="input"
            />
            <button type="submit" className="submit-button">Register</button>
        </form>
    );
};

export default Register;
