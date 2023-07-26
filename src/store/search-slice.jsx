import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchItems: [],
    searchInput: "",
  },
  reducers: {
    storeSearchResult(state, action) {
      state.searchItems = action.payload;
    },
    getSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
