<script lang="ts">
	import SkillListItem from '$lib/components/SkillListItem.svelte';
	import ExperienceListItem from '$lib/components/ExperienceListItem.svelte';
	import ArrowRight from '$lib/components/ArrowRight.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let openIndex = $state<number | null>(null);
</script>

<main>
	<section class="section-skillset">
		<h3>Skill Set</h3>
		<div class="skill-item">
			{#each data.skills as skill, i (skill.title)}
				<SkillListItem
					title={skill.title}
					items={skill.items}
					open={openIndex === i}
					ontoggle={() => (openIndex = openIndex === i ? null : i)}
				/>
			{/each}
		</div>
	</section>
	<section class="section-experience">
		<div class="professional-experience">
			<h3>Professional Experience</h3>
			<div class="stack">
				{#each data.companies as company (company.companyName)}
					<ExperienceListItem companyName={company.companyName} role={company.role} />
				{/each}
			</div>
		</div>
		<div class="professional-experience">
			<h3>Other Projects</h3>
			<div class="stack">
				{#each data.projects as project (project.name)}
					<ExperienceListItem companyName={project.name} role={project.role} />
				{/each}
			</div>
		</div>
	</section>
</main>
<Footer />

<style>
	main {
		min-height: 100vh;
		max-width: 100vw;
	}
	.section-skillset {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		border-bottom: 0.5px solid #222222;
	}

	h3 {
		padding-left: 24px;
	}

	.skill-item {
		display: flex;
		flex-direction: column;
		/*gap: 16px;*/
	}

	.skill-item :global(.skill-card:last-child) {
		border-bottom: none;
	}

	.section-skillset > * {
		flex: 0 0 50%;
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
</style>
