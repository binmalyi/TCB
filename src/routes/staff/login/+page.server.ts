import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types.js";

export const actions = {
    default: async (event) => {
        const data = Object.fromEntries(await event.request.formData()) as Record<any, string>;
        return redirect(302, `/staff/${data.username}`)
    }
} satisfies Actions