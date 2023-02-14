<script>
	export let child_slug = 'et_pb_contact_field';
	export let child_item_text = 'Field';
	import { content } from './content.js';
	import { fly, fade } from 'svelte/transition';
	import { bounceIn, bounceOut } from 'svelte/easing';
	import AnimatedMail from './widgets/animated-mail.svelte';
  	import { onMount } from 'svelte';
  
	let main_css_element = 'et_pb_contact_form_container';
	let counter = 0;
	let optin = false;
	let formState = undefined;
	let formName, formEmail, formPhone;

	const queryString = window.location.search; // returns "?foo=bar&baz=qux"

	onMount(() => {
		if (queryString) {
			formState = queryString == "?success"
			? "success"
			: queryString == "?error"
				? "error"
				: undefined;
		}
		console.log(queryString);
	});


	const handleSubmit = async (event) => {
		console.log(event);
		const proxyURL = 'https://cors-anywhere.herokuapp.com/';
		const targetURL = 'https://n8n.chooomedia.com/webhook-test/tooly-svelte-02-2023-live';
		const response = await fetch(proxyURL + targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			},
			body: JSON.stringify({
				name: formName.value,
				email: formEmail.value,
				phone: formPhone.value,
			}),
		});

		if (response.ok) {
			formState = 'success';
		} else {
			formState = 'error';
			setTimeout(() => {
				formInitial = undefined;
			}, 1400);
		}
	};

	const toggleChecked = () => {
		optin = !optin;
	}
</script>

<div class="{main_css_element}">
	{#if formState }
	<div in:fly={{y: 50, duration: 700, bounceIn}} out:fly={{y: 50, duration: 700, bounceOut}} class="et-pb-contact-message success">
		<AnimatedMail state={formState}></AnimatedMail>
		<h2 class='text-{formState}'>{content.de.messages[formState].headline}</h2>
		<p>{content.de.messages[formState].text}</p>
		{#if formState == 'success' }
			<button class="cta-button">E-Mails öffnen</button>
		{:else}
			<button class="et_pb_submit cta-button">
				<a style="color:#212121;" href="mailto:hi@tooly.work?body=Hallo Tool Support%20Ich%20konnte%20eine%20Anfrage%20nicht%20versenden.%20Bitte%20schreibt%20mir%20damit%20wir%20eine%20Lösung%20finden.">
					Support anschreiben
				</a>
			</button>
		{/if}
	</div>
	{/if}

	{#if !formState }
	<form id="Fooorm" on:submit|preventDefault={handleSubmit} class="et_pb_contact_form clearfix" in:fly={{y: 20, duration: 700, bounceIn}} out:fly={{y: 20, duration: 700, bounceOut}}>
		{#each content.de.fields as field, counter}
			{#if field.inputType == 'text'}
			<p class="{child_slug} {child_slug}_{counter + 1}">
				<label for={field.inputName}>{field.placeholder}</label>
				<input type="text" id={field.inputName} name={field.inputName} bind:this={formName} bind:value={field.value} placeholder={field.placeholder} />
			</p>
			{/if }
			{#if field.inputType == 'email'}
			<p class="{child_slug} {child_slug}_{counter + 1}">
				<label for={field.inputName}>{field.placeholder}</label>
				<input type="email" id={field.inputName} name={field.inputName} bind:this={formEmail} bind:value={field.value} placeholder={field.placeholder} required/>
			</p>
			{/if}
			{#if field.inputType == 'tel'}
			<p class="{child_slug} {child_slug}_{counter + 1}">
				<label for={field.inputName}>{field.placeholder}</label>
				<input type="tel" id={field.inputName} name={field.inputName} bind:this={formPhone} bind:value={field.value} placeholder={field.placeholder} />
			</p>
			{/if}
		{/each}
		<p class="{child_slug} {child_slug}_{counter++} flex-box">
			<input style="max-width:30px;" type="checkbox" id="optin" on:click={toggleChecked} />
			<label class="{child_item_text}" for="optin">Ich habe die Bestimmungen zum Datenschutz gelesen und bin damit
				einverstanden *<br><a href="#datenschutz-erklaerung" target="_blank">Datenschutzerklärung anzeigen</label>
		</p>
		<p class="et_pb_contact_field {child_slug}_{counter++} flex-box">
			<button type="submit" class="et_pb_contact_submit et_pb_button" disabled={!optin ? 'disabled' : ''}>Absenden</button>
		</p>
	</form>
	{/if}
</div>

<style>
	input {
		box-sizing: border-box;
		width: 100%;
	}
	.et_pb_contact_submit {
		margin: 0 auto;
		border-radius: 15px;
		line-height: 30px;
		font-size: 22px;
		font-family: 'Slabo27px', sans-serif;
		font-weight: 700;
		padding: 10px 2rem;
		cursor: pointer;
		border: 2px solid #5dff31;
	}

	.et_pb_contact_submit:disabled {
		cursor: not-allowed;
		opacity: 0.33;
	}

	button {
		margin-top: 15px;
	}

	.et-pb-contact-message {
		margin: 30px auto 0 auto;
		width: 100%;
		line-height: 60px;
		font-size: 22px;
		color: #f5f5f5;
		text-align: center;
	}

	@media screen and (max-width:768px) {
		form {
			margin: 0 auto;
			max-width: unset;
			width: 100%;
			padding-bottom: 2rem;
		}

		input {
			margin: 0 auto;
		}
	}
</style>