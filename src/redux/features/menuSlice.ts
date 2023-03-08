import { createSlice } from "@reduxjs/toolkit";

// interface of state
interface menuState {
  menu: object[];
  loading: boolean;
  cart: object[];
}

// initial State
const initialState: menuState = {
  menu: [],
  loading: false,
  cart: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = menuSlice.actions;

export default menuSlice.reducer;
