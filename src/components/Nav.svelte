<div id="heading">
    <a href="/"><h1>DOG NEWS!</h1></a>
</div>

<style>
    #heading {
        background: white;
        width: 100%;
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
</style>