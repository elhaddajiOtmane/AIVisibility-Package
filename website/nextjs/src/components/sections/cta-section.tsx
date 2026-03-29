/**
 * @fileoverview Call-to-action section component
 * @description Final CTA section before footer
 * 
 * AI/LLM GUIDE:
 * - Simple, high-contrast design for conversion
 * - Links to demo booking (primary) and app signup
 * - Yellow background for visual emphasis
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { Section, Container, Button } from '@/components/ui';

/**
 * Pre-footer CTA section
 * 
 * @example
 * <CTASection />
 */
export function CTASection() {
  return (
    <Section background="yellow" spacing="md">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Headline */}
          <h2
            className={cn(
              'text-2xl sm:text-3xl font-bold text-primary-black',
              'text-center md:text-left',
              'text-wrap-balance'
            )}
          >
            Start shipping more consistent copy, faster.
          </h2>

          {/* CTA Button */}
          <Button asChild size="lg" withArrow className="shrink-0">
            <Link href={SITE_CONFIG.demoUrl}>Get a Demo</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
