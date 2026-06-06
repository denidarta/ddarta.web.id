<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';
	import { Earth } from 'carbon-icons-svelte';

	let canvasEl: HTMLCanvasElement;

	onMount(() => {
		const app = new Application(canvasEl);
		app.load('https://prod.spline.design/qOGbyNl1Z-tJJFz0/scene.splinecode');

		const redirectWheel = (e: WheelEvent) => {
			e.preventDefault();
			window.scrollBy({ top: e.deltaY, left: e.deltaX });
		};
		canvasEl.addEventListener('wheel', redirectWheel, { passive: false });

		return () => {
			canvasEl.removeEventListener('wheel', redirectWheel);
			app.dispose();
		};
	});
</script>

<section class="hero-section">
	<canvas bind:this={canvasEl}></canvas>
	<div class="hero-content">
		<h1>Mediator between chaos and clarity</h1>
		<h2>
			I am a fullstack web developer with 5 years of experience in Saas and fintech application,
			specialized in product architecture.
		</h2>
		<p><span><Earth size={24} /></span>Jakarta, Indonesia</p>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
	}

	canvas {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		pointer-events: auto;
		z-index: 0;
		filter: blur(2px);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 16px;
		padding-left: 24px;
	}

	.hero-content h1 {
		font-size: 10rem;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 300;
		margin: 0;
		padding: 0;
		line-height: 9rem;
	}

	.hero-content h2 {
		font-size: 2rem;
		text-transform: none;
		text-align: left;
	}

	.hero-content p {
		font-size: 1.5rem;
		font-family: 'IBM Plex Sans', sans-serif;
		margin-top: 8px;
		font-weight: 300;
		margin: 0;
		padding: 0;
	}

	.hero-content span {
		position: relative;
		top: 4px;
		margin-right: 16px;
	}
</style>
