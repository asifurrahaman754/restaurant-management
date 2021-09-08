import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  cartItem: [],
};

export const storeSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setsearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setcartItem: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setsearchValue, setcartItem } = storeSLice.actions;

export default storeSLice.reducer;
