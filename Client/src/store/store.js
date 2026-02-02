import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"; // Importación por defecto corregida
import AdminProductsSlice from "./admin/Products-Slice";
import AdminProducts from "@/pages/admin-view/products";


const store = configureStore({
  reducer: {
    auth: authReducer, 
    AdminProducts : AdminProductsSlice ,
  },
});

export default store;