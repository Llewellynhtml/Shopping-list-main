import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, UPDATE_ITEM } from './actions';

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
};

const shoppingListReducer = (state = initialState, action) => {
    let updatedItems;
    switch (action.type) {
        case ADD_ITEM:
            updatedItems = [...state.items, action.payload];
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return {
                ...state,
                items: updatedItems,
            };
        case DELETE_ITEM:
            updatedItems = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return {
                ...state,
                items: updatedItems,
            };
        case TOGGLE_ITEM:
            updatedItems = state.items.map(item =>
                item.id === action.payload
                    ? { ...item, completed: !item.completed }
                    : item
            );
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return {
                ...state,
                items: updatedItems,
            };
        case UPDATE_ITEM:
            updatedItems = state.items.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return {
                ...state,
                items: updatedItems,
            };
        default:
            return state;
    }
};

export default shoppingListReducer;
