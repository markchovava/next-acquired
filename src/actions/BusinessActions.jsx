"use server";
import { baseURL } from "@/apis/BaseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export async function businessListStatusActiveAction() {
  const res = await fetch(`${baseURL}business-status-active`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessListAction() {
  const res = await fetch(`${baseURL}business`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessStatusListAction(status) {
  const res = await fetch(`${baseURL}business-status/${status}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessSortListAction(sort) {
  const res = await fetch(`${baseURL}business-sort/${sort}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessPaginateAction(url) {
const res = await fetch(url, {
  'method': 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
return await res.json();
}

export async function businessListAllAction() {
  const res = await fetch(`${baseURL}business-all`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessSearchCityCategoryAction(city_id, category_id, search) {
  const url = `${baseURL}business-search-city-category?city_id=${city_id}&category_id=${category_id}&search=${search}`
  console.log('url', url)
  const res = await fetch(url, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessSearchAction(search) {
  const res = await fetch(`${baseURL}business-search/${search}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

export async function businessViewAction(id) {
  const res = await fetch(`${baseURL}business/${id}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}



/* --------------------------------------------- */

export async function _businessListByUserAction() {
  const cookieStore = await cookies();
  const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/business-user`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`,
    }
  });
  return await res.json();
}

export async function _businessByStatusAction(status) {
  const cookieStore = await cookies();
  const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/business-status/${status}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`,
    }
  });
  return await res.json();
}

export async function _businessSearchByUserAction(search) {
  const cookieStore = await cookies();
  const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/business-user-search/${search}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`,
    }
  });
  return await res.json();
}

export async function _businessListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _businessPaginateAction(url) {
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

export async function _businessListAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _businessSearchAction(search) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _businessViewAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _businessStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/');
    revalidatePath('/admin/business');
    revalidatePath('/client/business');
    return await res.json();
}

export async function _businessUpdateAction(data, id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/');
    revalidatePath('/admin/business');
    revalidatePath('/client/business');
    revalidatePath(`/admin/business/${id}`);
    return await res.json();
}

export async function _businessDeleteAction(id) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/');
    revalidatePath('/admin/business');
    revalidatePath('/client/business');
    revalidatePath(`/admin/business`);
    return await res.json();
}