import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList, createList, deleteList } from '../Redux/actions';

const ListSelector = () => {
    const [newListName, setNewListName] = useState('');
    const lists = useSelector((state) => state.lists);
    const selectedList = useSelector((state) => state.selectedList);
    const dispatch = useDispatch();

    const handleCreateList = () => {
        if (newListName.trim()) {
            dispatch(createList(newListName));
            setNewListName('');
        }
    };

    return (
        <div className="list-selector">
            <h2>Select or Create a List</h2>
            <select
                value={selectedList}
                onChange={(e) => dispatch(selectList(e.target.value))}
                className="list-select"
            >
                {lists.map((list) => (
                    <option key={list.id} value={list.id}>
                        {list.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="New List Name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                className="new-list-input"
            />
            <button onClick={handleCreateList} className="create-list-button">
                Create List
            </button>
        </div>
    );
};

export default ListSelector;
