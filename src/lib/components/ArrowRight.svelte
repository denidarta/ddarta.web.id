<script lang="ts">
	import { ArrowRight } from 'carbon-icons-svelte';
</script>

<div class="circle">
	<ArrowRight size={24} />
</div>

<style>
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: transparent;
		border: 0.5px solid transparent;
		transition: border-color 0.2s ease;
	}

	.circle:hover {
		border-color: #222222;
	}
</style>
