<script lang="ts">
	import SkillListItem from '$lib/components/SkillListItem.svelte';
</script>

<section class="skillset-section">
	<h1>Heading</h1>
	<SkillListItem title="Frontend" items={['List Item1', 'List item 2']} />
</section>

<style>
	.skillset-section {
		display: flex;
		flex-direction: row;
		width: 100vw;
		align-items: flex-start;
	}

	.skillset-section > * {
		flex: 0 0 50%;
	}
</style>
