
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import adminApi from "@/common/AdminApi";

// Async Thunc to fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUsers" , async () => {
    const {data} = await axios.get(adminApi.getAllUsers.url , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return data.data
})