import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser) {
            alert("User not found! Please register.");
            return;
        }

        
        if (storedUser.email === email && storedUser.password === password) {
            alert("Login successful!");
            
            onLogin(storedUser);
        } else {
            alert("Invalid credentials!");
        }

        
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
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
            <button type="submit" className="submit-button">Login</button>
        </form>
    );
};

export default Login;
