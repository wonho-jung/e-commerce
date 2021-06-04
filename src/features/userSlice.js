import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null, basket: [], idx: null },
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
    removeFromCart: (state, action) => {
      let newBasket = state.basket.filter((item, i) => i !== action.paylod.idx);
      return { basket: newBasket };
    },
  },
});

export const { login, logout, addToCart, removeFromCart } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectAddToCart = (state) => state.user.basket;

export default userSlice.reducer;
