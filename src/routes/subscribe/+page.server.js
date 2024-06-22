import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { PRIVATE_SUPABASE_ANON_KEY } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const email = data.get("email");

    const client = createClient(
      PUBLIC_SUPABASE_URL,
      PRIVATE_SUPABASE_ANON_KEY,
      {
        auth: { persistSession: false },
      }
    );

    const res = await client.from("subscribers").insert([
      {
        email,
      },
    ]);
    console.log("res", res);

    await fetch("https://ntfy.sh/dognews", {
      method: "POST",
      body: `New subscriber: ${email}`,
    });

    return { success: true };
  },
};
