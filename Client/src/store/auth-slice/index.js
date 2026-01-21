import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

// 👇 ERROR WAS HERE: You must include the string name FIRST
export const registerUser = createAsyncThunk(
  "/auth/register", // <--- 1. THIS STRING IS REQUIRED
  async (formData) => {
    // <--- 2. Then comes the async function
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;