<script>
	import { fly } from 'svelte/transition';
    import { elasticIn, elasticOut } from 'svelte/easing';
    export let modalIsOpen;
    export let align;
</script>

{#if modalIsOpen}
<dialog class="col-xs-12" id="menu-dialog" open="open" in:fly="{{y: 60, duration: 700, elasticIn}}" out:fly="{{y: 60, duration: 700, elasticOut}}">
    <slot name="modal"></slot>
</dialog>
{/if}

<nav id="fixed-menu" class="col-xs-12 {align}">
    <slot/>
</nav>

<style>
    #fixed-menu {
        width: 340px;
        position: fixed;
        z-index: 1000;
        margin: 0 auto 10px auto;
        display: flex;
        padding: 0;
        gap: 10px;
        left: 0;
        right: 0;
        flex-direction: row;
        vertical-align: middle;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: center;
        height: 60px;
    }
    .bottom {
        bottom: 0;
    }
    @media screen and (max-width:768px) {
        .bottom {
            bottom: 22%;
        }
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
</style>
