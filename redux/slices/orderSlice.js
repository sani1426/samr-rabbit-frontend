
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import backendApi from "@/common/BackendApi";
import axios from "axios";

// Async Thunc to fetch user Orders
export const fetchUserOrders = createAsyncThunk("orders/fetchUserOrders" , async ( _ , {rejectWithValue}) => {
    try {
        const {data} = await axios.get(backendApi.getMyOrders.url , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("userToken")}`
            }
        })
        return data.data
    } catch (error) {
       return rejectWithValue(error.data)
    }
})

// Async Thunc to fetch Order Details By Id
export const fetchOrderDetails = createAsyncThunk("orders/fetchOrderDetails" , async (orderId , {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`${backendApi.getOrderDetails.url}/${orderId}` , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("userToken")}`
            }
        })
        return data.data
    } catch (error) {
        return rejectWithValue(error.data)
    }
});

const orderSlice = createSlice({
    name : "orders" ,
    initialState : {
        orders : [] ,
        totalOrders : 0 ,
        orderDetails : null ,
        loading : false ,
        error : null
    },
    reducers: {} ,
    extraReducers : (builder) => {
        builder
          // fetch user orders
          .addCase(fetchUserOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUserOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload;
          })
          .addCase(fetchUserOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "faild to fetch orders";
          })
          // fetch order Details
          .addCase(fetchOrderDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchOrderDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.orderDetails = action.payload;
          })
          .addCase(fetchOrderDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "faild to fetch orders";
          });
    }
})

export default orderSlice.reducer;