import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrderApi, getOrdersApi } from "./orderApi";

// Async thunk
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, thunkApi) => {
    try {
      const res = await createOrderApi(orderData);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Order failed",
      );
    }
  },
);

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (_, thunkApi) => {
    try {
      const res = await getOrdersApi();
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Order failed",
      );
    }
  },
);

// Initial state
const initialState = {
  loading: false,
  order: null,
  orders: [],
  error: null,
  success: false,
};

//  Slice
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrderState: (state) => {
      state.loading = false;
      state.order = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //  Pending
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      // Success
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.success = true;
      })

      // Error
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
        state.success = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrderState } = orderSlice.actions;
export default orderSlice.reducer;
