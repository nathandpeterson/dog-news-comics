import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'

export async function load() {
    const client = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        auth: { persistSession: false }
    })
    const { data } = await client
        .from('comments')
        .select('*')
        .filter('is_pending_approval', 'eq', 'true')
        .filter('is_approved', 'eq', 'false');
    return {
        comments: data,
    }
}