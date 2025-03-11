"use client";
import {setCookie, deleteCookie, getCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieRoleClient = () => {
    const cookieRoleName = 'ACQUIREDZW_ROLE_COOKIE'

    const setRoleCookie = (token) => {
        setCookie('ACQUIREDZW_ROLE_COOKIE', token, { maxAge: cookieDuration });
    }
   
    const removeRoleCookie = () => {
        deleteCookie('ACQUIREDZW_ROLE_COOKIE');
    }

    const getRoleCookie = () => {
        getCookie('ACQUIREDZW_ROLE_COOKIE');
    }

    return {
        setRoleCookie, 
        removeRoleCookie,
        getRoleCookie,
        cookieRoleName,
    }
}