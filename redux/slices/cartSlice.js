
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios, { create } from "axios"
import backendApi from "@/common/BackendApi";

// Helper Func to Load cart from localStorage
const loadCartFromLocalStorage = () => {
     if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : {products : []}
     }
}

// Helper Func To save Cart to localStorage
const saveCartToStorage = (cart) => {
     if (typeof window !== "undefined") {
        localStorage.setItem("cart" , JSON.stringify(cart))
     }
}

// fetch Cart for a User Or Guest
export const fetchCart = createAsyncThunk("cart/fetchCart" , async ({userId , guestId} , {rejectWithValue}) => {
    try {
         const { data } = await axios.get(backendApi.getCart.url , {
            params : {userId , guestId}
         });
         return data.data
    } catch (error) {
        console.error(error)
        return rejectWithValue(error.data)
    }
   
})

//  Add an Item to Cart for a User Or Guest
export const addToCart = createAsyncThunk("cart/addToCart" , async ({productId , quantity , size , color , guestId , userId} , {rejectWithValue}) => {
    try {
        const {data} = await axios.post(backendApi.addToCart.url , {
            productId ,quantity , size , color , guestId , userId
        })
        return data.data
    } catch (error) {
        console.error(error)
        rejectWithValue(error.data)
    }
})

//  Update the Quantity of an item in the Cart
export const updateCartItemQuantity = createAsyncThunk("cart/updateCartItemQuantity" , async ({productId , quantity , size , color , guestId , userId} , {rejectWithValue}) => {
    try {
        const {data} = await axios.put(backendApi.updateQuantity.url , {
            productId , quantity , size , color , userId , guestId
        })
        return data.data
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

//  Remove an item from Cart
export const removeFromCart = createAsyncThunk("cart/removeFromCart" , async ({productId , guestId , userId , size , color} , {rejectWithValue}) => {
    try {
        const {data} = await axios.delete(backendApi.deleteFromCart.url , {
            productId , userId , guestId , size , color
        })
        return data.data
    } catch (error) {
       return rejectWithValue(error.data)
    }
})

// Merge guest cart into user cart
export const mergeCart = createAsyncThunk("cart/mergeCart" , async ({guestId , user} , {rejectWithValue}) => {
    try {
        const { data } = await axios({
          method: POST,
          url: backendApi.mergeCart.url,
          data: { guestId, user },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        return data.data
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage() ,
    loading : false ,
    error : null
  },
  reducers : {
    clearCart : (state) => {
        state.cart = {products : []}
        if (typeof window !== "undefined") {
            localStorage.removeItem("cart")
        }
    }
  },
  extraReducers : (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Faild To Fetch Cart";
      })

      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Faild To Add To Cart";
      })

      .addCase(updateCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Faild To Update Item Quantity";
      })

      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Faild To Remove From Cart";
      })

      .addCase(mergeCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mergeCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(mergeCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Faild To Merge Cart";
      });
  }
});

export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer