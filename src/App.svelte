<script>
	import HelloStorebindings from './Hello-Storebindings.svelte';
	import Inner from './Inner.svelte';
	import CustomButton from './CustomButton.svelte';
	import Nested from './Nested.svelte';
	import Thing from './Thing.svelte';
	import Forms from './Forms.svelte';
	import Todos from './Todos.svelte';
	import Video from './Video.svelte';
	import Customizer from './Customizer.svelte';
	import Canvas from './Canvas.svelte';
	import PhotoAlbum from './Photo-album.svelte';
	import {marked} from 'marked';
	import Timer from './Timer.svelte';
	import Chat from './Chat.svelte';
	import DataFromOutside from './Data-from-outside.svelte';
	import Counter from './Counter.svelte';
	import ProgressBar from './Progress-bar.svelte';
	import CheckFade from './Check-fade.svelte';
	import CustomTransitions from './Custom-transitions.svelte';
	import WriteText from './Write-text.svelte';
	import DarkMode from './Dark-mode.svelte';
	import AnimatedBackground from './Animated-background.svelte';
  	/*import Flexbox from './Flexbox.svelte';*/

	export let count = 0;
	$: doubled = count * 2;
	let user = { subscriped: false };
	let promise = getData();
	let m = { x: 0, y: 0 };
	let numberA;
	let numberB;
	let inputTextarea = `Some words are *italic*, some are **bold**`;

	let menu = [
		'Cookies and cream',
		'Mint choc chip',
		'Raspberry ripple'
	];

	let timerOpen = false;
	let timerSeconds = 0;

	const toggle = () => (timerOpen = !timerOpen);
	const toggleSubscriped = () => (user.subscriped = !user.subscriped);

	const toggleTimer = () => (timerOpen = !timerOpen);
	const handleTick = () => (timerSeconds += 1);

	let scoops = 1;
	let flavours = ['Mint choc chip'];

	function join(flavours) {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	}


	/*$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
		console.log (count);
	}*/
	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	function handleMessage(event) {
		alert(event.detail.text);
	}

	async function getData() {
		const res = await fetch(`http://localhost:8080/number.json`);
		const dataObject = await res.json();

		if (res.ok) {
			return dataObject;
		} else {
			throw new Error(dataObject);
		}
	}

	function handleClick() {
		promise = getData();
		things = things.slice(1);
		alert('no more alerts');
	}

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
		numberA = m.x;;
		numberB = m.y
	}

	function incrementCount() {
		count += 1;
	}

	function addNumber() {
		numbers[numbers.length] = numbers.length + 1;
	}
</script>

