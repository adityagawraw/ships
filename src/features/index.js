import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import blogSlice from "./addBlog-slice"
const rootReducer = combineReducers({
   auth: authSlice,
   addBlog: blogSlice
})

const store = configureStore({
   reducer : rootReducer
})
export default store;