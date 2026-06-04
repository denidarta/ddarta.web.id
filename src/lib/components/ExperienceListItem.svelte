<script lang="ts">
	import ArrowRight from '$lib/components/ArrowRight.svelte';

	let { companyName, role } = $props();
</script>

<div class="experience-list-item">
	<h2>{companyName}</h2>
	<p>{role}</p>
	<ArrowRight />
</div>

<style>
	p {
		text-transform: capitalize;
		font-size: 1rem;
		font-family: 'IBM Display Flex', sans-serif;
		font-weight: 300;
	}

	.experience-list-item {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		align-items: center;
		padding: 0 16px;
		gap: 0;
	}

	h2 {
		grid-column: 1;
		grid-row: 1;
	}
	p {
		grid-column: 1;
		grid-row: 2;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.experience-list-item :global(.circle) {
		grid-column: 2;
		grid-row: 1 / 3;
		align-self: center;
	}

	.experience-list-item:hover :global(.circle) {
		border-color: #222222;
	}
</style>
