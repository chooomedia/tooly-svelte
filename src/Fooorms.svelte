<script>
	export let child_slug = 'et_pb_contact_field';
	export let child_item_text = 'Field';
	import { content } from './content.js';
  
	let main_css_element = 'et_pb_contact_form_container';
	let counter = 0;

	const handleSubmit = async event => {
		console.log(event);
		const proxyURL = 'https://cors-anywhere.herokuapp.com/';
		const targetURL = 'https://n8n.chooomedia.com/webhook-test/tooly-svelte-02-2023-live';
		const response = await fetch(proxyURL + targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: JSON.stringify({
				name: inputName.value,
				email: email.value,
				phone: phone.value
			})
		});
		const data = await response.json();
		console.log(data);
	};

	let optin = false;

	const toggleChecked = () => {
		optin = !optin;
	}
</script>

<div class="{main_css_element}">
	<div class="et-pb-contact-message"></div>
	<form id="Fooorm" on:submit={handleSubmit} class="et_pb_contact_form clearfix">
		{#each content.de.fields as field, counter}
			{#if field.inputType != 'email'}
			<p class="{child_slug} {child_slug}_{counter + 1}">
				<label for={field.inputName}>{field.placeholder}</label>
				<input type="text" name={field.inputName} bind:value={field.value} placeholder={field.placeholder} />
			</p>
			{:else}
			<p class="{child_slug} {child_slug}_{counter + 1}">
				<label for={field.inputName}>{field.placeholder}</label>
				<input type="email" name={field.inputName} bind:value={field.value} placeholder={field.placeholder} />
			</p>
			{/if}
		{/each}
		<p class="{child_slug} {child_slug}_{counter++} flex-box">
			<input style="max-width:30px;" type="checkbox" id="optin" on:click={toggleChecked} />
			<label class="{child_item_text}" for="optin">Ich habe die Bestimmungen zum Datenschutz gelesen und bin damit
				einverstanden * <a href="#datenschutz-erklaerung" target="_blank">Datenschutzerklärung anzeigen</label>
		</p>
		<p class="et_pb_contact_field {child_slug}_{counter++} flex-box">
			<button type="submit" class="et_pb_contact_submit et_pb_button" disabled={!optin ? 'disabled' : ''}>Absenden</button>
		</p>
	</form>
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
		background: #5dff31;
	}

	.et_pb_contact_submit:disabled {
		cursor: not-allowed;
		opacity: 0.33;
	}

	button {
		margin-top: 15px;
	}

	.et-pb-contact-message {
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