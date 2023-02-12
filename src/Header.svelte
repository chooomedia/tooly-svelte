<script>
	import Darkmode from './Dark-mode.svelte';
	import { elasticIn, elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { bubble, tool } from './shapes.js';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => ready = true);

	export let brandName;
	let visible = true;
</script>
<header class="col-xs-12">
	<Darkmode />
	{#if visible}
	<div>
		{#if ready}
		<svg id="logoSvg" xmlns="http://www.w3.org/2000/svg" width="96px" height="96px" viewBox="0 0 112 72">
			<g in:fly="{{y: 200, duration: 700, elasticIn}}" out:fly="{{y: -200, duration: 700, elasticOut}}">
				<path id="bubble" d={bubble}/>
				<path id="tool" d={tool} />
			</g>
		</svg>
		{/if}	
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
    z-index: 101;
	position: relative;
    flex-direction: row;
    align-items: center;
	margin: 0 auto;
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