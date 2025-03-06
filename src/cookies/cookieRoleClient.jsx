"use client";
import {setCookie, deleteCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieRoleClient = () => {
    const setRoleCookie = (token) => {
        setCookie('ACQUIREDZW_ROLE_COOKIE', token, { maxAge: cookieDuration });
    }
   
    const removeRoleCookie = () => {
        deleteCookie('ACQUIREDZW_ROLE_COOKIE');
    }

    return {
        setRoleCookie, 
        removeRoleCookie,
    }
}