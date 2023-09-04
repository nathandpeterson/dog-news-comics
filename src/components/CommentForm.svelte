<script lang="ts">
    import { enhance } from '$app/forms';
    // resize input as user types
    function handleInput(e: InputEvent){
        if (!e.target || !(e.target instanceof HTMLElement)) return;
        const { target } = e;
        target.style.height = ""
        target.style.height = target.scrollHeight + "px"
    }
</script>

<form class="image-container" method="POST" use:enhance>
    <div class="field-set">
        <label for="username">Name</label>
        <input type="text" id="username" />
    </div>
    <div class="field-set">
        <label for="comment">Comment</label>
        <textarea id="comment" rows=3 cols=50 on:input={handleInput} />
    </div>
    <button> SUBMIT</button>
</form>

<style>
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .field-set {
        display: flex;
        margin: 10px 0;
    }
    .field-set label {
        width: 10%;
    }
    .field-set input {
        width: 90%;
    }
    #comment {
        width: 90%;
        height: 3rem;
    }

    .image-container {
        width: 375px;
    }

    @media (min-width: 600px) {
        .image-container {
        width: 600px;
        }
    }

    @media (min-width: 900px) {
        .image-container {
        width: 800px;
        }
    }

    @media (min-width: 900px) {
        .image-container {
        width: 800px;
        }
    }

</style>