"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieRoleClient = () => {
    const cookieRoleName = 'ACQUIREDZW_ROLE_COOKIE'

    const setRoleCookie = (token) => {
        setCookie(cookieRoleName, token, { maxAge: cookieDuration });
    }
   
    const removeRoleCookie = () => {
        deleteCookie(cookieRoleName);
    }

    const getRoleCookie = () => {
        getCookie(cookieRoleName);
    }

    return {
        setRoleCookie, 
        removeRoleCookie,
        getRoleCookie,
        cookieRoleName,
    }
}