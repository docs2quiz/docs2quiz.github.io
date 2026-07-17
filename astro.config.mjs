// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs2quiz.github.io',
	integrations: [
		starlight({
			title: 'docs-to-quiz',
			logo: { src: './src/assets/logo.png' },
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/iqbal-rahmatullah/docs-to-quiz' },
			],
			editLink: {
				baseUrl: 'https://github.com/docs2quiz/docs2quiz.github.io/edit/main/',
			},
			customCss: ['./src/styles/theme.css'],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				id: { label: 'Bahasa Indonesia', lang: 'id' },
			},
			sidebar: [
				{
					label: 'Start Here',
					translations: { id: 'Mulai' },
					items: [
						'getting-started/introduction',
						'getting-started/installation',
						'getting-started/first-quiz',
					],
				},
				{
					label: 'Guides',
					translations: { id: 'Panduan' },
					items: [
						'guides/knowledge-bases',
						'guides/generating-questions',
						'guides/exporting',
						'guides/history',
					],
				},
				{
					label: 'Reference',
					translations: { id: 'Referensi' },
					items: [
						'reference/configuration',
						'reference/how-it-works',
						'reference/api',
						'reference/research',
					],
				},
				{
					label: 'FAQ & Troubleshooting',
					translations: { id: 'FAQ & Pemecahan Masalah' },
					items: ['faq'],
				},
			],
		}),
	],
});
