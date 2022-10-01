import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lng:
    localStorage.getItem("i18nextLng") || process.env.REACT_APP_FALLBACK_LANG,
};

export const lngDetect = createSlice({
  name: "languageDetect",
  initialState,
  reducers: {
    changeLng: (state, action) => {
      if (state.lng !== action.payload) {
        state.lng = action.payload;
      }
    },
  },
});

export const lngDetectActions = lngDetect.actions;
export const lngDetectReducer = lngDetect.reducer;
