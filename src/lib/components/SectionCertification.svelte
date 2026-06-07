<script lang="ts">
	import achievement from '$lib/assets/achievement.webp';

	const credentialId = 'FSSE-2026-06-142185640650';
	const certificateUrl = `https://certificates.revou.tech/?id=${credentialId}&name=Deni%20Dwi%20Arta`;
</script>

<section class="certification-section">
	<div class="title-container">
		<h2 class="title">Achievements</h2>
	</div>
	<div class="certification-content">
		<div class="detail">
			<h3>Certificate of Achievement — Fullstack Software Engineering</h3>
			<a href="https://www.revou.co/software-engineering" target="_blank" rel="noopener noreferrer"
				>RevoU.co</a
			>
			<div class="credential">
				<span class="credential-label">Credential ID</span>
				<span class="credential-value">{credentialId}</span>
			</div>
			<a href={certificateUrl} target="_blank" rel="noopener noreferrer" class="certificate-link">
				View certificate →
			</a>
		</div>
		<figure class="certificate-proof">
			<img
				src={achievement}
				alt="Top 4 Best CRACK Project leaderboard showing Deni Dwi Arta placed 1st with the Rapor Biru project, score 150"
			/>
			<figcaption>Top 4 Best CRACK Project — placed 1st with "Rapor Biru" (score 150)</figcaption>
		</figure>
	</div>
</section>

<style>
	.certification-section {
		display: flex;
		flex-direction: row;
		border-bottom: var(--border-default);
	}

	.title-container {
		flex: 0 0 25%;
		padding: 2rem 0 2rem 24px;
		border-right: var(--border-default);
	}

	.certification-content {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.title {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 2rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
		color: #1d1d1f;
	}

	.detail {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 2rem 40px;
		border-right: var(--border-default);
	}

	.detail a {
		text-decoration: none;
		color: inherit;
	}

	.credential {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
	}

	.certificate-link {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #1d1d1f;
		text-decoration: none;
		padding: 0.6rem 1.5rem;
		border: var(--border-default);
		border-radius: 999px;
		align-self: flex-start;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.certificate-link:hover {
		background-color: #1d1d1f;
		color: #fff;
	}

	.certificate-proof {
		margin: 0;
		padding: 2rem 40px;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.certificate-proof img {
		width: 100%;
		height: auto;
		display: block;
		border: var(--border-default);
	}

	.certificate-proof figcaption {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		color: #6e6e73;
	}

	.credential-label {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #6e6e73;
	}

	.credential-value {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 0.9rem;
		font-weight: 300;
		color: #1d1d1f;
	}

	/* Mobile */
	@media (max-width: 767px) {
		.certification-section {
			flex-direction: column;
		}

		.title-container {
			flex: none;
			border-right: none;
			border-bottom: var(--border-default);
		}

		.certification-content {
			grid-template-columns: 1fr;
		}

		.detail {
			border-right: none;
			border-bottom: var(--border-default);
			padding: 2rem 24px;
		}

		.certificate-proof {
			padding: 2rem 24px;
			display: none;
		}
	}
</style>
