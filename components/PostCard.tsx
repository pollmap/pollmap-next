// posts 페이지의 한 줄. 채널 + 제목 + description + 날짜.

import Link from 'next/link';

import type { PostFrontmatter } from '@/types/content';
import { formatDateKo } from '@/lib/utils';

const CHANNEL_LABEL: Record<PostFrontmatter['channel'], string> = {
  'equity-reports': 'CH-01 · EQUITY',
  'etf-products': 'CH-02 · ETF & WM',
  devlog: 'CH-03 · DEVLOG',
  'trade-journal': 'CH-04 · TRADE JOURNAL',
  'field-notes': 'CH-05 · FIELD NOTES',
};

interface PostCardProps {
  post: PostFrontmatter;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group block border-t border-starlight/[0.06] py-8 transition-colors duration-1000 hover:bg-orbital/[0.04]"
    >
      <div className="grid grid-cols-[180px_1fr_120px] items-baseline gap-6 max-md:grid-cols-1 max-md:gap-2">
        <span
          className="font-mono text-[10px] uppercase text-hal"
          style={{ letterSpacing: '0.25em' }}
        >
          {CHANNEL_LABEL[post.channel]}
        </span>

        <div>
          <h3
            className="mb-2 font-display text-[20px] font-medium uppercase leading-tight transition-colors group-hover:text-starlight"
            style={{ letterSpacing: '0.08em' }}
          >
            {post.title}
          </h3>
          <p className="text-[13px] leading-[1.6] text-grey">
            {post.description}
          </p>
        </div>

        <span
          className="text-right font-mono text-[11px] uppercase text-grey-deep max-md:text-left"
          style={{ letterSpacing: '0.15em' }}
        >
          {formatDateKo(post.publishedAt)}
        </span>
      </div>
    </Link>
  );
}

export default PostCard;
