import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

type fn = () => void;

export async function deleteComment(commentId: string, successCallback: fn, errorCallback: fn) {
    const client = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        auth: { persistSession: false }
    });

    const response = await client.from('comments').delete().eq('id', commentId);
    if (!response.error) {
        successCallback()
        return;
    }
    errorCallback()
}

export async function approveComment(commentId: string, successCallback: fn, errorCallback: fn) {
    const client = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        auth: { persistSession: false }
    });

    const response = await client.from('comments')
        .update({ is_approved: true, is_pending_approval: false })
        .eq('id', commentId);

    if (!response.error) {
        successCallback()
        return;
    }

    errorCallback()
}

