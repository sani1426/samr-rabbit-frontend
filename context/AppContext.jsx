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
    <AppContext.Provider value={{ user,setUser , token, setToken ,Logout }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
