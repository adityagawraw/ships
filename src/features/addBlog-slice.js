import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    title: "",
    category: "",
    summary: "",
    content: "",
  }
 const blogSlice = createSlice({
    name:"blog",
    initialState: "",
    reducers: {
        changeBlogReducer: (state, action )=> {
            state = action.payload
        },
        resetBlogReducer: (state, action)=>{
            state= initialState;
        }
    }
 })
 export const {changeBlogReducer, resetBlogReducer} = blogSlice.actions;
 export default blogSlice.reducer