<script>
	import Eliza from 'elizabot';
	let eliza = new Eliza();
	let comments = [{
		author: 'eliza',
		text: eliza.getInitial()
	}];

	let input;

	const handleKeydown = (event) => {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;

			comments = [...comments, {
				author: 'user',
				text
			}];
			event.target.value = '';

			const reply = eliza.transform(text);
			setTimeout(() => {
				comments = [...comments, {
					author: 'eliza',
					text: reply
				}];
				isOpen = true;
				const div = document.querySelector(".scrollable");
				div.scrollTop = div.scrollHeight;
			}, 1000 + Math.random() * 500);
		}
	};

</script>

<div id="Chat" class="chat fade-width-height-transition">
	<div class="scrollable">
	{#each comments as comment}
		<article class={comment.author}>
		<span>{comment.text}</span>
		</article>
	{/each}
	</div>
	<input
	on:keydown={handleKeydown}
	bind:this={input} placeholder="Nachricht schreiben..."/>
</div>

<style>
	@media screen and (max-width:768px) {
		.chat .flex-box {
			margin: 0;
		}
	}
</style>
 