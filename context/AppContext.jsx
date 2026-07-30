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
  // const initialState = {
  //   user: null,
  //   token: null,
  //   isAuthenticated: false,
  //   isLoggedIn: false,
  // };
  //  const [state, dispatch] = useReducer(appReducer, initialState);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    setUser(() => {
      localStorage.getItem("user") ?  localStorage.getItem("user") : null
    });
    setToken(() => {
      localStorage.getItem("token") ? localStorage.getItem("token") : null })
  }, []);

  const Register = async (name, email, password) => {
    const { data } = await axios.post(backendApi.register.url, {
      name,
      email,
      password
    });
    if (data.error) {
      toast.error(data.message);
      return false;
    } else {
      toast.success(data.message);
      setUser(JSON.stringify(data.data));
      setToken(data.token);
      return true;
    }
  };
 const LoginUser = async (email, password) => {
     const { data } = await axios.post(backendApi.login.url, {
       email,
       password,
     });
     console.log(data);
     if (data.error) {
       toast.error(data.message);
       return false;
     } else {
       toast.success(data.message);
       setUser(JSON.stringify(data.data));
       setToken(data.token);
       return true;
     }
   };
  const Logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
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
