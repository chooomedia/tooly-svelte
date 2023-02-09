<script>
    export let align;
</script>

<nav id="fixed-menu" class="{align}"> 
    <slot/>
</nav>

<style>
    #fixed-menu {
        position: fixed;
        margin: 0 auto 10px auto;
        display: flex;
        padding: 0;
        gap: 10px;
        flex-direction: row;
        vertical-align: middle;
        flex-wrap: wrap;
        min-height: 60px;
        max-height: 100vh;
        overflow-y: auto;
        z-index: 100;
        align-items: flex-end;
        justify-content: center;
    }
    .bottom {
        bottom: 0;
    }
    .top {
        top: 0;
    }
    .bottomright {
        bottom: 0;
        right: 10px;
    }
    .bottomleft {
        bottom: 0;
        left: 10px;
    }

    @media screen and (max-width:768px) {
        #fixed-menu {
            overflow: hidden;
            max-width: 98%;
            gap: 0 20px 10px 20px;
        }
    }
</style>