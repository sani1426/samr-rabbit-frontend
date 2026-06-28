"use client"

import { createContext, useContext, useState } from "react"

const MainContext = createContext()

export const MainContextProvider = ({children}) => {
    
    const [draweOpen, setDrawerOpen] = useState(false)
    const toggleCartDrawer = () => {
        setDrawerOpen(!draweOpen)
    }
    return(
        <MainContext.Provider value={{ draweOpen, toggleCartDrawer }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = useContext(MainContext)