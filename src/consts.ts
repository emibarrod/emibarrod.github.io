// Site-wide constants. Declared once here and imported everywhere, so nothing
// is hard-coded into components.

export const SITE_TITLE = 'Emilio Barragán';
export const SITE_DESCRIPTION =
	'Data engineer building reliable production pipelines in Python, Airflow and dbt. Writing about data engineering, analytics engineering and automation.';

export const SITE_AUTHOR = 'Emilio Barragán Rodríguez';
export const SITE_URL = 'https://emibarrod.com';

// One-line positioning statement, derived from the CV. Used on the homepage.
export const TAGLINE =
	'Data engineer. I build production data pipelines that hold up.';

// Short "what I'm doing now" line. Update when the role changes.
export const CURRENTLY =
	'Currently a Mid Data Engineer at Adsmurai, working with dbt and external APIs to centralise marketing, SEO and social listening data.';

// Contact is routed exclusively through LinkedIn — no email or phone anywhere
// on the site, by design. Do not add a mailto: or a contact form here.
export const SOCIALS = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/emibarrod/',
		icon: 'linkedin' as const,
	},
	{
		name: 'GitHub',
		href: 'https://github.com/emibarrod',
		icon: 'github' as const,
	},
	{
		name: 'X',
		href: 'https://x.com/emibarrod',
		icon: 'x' as const,
	},
];

export const NAV = [
	{ href: '/blog', label: 'Writing' },
	{ href: '/work', label: 'Work' },
	{ href: '/cv', label: 'CV' },
	{ href: '/about', label: 'About' },
];
