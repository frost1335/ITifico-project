import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
};

export const elements = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
  },
});

export const elementActions = elements.actions;
export const elementReducer = elements.reducer;
