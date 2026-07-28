"use client"

import { createContext, useContext, useState } from "react"
import axios from "axios"
import backendApi from "@/common/BackendApi" ; 




const AppContext = createContext()


const AppContextProvider = ({children}) => {
    const [user , setUser] = useState({})
    const [token , setToken] = useState("")

const Register = async (name , email , password) => {
  
    const response = await axios.post(backendApi.register.url , {
            name , email , password
    });
    if(response.success) {
        setUser(response.data)
        setToken(response.data.token)
        localStorage.setItem("token" , response.data.token)
        localStorage.setItem("user" , user)
        return true
    }else {
        console.log(response.message)
        return false
    }
}

    return (
        <AppContext.Provider value={{user , token , Register}}>
            {children}
        </AppContext.Provider>
    )
}


const useAppContext = () => useContext(AppContext)


export { AppContextProvider, useAppContext }