<script lang="ts">
    import Nav from '../../components/Nav.svelte';
    import Shared from '../../components/Shared.svelte';
    import DogCard from '../../components/DogCard.svelte';
    import Bubble from '../../components/Bubble.svelte';
    const BASE_URL = 'https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev';
</script>
<div>
    <Shared />
    <Nav shouldShowDogs={false}/>
    <div class="spacer" />
    <div class="container">
        <DogCard animation="shake" background="yard" imgSrc={BASE_URL + '/cutouts/cassie-cutout-sm.png'}>
            <Bubble bubbleText="Hi, I'm Cassie!"/>
        </DogCard>
        <DogCard animation="jump" background="purple-set" imgSrc={BASE_URL + '/cutouts/tranya-cutout-sm.png'}>
            <Bubble bubbleText="Hello, my name is Tranya"/>
        </DogCard>
        <DogCard animation="wobble" background="car" imgSrc={BASE_URL + '/cutouts/ellie-cutout-sm.png'}>
            <Bubble bubbleText="Hello, my name is Ellie"/>
        </DogCard>
        <DogCard animation="spin" background="beach" imgSrc={BASE_URL + '/cutouts/stewie-cutout-sm.png'} imageStyle="top: 65px;">
            <Bubble bubbleText="Cowabunga, I'm Stewie!" top={'60%'}/>
        </DogCard>
        <DogCard animation="shake" background="bedroom" imgSrc={BASE_URL + '/cutouts/hank-cutout-full.png'} imageStyle="top: 30px; max-height: 300px;">
            <Bubble bubbleText="Hi, I'm Hank!"/>
        </DogCard>
       
        <DogCard animation="bounce" background="living-room" imgSrc={BASE_URL + '/cutouts/wicket-cutout.png'} imageStyle="max-height: 300px;">
            <Bubble bubbleText="Hi, I'm Wicket!" top="40%"/>
        </DogCard>
        <DogCard animation="pulse" background="school" imgSrc={BASE_URL + '/cutouts/hazel-cutout-full.png'} imageStyle="top: 20px;">
            <Bubble bubbleText="Hi, I'm Hazel!"/>
        </DogCard>
        <DogCard animation="wobble" background="office" imgSrc={BASE_URL + '/cutouts/montana-cutout.png'} imageStyle="max-height: 300px;">
            <Bubble bubbleText="Hi, I'm Montana!" top="40%"/>
        </DogCard>
        <div class="spacer"/>
    </div>
</div>
<style global>
    :global(body) {
        height: 100%;
        min-height: 90vh;
        margin: 0;
        width: 100%;
        background-image: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dog-bones.jpg);
    }
    .container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-auto-flow: row;
        align-content: center;
        justify-content: center;
        gap: 50px;
  
        margin-bottom: 50px;
    }
    @media (min-width: 500px){
        .container {
            padding: 0 30px;
        }
    }

    .spacer {
        width: 100%;
        height: 50px;
    }

</style>