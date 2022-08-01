import { createSlice } from "@reduxjs/toolkit";
export const authenticationSlide = createSlice({
  name: "authentication",
  initialState: {
    token: {},
  },
  reducers: {
    login_ad: (state, action) => {
      state.token = action.payload;
    },
    logout_ad: (state) => {
      state.token = {};
    },
  },
});
export const { login_ad, logout_ad } = authenticationSlide.actions;
export default authenticationSlide.reducer;
