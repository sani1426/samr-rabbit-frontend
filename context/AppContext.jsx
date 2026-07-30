"use client";

import { createContext, useContext, useReducer, useState } from "react";
import appReducer from "./appReducer";
// import axios from "axios";
// import backendApi from "@/common/BackendApi";

const AppContext = createContext();

const initialState = {
  user: () => {
    window.localStorage.getItem("userInfo") ? JSON.parse(window.localStorage.getItem("userInfo")) : {} 
  },
  token: window.localStorage.getItem("token") || "" ,
  isAuthenticated : window.localStorage.getItem("token") ? true : false , 
  isLoggedIn : window.localStorage.getItem("token") ? true : false , 
};
const AppContextProvider = ({ children }) => {
     const [state, dispatch] = useReducer(appReducer, initialState);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const Register = (name, email, password) => {
 dispatch({ type: "REGISTER_USER", payload: {name : name , email : email , password : password} });

  };
  const LoginUser = (email, password) => {
    dispatch({type : "LOGIN_USER" , payload : {email , password}})
  }

  return (
    <AppContext.Provider value={{ user, token, Register, LoginUser , ...state }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
