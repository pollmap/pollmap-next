// /posts — 모든 채널 통합 인덱스. 정적 SSG.

import type { Metadata } from 'next';

import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Posts',
  description: '6개 채널의 모든 발행물 — Equity · ETF · Devlog · Trade · Field.',
};

export default async function PostsIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="frame pt-32">
      <div className="section-head mb-12">
        <div>
          <p className="section-overline">
            <span className="text-hal">/posts</span>
            <span>ALL CHANNELS · TIMELINE</span>
          </p>
          <h1 className="section-title">
            Posts <em className="not-italic font-bold">timeline</em>.
          </h1>
        </div>
        <div className="section-meta">
          <strong className="font-normal text-starlight">{posts.length}</strong>{' '}
          ENTRIES
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="py-20 text-center font-mono text-[12px] uppercase text-grey-deep">
          NO POSTS YET — STAY TUNED
        </p>
      ) : (
        <div className="border-b border-starlight/[0.06]">
          {posts.map((p) => (
            <PostCard key={p.frontmatter.slug} post={p.frontmatter} />
          ))}
        </div>
      )}
    </main>
  );
}
