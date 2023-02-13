<script>
	import { onMount } from 'svelte';
	import { content } from './content.js';

	let characters = content.characters;

	let tools = Array.from({ length: 66 }, (_, i) => ({
		character: characters[i % characters.length],
		y: Math.random() * 120,
		x: -10 - Math.random() * 20,
		r: 0.5 + Math.random() * 1
	})).sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			tools = tools.map(toolicon => {
				toolicon.x += .1 * toolicon.r;
				if (toolicon.x > 100) toolicon.x = -50;
				return toolicon;
			});
		}
		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="Animated-background">
	<div class="inner">
		{#each tools as c}
		<span style="right: {c.x}%; top: {c.y}%; transform: scale({c.r})">
			<img width="100px" height="100px" src="{c.character}" alt="Tooly Tools"/>
		</span>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		overflow-y: scroll;
        overflow-x: hidden;
	}
	.Animated-background {
		height: 100%;
	}
	span {
		position: absolute;
		font-size: 2vw;
		user-select: none;
		opacity: .1;
	}
	.inner {
		position: absolute;
		z-index: 1;
		background: rgba(0,0,0,0.1);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>
