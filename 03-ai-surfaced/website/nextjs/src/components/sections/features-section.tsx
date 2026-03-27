/**
 * @fileoverview Features section component
 * @description Showcases product features with hover interactions
 * 
 * AI/LLM GUIDE:
 * - Features defined in lib/constants.ts (FEATURES)
 * - Uses CSS grid for responsive layout
 * - Each feature card links to detailed page
 * - Hover states show preview images
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FEATURES } from '@/lib/constants';
import { Section, Container } from '@/components/ui';
import { ArrowRightIcon } from '@/components/icons';

/**
 * Single feature card with hover effect
 */
interface FeatureCardProps {
  title: string;
  href: string;
}

function FeatureCard({ title, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex items-center justify-between',
        'py-4 px-2 border-b border-gray-200',
        'hover:bg-gray-50 transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-black'
      )}
    >
      <span className="text-lg sm:text-xl font-medium text-primary-black">
        {title}
      </span>
      <ArrowRightIcon
        className={cn(
          'h-6 w-6 text-accent-yellow',
          'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0',
          'transition-all duration-200'
        )}
      />
    </Link>
  );
}

/**
 * Features section component
 * 
 * @example
 * <FeaturesSection />
 */
export function FeaturesSection() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Heading */}
          <div>
            <h2
              className={cn(
                'text-3xl sm:text-4xl lg:text-5xl font-bold',
                'text-primary-black leading-tight',
                'text-wrap-balance'
              )}
            >
              Everything you need to manage product copy
            </h2>
          </div>

          {/* Right column - Feature list */}
          <div className="flex flex-col">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                href={feature.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
