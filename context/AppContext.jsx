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
  const getUserDetails = async (token) => {
    const {data} = await axios.get(backendApi.profile.url , {
      headers:{
        Authorization : `Bearer ${token}`
      }
    })
    if (data.success) {
      setUser(data?.data)
      console.log(user);
    } else {
      console.log(`error ${data.message}`);
    }
  }
  useEffect(() => {
    setToken(() => {
      localStorage.getItem("token") ? localStorage.getItem("token") : null;
    });
  }, []);

  const Logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      getUserDetails()
    }
  }, [token]);
  return (
    <AppContext.Provider value={{ user,setUser , token, setToken ,Logout }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
