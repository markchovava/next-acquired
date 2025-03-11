"use server";
import { baseURL } from "@/apis/BaseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function _partnerListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _partnerPaginateAction(url) {
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

export async function _partnerListAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _partnerSearchAction(search) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _partnerViewAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _partnerStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/partner');
    return await res.json();
}

export async function _partnerUpdateAction(data, id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/partner/${id}`);
    return await res.json();
}

export async function _partnerDeleteAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/partner/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/partner`);
    return await res.json();
}