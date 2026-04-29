// §01 — Featured 5 레포를 데이터 플레이트 형태로.

import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';

export function SectionDestinations() {
  const featured = getFeaturedProjects();

  return (
    <section id="destinations" className="section">
      <div className="section-head">
        <div>
          <p className="section-overline">
            <span className="text-hal">§ 01</span>
            <span>DESTINATIONS · ORBITAL PORTS</span>
          </p>
          <h2 className="section-title">
            Five <em className="not-italic font-bold">habitable</em> repos.
          </h2>
        </div>
        <div className="section-meta">
          <strong className="font-normal text-starlight">15</strong> PUBLIC
          NODES · POLLMAP
        </div>
      </div>

      <div
        className="grid gap-px border-y"
        style={{
          background: 'rgba(245,245,245,0.06)',
          borderColor: 'rgba(245,245,245,0.06)',
        }}
      >
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} index={i + 1} project={p} />
        ))}
      </div>
    </section>
  );
}

export default SectionDestinations;
