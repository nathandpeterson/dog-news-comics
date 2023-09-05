<script>
    let cardData = [{
        src: "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-01/dn-01-cover-400.jpg",
        href: "/page/1",
        altText: "Colorful book cover with the words Crack me up Cassie and drawing of black dog",
        bookNumber: 1,
        bookTitle: "Crack me up, Cassie!",
    },
    {
        src: "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-02-cover-400.jpg",
        href: '/page/2',
        altText: "Colorful book cover with the words Take It Away, Tronya! and drawing of small dog",
        bookNumber: 2,
        bookTitle: "Take It Away, Tronya!"
    },
    {
        src: "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-03/dn-03-cover-400.jpg",
        href: '/page/3',
        altText:"Colorful book cover with the words Hooray for Hazel! and drawing of small white dog",
        bookNumber: 3,
        bookTitle: "Hooray for Hazel!",
    },
    {
        src: "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-04/dn-04-cover-400.jpg",
        href: '/page/4',
        altText:"Colorful book cover with the words Hello Hank! and drawing of small tan dog",
        bookNumber: 4,
        bookTitle: "Hello Hank!",
    }]
    import Nav from '../components/Nav.svelte';
    import Dialog from '../components/Dialog.svelte';
</script>

<body>
    <Nav shouldShowDogs={true}/>
    <div class="card-container">
        {#each cardData as { src, href,altText, bookNumber, bookTitle }}
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
        background-color: #F0FFFF;
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
