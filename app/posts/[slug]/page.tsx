// /posts/[slug] — 개별 포스트. MDX body 를 next-mdx-remote/rsc 로 렌더.

import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { formatDateKo } from '@/lib/utils';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const record = await getPostBySlug(params.slug);
  if (!record) return { title: 'Not found' };
  return {
    title: record.frontmatter.title,
    description: record.frontmatter.description,
  };
}

export default async function PostPage({ params }: PageProps) {
  const record = await getPostBySlug(params.slug);
  if (!record) notFound();

  const { frontmatter, body } = record;

  return (
    <main className="frame pt-32">
      <article className="mx-auto max-w-[68ch]">
        <p
          className="mb-4 font-mono text-[10px] uppercase text-hal"
          style={{ letterSpacing: '0.25em' }}
        >
          {frontmatter.channel.replace(/-/g, ' ')}
        </p>
        <h1
          className="mb-6 font-display text-[40px] font-medium uppercase leading-[1.15] text-starlight"
          style={{ letterSpacing: '0.05em' }}
        >
          {frontmatter.title}
        </h1>
        <p
          className="mb-12 font-mono text-[11px] uppercase text-grey-deep"
          style={{ letterSpacing: '0.2em' }}
        >
          {formatDateKo(frontmatter.publishedAt)}
          {frontmatter.readingTime && ` · ${frontmatter.readingTime} MIN READ`}
        </p>

        <div className="prose-pollmap text-[15px] leading-[1.85] text-starlight-dim [&_a]:text-orbital-bright [&_a]:underline [&_em]:not-italic [&_em]:text-starlight [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[24px] [&_h2]:uppercase [&_h2]:tracking-[0.08em] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-mono [&_h3]:text-[14px] [&_h3]:uppercase [&_h3]:tracking-[0.2em] [&_h3]:text-grey [&_p]:mb-5 [&_strong]:font-medium [&_strong]:text-starlight">
          <MDXRemote source={body} />
        </div>
      </article>
    </main>
  );
}
