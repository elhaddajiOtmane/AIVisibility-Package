/**
 * @fileoverview Workflow section with scrolling steps
 * @description Shows product workflow stages with sticky navigation
 * 
 * AI/LLM GUIDE:
 * - Workflow steps defined in lib/constants.ts (WORKFLOW_STEPS)
 * - Uses Intersection Observer for scroll-triggered highlights
 * - Sticky sidebar shows current step
 * - Each step has image + description
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { Section, Container } from '@/components/ui';

/**
 * Sticky navigation dot for workflow step
 */
interface WorkflowNavItemProps {
  step: typeof WORKFLOW_STEPS[number];
  isActive: boolean;
  isPast: boolean;
}

function WorkflowNavItem({ step, isActive, isPast }: WorkflowNavItemProps) {
  return (
    <a
      href={`#workflow-${step.id}`}
      className={cn(
        'flex items-center gap-3 py-2',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2 rounded'
      )}
    >
      {/* Dot indicator */}
      <span
        className={cn(
          'w-3 h-3 rounded-full transition-all duration-200',
          isActive && 'bg-primary-black scale-125',
          isPast && !isActive && 'bg-primary-black',
          !isActive && !isPast && 'bg-gray-300'
        )}
        aria-hidden="true"
      />
      {/* Label */}
      <span
        className={cn(
          'text-sm font-medium transition-colors duration-200',
          isActive && 'text-primary-black',
          isPast && !isActive && 'text-primary-black',
          !isActive && !isPast && 'text-gray-400'
        )}
      >
        {step.label}
      </span>
    </a>
  );
}

/**
 * Single workflow step content
 */
interface WorkflowStepContentProps {
  step: typeof WORKFLOW_STEPS[number];
}

function WorkflowStepContent({ step }: WorkflowStepContentProps) {
  const bgColors: Record<string, string> = {
    brown: 'bg-amber-100',
    purple: 'bg-purple-100',
    blue: 'bg-blue-100',
    pink: 'bg-pink-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    sky: 'bg-sky-100',
  };

  return (
    <div
      id={`workflow-${step.id}`}
      className="scroll-mt-24 min-h-[50vh] py-12"
    >
      {/* Image placeholder */}
      <div
        className={cn(
          'relative aspect-[4/3] rounded-2xl overflow-hidden mb-6',
          bgColors[step.color] || 'bg-gray-100'
        )}
      >
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <span className="text-sm">Image: {step.label}</span>
        </div>
      </div>

      {/* Text content */}
      <h3 className="text-xl sm:text-2xl font-bold text-primary-black mb-2">
        {step.title}
      </h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
}

/**
 * Workflow section with scroll-triggered navigation
 * 
 * @example
 * <WorkflowSection />
 */
export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Section spacing="lg">
      <Container>
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2
            className={cn(
              'text-2xl sm:text-3xl lg:text-4xl font-bold',
              'text-primary-black',
              'text-wrap-balance'
            )}
          >
            Give product copy the attention it deserves, at every stage of your
            product workflow.
          </h2>
        </div>

        {/* Workflow grid */}
        <div ref={sectionRef} className="grid lg:grid-cols-[200px_1fr] gap-12">
          {/* Sticky navigation */}
          <nav
            className="hidden lg:block sticky top-24 h-fit"
            aria-label="Workflow steps"
          >
            {WORKFLOW_STEPS.map((step, index) => (
              <WorkflowNavItem
                key={step.id}
                step={step}
                isActive={index === activeStep}
                isPast={index < activeStep}
              />
            ))}
          </nav>

          {/* Step content */}
          <div className="space-y-8">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
              >
                <WorkflowStepContent step={step} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
