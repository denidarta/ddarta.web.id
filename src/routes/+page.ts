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
			{ companyName: 'SHAFIQ', role: 'Product Owner' },
			{ companyName: 'Fannatics Technology', role: 'Information Architect' },
			{ companyName: 'Transcosmos Inc', role: 'UX Engineer' }
		],
		projects: [
			{ name: 'Dattabot', role: 'Product Research' },
			{ name: 'Purwadhika Startup School', role: 'UI/UX Design Instructor' },
			{ name: 'Rakamin Academy', role: 'Product Engineer' }
		]
	};
}
