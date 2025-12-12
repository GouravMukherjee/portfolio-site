'use client';

import Link from 'next/link';
import { trackProjectClick, trackResumeDownload, trackSocialLinkClick } from '@/lib/analytics';

/**
 * Example: Track project card clicks
 */
export function TrackedProjectLink({
  id,
  title,
  href,
  children,
}: {
  id: string | number;
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link href={href as any} onClick={() => trackProjectClick(id, title)}>
      {children}
    </Link>
  );
}

/**
 * Example: Track resume downloads
 */
export function TrackedResumeLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} onClick={trackResumeDownload} download>
      {children}
    </a>
  );
}

/**
 * Example: Track social link clicks
 */
export function TrackedSocialLink({
  platform,
  href,
  children,
}: {
  platform: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={() => trackSocialLinkClick(platform, href)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
