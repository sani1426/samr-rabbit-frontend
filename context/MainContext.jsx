"use client"

import { createContext, useContext, useState } from "react"

const MainContext = createContext()

export const MainContextProvider = ({children}) => {

    const [draweOpen, setDrawerOpen] = useState(false)
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const toggleCartDrawer = () => {
        setDrawerOpen(!draweOpen)
    }
    const toggleSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (
      <MainContext.Provider
        value={{ draweOpen, toggleCartDrawer, sideBarOpen, toggleSideBar }}
      >
        {children}
      </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext);