import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
// import categoryService from "./services/categoryService";
// import languageService from "./services/languageService";
// import listingService from "./services/listingService";
// import reportService from "./services/reportService";
// import customerService from "./services/customerService";
// import communitiesService from "./services/communitiesService";

const Store = configureStore({
  reducer: {
    // [categoryService.reducerPath]: categoryService.reducer,
    // [languageService.reducerPath]: languageService.reducer,
    // [listingService.reducerPath]: listingService.reducer,
    // [reportService.reducerPath]: reportService.reducer,
    // [customerService.reducerPath]: customerService.reducer,
    // [communitiesService.reducerPath]: communitiesService.reducer,
    // authReducer: authReducer,
    globalReducer: globalReducer,
  },
});

export default Store;
