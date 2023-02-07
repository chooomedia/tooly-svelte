<!--<svelte:head>
	<link rel="stylesheet" href="http:/localhost:8080/dark-theme.css">
</svelte:head>-->

<script>
	import ButtonDarkmode from "./Button-darkmode.svelte";
</script>

<nav id="Darkmode">
	<ButtonDarkmode>
		Dark mode
	</ButtonDarkmode>
</nav>

<style>
#Darkmode {
	box-sizing: border-box;
	text-align:left;
	z-index: 100;
}
</style>