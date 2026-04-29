// destinations 섹션의 한 행 (.dest).
// grid-cols-[80px_1fr_200px_240px_80px] — id, name+desc, class, stat, arrow.
// 정적 컴포넌트 — Server Component 로 렌더 가능.

import Link from 'next/link';

import type { ProjectFrontmatter } from '@/types/content';

interface ProjectCardProps {
  /** D-NN 번호 (1-based, 두 자리 패딩) */
  index: number;
  project: ProjectFrontmatter;
  /** 내부 라우팅 (true) vs 외부 GitHub (false, 기본) */
  internal?: boolean;
}

export function ProjectCard({ index, project, internal = false }: ProjectCardProps) {
  const id = `D-${String(index).padStart(2, '0')}`;
  const href = internal ? `/projects/${project.slug}` : project.repo;
  const isExternal = !internal;

  // statLabel 두 줄 분리 (예: "TOOLS / SERVERS" → 한 줄 그대로)
  return (
    <Link
      href={href}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="group grid grid-cols-[80px_1fr_200px_240px_80px] items-center gap-8 bg-void px-[var(--pad)] py-14 transition-colors duration-[3000ms] ease-out hover:bg-orbital/[0.06] max-md:grid-cols-[40px_1fr] max-md:gap-4 max-md:[&>*:nth-child(n+3)]:hidden"
      aria-label={`${project.name} — ${project.description}`}
    >
      <span
        className="font-mono text-[10px] text-hal"
        style={{ letterSpacing: '0.2em' }}
      >
        {id}
      </span>

      <div>
        <div
          className="mb-2 font-display text-[22px] font-medium uppercase"
          style={{ letterSpacing: '0.08em' }}
        >
          {project.name}
        </div>
        <div className="text-[13px] leading-[1.6] text-grey">
          {project.description}
        </div>
      </div>

      <span
        className="font-mono text-[11px] uppercase text-grey-deep"
        style={{ letterSpacing: '0.15em' }}
      >
        CLASS · <span className="text-starlight">{project.class}</span>
      </span>

      <div
        className="text-right font-mono text-[24px] font-light text-starlight"
        style={{ letterSpacing: '0.05em' }}
      >
        {project.stat}
        <span
          className="mt-1 block font-mono text-[11px] uppercase text-grey-deep"
          style={{ letterSpacing: '0.2em' }}
        >
          {project.statLabel}
        </span>
      </div>

      <span
        aria-hidden="true"
        className="text-right font-mono text-[18px] text-grey-deep transition-all duration-[2000ms] group-hover:translate-x-2 group-hover:text-starlight"
      >
        →
      </span>
    </Link>
  );
}

export default ProjectCard;
