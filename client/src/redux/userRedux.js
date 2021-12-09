import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    loginError: false,
    registerError: false,
    loginErrors: null,
    registerErrors: null
  },
  reducers: {
    loginStart: (state)=>{
      state.isFetching = true
      state.loginError = false;
      state.loginErrors = null;
      // state.registerErrors = null;
      // state.registerError = false;
    },
    loginSuccess: (state, action)=>{
      state.isFetching = false;
      state.currentUser = action.payload;
      state.loginError = false;
      state.loginErrors = null;
      state.registerErrors = null;
      state.registerError = false;
    },
    loginFailure: (state, action)=>{
      state.isFetching = false;
      state.loginError = true;
      state.loginErrors = action.payload.data;
      state.registerErrors = null;
      state.registerError = false;
    },
    logout: (state)=>{
      state.currentUser = null;
      state.loginError = false;
      state.registerError = false;
      state.loginErrors = null;
      state.registerErrors = null;
    },
    registerStart: (state)=>{
      state.isFetching = true
      state.registerError = false;
      // state.registerErrors = null;
    },
    registerSuccess: (state, action)=>{
      state.isFetching = false;
      state.currentUser = action.payload;
      state.registerError = false;
      state.registerErrors = null;
      state.loginErrors = null;
      state.loginError = false;
    },
    registerFailure: (state, action)=>{
      state.isFetching = false;
      state.registerError = true;
      state.registerErrors = action.payload.data;
      state.loginErrors = null;
      state.loginError = false;
    },
  }
});

export const { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;