<main>
	<section id="Hello-storebindungs">
		<HelloStorebindings></HelloStorebindings>
		<DarkMode></DarkMode>
	</section>

	<section id="Write-text">
		<WriteText></WriteText>
	</section>

	<section id="Custom-transitions">
		<CustomTransitions></CustomTransitions>
	</section>
	
	<!--<section id="Actual-time">
		<DataFromOutside></DataFromOutside>
	</section>-->

	<section id="Login">
		<h2>Login User</h2>
		{#if user.subscriped}
			<button on:click={toggleSubscriped}>
				Log out
			</button>
		{:else}
			<button on:click={toggleSubscriped}>
				Log in
			</button>
		{/if}
	</section>

	<section id="Animated-input">
		<ProgressBar></ProgressBar>
		<CheckFade></CheckFade>
	</section>

	<!--<section id="Counter">
		<Counter></Counter>
	</section>-->

	<section id="Chat">
		<Chat></Chat>
	</section>

	<!--<section id="Video">
		<Video></Video>
	</section>-->

	<!--<section id="Canvas">
		<Canvas></Canvas>
	</section>-->

	<!--<section id="Timer">
		<button on:click={toggleTimer}>{timerOpen ? 'Close' : 'Open'} Timer</button>
		<p>
			The Timer component has been open for
			{timerSeconds} {timerSeconds === 1 ? 'second' : 'seconds'}
		</p>
		{#if timerOpen}
		<Timer callback={handleTick} />
		{/if}
	</section>-->
	
	<!--<section id="Photo-album">
		<PhotoAlbum></PhotoAlbum>
	</section>-->

	<section id="Customizer">
		<Customizer></Customizer>
	</section>

	<section id="Todo-list">
		<Todos></Todos>
	</section>
	
	<!--<section id="Ice-Flavours">
		{#each menu as flavour}
			<label>
				<input type=checkbox bind:group={flavours} name="flavours" value={flavour}>
				{flavour}
			</label>
		{/each}

		<select multiple bind:value={flavours}>
			{#each menu as flavour}
				<option value={flavour}>
					{flavour}
				</option>
			{/each}
		</select>

		<input bind:value={name}>
		<label>
			<input type=radio group={scoops} name="scoops" value={1}>
			One scoop
		</label>
		
		<label>
			<input type=radio group={scoops} name="scoops" value={2}>
			Two scoops
		</label>
		
		<label>
			<input type=radio group={scoops} name="scoops" value={3}>
			Three scoops
		</label>
		<h2>Flavours</h2>

		<label>
			<input type=checkbox group={flavours} name="flavours" value="Cookies and cream">
			Cookies and cream
		</label>

		<label>
			<input type=checkbox group={flavours} name="flavours" value="Mint choc chip">
			Mint choc chip
		</label>

		<label>
			<input type=checkbox group={flavours} name="flavours" value="Raspberry ripple">
			Raspberry ripple
		</label>

		{#if flavours.length === 0}
			<p>Please select at least one flavour</p>
		{:else if flavours.length > scoops}
			<p>Can't order more flavours than scoops!</p>
		{:else}
			<p>
				You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
				of {join(flavours)}
			</p>
		{/if}

		<label>
			<input type=number bind:value={numberA} min=0 max=10>
			<input type=range bind:value={numberA} min=0 max=10>
		</label>
		
		<label>
			<input type=number value={numberB} min=0 max=10>
			<input type=range value={numberB} min=0 max=10>
		</label>
	</section>-->

	<!--<section id="Content-Editable">
		<div
			contenteditable="true"
			bind:innerHTML={inputTextarea}>
		</div>
	</section>-->

	<!--<section id="Forms">
		<Forms></Forms>
	</section>-->

	<!--<section id="Flexbox">
		<Flexbox width={100} height={100} align={'center center'}>
		</Flexbox>
	</section>-->

	<!--<section id="html-marked">
		{@html marked(inputTextarea)}
		<textarea bind:value={inputTextarea}></textarea>
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

	<!--<section id="Inner-template">
		<Inner on:message={handleMessage}/>
	</section>-->

	<!--<section id="Nested-template">
		<Nested answer={42}/>
		<Nested/>
	</section>-->

	<!--<section id="Loop-templates">
		<button on:click={handleClick}>
			Remove first thing
		</button>
		{#each things as thing (thing.id)}
			<Thing name={thing.name}/>
		{/each}
	</section>-->

	<!--<section id="Custom-button">
		<CustomButton on:click={handleClick}/>
	</section>-->

	<!--<section id="Async">
		{#await promise}
			<p>...waiting</p>
		{:then dataObject}
			<p>The number is {dataObject.number}</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</section>-->

	<!--<section id="Random-number"  on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
		<button>
			generate random number
		</button>
		<button on:click|once={handleClick}>
			No Alerts!
		</button>
	
		<p>{promise}</p>
	</section>-->

	<section id="Mouseover-event" on:mousemove={handleMousemove}>
		<div class="mousefield">
			The mouse position is {m.x} x {m.y}
		</div>
	</section>
	
	<!--<section id="Doubled">
		<p>{count} doubled is {doubled}</p>
		<button on:click={incrementCount}></button>
	</section>-->
</main>
<AnimatedBackground></AnimatedBackground>