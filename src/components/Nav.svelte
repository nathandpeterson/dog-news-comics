<script lang="ts">
    export let shouldShowDogs: boolean = false;
</script>

<div id="heading">
    <span>🐶</span>
    <a href="/"><h1>DOG NEWS!</h1></a>
    <span>🐶</span>
</div>
{#if shouldShowDogs}
    <span class="dog cassie">🐕‍🦺</span>
    <span class="dog tronia">🐕</span>
{/if}


<style>
    #heading {
        background: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
    #heading span {
        font-size: 50px;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color:unset;
    }
    h1 {
        text-align: center;
        color: #FF1694;
        font-size: 4rem;
        margin: 0;
        padding: 20px 0;
        cursor: pointer;
    }
    h1:hover {
        animation: title-animation .5s infinite linear;
    }
        
    @keyframes title-animation {
        0% {
            transform: rotate(0);
        }
        99% {
            transform: rotate(359deg);
        }
    }
    .dog {
        position: absolute;
        top: 95px;
        right: -20px;
        visibility: hidden;
    }

    @media (min-width: 700px) {
        .dog {
            visibility: visible;
        }
    }

    .cassie {
        animation: march 22s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation-delay: 12s;
    }

    .tronia {
        animation: march 20s infinite ease-in-out;
        animation-delay: 10s;
    }

    @keyframes march {
        0% {
            right: -20px;
        }
        10% {
            right: 0;
        }
        50% {
            right: 50%;
        }
        100% {
            right: 120%
        }

    }
</style>