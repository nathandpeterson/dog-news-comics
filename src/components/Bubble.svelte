<script  lang="ts">
    export let bubbleText: string;
    export let top: string = "20%";
</script>

<div class="bubble" style={`top: ${top}`}>{bubbleText}
    <div class="arrow"></div>
</div>

<style>
      .bubble {
        position: absolute;
        top: 20%;
        right: -170px;
        padding: 20px 30px;
        border-radius: 15px;
        background: palegoldenrod;
        animation: pulse 2s ease-in infinite;
    }

    .arrow {
        background: palegoldenrod;
        position: absolute;
        left: 0;
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
</style>