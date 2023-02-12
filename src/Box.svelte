<script>
	import { createEventDispatcher, onMount } from "svelte";
	export let direction;
	export let name;

	const eventDispatcher = createEventDispatcher();

	let thisBox;

	onMount(() => {
		window.addEventListener("scroll", isInView);
		return () => {
			window.removeEventListener('scroll', isInView);
		};
	});

	let _isVisible = false;

	function isInView(e) {

		let rect = thisBox.getBoundingClientRect();
		let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		let isVisible = (rect.top <= viewHeight) && (rect.bottom >= viewHeight);
		if (isVisible != _isVisible) {
			_isVisible = isVisible;
			if (isVisible) {
				eventDispatcher("visible", name)
			} else {
				eventDispatcher("invisible", name)
			}
		}
	}
</script>

<div bind:this={thisBox} class="Box {name} {direction}">
	<slot/>
</div>

<slot name="cta" />

<style>
	.Box {
		scroll-snap-type: y mandatory;
		min-height: 100vh;
	}

	.Box.Forms {
		transform: translateY(-1rem);
	}

	.flex-column {
		flex-direction: column;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		;
		justify-content: center;
	}

	@media screen and (max-width:768px) {
		.Box {
			overflow-y: hidden;
			flex-basis: 100%;
			margin: 0 30px;
		}

		.Box.Forms {
			transform: translateY(-1.2rem);
		}

		.Box.Steps {
			flex-direction: column;
			gap: 50px 0px;
		}
	}
</style>