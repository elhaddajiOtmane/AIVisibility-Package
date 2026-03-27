/**
 * @fileoverview Footer component
 * @description Site footer with navigation links, newsletter, and copyright
 * 
 * AI/LLM GUIDE:
 * - Footer links defined in lib/constants.ts (FOOTER_SECTIONS)
 * - Newsletter form follows form accessibility guidelines
 * - Responsive grid layout for desktop/mobile
 */

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, FOOTER_SECTIONS } from '@/lib/constants';
import { Container } from '@/components/ui/container';
import { HeartIcon } from '@/components/icons';

/**
 * Newsletter signup form
 */
function NewsletterForm() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary-black text-pretty">
        Never miss an update: Sign up for updates, exclusive insights, and product releases.
      </h3>
      <form 
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          // Form submission handled by backend
        }}
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Your email&hellip;"
          spellCheck={false}
          className={cn(
            'flex-1 min-w-0 px-4 py-2.5',
            'bg-white border border-gray-200 rounded-lg',
            'text-primary-black placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-primary-black focus:border-transparent',
            'transition-colors'
          )}
        />
        <button
          type="submit"
          className={cn(
            'px-6 py-2.5',
            'bg-primary-black text-white rounded-lg',
            'font-medium',
            'hover:bg-primary-black/90 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2'
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

/**
 * Footer link section
 */
interface FooterLinkSectionProps {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-500 mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'text-sm text-primary-black hover:text-primary-black/70',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2 rounded',
                'transition-colors'
              )}
              {...(link.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {link.label}
              {link.external && (
                <span className="sr-only"> (opens in new tab)</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Large Ditto logo for footer
 */
function FooterLogo() {
  return (
    <div className="w-full py-8" aria-hidden="true">
      <svg
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-primary-black"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="currentColor"
          fontSize="180"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          ditto.
        </text>
      </svg>
    </div>
  );
}

/**
 * Copyright and "Made with love" section
 */
function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Made with</span>
        <HeartIcon className="h-4 w-4 text-accent-red" />
        <span>in San Francisco</span>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {currentYear} Ditto Tech Inc.
      </p>
    </div>
  );
}

/**
 * Main Footer component
 * 
 * @example
 * // In layout.tsx
 * <Footer />
 */
export function Footer() {
  return (
    <footer className="bg-background-light">
      <Container className="py-16">
        {/* Newsletter Section */}
        <div className="mb-12">
          <NewsletterForm />
        </div>

        {/* Links Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-8 mb-12">
          {FOOTER_SECTIONS.map((section) => (
            <FooterLinkSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Links Grid - Mobile (Collapsible) */}
        <div className="lg:hidden space-y-4 mb-12">
          {FOOTER_SECTIONS.map((section) => (
            <details key={section.title} className="group">
              <summary
                className={cn(
                  'flex items-center justify-between py-3 cursor-pointer',
                  'text-sm font-medium text-gray-500',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black rounded',
                  'list-none [&::-webkit-details-marker]:hidden'
                )}
              >
                {section.title}
                <svg
                  className="h-4 w-4 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="pl-4 py-2 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm text-primary-black hover:text-primary-black/70',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black rounded',
                        'transition-colors'
                      )}
                      {...(link.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {/* Large Logo */}
        <FooterLogo />

        {/* Copyright */}
        <FooterCopyright />
      </Container>
    </footer>
  );
}
