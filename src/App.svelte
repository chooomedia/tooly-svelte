<script context="module">
	import Chat from './widgets/Chat.svelte';
	import TrackingSettings from './widgets/TrackingSettings.svelte';
	export const Widgets = {
		"Chat": Chat,
		"TrackingSettings": TrackingSettings
	}
</script>

<script>
	import { darkmodestore } from './stores.js';
	import Header from './Header.svelte';
	import Flexbox from './Flexbox.svelte';
	import { content } from './content.js';
	import { lazyLoad } from './lazyload.js';
	import CtaBox from './Ctabox.svelte';
	import Box from './Box.svelte';
	import Countdown from './Countdown.svelte';
	import FixedMenu from './FixedMenu.svelte';
	import Fooorms from './Fooorms.svelte';
	import ImageBubbles from './ImageBubbles.svelte';
	import AnimatedBackground from './Animated-background.svelte';
	import BackgroundMaks from './Background-maks.svelte';
	import StickyContent from './StickyContent.svelte';
	import { elasticIn, elasticOut } from 'svelte/easing';
    import { fly, fade } from 'svelte/transition';
  	import Ctabox from './Ctabox.svelte';

	let stickToTop = true;
	let currentSection = "Forms";

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
</script>

<Header brandName={'Tooly'}></Header>
<main class="col-xs-12 col-lg-12">
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
				<Box on:visible={onVisible} on:invisible={onInvisible} name={"Forms"} direction={'flex-column'} height={100}>
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
				<Box on:visible={onVisible} on:invisible={onInvisible} name={"Steps"} direction={'row-wraped'} height={100}>
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
			</div>
		</Flexbox>
	</section>
	<section id="optional">
		<CtaBox headline={content.de.roadMap.headline} subline={content.de.roadMap.subline} boxed button={'Jetzt mitmachen'}></CtaBox>
		<Box on:visible={onVisible} on:invisible={onInvisible} name={"Roadmap"} direction={'row'} height={33}>
			{#each content.de.roadMap.steps as roadMapStep, f }
				{#if currentSection == "Roadmap"}
					<div class="col-lg-3" name="step" in:fly="{{y: 300, delay: f * 700, duration: 700, elasticIn}}" out:fly="{{y: 300, delay: f * 700, duration: 700, elasticOut}}">
					<div class="icon">
						<img use:lazyLoad={roadMapStep.iconSrc} src={roadMapStep.iconSrc} alt="Roadmap Icon" />
					</div>
					<h2>{roadMapStep.headline}</h2>
					<p>{roadMapStep.text}</p>
					</div>
				{/if}
			{/each}
		</Box>
	</section>
</main>

<FixedMenu align={'bottom'}>
	<div slot="modal" let:selectedLink={selectedLink}>
		<svelte:component this={Widgets[selectedLink.dialogContent]}/>
	</div>

	<div class="fixed-menu-icon" slot="item" let:link={link} in:fly={{y: 57, duration: 300, delay: link?.id	 * 100}}>
		<span class="index-label" aria-label="menu-index-{link?.id}">
			{link?.id}
		</span>
		<img style="width: 28px; height: 28px;" src={link?.imgSrc} alt={link?.alt} />
		{link?.title}
	</div>
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

@media screen and (max-width:768px) {
	.index-label {
		display: none;
	}
}
</style>