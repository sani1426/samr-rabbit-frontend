
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

// Add the create user action
export const addUser = createAsyncThunk("admin/addUser" , async (userData , {rejectWithValue}) => {
    try {
        const { data } = await axios.post(
          adminApi.createNewUsers.url,
          userData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        return data.data
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

//  update user info
export const updateUser = createAsyncThunk("admin/updateUser" , async ({id , name , email , role}) => {
    const { data } = await axios.put(
      `${adminApi.updateUserInfo.url}/${id}`,
      {
        name,
        email,
        role,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return data.data
})

// delete a user
export const deleteUser = createAsyncThunk("admin/deleteUser" , async (id) => {
    const { data } = await axios.delete(`${adminApi.deleteUser.url}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return id
})

const adminSlice = createSlice({
    name : "admin" ,
    initialState : {
        users : [] ,
        loading : false ,
        error : null
    },
    reducers : {} ,
    extraReducers : (builder) => {
        builder
          // fetch users
          .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "faild to fetc users";
          })
        //   add user
          .addCase(addUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload.user)
          })
          .addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || "faild to fetc users";
          })
        //   update user
          .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            const updatedUser = action.payload;
            const userIndex = state.users.findIndex(user => {
                return user._id === updateUser._id
            }) 
            if (userIndex !== -1) {
                state.users[userIndex] = updatedUser
            }
          })
        //   delete user
        .addCase(deleteUser.fulfilled , (state , action) => {
            state.users = state.users.filter((user) => user._id !== action.payload)
        })
         
    }
})

export default adminSlice.reducer