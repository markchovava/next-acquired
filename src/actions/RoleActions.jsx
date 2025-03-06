"use server";
import { baseURL } from "@/apis/BaseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function _roleListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}


export async function _rolePaginateAction(url) {
  const cookieStore = await cookies();
  const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(url, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  });
  return await res.json();
}


export async function _roleListAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}


export async function _roleSearchAction(search) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}


export async function _roleViewAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}


export async function _roleStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/role');
    return await res.json();
}


export async function _roleUpdateAction(data, id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role/${id}`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/role/${id}`);
    return await res.json();
}


export async function _roleDeleteAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/role/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/role`);
    return await res.json();
}