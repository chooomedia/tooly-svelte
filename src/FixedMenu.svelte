<script>
	import { fly } from 'svelte/transition';
    import { elasticIn, elasticOut } from 'svelte/easing';
    import { hamburger, close } from './shapes';
	import { content } from './content.js';
    export let modalIsOpen;
    export let align;
    export let showMenu;

	let menuKeyboard = false;

    function keyEventListener(e) {
        menuKeyboard = true;
        for (let i = 0; i< content.de.links.length; i++) {
            if (e.key == (i + 1)) {
                selectLink(i + 1);
                showMenu = true;
            } else {
                closeAll();
            }
        }
    }	

    function toggleMenu() {
        showMenu = !showMenu;
    }

    function closeAll() {
        selectedLink = false;
        showMenu = false;
        modalIsOpen = false;
    }

    function selectLink(id) {
        const link = content.de.links.find(o => o.id == id);
        console.log("selected link", link);
        if (selectedLink == link) {
            selectedLink = undefined;
        } else {
            selectedLink = link;
        }
        modalIsOpen = selectedLink?.dialogContent && selectedLink.dialogContent != "";
        console.log("modalIsOpen", modalIsOpen);
        console.log("selectedLink?.dialogContent", selectedLink?.dialogContent);
    }

    let selectedLink = undefined;
</script>

{#if showMenu }
    <button class="overlay" on:click={closeAll}></button>
{/if}

{#if modalIsOpen}
<dialog class="col-xs-12" id="menu-dialog" open="open" in:fly="{{y: 60, duration: 700, elasticIn}}" out:fly="{{y: 60, duration: 700, elasticOut}}">
	<header class="flex-box">
		<img src="{selectedLink.imgSrc}" width="24px" height="24px" alt="icon chat" />
			<h4>{selectedLink.title}</h4>
		<button class="close-button" on:click={closeAll}>
			<svg id="icon-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 121.31 122.876">
				<path d="{close}" />
			</svg>
		</button>
	</header>
    <slot name="modal" selectedLink={selectedLink}></slot>
</dialog>
{/if}

<nav id="fixed-menu" class="col-xs-12 {align} {showMenu ? 'opened' : 'closed'}" aria-label="Main" on:keydown={keyEventListener}> 
    {#if showMenu }
        {#each content.de.links as link, index}
            <slot>
                <a in:fly="{{y: -5, duration: 380, delay: 100, elasticIn}}"
                    href={link.href}
                    target={link.target}
                    class={link.class}
                    class:active={selectedLink == link}
                    rel={link.rel}
                    title={link.title}
                    on:click={() => {
                        selectLink(link.id);
                    }}>
                    <slot name="item" index={index} link={link}></slot>
                </a>
            </slot>
        {/each}
    {/if}
    <button on:click={toggleMenu} class="icon-hamburger {showMenu ? 'opened' : 'closed'}">
        <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90">
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
    gap: 13.2px;
    left: 0;
    right: 0;
    flex-direction: row;
    vertical-align: middle;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 53.4px;
    text-align: center;

}
a {
    flex: 0 0 57.4px;
}
.opened {
    transition: all .15s cubic-bezier(0.39, 0.575, 0.565, 1);
    width: max-content;
}
.closed {
    transition: all .15s cubic-bezier(0.39, 0.575, 0.565, 1);
    max-width: 57.4px;
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
    width: 53.4px;
    height: 53.4px;
    cursor: pointer;
    margin: 1px auto 0 auto;
    border-radius: 15px;
}

.icon-hamburger.opened {
    border: 2px solid rgba(77, 77, 77, 0.1568627451);
    transform: translateY(-39px) rotate(90deg) scale(0.6);
    background: linear-gradient(-90deg, #ffffff 0%, #cccccc 100%);
}

@media screen and (max-width:768px) {
    #fixed-menu {
        bottom: 0;
        text-align: center;
    }
}   

</style>
