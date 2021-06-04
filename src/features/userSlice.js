import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null, basket: [] },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addToCart: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { login, logout, addToCart } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectAddToCart = (state) => state.user.basket;

export default userSlice.reducer;
