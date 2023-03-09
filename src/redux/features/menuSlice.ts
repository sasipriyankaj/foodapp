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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.menu = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = menuSlice.actions;

export default menuSlice.reducer;
