"use server";
import { baseURL } from "@/apis/BaseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function loginAction(data) {
    const res = await fetch(`${baseURL}login`, {
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }); 
    revalidatePath('/');
    return await res.json();
}

export async function _logoutAction() {
    const cookieStore = cookies();
    const authToken = cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/logout`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/login');
    return await res.json();
}

export async function registerAction(data) {
    const res = await fetch(`${baseURL}register`, {
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/login');
    return await res.json();
}


export async function _profileAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/profile`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  });
  return await res.json();
}

export async function _profileUpdateAction(data) {
  const cookieStore = cookies();
  const authToken = cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/profile`, {
    'method': 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  });
  return await res.json();
}