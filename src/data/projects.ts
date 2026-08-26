// Projects shown on /work. Recovered from the pre-Astro site
// (`git show 1b79164^:proyectos.html`) and translated.

export interface Project {
	name: string;
	year: string;
	summary: string;
	detail?: string;
	tech: string[];
	href?: string;
	hrefLabel?: string;
	/** Marks a project as no longer running, so the page does not imply it is. */
	archived?: boolean;
}

export const PROJECTS: Project[] = [
	{
		name: 'MoMIR',
		year: '2023',
		summary:
			'An automated Twitter account that demotivated medical students revising for the MIR exam.',
		detail:
			'The premise was a joke taken too seriously: a GPT-3 powered account generating cheerfully discouraging messages, running unattended on GCP. It started as a bad idea between engineers and turned into a working pipeline. The account is still up but no longer posting.',
		tech: ['Python', 'GPT-3', 'OpenAI API', 'Twitter API', 'Google Cloud'],
		href: 'https://x.com/motivacionmir',
		hrefLabel: '@motivacionmir',
		archived: true,
	},
	{
		name: 'Web scraping at scale',
		year: '2022',
		summary:
			'Automated scraping and storage of two large datasets on the data job market.',
		detail:
			'5,000+ data-related job postings from LinkedIn and 8,000+ data courses from Udemy, collected and stored automatically to see what the market was actually asking for.',
		tech: ['Python', 'BeautifulSoup', 'Selenium', 'Google Colab'],
	},
];
