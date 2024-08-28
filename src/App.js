// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                
                <nav className="navigation">
                    <Link to="/add-item" className="nav-link">Add Item</Link>
                    <Link to="/shopping-list" className="nav-link">Shopping List</Link>
                </nav>

                
                <Routes>
                    <Route path="/add-item" element={<AddItemForm />} />
                    <Route path="/shopping-list" element={<ShoppingList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
