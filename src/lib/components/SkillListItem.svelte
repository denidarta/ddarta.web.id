<script lang="ts">
	interface Props {
		title: string;
		items: string[];
	}

	let { title, items }: Props = $props();
</script>

<div class="skill-card">
	<p class="list-title">{title}</p>
	<ul>
		{#each items as item (item)}
			<li class="list-item">{item}</li>
		{/each}
	</ul>
</div>

<style>
	.skill-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.list-title {
		text-transform: uppercase;
	}
	.list-item {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul {
		padding: 0;
		margin: 0;
	}
</style>
