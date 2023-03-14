import { createSlice } from "@reduxjs/toolkit";

// interface of state
interface UserState {
  user: {
    displayName: string;
    email: string;
    photoURL: string;
  };
  loading: boolean;
}

// initial State
const initialState: UserState = {
  user: {
    displayName: "",
    email: "",
    photoURL: "",
  },
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    loadingUser: (state) => {
      state.loading = true;
    },
    successUser: (state) => {
      state.loading = false;
    },
    errorUser: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser, loadingUser, successUser, errorUser } =
  userSlice.actions;

export default userSlice.reducer;
