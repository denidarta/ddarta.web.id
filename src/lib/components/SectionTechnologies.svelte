<script lang="ts">
	interface TechItem {
		name: string;
		icon: string;
	}

	interface Props {
		items: TechItem[];
	}

	let { items }: Props = $props();
</script>

<section>
	<h2>Technologies</h2>
	<div class="tech-grid">
		{#each items as tech (tech.name)}
			<div class="tech-cell">
				<div class="icon-container">
					<img src={tech.icon} alt={tech.name} />
				</div>
				<span class="tech-name">{tech.name}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		position: relative;
		z-index: 1;
		background-color: #fff;
		border-bottom: var(--border-default);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		border-top: 0.5px solid #222222;
	}

	section h2 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
		padding: 1rem 0 1rem 24px;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		width: 100%;
		margin: 0 auto;
		border-top: var(--border-default);
	}

	.tech-cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 1.25rem 0.5rem;
		border-right: var(--border-default);
		border-bottom: var(--border-default);
	}

	.tech-cell:nth-child(4n) {
		border-right: none;
	}

	.tech-cell:nth-last-child(-n + 4) {
		border-bottom: none;
	}

	.icon-container {
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-container img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.tech-name {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.6rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #1d1d1f;
		text-align: center;
	}

	@media (min-width: 768px) {
		section {
			flex-direction: row;
		}

		section > * {
			flex: 0 0 50%;
		}

		.tech-grid {
			border-left: 0.5px solid #222222;
			border-top: none;
		}

		.tech-cell {
			padding: 2rem 1rem;
			gap: 12px;
		}

		.icon-container {
			width: 40px;
			height: 40px;
		}

		.tech-name {
			font-size: 0.75rem;
		}
	}
</style>
