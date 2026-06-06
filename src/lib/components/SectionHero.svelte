<script lang="ts">
	import { Earth } from 'carbon-icons-svelte';
	import AnimatedGradient from '$lib/components/AnimatedGradient.svelte';
</script>

<section class="hero-section">
	<AnimatedGradient config={{ preset: 'Ghost' }} />
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
		padding: 0 32px;
		color: #ffffff;
	}

	h1 {
		font-size: 10rem;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 300;
		margin: 0;
		line-height: 9rem;
	}

	h2 {
		font-size: 2rem;
		text-transform: none;
		text-align: left;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 300;
	}

	p {
		font-size: 1.5rem;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 300;
		margin: 0;
	}

	span {
		position: relative;
		top: 4px;
		margin-right: 16px;
	}

	@media (max-width: 767px) {
		h1 {
			font-size: 3rem;
			line-height: 3rem;
		}

		h2 {
			font-size: 1.2rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
