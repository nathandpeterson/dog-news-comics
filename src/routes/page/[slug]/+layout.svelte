<div class="outer-wrapper">
    <div class="image-container">
        <slot />
        <a href="/">BACK</a>
    </div>
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


    a {
        text-decoration: none;
        color: #FF1694;
        font-size: 20px;
        margin-top: 20px;
    }

</style>