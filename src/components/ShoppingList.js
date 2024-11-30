import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, toggleItem, updateItem } from "../Redux/actions";


import './ShoppingList.css';  

const ShoppingList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriterion, setSortCriterion] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedNotes, setUpdatedNotes] = useState("");
  const [isSharing, setIsSharing] = useState(false);

  const items = useSelector((state) => state.items);
  const categories = [...new Set(items.map((item) => item.category))];
  const dispatch = useDispatch();

  const filteredAndSortedItems = items
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter
        ? item.category === categoryFilter
        : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortCriterion === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortCriterion === "category") {
        return a.category.localeCompare(b.category);
      } else if (sortCriterion === "quantity") {
        return a.quantity - b.quantity;
      }
      return 0;
    });

  const handleUpdate = () => {
    const updatedItem = {
      ...editItem,
      name: updatedName,
      quantity: updatedQuantity,
      category: updatedCategory,
      notes: updatedNotes,
    };
    dispatch(updateItem(updatedItem));
    setIsEditing(false);
    setEditItem(null);
    setUpdatedName("");
    setUpdatedQuantity("");
    setUpdatedCategory("");
    setUpdatedNotes("");
  };

  const handleShare = () => {
    const shareData = JSON.stringify(items);
    const encodedData = encodeURIComponent(shareData);
    const shareLink = `${window.location.origin}/share?data=${encodedData}`;
    return shareLink;
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${handleShare()}`,
    twitter: `https://twitter.com/intent/tweet?url=${handleShare()}`,
    whatsapp: `https://api.whatsapp.com/send?text=Check out this shopping list: ${handleShare()}`,
    email: `mailto:?subject=Shopping List&body=Check out this shopping list: ${handleShare()}`,
  };

  return (
    <div className="shopping-list-container">
      <h1 className="shopping-list-title">Shopping List</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-filter"
        >
          <option value="">Filter by category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
      </div>

      {isEditing && (
        <div className="edit-form">
          <h3>Edit Item</h3>
          <input
            type="text"
            placeholder="Item Name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="edit-input"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={updatedQuantity}
            onChange={(e) => setUpdatedQuantity(e.target.value)}
            className="edit-input"
          />
          <input
            type="text"
            placeholder="Category"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            className="edit-input"
          />
          <textarea
            placeholder="Notes"
            value={updatedNotes}
            onChange={(e) => setUpdatedNotes(e.target.value)}
            className="edit-textarea"
          />
          <button onClick={handleUpdate} className="btn-primary">
            Update
          </button>
          <button onClick={() => setIsEditing(false)} className="btn-secondary">
            Cancel
          </button>
        </div>
      )}

      <button className="btn-primary" onClick={() => setIsSharing(true)}>
        Share List
      </button>

      {isSharing && (
        <div className="share-modal">
          <div>
            <h3>Share Your Shopping List</h3>
            <div className="social-buttons">
              <button
                className="social-button facebook"
                onClick={() => window.open(shareLinks.facebook, "_blank")}
              >
                Share on Facebook
              </button>
              <button
                className="social-button twitter"
                onClick={() => window.open(shareLinks.twitter, "_blank")}
              >
                Share on Twitter
              </button>
              <button
                className="social-button whatsapp"
                onClick={() => window.open(shareLinks.whatsapp, "_blank")}
              >
                Share on WhatsApp
              </button>
              <button
                className="social-button email"
                onClick={() => window.open(shareLinks.email, "_blank")}
              >
                Share via Email
              </button>
            </div>
            <button onClick={() => setIsSharing(false)} className="btn-secondary">
              Close
            </button>
          </div>
        </div>
      )}

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
            <tr
              key={item.id}
              className={`shopping-list-item ${item.completed ? "completed" : ""}`}
            >
              <td className="item-name">{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>
                {item.notes && <p className="item-notes">{item.notes}</p>}
              </td>
              <td className="item-actions">
                <button
                  className={`btn-toggle ${item.completed ? "undo" : "complete"}`}
                  onClick={() => dispatch(toggleItem(item.id))}
                >
                  {item.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="btn-danger"
                  onClick={() => dispatch(deleteItem(item.id))}
                >
                  Delete
                </button>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setIsEditing(true);
                    setEditItem(item);
                    setUpdatedName(item.name);
                    setUpdatedQuantity(item.quantity);
                    setUpdatedCategory(item.category);
                    setUpdatedNotes(item.notes);
                  }}
                >
                  Edit
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
