<script  lang="ts">
    export let bubbleText: string;
    export let top: string = "20%";
</script>

<div>

    <div class="bubble" style={`top: ${top}`}>{bubbleText}
        <div class="arrow"></div>
    </div>
    <div class="small-bubble">
        {bubbleText}
    </div>
</div>

<style>
    .bubble {
        position: absolute;
        top: 20%;
        right: -130px;
        padding: 20px 30px;
        border-radius: 15px;
        background: palegoldenrod;
        animation: pulse 2s ease-in infinite;
    }

    .arrow {
        background: palegoldenrod;
        position: absolute;
        left: 0px;
        top: 5px;
    }
    .arrow::after {
        content:"";
        position: absolute;
        top: 25%;
        width: 0;
        height: 0;
        border-top: 13px solid transparent;
        border-right: 26px solid palegoldenrod;
        border-bottom: 13px solid transparent;
        margin: 13px 0 0 -25px;
    }
    .small-bubble {
        display: none;
        background: palegoldenrod;
        position: absolute;
        border-radius: 8px;
        padding: 10px;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 500px) {
        .bubble {
            display: none;
        }
        .small-bubble {
            display: block;
        }
    }
</style>