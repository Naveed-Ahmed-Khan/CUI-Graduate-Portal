import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../API/auth";

const user = JSON.parse(localStorage.getItem("user"));

export const Login = createAsyncThunk(
  "auth/Login",
  async ({ userEmail, userPassword }, thunkAPI) => {
    console.log(userEmail, userPassword);
    try {
      var res = await authService.login(userEmail, userPassword);
      console.log("thunk" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState /* : { isLoggedIn: false, user: null } */,
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      console.log("full " + action.payload.user);
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [Login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
export default authSlice.reducer;
