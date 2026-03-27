/**
 * @fileoverview Stats and testimonials section
 * @description Shows key metrics and customer testimonials
 * 
 * AI/LLM GUIDE:
 * - Stats defined in lib/constants.ts (STATS)
 * - Testimonials defined in lib/constants.ts (TESTIMONIALS)
 * - Uses tabular-nums for stats alignment
 * - Accessible quote markup with blockquote
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { STATS, TESTIMONIALS } from '@/lib/constants';
import { Section, Container, Button } from '@/components/ui';
import { QuoteIcon } from '@/components/icons';

/**
 * Single stat display
 */
interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center lg:text-left">
      <p
        className={cn(
          'text-4xl sm:text-5xl lg:text-6xl font-bold',
          'font-variant-numeric-tabular-nums',
          'text-white'
        )}
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {value}
      </p>
      <p className="mt-2 text-lg text-white/80">{label}</p>
    </div>
  );
}

/**
 * Testimonial quote card
 */
interface TestimonialCardProps {
  quote: string;
  role: string;
  company: string;
}

function TestimonialCard({ quote, role, company }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col">
      <QuoteIcon className="w-12 h-12 text-white/30 mb-6" />
      <blockquote className="text-lg sm:text-xl text-white leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-white/70">
        {role}, {company}
      </figcaption>
    </figure>
  );
}

/**
 * Stats and testimonials section
 * 
 * @example
 * <StatsSection />
 */
export function StatsSection() {
  return (
    <Section background="red" spacing="lg">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">
            Small words, massive impact
          </p>
          <h2
            className={cn(
              'text-2xl sm:text-3xl font-bold text-white mb-6',
              'text-wrap-balance'
            )}
          >
            See how 8,000+ teams ship faster and collaborate better on product
            copy.
          </h2>
          <Button asChild variant="light">
            <Link href="/blog#case-study">See Case Studies</Link>
          </Button>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16 py-8 border-y border-white/20">
          {STATS.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
