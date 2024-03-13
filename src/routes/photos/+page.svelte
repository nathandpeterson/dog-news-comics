<script lang="ts">
    import Nav from '../../components/Nav.svelte';
    import Shared from '../../components/Shared.svelte';
    const BASE_URL = 'https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev';
</script>
<Shared />
<Nav />
<div class="outer">
    <div class="container">
        <div class="img-wrapper">
            <img src={BASE_URL + '/cassie-photos/cass-laptop.jpeg'} alt="black dog with laptop"/>
        </div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/cassie-alien.jpeg'} alt="black dog with green alien costume"/></div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/hot-dog.jpeg'} alt="black dog in a hot dog costume"/></div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/cassie-beach-profile.jpeg'} alt="black dog on the beach"/></div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/cassie-blue-toy.jpeg'} alt="black dog on the beach"/></div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/cassie-couch-pillow.jpeg'} alt="black dog sleeping on a couch pillow"/></div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/cassie-sleeping-car.jpeg'} alt="black dog sleeping on a car seat"/></div>
        <div class="img-wrapper"><img loading="lazy" src={BASE_URL + '/cassie-photos/cassie-beach.jpeg'} alt="black dog looking at camera on beach"/></div>
        <div>
            <video loop autoplay muted width="500">
                <source src={BASE_URL + '/cassie-photos/cassie-playing.mp4' } type="video/mp4"/>
                <track kind="captions" />
            </video>
        </div>
        
    </div>
</div> 
<style>
    div.outer {
        width: 100%;
        background-image: url(https://pub-d5040c5e154b42b1b0c92c01d2202bfe.r2.dev/dog-bones.jpg);
    }
    div.img-wrapper {
        width: 300px;
    }
    @media (min-width: 600px) {
        div.img-wrapper {
            width: 550px;
        }
    }
    @media (min-width: 900px) {
        div.img-wrapper {
            width: 800px;
        }
    }
    .img-wrapper img,video {
        max-width: 100%;
        background-color: gray;
    }
    .container {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>