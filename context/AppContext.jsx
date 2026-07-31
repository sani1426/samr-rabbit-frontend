"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// import appReducer from "./appReducer";
import axios from "axios";
import backendApi from "@/common/BackendApi";
import { toast } from "sonner";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(() => {
      localStorage.getItem("token") ? localStorage.getItem("token") : null;
    });
  }, []);

  const Register = async (name, email, password) => {
    try {
      const { data } = await axios.post(backendApi.register.url, {
        name,
        email,
        password,
      });
      if (data.success) {
        toast.success(data.message);
        setToken(data.token);
        return true;
      }
    } catch (error) {
         toast.error(error);
         return false;
    }
    
  };
  const LoginUser = async (email, password) => {
    const { data } = await axios.post(backendApi.login.url, {
      email,
      password,
    });

    if (data.success) {
      toast.success(data.message);
      setToken(data.token);
      return true;
    }
    if (data.error) {
      toast.error(data.message);
      return false;
    }
  };
  const Logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);
  return (
    <AppContext.Provider value={{ user, token, Register, LoginUser, Logout }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
