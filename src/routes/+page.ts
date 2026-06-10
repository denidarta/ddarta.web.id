import shafiqThumb from '$lib/assets/shafiq_thumb.webp';
import raporBiruThumb from '$lib/assets/rapor_biru_thumb.webp';
import rakaminThumb from '$lib/assets/rakamin_thumb.webp';
import sieradThumb from '$lib/assets/sierad_thumb.webp';
import figmaIcon from '$lib/assets/icons/figma.svg';
import nextjsIcon from '$lib/assets/icons/nextjs.svg';
import reactIcon from '$lib/assets/icons/react.svg';
import nestjsIcon from '$lib/assets/icons/nestjs.svg';
import postgresqlIcon from '$lib/assets/icons/postgresql.svg';
import supabaseIcon from '$lib/assets/icons/supabase.svg';
import dockerIcon from '$lib/assets/icons/docker.svg';
import mongodbIcon from '$lib/assets/icons/mongodb.svg';
import svelteIcon from '$lib/assets/icons/svelte.svg';
import cloudflareIcon from '$lib/assets/icons/cloudflare.svg';
import vercelIcon from '$lib/assets/icons/vercel.svg';
import postmanIcon from '$lib/assets/icons/postman.svg';

export function load() {
	return {
		skills: [
			{ title: 'Languages', items: ['HTML', 'CSS', 'javascript / typescript'] },
			{ title: 'Front End', items: ['React JS', 'Next.js', 'Svelte', 'storybook'] },
			{ title: 'Backend', items: ['NodeJs', 'NestJS'] },
			{ title: 'Database', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Prisma / TypeORM'] },
			{ title: 'Devops', items: ['Docker', 'NGINX', 'VPS (Linux)', 'Git', 'Vercel/ Netlify'] },
			{ title: 'Tools', items: ['Figma', 'Framer', 'Postman', 'Jira'] }
		],
		companies: [
			{ companyName: 'SHAFIQ', role: 'Product Owner', year: '2022-Present' },
			{ companyName: 'Fannatics Technology', role: 'Information Architect', year: '2020-2023' },
			{ companyName: 'Transcosmos Inc', role: 'UX Engineer', year: '2019-2020' }
		],
		projects: [
			{ name: 'Dattabot', role: 'Product Research' },
			{ name: 'Purwadhika Startup School', role: 'UI/UX Design Instructor' },
			{ name: 'Rakamin Academy', role: 'Product Engineer' }
		],
		works: [
			{
				title: 'Rapor Biru LMS',
				services: 'Fullstack web development, Software Architecture',
				year: 2026,
				image: raporBiruThumb,
				gitrepo: 'https://github.com/denidarta/rapor-biru-backend',
				website: 'https://raporbiru.web.id'
			},
			{
				title: 'SHAFIQ Web App',
				services: 'Software Development',
				year: '2023 - Present',
				image: shafiqThumb,
				website: 'https://www.shafiq.id'
			},
			{
				title: 'Rakamin Academy LMS',
				services: 'UX Engineering, Design System',
				year: 2022,
				image: rakaminThumb
			},
			{
				title: 'Sierad Input Tools',
				services: 'Product Research, Prototyping',
				year: 2023,
				image: sieradThumb
			}
		],
		technologies: [
			{ name: 'Figma', icon: figmaIcon },
			{ name: 'Next.js', icon: nextjsIcon },
			{ name: 'React', icon: reactIcon },
			{ name: 'NestJS', icon: nestjsIcon },
			{ name: 'PostgreSQL', icon: postgresqlIcon },
			{ name: 'Supabase', icon: supabaseIcon },
			{ name: 'Docker', icon: dockerIcon },
			{ name: 'MongoDB', icon: mongodbIcon },
			{ name: 'Svelte', icon: svelteIcon },
			{ name: 'Vercel', icon: vercelIcon },
			{ name: 'Cloudflare', icon: cloudflareIcon },
			{ name: 'Postman', icon: postmanIcon }
		]
	};
}
