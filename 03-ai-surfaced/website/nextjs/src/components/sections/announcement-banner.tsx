/**
 * @fileoverview Announcement banner component
 * @description Top banner for announcements/promotions
 * 
 * AI/LLM GUIDE:
 * - Sticky or fixed position at top of page
 * - Links to announcement page
 * - Can be dismissed (optional)
 * - Yellow background for high visibility
 */

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@/components/icons';

export interface AnnouncementBannerProps {
  /** Short text for mobile */
  mobileText?: string;
  /** Full text for desktop */
  desktopText?: string;
  /** Link destination */
  href?: string;
  /** Optional: can banner be dismissed */
  dismissible?: boolean;
  /** Optional: callback when dismissed */
  onDismiss?: () => void;
}

/** Default announcement content */
const DEFAULT_ANNOUNCEMENT = {
  mobileText: 'Magic Draft is here.',
  desktopText: 'Magic Draft is here. Discover the future of writing product text with Ditto',
  href: '/blog/magic-draft',
};

/**
 * Announcement banner at top of page
 * 
 * @example
 * <AnnouncementBanner
 *   mobileText="Magic Draft is here."
 *   desktopText="Magic Draft is here. Discover the future of writing product text with Ditto"
 *   href="/blog/magic-draft"
 * />
 */
export function AnnouncementBanner({
  mobileText = DEFAULT_ANNOUNCEMENT.mobileText,
  desktopText = DEFAULT_ANNOUNCEMENT.desktopText,
  href = DEFAULT_ANNOUNCEMENT.href,
  dismissible = false,
  onDismiss,
}: AnnouncementBannerProps) {
  return (
    <div className="bg-accent-yellow">
      <Link
        href={href}
        className={cn(
          'flex items-center justify-center gap-2 px-4 py-3',
          'text-primary-black text-sm font-medium',
          'hover:bg-accent-yellow/90 transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-black'
        )}
      >
        {/* Mobile text */}
        <span className="sm:hidden">{mobileText}</span>
        {/* Desktop text */}
        <span className="hidden sm:inline">{desktopText}</span>
        <ArrowRightIcon className="h-4 w-4" />
      </Link>

      {dismissible && (
        <button
          onClick={onDismiss}
          className={cn(
            'absolute right-2 top-1/2 -translate-y-1/2',
            'p-1 rounded hover:bg-black/10',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black'
          )}
          aria-label="Dismiss announcement"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
