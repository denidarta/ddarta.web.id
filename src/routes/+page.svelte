<script lang="ts">
	import { onMount } from 'svelte';
	import SkillListItem from '$lib/components/SkillListItem.svelte';
	import ExperienceListItem from '$lib/components/ExperienceListItem.svelte';
	import WorkSection from '$lib/components/WorkSection.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let openIndex = $state<number | null>(null);

	let wrapperEl: HTMLElement;
	let spacerEl: HTMLElement;
	let ctaEl: HTMLElement;

	onMount(() => {
		const naturalHeight = wrapperEl.scrollHeight;
		const targetHeight = window.innerHeight * 0.6;
		const delta = Math.max(0, targetHeight - naturalHeight);

		if (delta <= 0) return;

		// footer is fixed — add padding-bottom to page so content doesn't hide behind it
		document.documentElement.style.paddingBottom = `${naturalHeight}px`;

		// spacer provides the delta scroll room
		spacerEl.style.height = `${delta}px`;

		// animation starts when spacer top reaches footer top (viewport bottom - naturalHeight)
		const spacerDocTop = spacerEl.getBoundingClientRect().top + window.scrollY;
		const animStart = spacerDocTop - (window.innerHeight - naturalHeight);

		const onScroll = () => {
			const progress = Math.min(1, Math.max(0, (window.scrollY - animStart) / delta));
			wrapperEl.style.height = `${naturalHeight + delta * progress}px`;
			ctaEl.style.fontSize = `${2 + 18 * progress}rem`;
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<main>
	<section class="section-works">
		<h3>Selected Works</h3>
		<WorkSection items={data.works} />
	</section>
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

<div class="footer-spacer" bind:this={spacerEl}></div>

<footer>
	<div class="footer-wrapper" bind:this={wrapperEl}>
		<div class="col col-left">
			<div class="nav-item empty"></div>
			<a href="/" class="nav-item">Home</a>
			<a href="/contact" class="nav-item">Contact</a>
			<span class="nav-item copyright">© 2026 Denidarta</span>
		</div>
		<div class="col col-center">
			<p class="cta-label" bind:this={ctaEl}>Let's Talk</p>
			<a href="/contact" class="cta-button">Get in Touch</a>
		</div>
		<div class="col col-right">
			<div class="nav-item empty"></div>
			<a
				href="https://github.com/denidarta"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-item">Github</a
			>
			<a
				href="https://linkedin.com/in/denidarta"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-item">LinkedIn</a
			>
			<a
				href="https://github.com/denidarta/ddarta.web.id"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-item">Source Code</a
			>
		</div>
	</div>
</footer>

<style>
	main {
		min-height: 100vh;
		max-width: 100vw;
	}

	.section-works {
		border-bottom: 0.5px solid #222222;
	}

	.section-works h3 {
		padding: 1rem 0 1rem 24px;
		border-bottom: var(--border-default);
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

	/* footer */
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #ffff;
	}

	.footer-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-top: var(--border-default);
		overflow: hidden;
	}

	.col {
		display: flex;
		flex-direction: column;
	}

	.col-left {
		border-right: var(--border-default);
	}

	.col-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem 2rem;
		border-right: var(--border-default);
		overflow: visible;
		min-width: 0;
	}

	.col-right {
		align-items: stretch;
		text-align: right;
	}

	.nav-item {
		display: block;
		padding: 1rem 24px;
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		color: inherit;
		border-bottom: var(--border-default);
	}

	.nav-item.empty {
		flex: 1;
		border-bottom: none;
	}

	.copyright {
		color: #888;
		cursor: default;
	}

	.cta-label {
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 2rem;
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: -0.02em;
		line-height: 1;
		margin: 0 0 2rem;
		white-space: nowrap;
		text-align: center;
	}

	.cta-button {
		display: inline-block;
		padding: 0.6rem 2rem;
		border: var(--border-default);
		border-radius: 999px;
		font-family: 'IBM Plex Sans Condensed', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		color: inherit;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.cta-button:hover {
		background-color: #000;
		color: #fff;
	}

</style>
