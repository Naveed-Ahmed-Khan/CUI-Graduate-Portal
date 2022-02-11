import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../API/auth";

const user = JSON.parse(localStorage.getItem("user"));

export const Login = createAsyncThunk(
  "auth/login",
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

const intialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  intialState,
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.data;
    },
    [Login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const reducer = { authSlice };
export default reducer;
