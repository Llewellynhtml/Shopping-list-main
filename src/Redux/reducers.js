
import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, UPDATE_ITEM, LOAD_STATE_FROM_LOCALSTORAGE } from './actions';

const saveToLocalStorage = (state) => {
  localStorage.setItem('shoppingListState', JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const savedState = localStorage.getItem('shoppingListState');
  return savedState ? JSON.parse(savedState) : { items: [] };
};

const initialState = loadFromLocalStorage();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newStateAddItem = { ...state, items: [...state.items, action.payload] };
      saveToLocalStorage(newStateAddItem);
      return newStateAddItem;

    case DELETE_ITEM:
      const newStateDeleteItem = { ...state, items: state.items.filter(item => item.id !== action.payload) };
      saveToLocalStorage(newStateDeleteItem);
      return newStateDeleteItem;

    case TOGGLE_ITEM:
      const newStateToggleItem = {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload ? { ...item, completed: !item.completed } : item
        ),
      };
      saveToLocalStorage(newStateToggleItem);
      return newStateToggleItem;

    case UPDATE_ITEM:
      const newStateUpdateItem = {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id ? action.payload : item
        ),
      };
      saveToLocalStorage(newStateUpdateItem);
      return newStateUpdateItem;

    case LOAD_STATE_FROM_LOCALSTORAGE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
