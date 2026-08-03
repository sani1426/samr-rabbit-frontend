

import backendApi from '@/common/BackendApi';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getuserInfo = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null || null;
  }
  return null;
};
const setGuestId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("guestId") || `guest_${new Date().getTime()}`  || null;
     ;
  }
  return null;
};
// Retrieve user information from local storage
const userFormStorage = getuserInfo()

//  Check for an existing guest ID in local storage Or generate a new one
const initialGuestId = setGuestId();


//  Initial state
const initialState = {
    user : userFormStorage ,
    guestId : initialGuestId ,
    loading : false ,
    error : null ,
}

//  Async thunk to handle user login
export const loginUser = createAsyncThunk('auth/loginUser', async (userData , {rejectWithValue}) => {
    try {
        const response = await axios.post(backendApi.login.url , userData);
        localStorage.setItem("userInfo" , JSON.stringify(response.data.data))
        localStorage.setItem("userToken" , response.data.token)
        return response.data.data;
    } catch (error) {
      
        return rejectWithValue(error.response.data);
    }
} )

//  Async thunk to handle user registration
export const registerUser = createAsyncThunk('auth/registerUser', async (userData , {rejectWithValue}) => {
    try {
        const response = await axios.post(backendApi.register.url , userData);
        localStorage.setItem("userInfo" , JSON.stringify(response.data.data))
        localStorage.setItem("userToken" , response.data.token)
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
} )

// ? Slice
const authSlice = createSlice({
    name : 'auth' ,
    initialState ,
    reducers : {
        logout : (state) => {
            state.user = null ;
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");
            localStorage.setItem("guestId" , state.guestId);
        },
        generateNewGuestId : (state) => {
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId" , state.guestId);
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(loginUser.pending , (state) => {
                state.loading = true ;
                state.error = null ;
            })
            .addCase(loginUser.fulfilled , (state , action) => {
                state.loading = false ;
                state.error = action.payload;
            })
            .addCase(loginUser.rejected , (state , action) => {
                state.loading = false ;
                state.error = action.payload.message ;
            })
        
            .addCase(registerUser.pending , (state) => {
                state.loading = true ;
                state.error = null ;
            })
            .addCase(registerUser.fulfilled , (state , action) => {
                state.loading = false ;
                state.error = action.payload;
            })
            .addCase(registerUser.rejected , (state , action) => {
                state.loading = false ;
                state.error = action.payload.message ;
            })
        
    }
})

export const {logout , generateNewGuestId} = authSlice.actions ;
export default authSlice.reducer ;