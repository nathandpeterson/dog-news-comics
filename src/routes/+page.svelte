<script>
    import { cardData } from '../data/cards';
    import Nav from '../components/Nav.svelte';
    import Dialog from '../components/Dialog.svelte';
    import Shared from '../components/Shared.svelte';
</script>

<body>
    <Shared />
    <Nav shouldShowDogs={true}/>
    <div class="card-container">
        {#each cardData as { src, href,altText }}
        <a href={href}>
            <div class="card">
                <img
                    src={src}
                    alt={altText}
                />
               
            </div>
        </a>
        {/each}
    </div>
    <br />
    <Dialog />
</body>

<style>
    body {
        height: 100%;
        margin: 0;
        width: 100%;
        background-image: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dog-bones.jpg);
    }
    .card-container {
        display: flex;
        flex-direction: column;
        gap: 100px 0;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    @media (min-width: 750px) {
        .card-container {
            display: grid;
            grid-template-columns: 30% 30%;
            gap: 3rem;
            justify-items: center;
        }
    }
    a {
        text-decoration: none;
    }
    .card {
        width: 300px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
    }
    .card:hover {
        transform: scale(1.2);
        transition: 1s;
    }
    .card img {
        filter: brightness(1.15);
    }
</style>
