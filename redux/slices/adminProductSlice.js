
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import adminApi from "@/common/AdminApi";


// async thunc to fetch admin products
export const fetchAdminProducts = createAsyncThunk("adminProducts/fetchProducts" , async () => {
    const {data} = await axios.get(adminApi.getAllProducts.url , {
        headers :{
            Authorization : `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return data
})

// async func to create new product
export const createProduct = createAsyncThunk("adminProducts/createProduct" , async (productData) => {
    const {data} = await axios.post(adminApi.createProduct.url , productData , {
         headers :{
            Authorization : `Bearer ${localStorage.getItem("userToken")}`
         }
    })
    return data
})

//  update exiting Product
export const updateProduct = createAsyncThunk("adminProducts/updateProduct" , async ({id , productData}) => {
    const { data } = await axios.put(
      `${adminApi.updateProduct.url}/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return data
})

// delete a product
export const deleteProduct = createAsyncThunk("adminProducts/deleteProduct" , async (id) => {
    const { data } = await axios.delete(`${adminApi.deleteProduct.url}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return id
})

const adminProductsSlice = createSlice({
    name : "adminProducts" , 
    initialState : {
        products : [] ,
        loading : false ,
        error : null
    },
    reducers : {} ,
    extraReducers : (builder) => {
        builder
        .addCase(fetchAdminProducts.pending , (state) => {
            state.loading = true ;
        })
        .addCase(fetchAdminProducts.fulfilled , (state , action) => {
            state.loading = false ;
            state.products = action.payload
        })
        .addCase(fetchAdminProducts.rejected , (state , action) => {
            state.loading = true ;
            state.error = action.error.message
        })

        .addCase(createProduct.fulfilled , (state , action) => {
            state.loading = false;
            state.products.push(action.payload)
        })

        .addCase(updateProduct.fulfilled , (state , action) => {
            const index = state.products.findIndex((product) => product._id === action.payload._id)
            if (index !== -1) {
              state.products[index] = action.payload;
            }
        })

        .addCase(deleteProduct.fulfilled , (state , action) => {
            state.products = state.products.filter((product) => product._id !== action.payload)
        })
        
    }
})

export default adminProductsSlice.reducer