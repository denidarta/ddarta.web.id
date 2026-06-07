<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import SectionCertification from '$lib/components/SectionCertification.svelte';
	import SectionAboutFacts from '$lib/components/SectionAboutFacts.svelte';
</script>

<NavBar />

<main>
	<header class="page-header">
		<div class="header-meta">
			<span class="label">About</span>
		</div>
		<div class="header-title">
			<h1>Deni Dwi Arta</h1>
			<p class="subtitle">Fullstack Developer & Product Architect</p>
		</div>
	</header>
	<SectionAboutFacts />
	<section class="bio-section">
		<div class="bio-label">
			<h2>Background</h2>
		</div>
		<div class="bio-content">
			<p>
				I spent years working in product close enough to engineering to realize I understood it
				better than I admitted. That tension between understanding a system and being able to build
				it became unbearable. So I learned to build.
			</p>
			<p>
				Most developers write code before knowing what the code is supposed to do. I was from the
				opposite side. I know what something needs to do, why it needs to do, and who it's for
				before a single line gets written.
			</p>
			<p>
				That cross-disciplinary fluency of product thinking combined with engineering execution is
				what I bring to every project.
			</p>
		</div>
	</section>

	<section class="approach-section">
		<div class="approach-label">
			<h2>Approach</h2>
		</div>
		<div class="approach-grid">
			<div class="approach-item">
				<span class="item-index">01</span>
				<h3>Architecture first</h3>
				<p>
					Structure before syntax. A well-architected system is easier to debug, scale, and hand off
					than clever code with no coherent shape.
				</p>
			</div>
			<div class="approach-item">
				<span class="item-index">02</span>
				<h3>Product awareness</h3>
				<p>
					Every technical decision has a product implication. I hold both in mind simultaneously
					about what's correct engineering and what ships the right thing.
				</p>
			</div>
			<div class="approach-item">
				<span class="item-index">03</span>
				<h3>Clarity over cleverness</h3>
				<p>
					Code is read far more than it's written. I write for the next person in the codebase, not
					to demonstrate capability.
				</p>
			</div>
			<div class="approach-item">
				<span class="item-index">04</span>
				<h3>End-to-end ownership</h3>
				<p>
					I work across the full stack — database schema to UI interaction — because the best
					solutions don't respect layer boundaries.
				</p>
			</div>
		</div>
	</section>

	<SectionCertification />

	<section class="cta-section">
		<p class="cta-text">Have something to build?</p>
		<a href="mailto:denidarta@gmail.com" class="cta-link">Get in touch →</a>
	</section>
</main>

<style>
	main {
		padding-top: 41px; /* navbar height */
		min-height: 100vh;
	}

	/* Header */
	.page-header {
		display: flex;
		flex-direction: row;
		border-bottom: var(--border-default);
	}

	.header-meta {
		flex: 0 0 25%;
		display: flex;
		align-items: flex-end;
		padding: 2rem 0 2rem 24px;
		border-right: var(--border-default);
	}

	.label {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #6e6e73;
	}

	.header-title {
		flex: 1;
		padding: 3rem 0 3rem 40px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	h1 {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: clamp(3rem, 8vw, 7rem);
		font-weight: 300;
		text-transform: uppercase;
		line-height: 1;
		margin: 0;
		color: #1d1d1f;
	}

	.subtitle {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		color: #6e6e73;
		margin: 0;
	}

	/* Bio */
	.bio-section {
		display: flex;
		flex-direction: row;
		border-bottom: var(--border-default);
	}

	.bio-label {
		flex: 0 0 25%;
		padding: 2rem 0 2rem 24px;
		border-right: var(--border-default);
	}

	.bio-label h2,
	.approach-label h2 {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 2rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
		color: #1d1d1f;
	}

	.bio-content {
		flex: 1;
		padding: 2rem 40px;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.bio-content p {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 1.1rem;
		font-weight: 300;
		line-height: 1.7;
		color: #1d1d1f;
		margin: 0;
	}

	/* Approach */
	.approach-section {
		display: flex;
		flex-direction: row;
		border-bottom: var(--border-default);
	}

	.approach-label {
		flex: 0 0 25%;
		padding: 2rem 0 2rem 24px;
		border-right: var(--border-default);
	}

	.approach-grid {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.approach-item {
		padding: 2rem 40px;
		border-bottom: var(--border-default);
		border-right: var(--border-default);
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.approach-item:nth-child(even) {
		border-right: none;
	}

	.approach-item:nth-last-child(-n + 2) {
		border-bottom: none;
	}

	.item-index {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 300;
		color: #6e6e73;
		letter-spacing: 0.05em;
	}

	.approach-item h3 {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 1.25rem;
		font-weight: 400;
		text-transform: uppercase;
		margin: 0;
		color: #1d1d1f;
	}

	.approach-item p {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 0.9rem;
		font-weight: 300;
		line-height: 1.6;
		color: #6e6e73;
		margin: 0;
	}

	/* CTA */
	.cta-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5rem 2rem;
		gap: 1.5rem;
	}

	.cta-text {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: 300;
		text-transform: uppercase;
		color: #1d1d1f;
		margin: 0;
		text-align: center;
	}

	.cta-link {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #1d1d1f;
		text-decoration: none;
		padding: 0.6rem 2rem;
		border: var(--border-default);
		border-radius: 999px;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.cta-link:hover {
		background-color: #1d1d1f;
		color: #fff;
	}

	/* Mobile */
	@media (max-width: 767px) {
		.page-header {
			flex-direction: column;
		}

		.header-meta {
			flex: none;
			border-right: none;
			border-bottom: var(--border-default);
			padding: 1rem 0 1rem 24px;
		}

		.header-title {
			padding: 2rem 24px;
		}

		.bio-section,
		.approach-section {
			flex-direction: column;
		}

		.bio-label,
		.approach-label {
			flex: none;
			border-right: none;
			border-bottom: var(--border-default);
		}

		.bio-content {
			padding: 2rem 24px;
		}

		.approach-grid {
			grid-template-columns: 1fr;
		}

		.approach-item {
			border-right: none;
		}

		.approach-item:nth-last-child(-n + 2) {
			border-bottom: var(--border-default);
		}

		.approach-item:last-child {
			border-bottom: none;
		}
	}
</style>
