<script lang="ts">
	import WorkSection from '$lib/components/WorkSection.svelte';

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

<section class="section-works">
	<h2>Selected Works</h2>
	<WorkSection {items} />
</section>

<style>
	.section-works {
		position: relative;
		z-index: 1;
		background-color: #fff;
		border-bottom: 0.5px solid #222222;
	}

	.section-works h2 {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 2rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
		padding: 1rem 0 1rem 24px;
		border-bottom: var(--border-default);
	}
</style>
