import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { PRIVATE_SUPABASE_ANON_KEY } from "$env/static/private";

const BASE_URL = "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev";

// /** @type { import('./$types').PageLoad} */
export async function load({ params: { slug } }) {
  const allPages = [
    [], // placeholder allows us to use slug as index
    [
      `${BASE_URL}/dn-01/dn-p-01-01.jpg`,
      `${BASE_URL}/dn-01/dn-p-01-02.jpg`,
      `${BASE_URL}/dn-01/dn-p-01-03.jpg`,
    ],
    [
      `${BASE_URL}/dn-02/dn-p-02-01.jpg`,
      `${BASE_URL}/dn-02/dn-p-02-02.jpg`,
      `${BASE_URL}/dn-02/dn-p-02-03.jpg`,
      `${BASE_URL}/dn-02/dn-p-02-04.jpg`,
      `${BASE_URL}/dn-02/dn-p-02-05.jpg`,
    ],
    [
      `${BASE_URL}/dn-03/dn-p-03-01.jpg`,
      `${BASE_URL}/dn-03/dn-p-03-02.jpg`,
      `${BASE_URL}/dn-03/dn-p-03-03.jpg`,
      `${BASE_URL}/dn-03/dn-p-03-04.jpg`,
    ],
    [
      `${BASE_URL}/dn-04/dn-p-04-01.jpg`,
      `${BASE_URL}/dn-04/dn-p-04-02.jpg`,
      `${BASE_URL}/dn-04/dn-p-04-03.jpg`,
    ],
    [`${BASE_URL}/dn-05/dn-p-05-01.JPG`, `${BASE_URL}/dn-05/dn-p-05-02.JPG`],
    [`${BASE_URL}/dn-06/dn-p-06-01.JPG`, `${BASE_URL}/dn-06/dn-p-06-02.JPG`],
    [`${BASE_URL}/dn-07/dn-p-07-01.JPG`, `${BASE_URL}/dn-07/dn-p-07-02.JPG`],
    [`${BASE_URL}/dn-08/dn-p-08-01.JPG`, `${BASE_URL}/dn-08/dn-p-08-02.JPG`],
    [`${BASE_URL}/dn-09/dn-p-09-01.JPG`, `${BASE_URL}/dn-09/dn-p-09-02.JPG`],
    [
      `${BASE_URL}/dn-10/dn-p-10-01.JPG`,
      `${BASE_URL}/dn-10/dn-p-10-02.JPG`,
      `${BASE_URL}/dn-10/dn-p-10-03.JPG`,
      `${BASE_URL}/dn-10/dn-p-10-04.JPG`,
    ],
    [
      `${BASE_URL}/dn-11/dn-p-11-01.JPG`,
      `${BASE_URL}/dn-11/dn-p-11-02.JPG`,
      `${BASE_URL}/dn-11/dn-p-11-03.JPG`,
    ],
  ];

  const issueNumber = Number(slug);
  const pages = allPages[issueNumber];

  const client = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
  const { data } = await client
    .from("comments")
    .select("*")
    .eq("is_approved", "true")
    .eq("page_id", slug)
    .order("created_at", { ascending: false });

  return {
    comments: data,
    pages,
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const username = data.get("username");
    const comment = data.get("comment");
    const client = createClient(
      PUBLIC_SUPABASE_URL,
      PRIVATE_SUPABASE_ANON_KEY,
      {
        auth: { persistSession: false },
      }
    );

    await client.from("comments").insert([
      {
        page_id: params.slug,
        display_name: username,
        comment_text: comment,
      },
    ]);

    await fetch("https://ntfy.sh/dognews", {
      method: "POST",
      body: `New comment from ${username}`,
    });

    return { success: true };
  },
};
