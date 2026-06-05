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
		],
		works: [
			{
				title: 'Shafiq Platform',
				services: 'Product Design, Front End',
				year: 2024,
				image:
					'https://images.unsplash.com/photo-1780323241887-8efcb9b85c71?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				title: 'Fannatics App',
				services: 'Information Architecture, UX',
				year: 2023,
				image:
					'https://images.unsplash.com/photo-1780206709823-40966ac200ba?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				title: 'Transcosmos Portal',
				services: 'UX Engineering, Design System',
				year: 2022,
				image:
					'https://images.unsplash.com/photo-1780206709823-40966ac200ba?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				title: 'Dattabot Dashboard',
				services: 'Product Research, Prototyping',
				year: 2023,
				image:
					'https://images.unsplash.com/photo-1780206709823-40966ac200ba?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{ title: 'Purwadhika LMS', services: 'UI/UX Design, Front End', year: 2024 },
			{ title: 'Rakamin Academy', services: 'Product Engineering, Design', year: 2025 }
		]
	};
}
