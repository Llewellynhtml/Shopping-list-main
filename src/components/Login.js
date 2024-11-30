import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './styles.css'; 


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const storedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (storedUser) {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify(storedUser));
      onLogin(storedUser);
      navigate("/add-item");
    } else {
      alert("Invalid credentials!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="input-field"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Login
        </button>
        <p className="register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
