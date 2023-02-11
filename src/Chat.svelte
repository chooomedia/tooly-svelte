<script>
	import Eliza from 'elizabot';
	let eliza = new Eliza();
	let comments = [{
		author: 'eliza',
		text: eliza.getInitial()
	}];

	let input;

	/*setTimeout(() => {
		isOpen = true;
	}, 7000);*/

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
	.flex-box {
		display: flex;
		align-content: center;
		align-items: center;
		height: 48px;
	}
	.fade-width-height-transition-enter,
	.fade-width-height-transition-leave-to {
		width: 0;
		height: 0;
		overflow: hidden;
	}

	.enlarge-box {
		width: 320px;
	}

	.fade-width-height-transition-enter-active,
	.fade-width-height-transition-leave-active {
		transition: width 400ms ease, height 400ms ease;
	}

	@media screen and (max-width:768px) {
		.chat .flex-box {
			margin: 0;
		}
	}
  </style>
 