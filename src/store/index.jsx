import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import favoriteSlice from "./favorite-slice";

const store = configureStore({
  reducer: { search: searchSlice.reducer, favorite: favoriteSlice.reducer },
});

export default store;
