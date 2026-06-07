<section class="facts-section">
	<div class="fact" id="hidden">
		<span class="fact-number"> </span>
		<span class="fact-label"> </span>
	</div>
	<div class="fact" id="expanded">
		<span class="fact-number">5+</span>
		<span class="fact-label">Years in SaaS & Fintech</span>
	</div>
	<div class="fact">
		<span class="fact-number">Jakarta</span>
		<span class="fact-label">Based in Indonesia</span>
	</div>
	<div class="fact">
		<span class="fact-number">Fullstack</span>
		<span class="fact-label">Front to Back, End to End</span>
	</div>
</section>

<style>
	.facts-section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-bottom: var(--border-default);
	}

	.fact {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 2rem 24px;
		border-right: var(--border-default);
	}

	.fact:last-child {
		border-right: none;
	}

	.fact-number {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 2.5rem;
		font-weight: 300;
		line-height: 1;
		color: #1d1d1f;
	}

	.fact-label {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #6e6e73;
	}

	/* Mobile */
	@media (max-width: 767px) {
		.facts-section {
			grid-template-columns: 1fr 1fr;
		}

		.fact:nth-child(even) {
			border-right: none;
		}

		.fact:nth-child(n + 3) {
			border-top: var(--border-default);
		}

		#hidden {
			display: none;
		}

		#expanded {
			grid-column: span 2;
		}
	}
</style>
