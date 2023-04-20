import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../_config/Firebase/firebase";
const token = localStorage.getItem("my-ring");

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    token: token ? token : null,
    userInfo: null,
    userObject: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserObject: (state, action) => {
      state.userObject = action.payload;
    },
    logout: (state) => {
      auth.signOut();
      localStorage.removeItem("my-ring");
      state.token = null;
      state.userInfo = null;
      state.userObject = null;
    },
  },
});
export const { setToken, setUserInfo, setUserObject, logout } =
  authReducer.actions;
export default authReducer.reducer;
