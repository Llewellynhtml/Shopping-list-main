import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];


    const storedUser = users.find((user) => user.email === email && user.password === password);

    if (storedUser) {
      alert("Login successful!");
      onLogin(storedUser);
      navigate("/add-item");
    } else {
      alert("Invalid credentials!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="input"
      />
      <input
        type="password"
       
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="input"
      />
      <button type="submit" className="submit-button">
        Login
      </button>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
