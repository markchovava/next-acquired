import { baseURL } from "@/apis/BaseURL";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";




export async function _businessCategoryStoreAction(data) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('ACQUIREDZW_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/business`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath(`/admin/business/${id}`);
    return await res.json();
}