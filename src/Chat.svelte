<script>
	import Eliza from 'elizabot';
	import { quartInOut } from 'svelte/easing';

	function animateWidthHeight({
		node,
		from = { width: 0, height: '100%' },
		to = { width: "auto", height: "auto" }
	}) {
		const style = getComputedStyle(node);
		const width = style.width;
		const height = style.height;

		return {
		duration: 1200,
		easing: quartInOut,
		css: (t) => {
			node.style.width = t === 1 ? to.width : `${from.width + (t * (width - from.width))}px`;
			node.style.height = t === 1 ? to.height : `${from.height + (t * (height - from.height))}px`;
		},
		};
	}
	
	let eliza = new Eliza();
	let comments = [{
		author: 'eliza',
		text: eliza.getInitial()
	}];

	let isOpen = false;
	let show = true;
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

<div class="chat fade-width-height-transition" 
	in:animateWidthHeight={show}
	class:enlarge-box={isOpen}
	class:fade-width-height-transition-enter={show}
	class:fade-width-height-transition-enter-active={show}
	class:fade-width-height-transition-leave-to={!show}
	class:fade-width-height-transition-leave-active={!show}>
	{#if isOpen}
	<div class="flex-box">
		<h4 style="margin-bottom:8px;"><img src="/icons/icons8-chat-100.png" width="30px" height="30px" alt="icon chat" /> Chat</h4>
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
		<button class="close-button fixed-menu-icon" on:click={() => isOpen = true}>
			<img width="30px" height="30px" src="/icons/icons8-chat-100.png" alt="icon chat" />
		</button>
	</div>
	{/if}
	</div>

  <style>
	.flex-box {
		display: flex;
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
 