import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    signin:false
}
const navbarSlice = createSlice({
    name:"navbar",
    initialState: initialState,
    reducers: {
        openSignin: (state, action)=>{
            state.signin = action.payload.signin
        }
    }
})
export const {openSignin}= navbarSlice.actions;
export default navbarSlice.reducer;