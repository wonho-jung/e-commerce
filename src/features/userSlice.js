import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    basket: [],
    idx: null,
    address: null,
    cost: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addToCart: (state, action) => {
      console.log(action);
      console.log(state);
      state.basket = [...state.basket, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log(state);
      console.log(action.payload.idx);
      let newBasket = state.basket.filter(
        (item, i) => i !== action.payload.idx
      );
      return { basket: newBasket };
    },
    address: (state, action) => {
      state.address = action.payload;
    },
    totalcost: (state, action) => {
      state.cost = action.payload;
    },
  },
});

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.basket.price + amount, 0);
export const { login, logout, addToCart, removeFromCart, address, totalcost } =
  userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectAddToCart = (state) => state.user.basket;
export const selectRemoveFromCart = (state) => state.user;
export const selectAddress = (state) => state.user.address;
export const selectTotalCost = (state) => state.user.cost;

export default userSlice.reducer;
