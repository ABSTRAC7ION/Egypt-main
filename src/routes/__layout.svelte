<script>
	import '../app.css';
	import './navbar.scss';
	import LocomotiveScroll from 'svelte-locomotive-scroll';

	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isPageLoaded = false;
	onMount(() => {
		isPageLoaded = true;
	});
</script>

{#if !isPageLoaded}
	<div class="loader" transition:fly={{ y: 200 }} />
{/if}

<slot />

<style>
	.loader {
		background-color: #2c3639;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
	}
</style>
