<script lang="ts">
	import ExperienceListItem from '$lib/components/ExperienceListItem.svelte';

	interface Company {
		companyName: string;
		role: string;
		year?: string;
	}

	interface Project {
		name: string;
		role: string;
	}

	interface Props {
		companies: Company[];
		projects: Project[];
	}

	let { companies, projects }: Props = $props();
</script>

<section class="section-experience">
	<h2>Career History</h2>
	<div class="professional-experience">
		<h3>Professional Experience</h3>
		<div class="stack">
			{#each companies as company (company.companyName)}
				<ExperienceListItem companyName={company.companyName} role={company.role} />
			{/each}
		</div>
	</div>
	<div class="professional-experience">
		<h3>Other Projects</h3>
		<div class="stack">
			{#each projects as project (project.name)}
				<ExperienceListItem companyName={project.name} role={project.role} />
			{/each}
		</div>
	</div>
</section>

<style>
	.section-experience {
		position: relative;
		z-index: 1;
		background-color: #fff;
	}

	.section-experience h2 {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 2rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
		padding: 1rem 0 1rem 24px;
		border-bottom: var(--border-default);
	}

	.professional-experience {
		display: flex;
		flex-direction: row;
		align-items: space-between;
		border-bottom: 0.5px solid #222222;
	}

	.professional-experience h3 {
		flex: 0 0 50%;
		padding: 1rem 0 1rem 24px;
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		text-transform: uppercase;
		margin: 0;
	}

	.professional-experience .stack {
		flex: 0 0 50%;
		display: flex;
		flex-direction: column;
		gap: 16px;
		border-left: var(--border-default);
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	@media (max-width: 767px) {
		.professional-experience {
			flex-direction: column;
		}

		.professional-experience h3 {
			flex: none;
			width: 100%;
		}

		.professional-experience .stack {
			flex: none;
			width: 100%;
			border-left: none;
			border-top: var(--border-default);
		}
	}
</style>
