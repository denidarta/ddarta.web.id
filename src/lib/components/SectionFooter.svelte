<script lang="ts">
	import { onMount } from 'svelte';

	let wrapperEl: HTMLElement;
	let containerEl: HTMLElement;
	let ctaEl: HTMLElement;

	onMount(() => {
		const naturalHeight = wrapperEl.scrollHeight;
		const targetHeight = window.innerHeight * 0.6;
		const delta = Math.max(0, targetHeight - naturalHeight);

		if (delta <= 0) return;

		// Container has fixed height = targetHeight — never changes, so page height stays constant
		containerEl.style.height = `${targetHeight}px`;

		const onScroll = () => {
			const rect = containerEl.getBoundingClientRect();
			// progress 0 when container top hits viewport bottom, 1 when container fully in viewport
			const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / targetHeight));
			wrapperEl.style.height = `${naturalHeight + delta * progress}px`;
			const maxFontSize = window.innerWidth < 768 ? 5 : 10;
			ctaEl.style.fontSize = `${Math.min(maxFontSize, 2 + 18 * progress)}rem`;
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div class="footer-container" bind:this={containerEl}>
	<footer>
		<div class="footer-wrapper" bind:this={wrapperEl}>
			<div class="col col-left">
				<div class="nav-item empty"></div>
				<a href="" class="nav-item">Home</a>
				<a href="/contact" class="nav-item">Contact</a>
				<span class="nav-item copyright">© 2026 Denidarta</span>
			</div>
			<div class="col col-center">
				<p class="cta-label" bind:this={ctaEl}>Let's Talk</p>
				<a href="/contact" class="cta-button">Get in Touch</a>
			</div>
			<div class="col col-right">
				<div class="nav-item empty"></div>
				<a
					href="https://github.com/denidarta"
					target="_blank"
					rel="noopener noreferrer"
					class="nav-item">Github</a
				>
				<a
					href="https://linkedin.com/in/denidarta"
					target="_blank"
					rel="noopener noreferrer"
					class="nav-item">LinkedIn</a
				>
				<a
					href="https://github.com/denidarta/ddarta.web.id"
					target="_blank"
					rel="noopener noreferrer"
					class="nav-item">Source Code</a
				>
			</div>
		</div>
	</footer>
</div>

<style>
	.footer-container {
		background: #ffff;
		overflow: hidden;
	}

	footer {
		background: #ffff;
	}

	.footer-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-top: var(--border-default);
		overflow: hidden;
	}

	.col {
		display: flex;
		flex-direction: column;
	}

	.col-left {
		border-right: var(--border-default);
	}

	.col-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem 2rem;
		border-right: var(--border-default);
		overflow: visible;
		min-width: 0;
	}

	.col-right {
		align-items: stretch;
		text-align: right;
	}

	.nav-item {
		display: block;
		padding: 1rem 24px;
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		color: inherit;
		border-bottom: var(--border-default);
	}

	.nav-item.empty {
		flex: 1;
		border-bottom: none;
	}

	.copyright {
		color: #6e6e73;
		cursor: default;
	}

	.cta-label {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.5rem;
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: -0.02em;
		line-height: 1;
		margin: 0 0 2rem;
		white-space: nowrap;
		text-align: center;
	}

	.cta-button {
		display: inline-block;
		padding: 0.6rem 2rem;
		border: var(--border-default);
		border-radius: 999px;
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		color: inherit;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.cta-button:hover {
		background-color: #000;
		color: #fff;
	}

	@media (max-width: 767px) {
		.footer-wrapper {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'center center'
				'left right';
		}

		.col-left {
			grid-area: left;
			border-right: none;
			border-top: var(--border-default);
		}

		.col-center {
			grid-area: center;
			border-right: none;
			border-bottom: var(--border-default);
		}

		.col-right {
			grid-area: right;
			border-left: var(--border-default);
			border-top: var(--border-default);
		}
	}
</style>
