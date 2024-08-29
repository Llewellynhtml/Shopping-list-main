
import { createStore } from 'redux';
import shoppingListReducer from './reducers';

const store = createStore(
    shoppingListReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
