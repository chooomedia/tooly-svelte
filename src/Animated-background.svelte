<script>
	import { onMount } from 'svelte';

	let characters = 
	[
		'http://localhost:8080/icons/tooly-pattern-icon-farbroller-180x180px.png', 
		'http://localhost:8080/icons/tooly-pattern-icon-pinsel-180x180px.png', 
		'http://localhost:8080/icons/tooly-pattern-icon-saege-fuchsschwanz-180x180px.png',
		'http://localhost:8080/icons/tooly-pattern-icon-schraubendreher-schraubenzieher-180x180px.png',
		'http://localhost:8080/icons/tooly-pattern-icon-schraubenschluessel-180x180px.png',
		'http://localhost:8080/icons/tooly-pattern-icon-spatel-180x180px.png',
		'http://localhost:8080/icons/tooly-pattern-icon-spaten-schaufel-180x180px.png'
	];

	let confetti = new Array(40).fill()
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -10 - Math.random() * 100,
				r: 0.3 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map(emoji => {
				emoji.y += .15 * emoji.r;
				if (emoji.y > 100) emoji.y = -10;
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
		<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
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
		opacity: .2;
	}
	.inner {
		position: absolute;
		background: rgba(0,0,0,0.01);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		overflow: hidden;
	}
</style>
