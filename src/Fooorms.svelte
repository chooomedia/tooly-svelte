<script>
	export let child_slug = 'et_pb_contact_field';
	export let child_item_text = 'Field';
  
	let main_css_element = 'et_pb_contact_form_container';
	let settings_modal_toggles = {
	  General: {
		toggles: {
		  main_content: 'Text',
		  email: 'Email',
		  elements: 'Elements',
		  redirect: 'Redirect',
		  spam: 'Spam Protection'
		}
	  }
	};

	let name = '';
	let email = '';
	let phone = '';
	let optin = false;
	let answer = false;
	let counter = 0;

	const handleSubmit = async event => {
		event.preventDefault();
		const response = await fetch('https://n8n.chooomedia.com/webhook/37e1ae9b-62e1-414d-9856-f69a081a154a', {
			method: 'POST',
			body: JSON.stringify({
				name,
				email,
				phone,
				optin
			})
		});
		const data = await response.json();
		console.log(data);
	};
</script>

<div class="{main_css_element}">
	<div class="et-pb-contact-message">
		
	</div>
	<form id="Fooorm" on:submit={handleSubmit} class="et_pb_contact_form clearfix">
		<p class="et_pb_contact_field {child_slug}_{counter++}">
			<label for="name">Dein Name</label>
			<input type="text" id="name" bind:value={name} placeholder="Dein Name" />
		</p>
		<p class="et_pb_contact_field {child_slug}_{counter++}">
			<label for="email">Deine E-Mail-Adresse *</label>
			<input class="{child_item_text}" type="email" id="email" bind:value={email} placeholder="Deine E-Mail-Adresse *" />
		</p>
		<p class="et_pb_contact_field {child_slug}_{counter++}">
			<label for="phone">Deine Telefonnummer</label>
			<input class="{child_item_text}" type="text" id="phone" bind:value={phone} placeholder="Deine Telefonnummer" />
		</p>
		<p class="{child_slug}_{counter++} flex-box">
			<input style="max-width:16px;" type="checkbox" id="optin" bind:checked={optin} />
			<label class="{child_item_text}" for="optin">Ich habe die Bestimmungen zum Datenschutz gelesen und bin damit einverstanden * <a
					href="#datenschutz-erklaerung" target="_blank">Datenschutzerklärung...</label>
		</p>
		<p class="et_pb_contact_field {child_slug}_{counter++} flex-box">
			<button type="submit" class="et_pb_contact_submit et_pb_button" disabled={!answer}>Absenden</button>
		</p>
	</form>
</div>

<style>
	input {
		box-sizing: border-box;
		width: 100%;
	}

	.et_pb_contact_submit {
		border-radius: 15px;
		line-height: 30px;
		font-size: 22px;
		font-family: 'Slabo27px', sans-serif;
		font-weight: 700;
		padding: 10px 2rem;
		cursor: pointer;
	}

	button {
		margin-top: 15px;
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