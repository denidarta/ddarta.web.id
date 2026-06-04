<footer>
	<div class="col col-left">
		<div class="nav-item empty"></div>
		<a href="/" class="nav-item">Home</a>
		<a href="/contact" class="nav-item">Contact</a>
		<span class="nav-item copyright">© 2026 Denidarta</span>
	</div>

	<div class="col col-center">
		<p class="cta-label">Let's Talk</p>
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
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-top: var(--border-default);
		height: 60vh;
		overflow: visible;
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
		color: #888;
		cursor: default;
	}

	.cta-label {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 10rem;
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
</style>
