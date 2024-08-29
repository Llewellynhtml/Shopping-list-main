
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../Redux/actions';

const ShoppingList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriterion, setSortCriterion] = useState('');
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const filteredAndSortedItems = items
        .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
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

            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

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

            <table className="shopping-list-table">
            <thead>
                    <tr>
                        <th className="table-header">Name</th>
                        <th className="table-header">Quantity</th>
                        <th className="table-header">Category</th>
                        <th className="table-header">Notes</th>
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedItems.map((item) => (
                        <tr key={item.id} className={`shopping-list-item ${item.completed ? 'completed' : ''}`}>
                            <td className="item-name">{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category}</td>
                            <td>{item.notes && <p className="item-notes">{item.notes}</p>}</td>
                            <td className="item-actions">
                                <button
                                    className={`toggle-item-button ${item.completed ? 'undo' : 'complete'}`}
                                    onClick={() => dispatch(toggleItem(item.id))}
                                >
                                    {item.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button
                                    className="delete-item-button"
                                    onClick={() => dispatch(deleteItem(item.id))}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShoppingList;
