<script lang="ts">
	interface WorkItem {
		title: string;
		services: string;
		year: string | number;
		href?: string;
		image?: string;
	}

	interface Props {
		items: WorkItem[];
	}

	let { items }: Props = $props();
</script>

<div class="selected-works-grid">
	{#each items as item (item.title)}
		<a class="work-item" href={item.href ?? '#'}>
			<div class="work-thumb">
				{#if item.image}
					<img src={item.image} alt={item.title} />
				{/if}
			</div>
			<div class="work-meta">
				<span class="work-year">{item.year}</span>
				<h2 class="work-title">{item.title}</h2>
				<p class="work-services">{item.services}</p>
			</div>
			<div class="work-arrow">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
					<line
						x1="4"
						y1="12"
						x2="20"
						y2="12"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<line
						x1="13"
						y1="5"
						x2="20"
						y2="12"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<line
						x1="13"
						y1="19"
						x2="20"
						y2="12"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
				</svg>
			</div>
		</a>
	{/each}
</div>

<style>
	.selected-works-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: #fff;
	}

	.work-item {
		display: grid;
		grid-template-rows: auto 1fr auto;
		border-bottom: var(--border-default);
		border-right: var(--border-default);
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		gap: 1rem;
		transition: background-color 0.2s ease;
	}

	.work-item:hover {
		background-color: #f5f5f5;
	}

	.work-thumb {
		width: 100%;
		aspect-ratio: 16 / 9;
		background-color: #ebebeb;
		overflow: hidden;
	}

	.work-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.work-meta {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.work-year {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 300;
		color: #6e6e73;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.work-title {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 1.5rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
		line-height: 1.1;
	}

	.work-services {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 300;
		color: #6e6e73;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.work-arrow {
		display: flex;
		justify-content: flex-end;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.work-item:hover .work-arrow {
		opacity: 1;
	}

	@media (max-width: 767px) {
		.selected-works-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
