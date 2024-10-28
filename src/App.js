import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import AddItemForm from "./components/AddItemForm";
import ShoppingList from "./components/ShoppingList";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";
import Logo from "./components/E-commerce.png";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <img src={Logo} alt="E-commerce" className="E-com" />
        <nav className="navigation">
          {user ? (
            <>
              <Link to="/add-item" className="nav-link">Add Item</Link>
              <Link to="/shopping-list" className="nav-link">Shopping List</Link>
              <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
              <button onClick={handleLogout} className="nav-link">Logout</button>
            </>
          ) : null}
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to={user ? "/shopping-list" : "/login"} />} />
          <Route path="/add-item" element={user ? <AddItemForm /> : <Navigate to="/login" />} />
          <Route path="/shopping-list" element={user ? <ShoppingList /> : <Navigate to="/login" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/shopping-list" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/shopping-list" />} />
          <Route path="*" element={<Navigate to={user ? "/shopping-list" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
