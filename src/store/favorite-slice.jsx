import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceFavItems(state, action) {
      state.items = action.payload.items;
    },
    addItemToFav(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (!existingItem) {
        state.items.push(newItem);
      }
    },
    removeItemFromFav(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
