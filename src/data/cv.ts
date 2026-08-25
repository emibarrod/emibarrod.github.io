// CV data, from Emilio's current CV. This is the single source of truth for
// /cv — the page is generated from it, and ⌘P on that page produces the PDF,
// so there is no separate document to keep in sync.
//
// Deliberately absent: email address and phone number. Contact is routed
// through LinkedIn only. Do not add them here.

export interface Role {
	company: string;
	title: string;
	location: string;
	start: string;
	end: string;
	highlights: string[];
}

/** Pre-2023 roles, kept as one-liners so they do not dilute recent work. */
export interface EarlierRole {
	company: string;
	title: string;
	period: string;
	note: string;
}

export interface Study {
	institution: string;
	qualification: string;
	period: string;
}

export const SUMMARY =
	'Data Engineer with 3+ years of experience building reliable production pipelines in Python, Airflow and dbt, with a strong focus on data quality, automation and analytics engineering.';

export const ROLES: Role[] = [
	{
		company: 'Adsmurai',
		title: 'Mid Data Engineer',
		location: 'Remote',
		start: 'December 2025',
		end: 'Present',
		highlights: [
			'Engineered robust ELT and ETL pipelines using dbt and external APIs, centralising social listening, marketing and SEO data into a unified data warehouse.',
			'Built automation workflows using AI agents, driving a 50% increase in operational efficiency and eliminating repetitive manual tasks.',
		],
	},
	{
		company: 'Clarity AI',
		title: 'Mid Data Operations Engineer',
		location: 'Remote',
		start: 'March 2024',
		end: 'May 2025',
		highlights: [
			'Developed more than 5 data pipelines using Airflow and Python, and maintained more than 10 existing ETLs.',
			'Built more than 20 dbt models to generate business metrics.',
			'Created three scraping processes for ESG-related sources using BeautifulSoup and Selenium.',
			'Optimised the team development environment, improving development time by 95%.',
			'Provided operational support for a team of more than 45 people.',
		],
	},
	{
		company: 'Smartup Agencia Growth',
		title: 'Junior Data Engineer',
		location: 'Remote',
		start: 'May 2023',
		end: 'March 2024',
		highlights: [
			'Developed and maintained more than 10 ETLs using Python, virtual machines, Azure and cron jobs.',
			'Built four scraping processes for different job portals using BeautifulSoup and Selenium.',
		],
	},
];

export const EARLIER_ROLES: EarlierRole[] = [
	{
		company: 'Possible Incorporated',
		title: 'Data Scientist',
		period: 'Jun 2022 — Feb 2023',
		note: 'Containerised ML and image-processing applications, built API data pipelines, and managed two interns.',
	},
	{
		company: 'BABEL',
		title: 'Data & Analytics Specialist',
		period: 'Nov 2021 — Jun 2022',
		note: 'Data modelling for internal dashboards and ETL development with Azure Data Factory.',
	},
	{
		company: 'PwC España',
		title: 'Data Scientist',
		period: 'Jul 2021 — Sep 2021',
		note: 'Built an image-matching machine learning system.',
	},
	{
		company: 'Athento',
		title: 'Data Scientist (intern)',
		period: 'Aug 2020 — Jan 2021',
		note: 'Developed machine learning features for a document management platform.',
	},
];

export const EDUCATION: Study[] = [
	{
		institution: 'Universidad Internacional de Valencia',
		qualification: "Master's degree in Big Data and Data Science",
		period: 'April 2023 — Present',
	},
	{
		institution: 'Universidad de Sevilla',
		qualification: 'Computer Science Degree',
		period: 'September 2017 — January 2023',
	},
];

// Azure is intentionally not listed here — it survives only in the Smartup
// role, and the current stack has moved on.
export const TECHNOLOGIES = [
	'Python',
	'SQL',
	'dbt',
	'Airflow',
	'Docker',
	'AWS',
	'GCP',
];

export const LANGUAGES = [
	{ language: 'Spanish', level: 'Native' },
	{ language: 'English', level: 'C1' },
];
