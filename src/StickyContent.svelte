<script>
    import sticky from './sticky.js';
    export let stickToTop = true;

    let isStuck = false;

    function handleStuck(e) {
        isStuck = e.detail.isStuck;
    }
</script>

<style>
    div {
        margin: 0 auto;
    }

    .sticky {
        position: sticky;
        transition: all 0.3s;
    }

    .sticky[data-position='top'] {
        top: 5rem;
        padding: 0 2rem;
    }

    .sticky[data-position='bottom'] {
        bottom: 1rem;
    }
</style>

{#if !stickToTop}
    <slot />
{/if}

<div
    class="sticky"
    class:isStuck
    data-position={stickToTop ? 'top' : 'bottom'}
    use:sticky={{ stickToTop }}
    on:stuck={handleStuck}>
    <slot />
</div>
