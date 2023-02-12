<script>
    import { elasticIn, elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';	
	import { content } from './content.js';

	export let ImgSrc;
    export let bubbleLeft;
    export let bubbleRight;
	export let currentSection;
</script>

<div class="bubble-wrapper">
	{#if currentSection === "Forms"}
		<div class="bubble left Forms" in:fly="{{y: 300, delay: 0, duration: 700, elasticIn}}" out:fly="{{y: 300, duration: 700, elasticOut}}">
			{bubbleLeft}
		</div>
		<div class="bubble right Forms" in:fly="{{y: 300, delay: 700, duration: 700, elasticIn}}" out:fly="{{y: 300, duration: 700, elasticOut}}">
			{bubbleRight}
		</div>
	{:else if currentSection === "Steps"}
		<div class="bubble left Steps" in:fly="{{y: 300, delay: 700, duration: 700, elasticIn}}" out:fly="{{y: 300, duration: 700, elasticOut}}">
			{content.de.bubbles.steps.left}
		</div>
		<div class="bubble right Steps" in:fly="{{y: 300, delay: 1400, duration: 700, elasticIn}}" out:fly="{{y: 300, duration: 700, elasticOut}}">
			{content.de.bubbles.steps.right}
		</div>
	{:else if currentSection === "Roadmap"}
		<div class="bubble left Roadmap" in:fly="{{y: 300, delay: 0, duration: 700, elasticIn}}" out:fly="{{y: 300, duration: 700, elasticOut}}">
			{@html content.de.bubbles.roadmap.left}
		</div>
		<div class="bubble right Roadmap" in:fly="{{y: 300, delay: 700, duration: 700, elasticIn}}" out:fly="{{y: 300, duration: 700, elasticOut}}">
			{@html content.de.bubbles.roadmap.right}
		</div>
	{/if}
</div>

{#if ImgSrc }
	<img class="tooly {currentSection == "Steps" ? 'in' : ''}" src='{ImgSrc}' alt="Showcase Tooly App 2023"/>
{:else}
	return;
{/if}

<style>
    img.tooly {
        max-height: 580px;
    }
	.in {
		animation: drop-shadow 2.8s 1.4s infinite;
		filter: drop-shadow(0px 0px 0vw #5eff311a);
	}

	@keyframes drop-shadow {
		0% {
			filter: drop-shadow(0px 0px 1vw #5eff311a);
		}
		100% {
			filter: drop-shadow(0px 0px 100vw #5dff31);
		}
	}
	.bubble-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		min-width: 580px;
		min-height: 100%;
        z-index: 101;
	}

    .bubble {
		min-height: 22px;
		max-height: 66px;
		max-width: 180px;
		background: #5dff31;
		padding: 10px;
		border-radius: 10px;
		margin-bottom: 15px;
		font-size: clamp(18px, 26px, 34px);
		letter-spacing: -1px;
		font-weight: bolder;
		word-break: keep-all;
	}

    .bubble.right {
        transform: translateY(24.5rem) translateX(16rem);
    }

    .bubble.left {
        transform: translateX(15rem);
		position: absolute;
		top: 0;
    }

	.right::after {
		content: "";
		width: 16px;
		height: 0;
		position: absolute;
		left: 5rem;
		border-bottom: 13px solid transparent;
		border-right: 16px solid transparent;
		border-left: 16px solid #5dff31;
		transform: translateY(31px);
	}

	.left::after {
		content: "";
		width: 16px;
		height: 0;
		position: absolute;
		left: 6rem;
		border-bottom: 13px solid transparent;
		border-left: 16px solid transparent;
		border-right: 16px solid #5dff31;
		transform: translateY(31px);
	}

    @media screen and (max-width:768px) {
        img {
            max-width: 100%;
            margin: 0 auto;
            transform: translateX(-4px);
        }
        .bubble.right {
            transform: translateY(7.5rem) translateX(8rem);
        }

        .bubble.left {
            transform: translateY(-1rem) translateX(5rem);
        }
    }
</style>