"use client"
import { BusinessMessageInit, BusinessMessageInitialState, BusinessMessageReducer } from "@/reducers/BusinessMessageReducer";
import { BusinessInit, BusinessInitialState, BusinessReducer } from "@/reducers/BusinessReducer";
import { createContext, useContext, useReducer } from "react";


export const MainContext = createContext();


export default function MainContextProvider({ children }) {
    const [businessState, businessDispatch] = useReducer(BusinessReducer, BusinessInitialState, BusinessInit);
    const [businessMessageState, businessMessageDispatch] = useReducer(BusinessMessageReducer, BusinessMessageInitialState, BusinessMessageInit);
   
   
    return (
        <MainContext.Provider value={{  
            businessState, businessDispatch,
            businessMessageState, businessMessageDispatch,
        }}>
            {children}
        </MainContext.Provider>
      )
}

export const MainContextState = () => {
    return useContext(MainContext);
}
 
