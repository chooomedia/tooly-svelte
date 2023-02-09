<script>
	//import { darkmodestore } from './stores.js';
	import Header from './Header.svelte';
	import Flexbox from './Flexbox.svelte';
	import Image from './Image.svelte';
	import Fooorms from './Fooorms.svelte';
	import Chat from './Chat.svelte';
	import CtaBox from './Ctabox.svelte';
	import AnimatedBackground from './Animated-background.svelte';
	import Countdown from './Countdown.svelte';
  	import FixedMenu from './Fixed-menu.svelte';
	import BackgroundMaks from './Background-maks.svelte';

	let darkmodestore = JSON.parse(localStorage.getItem("darkmodeState"));

	let landingpageHeadline= 'Sprachunterstützung für einfachere Arbeit kostenlos anmelden und exklusiven Zugang sichern';
	let landingpageSubline = 'Schließe Verständigungslücken ab März mit Tooly. Jetzt kostenlos anmelden und deine Arbeit revolutionieren.';

	let signal = '';
	const listener = () => {
		const value = JSON.parse(localStorage.getItem("darkmodeState"));
		if (!value) return;
		signal = value;
	};
</script>

<main>
	<Header brandName={'Tooly'}></Header>
	<p>{signal}</p>
	<!--et_pb_section et_pb_section_0 et-light-mode-capable et_pb_section_parallax et_pb_with_background et_section_regular-->
	<section id="landingPage" class="row">
		<Flexbox>
			<div slot="left" on:storage={listener}>
				{#if darkmodestore}
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
		<AnimatedBackground></AnimatedBackground>
	</section>
	<section id="stepsPage" class="row"></section>
	<section id="appPage" class="row"></section>

	<FixedMenu align={'bottom'}>
		<slot name="button1">
			<a href="#cookie-consent" class="icon-cookie fixed-menu-icon" target="_blank" rel="noreferrer" title="Button Menu">
				<img src="/icons/icons8-cookies-100.png" alt="icon cookies" />
			</a>
		</slot>
		<slot name="button2">
			<a href="https://toolyapp.slack.com/archives/C04NCA68L9F" class="icon-slack fixed-menu-icon" target="_blank" rel="noreferrer" title="Button Menu">
				<img src="/icons/icons8-slack-new-100.png" alt="icon slack" />
			</a>
		</slot>
		<slot name="button3">
			<a href="https://www.instagram.com/tooly.work/" class="icon-insta fixed-menu-icon" target="_blank" rel="noreferrer" title="Button Menu">
			<img src="/icons/icons8-instagram-100.png" alt="icon instagram" />
		</a>
		</slot>
		<slot name="button4">
			<a href="https://www.facebook.com/tooly.work" class="icon-fb fixed-menu-icon" target="_blank" rel="noreferrer" title="Button Menu">
			<img src="/icons/icons8-facebook-100.png" alt="icon facebook" />
		</a>
		</slot>
		<slot name="button5">
			<div id="Chat" class="icon-chat">
				<Chat></Chat>
			</div>
		</slot>
	</FixedMenu>
</main>
<BackgroundMaks></BackgroundMaks>

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