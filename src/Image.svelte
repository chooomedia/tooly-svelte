<script>
    // Import original full-sized image with `?run` query param.
    export let ImgSrc;
</script>
    
<img class="tooly" src='{ImgSrc}' alt="tooly" />

<style>
    img.tooly {
        max-height: 580px;
    }

    @media screen and (max-width:768px) {
        img {
            max-width: 88%;
            margin: 0 auto;
            transform: translateX(23px);
        }
    }
</style>