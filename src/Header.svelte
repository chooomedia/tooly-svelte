<script>
	import Darkmode from './Dark-mode.svelte';
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from './custom-transitions.js';
	import { bubble, tool } from './shapes.js';

	export let brandName;
	let visible = true;
</script>

<header class="col-xs-6">
	<Darkmode/>
	{#if visible}
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" width="96px" height="96px" viewBox="0 0 112 72">
			<g out:fade="{{duration: 2000}}" opacity=1>
				<path id="bubble"
					in:expand="{{duration: 1200, delay: 1000, easing: quintOut}}"
					style="stroke: transparent; fill: #5dff31; stroke-width: 0;"
					d={bubble}
				/>
				<path id="tool"
					in:draw="{{duration: 1200, delay: 2000, easing: quintOut}}"
					d={tool}
				/>
			</g>
		</svg>		
		<h1>{brandName}</h1>
	</div>
	{/if}
</header>

<style>
header {
	width: 1080px;
    box-sizing: border-box;
    display: flex;
    vertical-align: middle;
    justify-content: space-between;
    text-align: center;
    z-index: 100;
    flex-direction: row;
    align-items: center;
}

@media screen and (max-width:768px) {
	header {
		padding: 0 15px;
		width: 100%;
		height: 132px;
		margin-bottom: 15px;
	}
}

div {
	flex: 1;
}

div svg{
	text-align: center;
}

#bubble {
	fill: #5dff31;
	opacity: 1;
}
#tool {
	fill: #f5f5f5;
	opacity: 1;
}

h1 {
	font-family: 'LatoRegular', sans-serif, sans-serif;
	font-weight: 700;
	letter-spacing: -1px;
	line-height: 1.4em;
	font-size: clamp(24px, 36px, 3rem);
	margin: 0 auto !important;
	padding: 0 0;
	text-transform: uppercase;
	transform: translateY(-10px);
}
</style>