import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../Redux/actions';

const ShoppingList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriterion, setSortCriterion] = useState('');
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    // Filter items based on search term and sort them based on the selected criterion
    const filteredAndSortedItems = items
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortCriterion === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortCriterion === 'category') {
                return a.category.localeCompare(b.category);
            } else if (sortCriterion === 'quantity') {
                return a.quantity - b.quantity;
            }
            return 0;
        });

    return (
        <div className="shopping-list">
            <h1 className="shopping-list-title">Shopping List</h1>
            
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {/* Sort Select Dropdown */}
            <select
                value={sortCriterion}
                onChange={(e) => setSortCriterion(e.target.value)}
                className="sort-select"
            >
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="category">Category</option>
                <option value="quantity">Quantity</option>
            </select>

            {/* Shopping List Items */}
            <ul className="shopping-list-items">
                {filteredAndSortedItems.map((item) => (
                    <li key={item.id} className={`shopping-list-item ${item.completed ? 'completed' : ''}`}>
                        <div className="item-details">
                            <strong className="item-name">{item.name}</strong> 
                            (Qty: {item.quantity}) - {item.category}
                            {item.notes && <p className="item-notes">Notes: {item.notes}</p>}
                        </div>
                        <div className="item-actions">
                            {/* Toggle Complete/Undo Button */}
                            <button 
                                className={`toggle-item-button ${item.completed ? 'undo' : 'complete'}`} 
                                onClick={() => dispatch(toggleItem(item.id))}
                            >
                                {item.completed ? 'Undo' : 'Complete'}
                            </button>
                            
                            {/* Delete Button */}
                            <button 
                                className="delete-item-button" 
                                onClick={() => dispatch(deleteItem(item.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
