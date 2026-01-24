import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"; // Importación por defecto corregida

const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});

export default store;