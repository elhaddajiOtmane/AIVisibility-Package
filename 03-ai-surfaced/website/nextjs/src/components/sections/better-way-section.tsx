/**
 * @fileoverview "Better Way" manifesto section
 * @description Animated section showing the problem Ditto solves
 * 
 * AI/LLM GUIDE:
 * - Shows scattered tools/workflows that Ditto consolidates
 * - Animation respects prefers-reduced-motion
 * - Highlights: spreadsheets, mockups, slack, translation tools
 */

import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/ui';

/**
 * Floating element representing a scattered tool
 */
interface FloatingToolProps {
  label: string;
  className?: string;
}

function FloatingTool({ label, className }: FloatingToolProps) {
  return (
    <div
      className={cn(
        'absolute px-3 py-1.5 rounded-lg text-sm font-medium',
        'bg-white shadow-md border border-gray-100',
        'motion-safe:animate-float motion-reduce:animate-none',
        className
      )}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

/**
 * "Better Way" section showing the problem Ditto solves
 * 
 * @example
 * <BetterWaySection />
 */
export function BetterWaySection() {
  return (
    <Section spacing="xl" className="overflow-hidden">
      <Container>
        {/* Problem visualization */}
        <div className="relative h-64 sm:h-80 mb-12">
          {/* Floating tools showing fragmented workflow */}
          <FloatingTool
            label="spreadsheets"
            className="top-[10%] left-[5%] bg-green-50 text-green-700"
          />
          <FloatingTool
            label="mockups"
            className="top-[20%] right-[10%] bg-purple-50 text-purple-700"
          />
          <FloatingTool
            label="translation tools"
            className="bottom-[30%] left-[15%] bg-blue-50 text-blue-700"
          />
          <FloatingTool
            label="slack messages"
            className="bottom-[20%] right-[20%] bg-pink-50 text-pink-700"
          />
          <FloatingTool
            label="hardcoded strings"
            className="top-[40%] left-[40%] bg-amber-50 text-amber-700"
          />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold',
              'text-primary-black',
              'text-wrap-balance'
            )}
          >
            It&apos;s time for a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-yellow">
                Better Way
              </span>
              {/* Decorative underline */}
              <span
                className="absolute bottom-1 left-0 right-0 h-3 bg-accent-yellow/30 -z-0"
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>
      </Container>
    </Section>
  );
}
