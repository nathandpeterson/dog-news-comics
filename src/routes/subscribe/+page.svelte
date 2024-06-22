<script lang="ts">
    import { enhance } from '$app/forms';
    import Nav from '../../components/Nav.svelte';
    import Shared from '../../components/Shared.svelte';
    let hasSubmitted = false;
</script>
<body>
    <Shared />
    <Nav shouldShowDogs={true}/>
    <div class="container">
        {#if !hasSubmitted}
         <span> 
            <h1>SUBSCRIBE TO DOG NEWS!</h1>
            <form method="POST" use:enhance on:submit={() => {
                hasSubmitted = true;
            }}>
                <label for="email">EMAIL</label>
                <input type="email" name="email" id="email">
            </form>
        </span>
        {:else}
        <h1>THANK YOU FOR SUBSCRIBING!</h1>
        {/if}
    </div>
</body>

<style>
    .container {
        background: rgb(17, 238, 25);
        height: 100vh;
    }
    h1 {
        text-align: center;
        margin-top: 10rem;
        color: darkgreen;
        font-size: 40px;
    }
    form {
        display: flex;
        justify-content: space-around;
    }
    label {
        margin-right: 25px;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        font-size: 30px;
    }
    input {
        padding: 10px;
    }
</style>