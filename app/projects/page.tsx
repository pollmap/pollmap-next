// /projects — 12개 레포 전체.

import type { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: '12개 공개 레포 — Featured 5 + Long-tail 7.',
};

export default function ProjectsIndexPage() {
  const all = getAllProjects();

  return (
    <main className="frame pt-32">
      <div className="section-head mb-12">
        <div>
          <p className="section-overline">
            <span className="text-hal">/projects</span>
            <span>POLLMAP · NETWORK</span>
          </p>
          <h1 className="section-title">
            All <em className="not-italic font-bold">orbital</em> ports.
          </h1>
        </div>
        <div className="section-meta">
          <strong className="font-normal text-starlight">{all.length}</strong>{' '}
          PUBLIC NODES
        </div>
      </div>

      <div
        className="grid gap-px border-y"
        style={{
          background: 'rgba(245,245,245,0.06)',
          borderColor: 'rgba(245,245,245,0.06)',
        }}
      >
        {all.map((p, i) => (
          <ProjectCard key={p.slug} index={i + 1} project={p} internal />
        ))}
      </div>
    </main>
  );
}
