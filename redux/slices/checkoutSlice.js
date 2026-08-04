import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import backendApi from "@/common/BackendApi";

// Async thunc to create a checkout session
export const createCheckout = createAsyncThunk(
  "checkout/createCheckout",
  async (checkoutData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        backendApi.createCheckout.url,
        checkoutData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return data.data;
    } catch (error) {
      rejectWithValue(error.data);
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCheckout.pending, (state) => {
      state.loading = true ;
      state.error = null
    })
    .addCase(createCheckout.fulfilled , (state , action) => {
        state.loading = false ;
        state.checkout = action.payload
    })
    .addCase(createCheckout , (state , action) => {
        state.loading = false ;
        state.error = action.payload?.message || "faild to create checkout"
    })
  },
});

export default checkoutSlice.reducer