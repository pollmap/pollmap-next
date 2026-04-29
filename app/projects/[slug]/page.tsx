// /projects/[slug] — 단일 프로젝트.
// MDX 본문이 있으면 그걸, 없으면 frontmatter 만으로 카드 표기.

import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Metadata } from 'next';

import { getAllProjects, getProjectBySlug } from '@/lib/projects';

interface PageProps {
  params: { slug: string };
}

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Not found' };
  return {
    title: project.name,
    description: project.description,
  };
}

async function readProjectMdx(slug: string): Promise<string | null> {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(fullPath, 'utf-8');
    return matter(raw).content;
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const body = await readProjectMdx(params.slug);

  return (
    <main className="frame pt-32">
      <article className="mx-auto max-w-[80ch]">
        <p
          className="mb-4 font-mono text-[10px] uppercase text-hal"
          style={{ letterSpacing: '0.25em' }}
        >
          CLASS · {project.class}
        </p>
        <h1
          className="mb-6 font-display text-[44px] font-medium uppercase leading-[1.15] text-starlight"
          style={{ letterSpacing: '0.06em' }}
        >
          {project.name}
        </h1>
        <p className="mb-2 max-w-[60ch] text-[15px] leading-[1.7] text-grey">
          {project.description}
        </p>
        <p
          className="mb-12 font-mono text-[11px] uppercase text-grey-deep"
          style={{ letterSpacing: '0.2em' }}
        >
          {project.stat} · {project.statLabel} ·{' '}
          <a
            className="text-orbital-bright underline"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            github ↗
          </a>
        </p>

        {body ? (
          <div className="prose-pollmap text-[15px] leading-[1.85] text-starlight-dim [&_a]:text-orbital-bright [&_a]:underline [&_em]:not-italic [&_em]:text-starlight [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:uppercase [&_h2]:tracking-[0.08em] [&_p]:mb-5 [&_strong]:font-medium [&_strong]:text-starlight">
            <MDXRemote source={body} />
          </div>
        ) : (
          <p className="font-mono text-[12px] uppercase text-grey-deep">
            DETAILED WRITE-UP COMING SOON
          </p>
        )}
      </article>
    </main>
  );
}
