
import React from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import './App.css';

const App = () => {
    return (
        <div>
            <AddItemForm />
            <ShoppingList />
        </div>
    );
};

export default App;
