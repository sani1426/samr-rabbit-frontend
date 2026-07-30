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
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    setUser(() => {
      localStorage.getItem("user");
    });
    setToken(() => localStorage.getItem("token"));
  }, []);

  const Register = async (name, email, password) => {
    const { data } = await axios.post(backendApi.register.url, {
      name,
      email,
      password,
    });
    if (data.error) {
      toast.error(data.message);
      return false;
    } else {
      toast.success(data.message);
      setUser(data.data);
      setToken(data.token);
      console.log(user , token);
      return true;
    }
  };
  const LoginUser = async (email, password) => {
    const { data } = await axios.post(backendApi.login.url, {
      email,
      password,
    });
    if (data.error) {
      toast.error(data.message);
      return false;
    } else {
      toast.success(data.message);
      setUser(data.data);
      setToken(data.token);
      return true;
    }
  };
  useEffect(() => {
    localStorage.setItem("token" , token)
    localStorage.setItem("user" , user)
  } , [token])
  return (
    <AppContext.Provider value={{ user, token, Register, LoginUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
