import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import blogSlice from "./addBlog-slice";
import navbarSlice from "./navbarSlice";
const rootReducer = combineReducers({
  auth: authSlice,
  addBlog: blogSlice,
  navbar: navbarSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
