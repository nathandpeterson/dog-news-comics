import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public'
import { PRIVATE_SUPABASE_ANON_KEY, PRIVATE_MODERATOR_SECRET } from '$env/static/private';

export async function load() {
    const client = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_ANON_KEY, {
        auth: { persistSession: false }
    })
    const { data } = await client
        .from('comments')
        .select('*')
        .filter('is_pending_approval', 'eq', 'true')
        .filter('is_approved', 'eq', 'false');
    return {
        apiKey: PRIVATE_SUPABASE_ANON_KEY,
        comments: data,
        moderatorSecret: PRIVATE_MODERATOR_SECRET,
    }
}