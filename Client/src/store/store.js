import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"; // Check that this matches your file name

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;