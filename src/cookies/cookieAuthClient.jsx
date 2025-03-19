"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieAuthClient = () => {
    const cookieAuthName = 'ACQUIREDZW_AUTH_COOKIE'
    const setAuthCookie = async (token) => {
        await setCookie(cookieAuthName, token, { maxAge: cookieDuration });
    }
   
    const getAuthCookie = () => {
       getCookie(cookieAuthName);
    }

    const removeAuthCookie = async () => {
        await deleteCookie(cookieAuthName);
    }

    return {
        setAuthCookie, 
        removeAuthCookie,
        getAuthCookie,
        cookieAuthName
    }
}