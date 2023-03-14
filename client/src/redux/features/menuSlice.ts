import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebaseStorage from "../../firebase/firebaseStorage";

// get menu from firebaseStorage
const { getMenu } = firebaseStorage();

// fetch Menu from firebase
export const fetchMenu = createAsyncThunk("menu/fetchMenu", getMenu);

// interface of state
interface MenuState {
  menu: object[];
  loading: boolean;
  cart: object[];
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity: number;
  appID: string
}

// initial State
const initialState: MenuState = {
  menu: [],
  loading: false,
  cart: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.menu = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMenu.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, clearCart } = menuSlice.actions;

export default menuSlice.reducer;
