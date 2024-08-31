<script>
    import { cardData } from '../data/cards';
    import Nav from '../components/Nav.svelte';
    import Dialog from '../components/Dialog.svelte';
    import Shared from '../components/Shared.svelte';
</script>

<body>
    <Shared />
    <Nav shouldShowDogs={true}/>
    <br />
    <div class="button-container">
        <a href="/dogs"><button> MEET THE DOGS</button></a>
    </div>
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
    <footer>
        <span>🐶</span>
        <a href="/subscribe">SUBSCRIBE TO DOGNEWS!</a>
        <span>🐶</span>
    </footer>
    <Dialog />
</body>

<style>
    body {
        height: 100%;
        min-height: 90vh;
        margin: 0;
        width: 100%;
        background-image: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dog-bones.jpg);
    }
    .button-container {
        display: flex;
        justify-content: center;;
    }
    button {
        background: #FF1694;
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.1rem;
        transition: .5s all;
    }
    button:hover {
        transform: scale(1.1);
    }
    .card-container {
        display: flex;
        flex-direction: column;
        gap: 100px 50px;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    @media screen and (min-width: 840px) {
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
    footer {
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer a {
        background-color: red;
        padding: 20px 40px;
        margin: 40px 0;
        font-size: 1.5rem;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
    }
    footer a:hover {
        transform: scale(120%);
        font-size: 2rem;
        transition: .5s;
    }
    footer span {
        font-size: 5rem;
    }
</style>
