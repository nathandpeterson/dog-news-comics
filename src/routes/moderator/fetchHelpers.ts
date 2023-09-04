import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

type fn = () => void;

interface ApproveOrDeleteComment {
    apiKey: string,
    commentId: string;
    errorCallback: fn,
    successCallback: fn,
}

export async function deleteComment({ apiKey, commentId, errorCallback, successCallback }: ApproveOrDeleteComment) {
    const client = createClient(PUBLIC_SUPABASE_URL, apiKey, {
        auth: { persistSession: false }
    });

    const response = await client.from('comments').delete().eq('id', commentId);
    if (!response.error) {
        successCallback()
        return;
    }
    errorCallback()
}

export async function approveComment({ apiKey, commentId, errorCallback, successCallback }: ApproveOrDeleteComment) {
    const client = createClient(PUBLIC_SUPABASE_URL, apiKey, {
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

