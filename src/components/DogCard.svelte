<script  lang="ts">
export let imgSrc: string;
export let background: string;
export let animation: string;
export let imageStyle: string = '';
</script>

<div class="profile">
    <div class={`img-wrapper ${background}`}>
        <img class={animation} loading="lazy" src={imgSrc} alt="drawing of dog" style={imageStyle}/>
    </div>
    <slot />
</div>

<style>
     .profile {
        display: flex;
        position: relative;
    }
  
    .beach {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/beach.png);
    }
    .bedroom {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/bedroom.png);
    }

    .car {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/car.png);
    }
    .dog-park {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/dog-park.png);
    }

    .purple-set {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/purple-set.png);
    }

    .living-room {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/living-room.png);
    }
    .office {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/office.png);
    }
    .school {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/school.png);
    }
    .yard {
        background: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/random/yard.png);
        background-position: -20px;
    }


    .img-wrapper {
        width: 350px;
        height: 350px;
        border-radius: 8px;
        box-shadow: 1px 1px 10px  #AAA;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        display: inline-block;
        position: relative;
    }
    .bounce {
        animation: bounce .5s infinite;
    }
    .shake {
        animation: shake 1s infinite;
    }
    .jump {
        animation: jump 1s infinite;
    }
    .pulse {
        animation: pulse 1s infinite;
    }
    .spin {
        animation: spin 1s  infinite;
    }
    .wobble {
        animation: wobble .5s ease-in-out infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.2);
        }
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    @keyframes jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-40px); }
    }

    @keyframes shakeAndJump {
        0% { animation: shake 0.5s; }
        12.5% { animation: none; }
        25% { animation: jump 0.5s; }
        37.5% { animation: none; }
        50% { animation: shake 0.5s; }
        62.5% { animation: none; }
        75% { animation: jump 0.5s; }
        87.5% { animation: none; }
        100% { animation: shake 0.5s; }
    }

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }

    @keyframes wobble {
        0%, 100% { transform: translateY(20px) rotate(0deg); }
        25% { transform: translateY(25px) rotate(-10deg); }
        75% { transform: translateY(30px) rotate(10deg); }
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1) ;}
        50% { transform: scale(1.1);}
    }
</style>