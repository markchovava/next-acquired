"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieAdminClient = () => {
    const cookieAdminName = 'ACQUIREDZW_ADMIN_COOKIE'
    const setAdminCookie = async (token) => {
        await setCookie(cookieAdminName, token, { maxAge: cookieDuration });
    }
   
    const getAdminCookie = () => {
       getCookie(cookieAdminName);
    }

    const removeAdminCookie = async () => {
        await deleteCookie(cookieAdminName);
    }

    return {
        setAdminCookie, 
        removeAdminCookie,
        getAdminCookie,
        cookieAdminName
    }
}