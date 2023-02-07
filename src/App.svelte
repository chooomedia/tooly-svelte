<script>
	import Header from './Header.svelte';
	import Flexbox from './Flexbox.svelte';
	import Image from './Image.svelte';
	import Fooorms from './Fooorms.svelte';
	import Chat from './Chat.svelte';
	import CtaBox from './Ctabox.svelte';
	import AnimatedBackground from './Animated-background.svelte';
	import { crossfade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import Countdown from './Countdown.svelte';

	let isOpen = false;

	let landingpageHeadline= 'Sprachunterstützung für einfachere Arbeit kostenlos anmelden und exklusiven Zugang sichern';
	let landingpageSubline = 'Schließe Verständigungslücken ab März mit Tooly. Jetzt kostenlos anmelden und deine Arbeit revolutionieren.';
	
	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 900),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 1400,
				easing: tweened,
				css: t => `transform: ${transform} scale(${t});`
			};
		}
	});

	const closeBox = () => {
		isOpen = false;
	};
</script>

<main>
	<Header brandName={'Tooly'}></Header>
	<section class="row et_pb_section et_pb_section_0 et-light-mode-capable et_pb_section_parallax et_pb_with_background et_section_regular">
		<Flexbox>
			<div slot="left">
				<Image ImgSrc="https://tooly.work/wp-content/uploads/2023/01/tooly-first-showcase-01-2023-1.png?run"}></Image>
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
	<div class="et_pb_background_mask"></div>
	<AnimatedBackground></AnimatedBackground>

	<section id="Chat" 
		in:receive="{{isOpen}}" 
		out:send="{{isOpen}}">
		<Chat></Chat>
	</section>
</main>

<style>
	.et_pb_background_mask {
		background-image: url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0iIzFjMWMxYyIgdmlld0JveD0iMCAwIDE5MjAgMTQ0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkyMCwxMDYxLjEyYy0zOS4xNi02LjY0LTEyNC4zOC00OS45MS0yMjktMTAxLjEyLTI4MC4zMS0xMzcuMjEtMzYwLDE2OC45LTczMSwxNjguOUM2NjUsMTEyOC45LDQxOSw4NjMsNDE5LDYxNyw0MTksMTQxLDg2OC42NiwwLDg2OS44OCwwSDBWMTQ0MEgxOTIwWiIvPjwvc3ZnPg==);
		filter: invert(1);
	}
	.et_pb_background_mask {
		background-size: calc(100% + 2px) calc(100% + 2px);
		background-repeat: no-repeat;
		background-position: 50%;
		overflow: hidden;
	}
	.et_pb_background_mask {
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
</style>