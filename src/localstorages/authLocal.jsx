"use client";


export const localAuthName = 'ACQUIREDZW_AUTH_LOCAL';
export const localAuth = () => {
    
    const setAuthLocal = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem(localAuthName, token);
        }
    }
    const getAuthLocal = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem(localAuthName);
            return token;
        }
    }
    const removeAuthLocal = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem(localAuthName);
        }
    }

    return {
        setAuthLocal, 
        getAuthLocal,
        removeAuthLocal
    }

  }