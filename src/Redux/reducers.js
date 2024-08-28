// src/redux/reducers.js
import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, UPDATE_ITEM } from './actions';

const initialState = {
    items: [],
};

const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case TOGGLE_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                ),
            };
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        default:
            return state;
    }
};

export default shoppingListReducer;
