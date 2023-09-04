<script>
    export let comment;
    const displayName = comment.display_name || '';
    const createdAt = new Date(comment.created_at).toLocaleString() || null;
    const commentText = comment.comment_text;
</script>

<div class="comment-card">
    <strong class="comment-card-name">{displayName}</strong>
    <div class="comment-card-date ">{createdAt}</div>
    <br />
    <div>{commentText}</div>
</div>

<style>
    .comment-card {
        background: white;
        padding: 1.25rem;
    
        margin: .5rem 0;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .comment-card-name {
        text-transform: uppercase;
        letter-spacing: .2rem;
    }
    .comment-card-date {
        color: gray;
    }
</style>