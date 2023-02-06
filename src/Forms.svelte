<script>
	let name = '';
	let email = '';
	let phone = '';
	let optin = false;
	let answer = false;

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

<div class="et_pb_contact_form_container clearfix">
	<div class="et-pb-contact-message">
		
	</div>
	<form on:submit={handleSubmit} class="et_pb_contact_form clearfix">
		<div class="et_pb_contact_field">
			<label for="name">Dein Name</label>
			<input type="text" id="name" bind:value={name} placeholder="Dein Name" />
		</div>
		<div class="et_pb_contact_field">
			<label for="email">Deine E-Mail-Adresse *</label>
			<input type="email" id="email" bind:value={email} placeholder="Deine E-Mail-Adresse *" />
		</div>
		<div class="et_pb_contact_field">
			<label for="phone">Deine Telefonnummer</label>
			<input type="text" id="phone" bind:value={phone} placeholder="Deine Telefonnummer" />
		</div>
		<div class="et_pb_contact_field">
			<label for="optin">Neues Feld</label>
			<input type="checkbox" id="optin" bind:checked={optin} />
			<label for="optin">Ich habe die Bestimmungen zum Datenschutz gelesen und bin damit einverstanden * <a
					href="#datenschutz-erklaerung" target="_blank">Datenschutzerklärung...</label>
		</div>
		<button type="submit" disabled={!answer}>Submit</button>
	</form>
</div>


<style>
	input {
		display: block;
		width: 500px;
		max-width: 100%;
	}
</style>