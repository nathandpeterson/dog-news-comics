<script>
    let cardData = [{
        src: "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-01/dn-01-cover-400.jpg",
        href: "/page/1",
        altText: "Colorful book cover with the words Crack me up Cassie and drawing of black dog",
        bookNumber: 1,
        bookTitle: "Crack me up, Cassie!",
    },
    {
        src: "https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dn-02/dn-02-cover-400l.jpg",
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
</script>

<svelte:head>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open+Sans">
</svelte:head>

<body>
    <Nav />
    <div class="card-container">
        {#each cardData as { src, href,altText, bookNumber, bookTitle }}
        <a href={href}>
            <div class="card">
                <img
                    src={src}
                    alt={altText}
                />
                <div class="card-label">
                    <strong>Book {bookNumber}:</strong> {bookTitle}
                </div>
            </div>
        </a>
        {/each}
    </div>
    <br />
</body>

<style>
    :global(html) {
        font-family: "Open Sans", sans-serif;
        height: 100%;
    }
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
            grid-template-columns: 30% 50%;
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
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .card:hover {
        transform: scale(1.2);
        transition: 1s;
    }
    .card img {
        filter: contrast(2.5) brightness(2.5);
    }
    .card-label {
        max-width: 300px;
        background: #B0FC38;
        border-radius: 5px;
        color: #4F7942;
        padding: 7px;
    }
</style>
