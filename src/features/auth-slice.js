import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state = initialState;
    },
  },
});

export const  {login, logout} = authSlice.actions;
export default authSlice.reducer;


