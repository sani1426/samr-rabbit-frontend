"use client";

import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import appReducer from "./appReducer";
import axios from "axios";
import backendApi from "@/common/BackendApi";
import { toast } from "sonner";

const AppContext = createContext();


const AppContextProvider = ({ children }) => {
  // const initialState = {
  //   user: null,
  //   token: null,
  //   isAuthenticated: false,
  //   isLoggedIn: false,
  // };
    //  const [state, dispatch] = useReducer(appReducer, initialState);
  const [user, setUser] = useState(()=>{
    localStorage.getItem("userInfo") || {}
  });
  const [token, setToken] = useState(() => {
    localStorage.getItem("token") || ""
  });
useEffect(() => {
  setUser(() =>{
    localStorage.getItem("user")
  })
  setToken(()=>localStorage.getItem("token"))
},[])
  // useEffect(() => {
  //   localStorage.setItem("token" , token)
  //   localStorage.setItem("user" , user)
  // } , [token])
  const Register = async (name, email, password) => {
    const {data} = await axios.post(backendApi.register.url , {
      name , email , password
    })
    if (data.error) {
      toast.error(data.message)
      return false
    } else {
      toast.success(data.message)
      setUser(data.data)
      setToken(data.token)
      localStorage.setItem("user" , await JSON.stringify(data.data))
      localStorage.setItem("token" , await data.token)
       return true;
    }
   
  };
  const LoginUser = async (email, password) => {
    const {data} = await axios.post(backendApi.login.url , {
      email , password
    })
  if (data.error) {
    toast.error(data.message);
    return false;
  } else {
    toast.success(data.message);
    setUser(data.data);
    setToken(data.token);
    localStorage.setItem("user", await JSON.stringify(data.data));
    localStorage.setItem("token", await data.token);
    return true;
  }
  }

  return (
    <AppContext.Provider value={{ user, token, Register, LoginUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
