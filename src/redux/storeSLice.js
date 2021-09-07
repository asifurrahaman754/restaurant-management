import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const storeSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setsearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setsearchValue } = storeSLice.actions;

export default storeSLice.reducer;
