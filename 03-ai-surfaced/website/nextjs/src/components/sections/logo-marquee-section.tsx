/**
 * @fileoverview Logo marquee component
 * @description Infinite scrolling marquee of company logos
 * 
 * AI/LLM GUIDE:
 * - Uses CSS animations for performance (compositor-friendly)
 * - Respects prefers-reduced-motion (pauses animation)
 * - Logos defined in lib/constants.ts (TRUSTED_COMPANIES)
 * - Images have explicit width for CLS prevention
 */

'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TRUSTED_COMPANIES } from '@/lib/constants';
import { Section, Container } from '@/components/ui';

/**
 * Single logo item in the marquee
 */
interface LogoItemProps {
  name: string;
  logo: string;
  width: number;
}

function LogoItem({ name, logo, width }: LogoItemProps) {
  return (
    <div
      className="flex items-center justify-center px-6 sm:px-8"
      style={{ minWidth: width + 48 }}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={width}
        height={40}
        className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        loading="lazy"
      />
    </div>
  );
}

/**
 * Marquee track that scrolls infinitely
 */
interface MarqueeTrackProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  duration?: number;
}

function MarqueeTrack({
  children,
  direction = 'left',
  duration = 60,
}: MarqueeTrackProps) {
  return (
    <div
      className={cn(
        'flex shrink-0',
        'motion-safe:animate-marquee motion-reduce:animate-none',
        direction === 'right' && 'motion-safe:animate-marquee-reverse'
      )}
      style={{
        // @ts-expect-error CSS custom property
        '--marquee-duration': `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Logo marquee section showing trusted companies
 * 
 * @example
 * <LogoMarqueeSection />
 */
export function LogoMarqueeSection() {
  // Duplicate logos for seamless loop
  const logos = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <Section spacing="sm" background="light">
      {/* Trust badge overlay */}
      <Container center className="relative z-10 mb-4">
        <p className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-600">
          <span className="font-semibold text-primary-black">8,000+</span>
          teams trust Ditto
        </p>
      </Container>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-light to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-light to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Scrolling track */}
        <div
          className="flex overflow-hidden py-6"
          role="marquee"
          aria-label="Companies that trust Ditto"
        >
          <MarqueeTrack duration={60}>
            {logos.map((company, index) => (
              <LogoItem
                key={`${company.name}-${index}`}
                name={company.name}
                logo={company.logo}
                width={company.width}
              />
            ))}
          </MarqueeTrack>
          {/* Duplicate for seamless loop */}
          <MarqueeTrack duration={60}>
            {logos.map((company, index) => (
              <LogoItem
                key={`${company.name}-dup-${index}`}
                name={company.name}
                logo={company.logo}
                width={company.width}
              />
            ))}
          </MarqueeTrack>
        </div>
      </div>
    </Section>
  );
}
