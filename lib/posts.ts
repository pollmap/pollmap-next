// content/posts/*.mdx 의 frontmatter 를 빌드 타임에 파싱.
// gray-matter 로 frontmatter 만 추출 (본문 렌더는 next-mdx-remote 또는 MDX 라우팅).
//
// Node.js (Server Component) 전용 — 클라이언트에서 import 금지.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

import type { PostFrontmatter, ContentRecord } from '@/types/content';
import { compareByPublishedDesc } from '@/lib/utils';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

/** 단일 .mdx 파일을 frontmatter + body 로 파싱 */
async function readPost(
  fileName: string,
): Promise<ContentRecord<PostFrontmatter> | null> {
  if (!fileName.endsWith('.mdx')) {
    return null;
  }
  const fullPath = path.join(POSTS_DIR, fileName);
  let raw: string;
  try {
    raw = await fs.readFile(fullPath, 'utf-8');
  } catch (err) {
    // 파일 시스템 에러는 명시적으로 로그하고 null 반환 (silently swallow 금지)
    console.error(`[posts] failed to read ${fileName}:`, err);
    return null;
  }
  const parsed = matter(raw);

  // 슬러그는 파일명 기반 — frontmatter 의 slug 가 누락돼도 fallback
  const baseSlug = fileName.replace(/\.mdx$/, '');
  const data = parsed.data as Partial<PostFrontmatter>;

  // 최소 필드 검증 — title, publishedAt, channel 은 필수
  if (
    typeof data.title !== 'string' ||
    typeof data.publishedAt !== 'string' ||
    typeof data.channel !== 'string'
  ) {
    console.warn(`[posts] missing required frontmatter in ${fileName}`);
    return null;
  }

  const frontmatter: PostFrontmatter = {
    slug: typeof data.slug === 'string' ? data.slug : baseSlug,
    title: data.title,
    description: typeof data.description === 'string' ? data.description : '',
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    channel: data.channel as PostFrontmatter['channel'],
    tags: data.tags,
    draft: data.draft === true,
    readingTime: typeof data.readingTime === 'number' ? data.readingTime : undefined,
  };

  return { frontmatter, body: parsed.content };
}

/** 모든 포스트 (draft 제외, 최신순) */
export async function getAllPosts(): Promise<
  ReadonlyArray<ContentRecord<PostFrontmatter>>
> {
  let files: ReadonlyArray<string> = [];
  try {
    files = await fs.readdir(POSTS_DIR);
  } catch (err) {
    console.error('[posts] cannot read content/posts directory:', err);
    return [];
  }

  const records = await Promise.all(files.map((f) => readPost(f)));
  const filtered = records.filter(
    (r): r is ContentRecord<PostFrontmatter> =>
      r !== null && r.frontmatter.draft !== true,
  );

  return filtered.sort((a, b) =>
    compareByPublishedDesc(a.frontmatter, b.frontmatter),
  );
}

export async function getPostBySlug(
  slug: string,
): Promise<ContentRecord<PostFrontmatter> | null> {
  const all = await getAllPosts();
  return all.find((r) => r.frontmatter.slug === slug) ?? null;
}

export async function getPostSlugs(): Promise<ReadonlyArray<string>> {
  const all = await getAllPosts();
  return all.map((r) => r.frontmatter.slug);
}
