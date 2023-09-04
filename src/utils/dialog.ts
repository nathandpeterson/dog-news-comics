import { writable } from 'svelte/store';

type DialogTheme = 'primary' | 'error' | 'secondary';

interface OpenDialog {
    dialogContent: string;
    dialogTheme?: DialogTheme;
    shouldCloseWithTimeout?: boolean;
}

export const dialogText = writable('');
export const dialogTheme = writable<DialogTheme>('primary');

export function openDialog(props: OpenDialog) {
    dialogText.set(props.dialogContent);
    dialogTheme.set(props.dialogTheme || 'primary')
    if (props.shouldCloseWithTimeout) {
        setTimeout(() => {
            closeDialog();
        }, 2000);
    }
}

export function closeDialog() {
    dialogText.set('');
    dialogTheme.set('primary')
}
