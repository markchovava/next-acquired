"use client"
import { BusinessInit, BusinessInitialState, BusinessReducer } from "@/reducers/BusinessReducer";
import { CategoryInit, CategoryInitialState, CategoryReducer } from "@/reducers/CategoryReducer";
import { CityInit, CityInitialState, CityReducer } from "@/reducers/CityReducer";
import { FaqInit, FaqInitialState, FaqReducer } from "@/reducers/FaqReducer";
import { MembershipInit, MembershipInitialState, MembershipReducer } from "@/reducers/MembershipReducer";
import { ProvinceInit, ProvinceInitialState, ProvinceReducer } from "@/reducers/ProvinceReducer";
import { RoleInit, RoleInitialState, RoleReducer } from "@/reducers/RoleReducer";
import { UserInit, UserInitialState, UserReducer } from "@/reducers/UserReducer";
import { createContext, useContext, useReducer } from "react";


export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
    const [categoryState, categoryDispatch] = useReducer(CategoryReducer, CategoryInitialState, CategoryInit);
    const [cityState, cityDispatch] = useReducer(CityReducer, CityInitialState, CityInit);
    const [faqState, faqDispatch] = useReducer(FaqReducer, FaqInitialState, FaqInit);
    const [membershipState, membershipDispatch] = useReducer(MembershipReducer, MembershipInitialState, MembershipInit);
    const [provinceState, provinceDispatch] = useReducer(ProvinceReducer, ProvinceInitialState, ProvinceInit);
    const [roleState, roleDispatch] = useReducer(RoleReducer, RoleInitialState, RoleInit);
    const [userState, userDispatch] = useReducer(UserReducer, UserInitialState, UserInit);
    const [businessState, businessDispatch] = useReducer(BusinessReducer, BusinessInitialState, BusinessInit);
   
    return (
        <AdminContext.Provider value={{  
            categoryState, categoryDispatch,
            cityState, cityDispatch,
            faqState, faqDispatch,
            roleState, roleDispatch,
            membershipState, membershipDispatch,
            provinceState, provinceDispatch,
            userState, userDispatch,
            businessState, businessDispatch,
        }}>
            {children}
        </AdminContext.Provider>
      )
}

export const AdminContextState = () => {
    return useContext(AdminContext);
}
 
