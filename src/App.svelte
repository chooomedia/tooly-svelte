<script context="module">
	import Chat from './Chat.svelte';
	import CtaBox from './Ctabox.svelte';
	import Box from './Box.svelte';
	import Countdown from './Countdown.svelte';
	import FixedMenu from './FixedMenu.svelte';
	import Fooorms from './Fooorms.svelte';
	import ImageBubbles from './ImageBubbles.svelte';
	export const Widgets = {
		"Chat": Chat,
		"CtaBox": CtaBox,
		"Box": Box,
		"Countdown": Countdown,
		"FixedMenu": FixedMenu,
		"Fooorms": Fooorms,
		"ImageBubbles": ImageBubbles
	}
</script>

<script>
	import { darkmodestore } from './stores.js';
	import Header from './Header.svelte';
	import Flexbox from './Flexbox.svelte';
	import { content } from './content.js';
	import { lazyLoad } from './lazyload.js';
	import AnimatedBackground from './Animated-background.svelte';
	import BackgroundMaks from './Background-maks.svelte';
	import { close } from './shapes.js';
	import StickyContent from './StickyContent.svelte';
	import { elasticIn, elasticOut } from 'svelte/easing';
    import { fly, fade } from 'svelte/transition';

	let stickToTop = true;
	let selectedLink = undefined;
	let currentSection = "Forms";
	let showMenu = true;

	/* This function reacts on every change of the block change "$darkmodestore" */
	$:{
		if ($darkmodestore) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}

	function onVisible(e){
		currentSection = e.detail;
	}
	function onInvisible(e){
	}

	let menuKeyboard = false;

	function keyEventListener(e) {
		content.de.links.forEach((link) => {
			if (e.key === link.id) {
				showMenu = !showMenu;
				menuKeyboard = true;
			}
		});
	};

</script>

<Header brandName={'Tooly'}></Header>
<main>
	<!--et_pb_section et_pb_section_0 et-light-mode-capable et_pb_section_parallax et_pb_with_background et_section_regular-->
	<section id="landingPage">
		<Flexbox>
			<StickyContent {stickToTop} slot="left">
				{#if $darkmodestore}
				<div in:fly="{{z: 300, duration: 700}}" out:fly="{{z: 300, duration: 700}}">
					<ImageBubbles
						on:lazyLoad={content.de.medias.mockups.lightSrc}
						ImgSrc={content.de.medias.mockups.lightSrc}
						bubbleLeft={content.de.bubbles.landing.left}
						bubbleRight={content.de.bubbles.landing.right}
						currentSection={currentSection}
					></ImageBubbles>
				</div>
				{:else}
				<div in:fly="{{z: 300, duration: 700}}" out:fly="{{z: 300, duration: 700}}">
					<ImageBubbles 
						on:lazyLoad={content.de.medias.mockups.darkSrc}
						ImgSrc={content.de.medias.mockups.darkSrc}
						bubbleLeft={content.de.bubbles.landing.left}
						bubbleRight={content.de.bubbles.landing.right}
						currentSection={currentSection}
					></ImageBubbles>
				</div>
				{/if}
			</StickyContent>
			<div slot="right">
				<Box on:visible={onVisible} on:invisible={onInvisible} name={"Forms"} direction={'flex-column'}>
					<CtaBox headline={content.de.ctaBox.headline} subline={content.de.ctaBox.subline}></CtaBox>
					<Countdown from="2023-02-07 08:00:00" dateFormat="YYYY-DD-MM H:m:s" zone="Europe/Berlin" let:remaining>
						<div class="flex-box">
							{#if remaining.done === false}
							<span><h3>{remaining.days}</h3>Tage</span>
							<span><h3>:</h3></span>
							<span><h3>{remaining.hours}</h3> Stunden</span>
							<span><h3>:</h3></span>
							<span><h3>{remaining.minutes}</h3> Minuten</span>
							<span><h3>:</h3></span>
							<span><h3>{remaining.seconds}</h3> Sekunden</span>
							{:else}
							<h3 class="color-light">Start Beta-Phase</h3>
							{/if}
						</div>
					</Countdown>
					<Fooorms></Fooorms>
				</Box>
				<Box on:visible={onVisible} on:invisible={onInvisible} name={"Steps"} direction={'flex-row'}>
					{#each content.de.stepBox.steps as step, i }
						{#if currentSection == "Steps"}
							<div class="col-lg-3" name="step" in:fly="{{y: 300, delay: i * 700, duration: 700, elasticIn}}" out:fly="{{y: 300, delay: i * 700, duration: 700, elasticOut}}">
							<div class="icon">
								<img use:lazyLoad={step.iconSrc} src={step.iconSrc} alt="Step Icon" />
							</div>
							<h2>{step.headline}</h2>
							<p>{step.text}</p>
							</div>
						{/if}
					{/each}
				</Box>
				<Box on:visible={onVisible} on:invisible={onInvisible} name={"Roadmap"} direction={'flex-row'}>
					{#each content.de.roadMap.steps as roadMapStep, f }
						{#if currentSection == "Roadmap"}
							<div class="col-lg-3" name="step" in:fly="{{y: 300, delay: f * 700, duration: 700, elasticIn}}" out:fly="{{y: 300, delay: f * 700, duration: 700, elasticOut}}">
							<div class="icon active">
								<img use:lazyLoad={roadMapStep.iconSrc} src={roadMapStep.iconSrc} alt="Roadmap Icon" />
							</div>
							<h2>{roadMapStep.headline}</h2>
							<p>{roadMapStep.text}</p>
							</div>
						{/if}
					{/each}
					<div slot="cta">
						<a href="#logoSvg" type="button">Mitwirken</a>
					</div>
				</Box>
			</div>
		</Flexbox>
	</section>
</main>

<FixedMenu modalIsOpen={selectedLink} align={'bottom'}>
<div slot="modal">
	<header class="flex-box">
		<img src="{selectedLink.imgSrc}" width="24px" height="24px" alt="icon chat" />
			<h4>{selectedLink.title}</h4>
		<button class="close-button" on:click={() => selectedLink = false}>
			<svg id="icon-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 121.31 122.876">
				<path d="{close}" />
			</svg>
		</button>
	</header>
	<svelte:component this={Widgets[selectedLink.dialogContent]} />
</div>

{#if showMenu}
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
					if (selectedLink == link) {
						selectedLink = undefined;
					} else {
						selectedLink = link;
					}
				}}
				on:keydown={keyEventListener}>
				<span class="index-label" aria-label="menu-index-{index + 1}" in:fade>
					{index + 1}
				</span>
				<img src={link.imgSrc} alt={link.alt} />
				{link.title}
			</a>
		</slot>
	{/each}
{/if}
</FixedMenu>

<BackgroundMaks></BackgroundMaks>
<AnimatedBackground></AnimatedBackground>

<style>
.fixed-menu-icon {
	width: 57.4px;
	height: 52.4px;
	display: flex;
	line-height: 1;
	border-radius: 15px;
	transition: all 0.3s;
	text-align: center;
	font-size: 10px;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
}
.fixed-menu-icon > img {
	width: 28px; height: 28px;
}

.index-label {
    position: absolute;
    top: 0;
    right: 3px;
    width: 6px;
    line-height: 6px;
    font-size: 70%;
    border-radius: 5px;
    background: rgba(0,0,0,0.2);
    padding: 3px;
}

</style>