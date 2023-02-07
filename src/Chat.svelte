<script>
	import Eliza from 'elizabot';
	let eliza = new Eliza();
	let comments = [{
		author: 'eliza',
		text: eliza.getInitial()
	}];
	let isOpen = false;
	let input;

	setTimeout(() => {
		isOpen = true;
	}, 7000);

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

	const closeBox = () => {
		isOpen = false;
	};
</script>

<div class="chat">
	{#if isOpen}
	<div class="flex-box">
		<h4 style="margin-bottom:8px;">💬 Chat</h4>
		<button class="close-button" on:click={closeBox}>
			<svg id="icon-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 121.31 122.876" enable-background="new 0 0 121.31 122.876" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"/></g></svg>
		</button>
	</div>
		<div class="scrollable">
		{#each comments as comment}
			<article class={comment.author}>
			<span>{comment.text}</span>
			</article>
		{/each}
		</div>
		<input
		on:keydown={handleKeydown}
		bind:this={input} placeholder="Nachricht schreiben..."
	/>
	{:else}
	<div class="flex-box">
		<button class="close-button" on:click={() => isOpen = true}><h4>💬</h4></button>
	</div>
	{/if}
	</div>

  <style>
	.flex-box {
		display: flex;
		max-height: 33.5px;
		align-content: center;
		align-items: center;
	}

	.close-button {
		max-height: 22px;
		padding: 0;
		border: none;
		background: transparent;
		cursor: pointer;
	}
	@media screen and (max-width:768px) {
		.chat .flex-box {
			margin: 0 auto;
		}
	}
  </style>
 