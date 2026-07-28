"use client";

import { createContext, useContext, useReducer, useState } from "react";
import appReducer from "./appReducer";
// import axios from "axios";
// import backendApi from "@/common/BackendApi";

const AppContext = createContext();

const initialState = {
  user: {},
  token: "",
  isAuthenticated : false , 
};
const AppContextProvider = ({ children }) => {
     const [state, dispatch] = useReducer(appReducer, initialState);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const Register = async (name, email, password) => {
 dispatch({ type: "REGISTER_USER", payload: name , email , password });
    // const response = await axios.post(backendApi.register.url, {
    //   name,
    //   email,
    //   password,
    // });
    // if (response.success) {
    //   localStorage.setItem("token", response.data.token);
    //   localStorage.setItem("user", JSON.stringify(response.data));
    //   setUser(response.data);
    //   setToken(response.data.token);
    //   console.log(user , token);
    //   return true;
    // } else {
    //   console.log(response.message);
    //   return false;
    // }
  };

  return (
    <AppContext.Provider value={{ user, token, Register , ...state }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
