<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import SectionHero from '$lib/components/SectionHero.svelte';
	import SectionWording from '$lib/components/SectionWording.svelte';
	import SectionTechnologies from '$lib/components/SectionTechnologies.svelte';
	import SectionWorks from '$lib/components/SectionWorks.svelte';
	import SectionExperience from '$lib/components/SectionExperience.svelte';
	import SectionFooter from '$lib/components/SectionFooter.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<main>
	<NavBar />
	<div class="hero-sticky-wrapper">
		<SectionHero />
	</div>
	<div class="wording-overlap">
		<SectionWording />
	</div>
	<SectionTechnologies items={data.technologies} />
	<SectionWorks items={data.works} />
	<SectionExperience companies={data.companies} projects={data.projects} />
</main>
<SectionFooter />

<style>
	main {
		min-height: 100vh;
		max-width: 100vw;
	}

	.hero-sticky-wrapper {
		position: sticky;
		top: 0;
		z-index: 0;
		height: 100vh;
	}

	.wording-overlap {
		position: relative;
		z-index: 1;
		background-color: #fff;
	}
</style>
