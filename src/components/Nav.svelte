<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/stores';  

    export let shouldShowDogs: boolean = false;
    let isHoveringHeading = false;
    let anchorRef: HTMLAnchorElement;
    let shouldShowPhotosLinks = false;

    onMount(() => {
        // let spin animation complete before removing animation class
        anchorRef.addEventListener('animationiteration', (e: AnimationEvent) => {
            if (isHoveringHeading === false) {
                if (e && e.target instanceof HTMLElement) {
                    e.target.classList.remove('hovered')
                }
            }
        })
        if ($page.route.id === '/') {
            shouldShowPhotosLinks = true;
        }
    })
   
    function onHoverHeading(e: MouseEvent){
        isHoveringHeading = true;
        if (e && e.target instanceof HTMLElement) {
            e.target.classList.add('hovered')
        }
    }

    function onMouseLeave() {
        isHoveringHeading = false;
    }
</script>

<div id="heading-container">
    <div id="heading">
        <span>🐶</span>
        <a  href="/"
            bind:this={anchorRef}
            on:mouseenter={onHoverHeading}
            on:mouseleave={onMouseLeave}
        >
            <h1>DOG NEWS!</h1>
        </a>
        <span>🐶</span>
    </div>
    {#if shouldShowPhotosLinks === true}
        <a id="photos-link" href="/photos">PHOTOS</a>
    {/if}
    {#if shouldShowDogs}
        <span class="dog cassie">🐕‍🦺</span>
        <span class="dog tronia">🐕</span>
    {/if}
</div>

<style>
    #heading-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #heading {
        background: white;
        width: 100%;
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #photos-link {
        position: absolute;
        display: block;
        right: 10%;
        color: #FF1694;
        padding: 5px 7px;
        border-radius: 5px;
        border: 1px solid #FF1694;
    }
    #photos-link:hover {
        transform: scale(1.8);
        transition: .6s;
    }
    @media (max-width: 500px) {
        #photos-link {
            position: relative;
            display: block;
            text-align: center;
            right: unset;
            background-color: #FF1694;
            color: white;
            width: fit-content;
            margin-top: 5px;
            margin-bottom: 10px;
        }
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
        cursor: pointer;
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
        display: none;
    }

    @media (min-width: 700px) {
        .dog {
            display:block;
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
    :global(.hovered) {
        animation: title-animation .5s infinite linear;
    }
</style>