import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // CORRECCIÓN: Importar createSlice
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

export const addNewProduct = createAsyncThunk(
  "/product/addNewProduct",
  async (FormData) => {
    const result = await axios.post(
      "http://localhost:5000/api/admin/products/add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/product/fetchAllProducts",
  async () => {
    const result = await axios.get(
      "http://localhost:5000/api/admin/products/get"
    );

    return result?.data;
  }
);

export const editProduct = createAsyncThunk(
  "/product/editProduct",
  async ({ id, FormData }) => {
    const result = await axios.put(
      `http://localhost:5000/api/admin/products/edit/${id}`,
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async (id) => {
    const result = await axios.delete(
      // OJO AQUÍ: En tu código decía /add/${id}, lo corregí a /delete/${id}
      `http://localhost:5000/api/admin/products/delete/${id}` 
    );

    return result?.data;
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts", // Recomendado: camelCase
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        // Dependiendo de cómo responda tu API, quizás necesites action.payload.data
        state.productList = action.payload.data; 
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default AdminProductsSlice.reducer; // ¡No olvides exportar el reducer!