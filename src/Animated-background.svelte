<script>
	import { onMount } from 'svelte';

	let characters = ['🥳', '🎉', '✨'];

	let confetti = new Array(10).fill()
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map(emoji => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="Animated-background">
	<div class="inner">
		{#each confetti as c}
			<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		overflow: hidden;
        overflow-y: scroll;
	}
	span {
		position: absolute;
		font-size: 10vw;
		user-select: none;
	}
	.inner {
		position: absolute;
		background: rgba(0,0,0,0.3);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
</style>
