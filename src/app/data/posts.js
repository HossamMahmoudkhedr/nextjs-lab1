const posts = [
	{
		id: 1,
		title: 'Understanding React Hooks',
		slug: 'understanding-react-hooks',
		summary:
			'An introduction to useState, useEffect, and custom hooks in React.',
		date: '2025-05-01',
		category: 'React',
	},
	{
		id: 2,
		title: 'Getting Started with Next.js',
		slug: 'getting-started-with-nextjs',
		summary: 'Learn how to build fast, scalable web apps using Next.js.',
		date: '2025-04-20',
		category: 'Next.js',
	},
	{
		id: 3,
		title: 'Styling in Next.js: CSS Modules vs Tailwind',
		slug: 'styling-in-nextjs',
		summary: 'Compare different styling approaches in Next.js projects.',
		date: '2025-03-18',
		category: 'Styling',
	},
	{
		id: 4,
		title: 'How to Use the Next.js App Router',
		slug: 'nextjs-app-router',
		summary:
			'Step-by-step guide on using the App Router in Next.js 13 and above.',
		date: '2025-02-25',
		category: 'Next.js',
	},
	{
		id: 5,
		title: 'Deploying Your Next.js App to Vercel',
		slug: 'deploy-nextjs-vercel',
		summary: 'A quick guide to deploying your Next.js app on Vercel for free.',
		date: '2025-02-15',
		category: 'Deployment',
	},
	{
		id: 6,
		title: 'SEO Optimization in Next.js',
		slug: 'seo-optimization-nextjs',
		summary:
			'Best practices for making your Next.js app search engine friendly.',
		date: '2025-01-30',
		category: 'SEO',
	},
	{
		id: 7,
		title: 'Working with Images in Next.js',
		slug: 'working-with-images-nextjs',
		summary:
			'How to use the Next.js Image component for optimized performance.',
		date: '2025-01-10',
		category: 'Next.js',
	},
	{
		id: 8,
		title: 'Client vs Server Components in Next.js 13+',
		slug: 'client-vs-server-components',
		summary:
			'Understanding the difference between client and server components.',
		date: '2024-12-28',
		category: 'Next.js',
	},
	{
		id: 9,
		title: 'Building Reusable Components with React',
		slug: 'reusable-components-react',
		summary: 'Tips for writing clean and reusable UI components in React.',
		date: '2024-12-12',
		category: 'React',
	},
	{
		id: 10,
		title: 'Handling Forms in React with Formik',
		slug: 'handling-forms-react-formik',
		summary: 'A practical guide to managing forms and validation using Formik.',
		date: '2024-11-30',
		category: 'Forms',
	},
];

const categories = ['All', ...new Set(posts.map((post) => post.category))];

export { posts, categories };
