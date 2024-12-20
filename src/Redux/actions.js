export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const LOAD_STATE_FROM_LOCALSTORAGE = "LOAD_STATE_FROM_LOCALSTORAGE";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});

export const toggleItem = (itemId) => ({
  type: TOGGLE_ITEM,
  payload: itemId,
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});

export const loadStateFromLocalStorage = (state) => ({
  type: LOAD_STATE_FROM_LOCALSTORAGE,
  payload: state,
});
