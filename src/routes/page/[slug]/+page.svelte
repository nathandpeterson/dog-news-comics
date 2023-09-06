<script lang="ts">
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    import Shared from '../../../components/Shared.svelte';
    import Nav from '../../../components/Nav.svelte';
    import Dialog from '../../../components/Dialog.svelte';
    import CommentCard from '../../../components/CommentCard.svelte';

    import { openDialog } from '../../../utils/dialog';
    export let data;
    const comments = data.comments || [];
    let shouldShowCommentForm = false;
    page.subscribe((value) => {
        if (value.form && value.form.success) {
            openDialog({
                dialogContent: 'Your comment has been submitted. It may take a few days to be approved.',
                shouldCloseWithTimeout: true
            })
        } else if (value.error) {
            openDialog({
                dialogContent: 'There was an error. Please try again later',
                dialogTheme: 'error',
            })
        }
    });

</script>

<Shared />
<Nav />

{#each data.pages as page}
    <img src={page} alt="comics"/>
{/each}

{#each comments as comment}
    <CommentCard comment={comment}/>
{/each}

{#if !shouldShowCommentForm}
<div class="add-comment-section">
    <button
        class="btn add-comment"
        on:click={() => {
            shouldShowCommentForm = true;
        }}
    >
            ADD COMMENT!
    </button>
</div>
{:else}
    <!-- <CommentForm /> -->
    <Dialog />
    <div>Your comment may take a few days to appear.</div>
    <form class="image-container" method="POST" use:enhance>
        <div class="field-set">
            <label for="username">Name</label>
            <input type="text" id="username" name="username" />
        </div>
        <div class="field-set">
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" rows=3  />
        </div>
        <div style="display: flex; justify-content: center;">
            <button class="btn"> SUBMIT</button>
        </div>
    </form>
{/if}

<style>
    img {
        width: 100%;
        display: inline-block;
    }
    .add-comment-section {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .btn {
        padding: .5rem 1rem;
        color: white;
        background: magenta;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        transition: all .5s;
    }
    .btn:hover {
        filter: hue-rotate(-30deg);
        transform: scale(1.2);
    }
    .field-set {
        display: flex;
        margin: 10px 0;
    }
    .field-set label {
        width: 15%;
        margin-right: 40px;
    }
    .field-set input {
        width: 100%;
    }
    .field-set textarea {
        width: 100%;
    }   
</style>
