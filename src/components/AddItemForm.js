import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/actions';

const AddItemForm = () => {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('');
    const [notes, setNotes] = useState('');
    const dispatch = useDispatch();

    const categories = [
        'Electronics', 'Clothing', 'Grocery', 'Home & Kitchen', 'Health & Beauty', 
        'Toys', 'Sports', 'Automotive', 'Books', 'Music', 'Office Supplies', 
        'Pet Supplies', 'Garden', 'Tools', 'Jewelry'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name: itemName,
            quantity,
            category,
            notes,
            completed: false,
        };
        dispatch(addItem(newItem));
        setItemName('');
        setQuantity(1);
        setCategory('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-item-form">
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Add Item"
                required
                className="item-input"
            />
            <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="quantity-select"
            >
                {[...Array(100).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>
                        {num + 1}
                    </option>
                ))}
            </select>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="category-select"
            >
                <option value="" disabled>Select Category</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Optional Notes"
                className="notes-input"
            />
            <button type="submit" className="add-item-button">Add Item</button>
        </form>
    );
};

export default AddItemForm;
