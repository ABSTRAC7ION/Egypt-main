<script>
	// @ts-nocheck
	import '../app.css';
	import './navbar.scss';
	import LocomotiveScroll from 'svelte-locomotive-scroll';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />
</svelte:head>

<body>
	<nav id="navbar">
		<a href="/" data-link-alt="Discover Egypt" class="nav__link ">
			<span>Discover Egypt</span>
		</a>
		<a href="/" data-link-alt="Cities" class="nav__link">
			<span>Cities</span>
		</a>
	</nav>
	<LocomotiveScroll
		options={{
			smooth: true
		}}
		watch={[]}
	>
		<div class="intro" data-scroll-section>
			<ul>
				<li>Cairo</li>
				<li>Alexandria</li>
				<li>New Capital</li>
			</ul>
		</div>
	</LocomotiveScroll>
</body>

<style>
	.intro {
		height: 100vh;
		background-color: #2c3639;
	}
</style>
