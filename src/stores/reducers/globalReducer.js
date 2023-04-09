import { createSlice } from "@reduxjs/toolkit";

const _scale = typeof window !== "undefined" && window.localStorage.getItem("scale");
const _hideLocationModal = typeof window !== "undefined" && window.localStorage.getItem("hideLocationModal");

const globalReducer = createSlice({
  name: "authReducer",
  initialState: {
    openSidebar: false,
    scale: _scale ? _scale : "",
    hideLocationModal: _hideLocationModal === "true" ? true : false,
    userGeoLocation: {},
    emailVerifyModal: false,
    openLastRoute: "",
  },
  reducers: {
    setOpenSidebar: (state, action) => {
      state.openSidebar = action.payload;
    },
    setScale: (state, action) => {
      state.scale = action.payload;
    },
    setHideLocationModal: (state, action) => {
      state.hideLocationModal = action.payload;
    },
    setUserGeoLocation: (state, action) => {
      state.userGeoLocation = action.payload;
    },
    setEmailVerifyModal: (state, action) => {
      state.emailVerifyModal = action.payload;
    },
    setOpenLastRoute: (state, action) => {
      state.openLastRoute = action.payload;
    },
  },
});
export const {
  setOpenSidebar,
  setScale,
  setHideLocationModal,
  setUserGeoLocation,
  setEmailVerifyModal,
  setOpenLastRoute,
} = globalReducer.actions;
export default globalReducer.reducer;
