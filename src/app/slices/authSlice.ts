import { createSlice } from "@reduxjs/toolkit";
import type { IAuthState } from "../../interfaces/IAuthState";

const initialState: IAuthState = {
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action) => {
      state.userData = action.payload;
    },
    userLogout: (state) => {
      state.userData = null;
    },
  },
});

export const { setUserCredential, userLogout } = authSlice.actions;

export default authSlice.reducer;
