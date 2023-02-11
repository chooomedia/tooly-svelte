<script context="module">
	import Chat from './Chat.svelte';
	import CtaBox from './Ctabox.svelte';
	import Countdown from './Countdown.svelte';
	import FixedMenu from './Fixed-menu.svelte';
	import Fooorms from './Fooorms.svelte';
	import Image from './Image.svelte';
	export const Widgets = {
		"Chat": Chat,
		"CtaBox": CtaBox,
		"Countdown": Countdown,
		"FixedMenu": FixedMenu,
		"Fooorms": Fooorms,
		"Image": Image
	}
</script>

<script>
	import { darkmodestore } from './stores.js';
	import Header from './Header.svelte';
	import Flexbox from './Flexbox.svelte';
	import AnimatedBackground from './Animated-background.svelte';
	import BackgroundMaks from './Background-maks.svelte';
	import { close } from './shapes.js';
	import { links } from './links.js';
	import StickyContent from './StickyContent.svelte';

	let landingpageHeadline= 'Sprachunterstützung für einfachere Arbeit kostenlos anmelden und exklusiven Zugang sichern';
	let landingpageSubline = 'Schließe Verständigungslücken ab März mit Tooly. Jetzt kostenlos anmelden und deine Arbeit revolutionieren.';
	let stickToTop = true;

	/* This function reacts on every change of the block change "$darkmodestore" */
	$:{
		if ($darkmodestore) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}

	let selectedLink = undefined;
</script>

<Header brandName={'Tooly'}></Header>
<main>
	<!--et_pb_section et_pb_section_0 et-light-mode-capable et_pb_section_parallax et_pb_with_background et_section_regular-->
	<section id="landingPage">
		<Flexbox>
			<div slot="left">
				{#if $darkmodestore}
				<Image ImgSrc="/tooly-apple-watch-and-iphone-x-white-mockup-02-2023-1024x997px.png"></Image>
				{:else}
				<Image ImgSrc="/tooly-apple-watch-and-iphone-x-black-mockup-02-2023-1024x997px.png"></Image>
				{/if}
			</div>
			<div slot="right1">
				<CtaBox headline={landingpageHeadline} subline={landingpageSubline}></CtaBox>
			</div>
			<div slot="right2">
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
			</div>
			<div slot="right3">
				<Fooorms></Fooorms>
			</div>
		</Flexbox>
	</section>
	<section id="stepsPage">
		<Flexbox>
			<div slot="left" class="col-xs-6">
				<CtaBox headline={landingpageHeadline} subline={landingpageSubline}></CtaBox>
			</div>
			<div slot="right2" class="col-xs-6">
				<CtaBox headline={landingpageHeadline} subline={landingpageSubline}></CtaBox>
			</div>
		</Flexbox>
	</section>
	<!--
	<section id="appPage" class="row"></section>
	-->
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
	{#each links as link}
		<slot>
			<a 
				href={link.href}
				target={link.target}
				class={link.class}
				class:active = {selectedLink == link}
				rel={link.rel}
				title={link.title}
				on:click={() => {
					if (selectedLink == link) {
						selectedLink = undefined;
					} else {
						selectedLink = link;
					}
				}}>
				<img src={link.imgSrc} alt={link.alt} />
			</a>
		</slot>
	{/each}
</FixedMenu>
<BackgroundMaks></BackgroundMaks>
<AnimatedBackground></AnimatedBackground>

<style>
	.fixed-menu-icon {
		width: 56px; 
		height: 56px;
		line-height: 4;
		border-radius: 15px;
		background: #f5f5f5;
		border: 2px solid rgba(77, 77, 77, 0.1568627451);
		transition: all 0.3s;
		text-align: center;
		margin: 0 auto;
	}
	.fixed-menu-icon > img {
		width: 30px; height: 30px;
	}
</style>