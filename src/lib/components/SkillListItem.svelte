<script lang="ts">
	import gsap from 'gsap';

	interface Props {
		title: string;
		items: string[];
		open?: boolean;
		ontoggle?: () => void;
	}

	let { title, items, open = false, ontoggle }: Props = $props();

	let ulEl: HTMLUListElement;
	let verticalBarEl: SVGLineElement;
	let isFirstRender = true;

	$effect(() => {
		if (!ulEl) return;

		if (isFirstRender) {
			if (!open) gsap.set(ulEl, { height: 0, opacity: 100 });
			isFirstRender = false;
			return;
		}

		gsap.killTweensOf(ulEl);
		if (open) {
			gsap.fromTo(
				ulEl,
				{ height: 0, opacity: 0 },
				{ height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
			);
		} else {
			gsap.to(ulEl, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.out' });
		}
	});

	$effect(() => {
		if (!verticalBarEl) return;
		gsap.to(verticalBarEl, {
			scaleY: open ? 0 : 1,
			duration: 0.25,
			ease: 'power2.inOut',
			transformOrigin: '50% 50%'
		});
	});
</script>

<div class="skill-card">
	<button class="skill-title" onclick={() => ontoggle?.()} aria-expanded={open}>
		<h2>{title}</h2>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="icon">
			<line
				x1="4"
				y1="12"
				x2="20"
				y2="12"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				bind:this={verticalBarEl}
				x1="12"
				y1="4"
				x2="12"
				y2="20"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	</button>
	<ul bind:this={ulEl}>
		{#each items as item (item)}
			<li class="list-item">{item}</li>
		{/each}
	</ul>
</div>

<style>
	.skill-card {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 8px;
		border-bottom: 0.5px solid #222222;
		border-left: 0.5px solid #222222;
		padding: 16px;
		padding-right: 28px;
	}

	.skill-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		width: 100%;
		text-align: left;
		color: inherit;
	}

	.skill-title h2 {
		flex: 1;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 0;
		margin: 0;
		width: 100%;
		overflow: hidden;
	}

	li {
		text-transform: capitalize;
		width: 100%;
		padding: 8px 0;
	}

	li:hover {
		background-color: white;
	}
</style>
