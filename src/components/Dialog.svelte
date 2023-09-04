<script lang="ts">
    import { onMount } from 'svelte';
    import { dialogText as dialogTextStore, dialogTheme as dialogThemeStore, closeDialog } from '../utils/dialog';
    let dialogRef: HTMLDialogElement | undefined;
    let dialogText = '';
    dialogTextStore.subscribe((value) => {
        dialogText = value;
        if (dialogText) {
            dialogRef?.showModal()
        } else {
            dialogRef?.close();
        }
    });
    dialogThemeStore.subscribe((value) => {
        if (!dialogRef) return;
        if (value === 'error') {
            dialogRef.style.background = 'red';
        } else if (value === 'secondary') {
            dialogRef.style.background = 'gray';
        } else {
            dialogRef.style.background = '#05EDFF';
        }
    });
    onMount(() => {
        // clean up dialogState when closed
        dialogRef?.addEventListener('close', closeDialog);
    })
</script>

<dialog bind:this={dialogRef}>
    {dialogText}
    <button on:click={closeDialog}>ok</button>
</dialog>

<style>
     dialog[open] {
        background: #05EDFF;
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 7px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    dialog button {
        border: none;
        background: white;
        color: black;
        cursor: pointer;
        padding: 5px 15px;
        border-radius: 6px;
        width: fit-content;
        margin-top: 10px;
        outline: none;
    }
    dialog button:hover {
        transform: scale(1.2);
    }
</style>