import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/**
 * Published posts, newest first. Drafts are excluded from production builds but
 * kept in `astro dev` so they can be previewed while being written.
 *
 * Every consumer of the blog collection (/blog, /blog/[slug], /rss.xml) goes
 * through here, so draft filtering and ordering can never drift between them.
 */
export async function getPublishedPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) =>
		import.meta.env.PROD ? data.draft !== true : true,
	);

	return posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

/** Rough reading time, rounded up, minimum one minute. */
export function readingTime(body: string | undefined): number {
	const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}
