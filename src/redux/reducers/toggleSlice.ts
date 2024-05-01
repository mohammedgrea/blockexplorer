import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavBarOpen: false,
};
export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    closeNavBar: (state) => {
      state.isNavBarOpen = false;
    },
    openAndCloseNavBar: (state) => {
      state.isNavBarOpen = !state.isNavBarOpen;
    },
  },
});

export const { closeNavBar, openAndCloseNavBar } = toggleSlice.actions;

export default toggleSlice.reducer;
