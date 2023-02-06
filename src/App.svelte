<script>
	import HelloStorebindings from './Hello-Storebindings.svelte';
	import Chat from './Chat.svelte';
	import DarkMode from './Dark-mode.svelte';
	import Forms from './Forms.svelte';
	import AnimatedBackground from './Animated-background.svelte';
</script>

<main>
	<section id="Hello-storebindungs">
		<HelloStorebindings></HelloStorebindings>
		<DarkMode></DarkMode>
	</section>

	<section id="Fooorms">
		<Forms></Forms>
	</section>

	<section id="Chat">
		<Chat></Chat>
	</section>

	<!--<section id="Forms">
		<Forms></Forms>
	</section>-->

	<!--<section id="Opt-in">
		<label>
			<input type=checkbox checked={user.subscriped}>
			Yes! Send me regular emails
		</label>
		
		{#if user.subscriped}
			<p>Thank you. We will bombard your inbox and sell your personal details.</p>
		{:else}
			<p>You must opt-in to continue. If you're not paying, you're the product.</p>
		{/if}
		
		<button disabled={!user.subscriped}>
			Subscribe
		</button>
		
		<p>{numberA} + {numberB} = {numberA + numberB}</p>
	</section>-->
</main>
<AnimatedBackground></AnimatedBackground>