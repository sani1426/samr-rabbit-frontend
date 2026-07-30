"use client";

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import appReducer from "./appReducer";
// import axios from "axios";
// import backendApi from "@/common/BackendApi";

const AppContext = createContext();


const AppContextProvider = ({ children }) => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoggedIn: false,
  };
     const [state, dispatch] = useReducer(appReducer, initialState);
     useEffect(
       () => {
         if (initialState.token) {
           localStorage.setItem("token", initialState.token);
         }
       },
       [initialState.token]
     );
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
