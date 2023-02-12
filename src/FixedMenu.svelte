<script>
	import { fly } from 'svelte/transition';
    import { elasticIn, elasticOut } from 'svelte/easing';
    import { hamburger, close } from './shapes';
    export let modalIsOpen;
    export let align;
    export let showMenu;

    function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

{#if modalIsOpen}
<dialog class="col-xs-12" id="menu-dialog" open="open" in:fly="{{y: 60, duration: 700, elasticIn}}" out:fly="{{y: 60, duration: 700, elasticOut}}">
    <slot name="modal"></slot>
</dialog>
{/if}

<nav id="fixed-menu" class="col-xs-12 {align} {showMenu ? 'opened' : 'closed'}"> 
    {#if showMenu }
        <slot/>
    {/if}
    <button on:click={toggleMenu} class="icon-hamburger {showMenu ? 'opened' : 'closed'}">
        <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 88 88">
            <path d="{hamburger}"></path>
        </svg>
    </button>
</nav>

<style>
    #fixed-menu {
		background: #f5f5f5;
		border: 2px solid rgba(77, 77, 77, 0.1568627451);
        border-radius: 15px;;
        position: fixed;
        z-index: 1000;
        margin: 0 auto 10px auto;
        display: flex;
        padding: 0;
        gap: 12.5px;
        left: 0;
        right: 0;
        flex-direction: row;
        vertical-align: middle;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: 62px;
        text-align: center;
    }
    .opened {
        transition: all .1s cubic-bezier(0.39, 0.575, 0.565, 1);
        max-width: 340px;
    }
    .closed {
        transition: all .1s cubic-bezier(0.39, 0.575, 0.565, 1);
        max-width: 64px;
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

    .icon-hamburger {
        position: fixed;
        width: 56px;
        height: 56px;
        cursor: pointer;
        margin: 1px auto 0 auto;
        background: linear-gradient(0% #f5f5f5 to 100% #cccccc);
    }

    .icon-hamburger.opened {
        border: 2px solid rgba(77, 77, 77, 0.1568627451);
        transform: translateY(-39px) rotate(90deg) scale(0.6);
    }

    @media screen and (max-width:768px) {
        #fixed-menu {
            bottom: 10px;
            margin: 0 30px;
            text-align: center;
        }
    }
</style>
