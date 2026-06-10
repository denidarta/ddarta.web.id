<script lang="ts">
	import { LogoGithub } from 'carbon-icons-svelte';

	interface Props {
		href: string;
	}

	let { href }: Props = $props();
</script>

<a class="circle" {href} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
	<LogoGithub size={20} />
</a>

<style>
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: transparent;
		border: 0.5px solid #222222;
		color: inherit;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.circle:hover {
		background-color: #222222;
		color: #fff;
	}
</style>
