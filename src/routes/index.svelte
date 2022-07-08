<script>
	// @ts-nocheck
	import '../app.css';
	import './navbar.scss';
	import LocomotiveScroll from 'svelte-locomotive-scroll';

	import { onMount } from 'svelte';

	onMount(async () => {
		console.log('mounted');
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />
</svelte:head>

<body>
	<LocomotiveScroll
		options={{
			smooth: true
		}}
		watch={[]}
	>
		<nav id="navbar">
			<a href="/" data-link-alt="Discover Egypt" class="nav__link ">
				<span>Discover Egypt</span>
			</a>
			<a href="/" data-link-alt="Cities" class="nav__link">
				<span>Cities</span>
			</a>
		</nav>
		<div data-scroll-section id="top-bg" class="h-80">
			<div data-scroll data-scroll-speed="3" class="flex flex-row content-center justify-center">
				<div class="flex flex-col content-center items-center">
					<h1 class="text-center egypt">E</h1>
				</div>
				<div class="flex flex-col content-center items-center justify-center">
					<h1 class="text-center egypt">G</h1>
				</div>
				<div class="flex flex-col content-center items-center justify-center">
					<h1 class="text-center egypt">Y</h1>
				</div>
				<div class="flex flex-col content-center justify-center">
					<h1 class="text-center egypt">P</h1>
				</div>
				<div class="flex flex-col content-center items-center justify-center">
					<h1 class="text-center egypt">T</h1>
				</div>
			</div>
		</div>
		<div data-scroll-section class="divider__large intro-img image-mask overflow-hidden">
			<img
				data-scroll-speed="3"
				data-scroll
				src="/home1.jpg"
				alt="Cairo"
				class="object-cover bg-fixed home1 w-screen"
				data-speed="0.8"
				data-lag="0"
			/>
		</div>
		<div data-scroll-section class="h-fit bg-white">
			<div data-scroll data-scroll-speed="1" class="padding-block">
				<img
					class=" h-52 object-cover w-72 absolute z-1 align-bottom object-bottom inset-top-right"
					src="/pharoh.jpg"
					alt="dessert"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-1"
				/>
				<h1 class="text-center text-clamp ">
					<p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1">
						A BEAUTIFULL COUNTRY FILLED WITH
					</p>

					<p data-scroll data-scroll-direction="horizontal" data-scroll-speed="1">
						<span class="inline-block relative">
							ENDLESS DESERTS,
							<img
								class=" h-52 object-cover w-72 absolute z-1 inset-x-1/2 align-bottom translate-center"
								src="/endless-desserts.jpg"
								alt="dessert"
							/>
						</span>
						HIGH MOUTAINS,
					</p>

					<p data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1">
						WIDE VALLEYS,

						<span class="inline-block relative">
							THE NILE RIVER,
							<img
								class=" h-52 object-cover w-72 absolute z-1 inset-x-1/2 align-bottom object-bottom"
								src="/nile-river.jpg"
								alt="dessert"
							/>
						</span>
					</p>

					<p data-scroll data-scroll-direction="horizontal" data-scroll-speed="1">
						AND VAST OCEANS
					</p>
				</h1>
			</div>
		</div>
		<div
			data-scroll-section
			class="overflow-hidden bg-white flex flex-row justify-center items-center intro"
		>
			<img
				data-scroll-speed="3"
				data-scroll
				src="/home2.jpg"
				alt="sphinx with pyramid background"
				class="object-top object-cover bg-fixed w-1/2 home2"
			/>
			<div data-scroll-speed="3" data-scroll class=" w-1/2 px-16 align-middle">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus consequatur
				sint, ducimus nostrum modi expedita? Ex eum animi atque veritatis, quas id voluptatum cum
				rem illo aut possimus veniam?
				<br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolorem illo, corrupti id
				voluptatum magnam tempora laborum autem, non aspernatur dolor libero perspiciatis minus ipsum
				voluptates porro distinctio dolores voluptas!
				<br /><br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur sint, hic qui quos quibusdam
				unde deserunt optio dolor obcaecati aut recusandae pariatur, accusantium sit aspernatur, placeat
				enim veritatis earum.
			</div>
		</div>
		<div data-scroll-section class="beach divider__small bg-white overflow-hidden container">
			<img
				data-scroll-speed="2"
				data-scroll
				src="/home3.jpg"
				alt="beach"
				class="image-mask object-cover w-10/12 object-center bg-fixed home3 overflow-hidden image-mask"
				data-speed="0.8"
				data-lag="0"
			/>
		</div>
		<div
			data-scroll-section
			class="mt-24 overflow-hidden bg-white flex flex-row justify-center items-center info"
		>
			<div data-scroll-speed="3" data-scroll class=" w-1/2 px-16 align-middle">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus consequatur
				sint, ducimus nostrum modi expedita? Ex eum animi atque veritatis, quas id voluptatum cum
				rem illo aut possimus veniam?
				<br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolorem illo, corrupti id
				voluptatum magnam tempora laborum autem, non aspernatur dolor libero perspiciatis minus ipsum
				voluptates porro distinctio dolores voluptas!
				<br /><br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur sint, hic qui quos quibusdam
				unde deserunt optio dolor obcaecati aut recusandae pariatur, accusantium sit aspernatur, placeat
				enim veritatis earum.
			</div>
			<img
				data-scroll-speed="3"
				data-scroll
				src="/home5.jpg"
				alt="sphinx with pyramid background"
				class="object-top object-cover bg-fixed w-1/2 home-end"
			/>
		</div>
		<div
			data-scroll-section
			class="overflow-hidden bg-white flex flex-row justify-center items-center info"
		>
			<img
				data-scroll-speed="3"
				data-scroll
				src="/home6.jpg"
				alt="sphinx with pyramid background"
				class="object-top object-cover bg-fixed w-1/2 home-end"
			/>
			<div data-scroll-speed="3" data-scroll class=" w-1/2 px-16 align-middle">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus consequatur
				sint, ducimus nostrum modi expedita? Ex eum animi atque veritatis, quas id voluptatum cum
				rem illo aut possimus veniam?
				<br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolorem illo, corrupti id
				voluptatum magnam tempora laborum autem, non aspernatur dolor libero perspiciatis minus ipsum
				voluptates porro distinctio dolores voluptas!
				<br /><br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur sint, hic qui quos quibusdam
				unde deserunt optio dolor obcaecati aut recusandae pariatur, accusantium sit aspernatur, placeat
				enim veritatis earum.
			</div>
		</div>
		<div
			data-scroll-section
			class="overflow-hidden bg-white flex flex-row justify-center items-center info"
		>
			<div data-scroll-speed="3" data-scroll class=" w-1/2 px-16 align-middle">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus consequatur
				sint, ducimus nostrum modi expedita? Ex eum animi atque veritatis, quas id voluptatum cum
				rem illo aut possimus veniam?
				<br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolorem illo, corrupti id
				voluptatum magnam tempora laborum autem, non aspernatur dolor libero perspiciatis minus ipsum
				voluptates porro distinctio dolores voluptas!
				<br /><br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur sint, hic qui quos quibusdam
				unde deserunt optio dolor obcaecati aut recusandae pariatur, accusantium sit aspernatur, placeat
				enim veritatis earum.
			</div>
			<img
				data-scroll-speed="3"
				data-scroll
				src="/home7.jpg"
				alt="sphinx with pyramid background"
				class="object-top object-cover bg-fixed w-1/2 home-end"
			/>
		</div>
		<div
			data-scroll-section
			class="overflow-hidden bg-white flex flex-row justify-center items-center info"
		>
			<img
				data-scroll-speed="3"
				data-scroll
				src="/home8.jpg"
				alt="sphinx with pyramid background"
				class="object-center object-cover bg-fixed w-1/2 home-end"
			/>
			<div data-scroll-speed="3" data-scroll class=" w-1/2 px-16 align-middle">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus consequatur
				sint, ducimus nostrum modi expedita? Ex eum animi atque veritatis, quas id voluptatum cum
				rem illo aut possimus veniam?
				<br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolorem illo, corrupti id
				voluptatum magnam tempora laborum autem, non aspernatur dolor libero perspiciatis minus ipsum
				voluptates porro distinctio dolores voluptas!
				<br /><br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur sint, hic qui quos quibusdam
				unde deserunt optio dolor obcaecati aut recusandae pariatur, accusantium sit aspernatur, placeat
				enim veritatis earum.
			</div>
		</div>
	</LocomotiveScroll>
</body>

<style>
	* {
		font-family: 'Noto Serif', serif;
		scroll-behavior: smooth;
	}

	#top-bg {
		background-color: #2c3639;
	}

	.egypt {
		color: #dcd7c9;
		font-size: 10vw;
		line-height: 1;
		padding-top: 9rem;
	}
	.padding-block {
		padding-block: clamp(5rem, 20vw, 10rem);
		padding-inline: clamp(1rem, 6vw, 10rem);
	}
	.text-clamp {
		font-size: clamp(2rem, 4vw, 4rem);
	}
	.divider__large {
		align-items: center;
		display: flex;

		justify-content: center;
		overflow: hidden;
		width: 100%;
		background-attachment: fixed;
	}
	.divider__small {
		align-items: center;
		display: flex;
		justify-content: center;

		overflow: hidden;
		background-attachment: fixed;
	}
	.divider__small img {
		height: 50rem;
	}
	.translate-center {
		transform: translate(-50%, 0%);
	}
	.inset-top-right {
		left: 60%;
		bottom: 55%;
	}
	.home2 {
		will-change: auto;
		height: 40rem;
	}
	.info {
		height: 100vh;
	}
	.intro {
		height: 85vh;
	}
	.home1 {
		will-change: auto;
		height: 70rem;
	}
	.intro-img {
		height: 120vh;
	}
	.home3 {
		will-change: auto;
		height: 40rem;
	}
	.beach {
		height: 110vh;
		margin: 50px;
	}
	.home-end {
		will-change: auto;
		height: 60rem;
	}
</style>
