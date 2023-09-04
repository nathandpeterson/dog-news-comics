<script lang="ts">
    import Nav from '../../components/Nav.svelte';
    import CommentCard from '../../components/CommentCard.svelte';
    import Dialog from '../../components/Dialog.svelte';
    import { approveComment, deleteComment } from './fetchHelpers';
    import { openDialog } from '../../utils/dialog';
    
    export let data;
    let comments = data.comments || [];

    let isValidModerator = false;
    let password: string = '';
    
    function removeComment(idToRemove: string) {
        comments = comments.filter(c => c.id !== idToRemove);
    }
    function openErrorDialog() {
        openDialog({
            dialogContent: 'There was an error!',
            dialogTheme: 'error',
        })
    }
</script>
<Nav />
<Dialog />
<hr />
{#if isValidModerator}
    <form class="container">
        {#each comments as comment}
            <div class="comment-section">
                <div class="controls">
                    <button
                        class="btn approve"
                        on:click={() => {
                            const onSuccess = () => {
                                openDialog({ dialogContent: 'SUCCESS!', shouldCloseWithTimeout: true });
                                removeComment(comment.id);
                            }
                            approveComment({ 
                                apiKey: data.apiKey,
                                commentId: comment.id,
                                errorCallback: openErrorDialog,
                                successCallback: onSuccess,
                            })
                        }}
                    >
                        APPROVE
                    </button>
                    <button
                        class="btn delete"
                        on:click={() => {
                            const onSuccess = () => {
                                openDialog({ dialogContent: 'SUCCESS!', shouldCloseWithTimeout: true });
                                removeComment(comment.id);
                            }
                            deleteComment({
                                apiKey: data.apiKey,
                                commentId: comment.id,
                                errorCallback: openErrorDialog,
                                successCallback: onSuccess,
                            });
                        }}
                    >
                        DELETE
                    </button>
                </div>
                <div style="width: 80%;">
                    <CommentCard comment={comment}/>
                </div>
            </div>
        {/each}
        {#if comments.length === 0}
            <div class="center">
                <div>No comments to approve! </div>
                &nbsp;
                <a href="/">Go home</a>   
            </div>
        {/if}
    </form>
{:else}
    <div>What's the secret password?</div>
    <form>
        <input type="password" bind:value={password} />
        <button on:click={() => {
            if (password === data.moderatorSecret) {
                isValidModerator = true;
            }
        }}>SUBMIT</button>
    </form>
    
{/if}

<style>
    .container {
        padding: 2rem;
        display: flex;
        width: 100%;
   
        flex-direction: column;
    }
    .comment-section {
        display: flex;
        gap: 25px;
    }
    .controls {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .controls button {
        padding: .5rem;
        cursor: pointer;
        border: none;
        border-radius: 7px;
    }
    .btn.approve {
        background-color: #32CD32;
    }
    .btn.delete {
        background-color: red;
        color: white;
    }
    button:hover {
        transform: scale(1.1);
    }
    .center {
        display: flex;
        justify-content: center;
    }
</style>