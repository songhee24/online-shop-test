import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsByType } from "../../api/adminApi";
import { toast } from "react-toastify";

const getProductsByCategory = createAsyncThunk(
  "admin/getProductsByCategory",
  async (category) => {
    try {
      const response = await getProductsByType(category);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return error.message;
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    products: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.isLoading = false;
      }),
});

export { adminSlice, getProductsByCategory };
