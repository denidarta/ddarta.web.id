<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	const links = [
		{ index: '01', label: 'Home', href: '/' },
		{ index: '02', label: 'About Me', href: '/about' }
	];

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 64;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div class="nav-container" class:scrolled>
	<nav>
		<a href="/" class="brand">
			<span class="brand-mark">D</span><span class="brand-dot">·</span><span class="brand-mark"
				>D</span
			>
		</a>

		<ul class="links">
			{#each links as link (link.href)}
				<li>
					<a href={link.href}>
						<span class="index">{link.index}</span>
						<span class="label">{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.nav-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 0 32px;
		border-bottom: var(--border-width) solid transparent;
		background-color: transparent;
		backdrop-filter: blur(0px);
		transition:
			background-color 0.5s ease,
			border-color 0.5s ease,
			backdrop-filter 0.5s ease;
	}

	.nav-container.scrolled {
		border-bottom: var(--border-default);
		background-color: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(10px);
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 72px;
		max-width: 1440px;
		margin: 0 auto;
	}

	.brand {
		display: flex;
		align-items: baseline;
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		color: inherit;
		text-decoration: none;
		transition: opacity 0.3s ease;
	}

	.brand:hover {
		opacity: 0.55;
	}

	.brand-dot {
		font-weight: 300;
		margin: 0 0.05em;
		opacity: 0.4;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.links a {
		position: relative;
		display: inline-flex;
		align-items: baseline;
		gap: 0.5rem;
		padding: 0.4rem 0;
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: inherit;
		text-decoration: none;
	}

	.links .index {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.7rem;
		font-weight: 300;
		letter-spacing: 0;
		opacity: 0.4;
		transition: opacity 0.3s ease;
	}

	.links a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: var(--border-width);
		background-color: var(--border-color);
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
	}

	.links a:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.links a:hover .index {
		opacity: 1;
	}

	@media (max-width: 767px) {
		.nav-container {
			padding: 0 20px;
		}

		nav {
			height: 60px;
		}

		.brand {
			font-size: 1.05rem;
		}

		.links {
			gap: 1.25rem;
		}

		.links a {
			font-size: 0.7rem;
			letter-spacing: 0.1em;
		}

		.links .index {
			display: none;
		}
	}
</style>
