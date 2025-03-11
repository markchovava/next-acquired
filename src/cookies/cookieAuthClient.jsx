"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieAuthClient = () => {
    const cookieAuthName = 'ACQUIREDZW_AUTH_COOKIE'
    const setAuthCookie = async (token) => {
        await setCookie('ACQUIREDZW_AUTH_COOKIE', token, { maxAge: cookieDuration });
    }
   
    const getAuthCookie = () => {
       getCookie('ACQUIREDZW_AUTH_COOKIE');
    }

    const removeAuthCookie = async () => {
        await deleteCookie('ACQUIREDZW_AUTH_COOKIE');
    }

    return {
        setAuthCookie, 
        removeAuthCookie,
        getAuthCookie,
        cookieAuthName
    }
}