<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	onMount(() => {
		if (page.url.pathname === '/about') return;

		let target = window.scrollY;
		let isSnapping = false;
		let touchStartY = 0;
		let destroyRequested = false;
		let cleanupListeners = () => {};

		void (async () => {
			const [{ default: gsap }, { ScrollToPlugin }] = await Promise.all([
				import('gsap'),
				import('gsap/ScrollToPlugin')
			]);

			if (destroyRequested) return;

			gsap.registerPlugin(ScrollToPlugin);

			const maxScroll = () => document.body.scrollHeight - window.innerHeight;

			const snapToWording = () => {
				isSnapping = true;
				target = window.innerHeight;
				gsap.to(window, {
					scrollTo: window.innerHeight,
					duration: 1.8,
					ease: 'power4.out',
					onComplete: () => {
						isSnapping = false;
						target = window.scrollY;
					}
				});
			};

			const onWheel = (e: WheelEvent) => {
				e.preventDefault();

				if (isSnapping) return;

				// Hero zone snap
				if (window.scrollY < window.innerHeight && e.deltaY > 0) {
					snapToWording();
					return;
				}

				// Smooth scroll
				target = Math.max(0, Math.min(target + e.deltaY, maxScroll()));
				gsap.to(window, {
					scrollTo: target,
					duration: 1,
					ease: 'power3.out',
					overwrite: 'auto'
				});
			};

			const onTouchStart = (e: TouchEvent) => {
				touchStartY = e.touches[0].clientY;
			};

			const onTouchEnd = (e: TouchEvent) => {
				const delta = touchStartY - e.changedTouches[0].clientY;
				if (window.scrollY < window.innerHeight && delta > 30 && !isSnapping) {
					snapToWording();
				}
			};

			window.addEventListener('wheel', onWheel, { passive: false });
			window.addEventListener('touchstart', onTouchStart, { passive: true });
			window.addEventListener('touchend', onTouchEnd, { passive: true });

			cleanupListeners = () => {
				window.removeEventListener('wheel', onWheel);
				window.removeEventListener('touchstart', onTouchStart);
				window.removeEventListener('touchend', onTouchEnd);
			};
		})();

		return () => {
			destroyRequested = true;
			cleanupListeners();
		};
	});
</script>
