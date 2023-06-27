<script>
    import Shared from '../../../components/Shared.svelte';
    import Nav from '../../../components/Nav.svelte';
     /** @type {import('./$types').PageData} */
    export let data;
</script>

<Shared />
<Nav />

<div class="outer-wrapper">
{#each data.pages as page}
    <div class="image-container">
        <img src={page} alt="comics"/>
    </div>
{/each}
    <a href="/">BACK</a>
</div>

<style>
    .outer-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        align-items: center;

        background-color: #F0FFFF;
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

    img {
        width: 100%;
        display: inline-block;
    }
    a {
        text-decoration: none;
        color: #FF1694;
        font-size: 20px;
        margin-top: 20px;
    }
</style>
