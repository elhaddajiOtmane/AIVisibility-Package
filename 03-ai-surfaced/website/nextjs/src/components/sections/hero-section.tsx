/**
 * @fileoverview Hero section component
 * @description Main hero section with animated headline and CTA buttons
 * 
 * AI/LLM GUIDE:
 * - Animated text cycles through words (Grow, Scale, Collaborate)
 * - Respects prefers-reduced-motion
 * - CTA buttons link to app and demo booking
 * - Uses CSS animations for performance
 */

'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { Section, Container, Button } from '@/components/ui';

/**
 * Animated word that cycles through different values
 */
interface AnimatedWordProps {
  words: string[];
  className?: string;
}

function AnimatedWord({ words, className }: AnimatedWordProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion.current) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={cn(
        'inline-block transition-all duration-300',
        isAnimating && 'opacity-0 translate-y-2',
        !isAnimating && 'opacity-100 translate-y-0',
        className
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      {words[currentIndex]}
    </span>
  );
}

/**
 * Tag badge component (e.g., "Editing", "Reviewing")
 */
interface TagBadgeProps {
  label: string;
  variant?: 'editing' | 'reviewing' | 'code';
}

function TagBadge({ label, variant = 'editing' }: TagBadgeProps) {
  const variants = {
    editing: 'bg-primary-black text-white',
    reviewing: 'bg-accent-yellow text-primary-black',
    code: 'bg-accent-purple text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium',
        variants[variant]
      )}
    >
      {variant === 'editing' && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 15 15"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M1.67 13.33H2.85L11 5.19 9.81 4 1.67 12.15v1.18zM0 15v-3.54l11-10.98c.17-.15.35-.27.55-.35.2-.08.41-.13.64-.13.22 0 .44.04.65.13.2.08.38.21.54.37l1.15 1.17c.17.15.29.33.36.54.08.21.11.42.11.62 0 .22-.04.43-.11.64-.08.2-.19.38-.36.55L3.54 15H0z" />
        </svg>
      )}
      {variant === 'reviewing' && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 15 15"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.4 1.76L9 0H0v15h2V8.82h5.6l.4 1.77H15V1.76H9.4z" />
        </svg>
      )}
      {variant === 'code' && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 25 15"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.5 15L0 7.5 7.5 0l1.78 1.78L3.53 7.53l5.72 5.72L7.5 15zm10 0l-1.78-1.78 5.75-5.75-5.75-5.72L17.5 0 25 7.5 17.5 15z" />
        </svg>
      )}
      {label}
    </span>
  );
}

/**
 * Hero section with animated headline
 * 
 * @example
 * <HeroSection />
 */
export function HeroSection() {
  const animatedWords = ['Grow', 'Scale', 'Collaborate'];

  return (
    <Section spacing="lg" className="overflow-hidden">
      <Container size="xl" center>
        {/* Main Headline */}
        <h1
          className={cn(
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
            'font-bold tracking-tight text-primary-black',
            'text-wrap-balance'
          )}
        >
          Write clearly.
          <br />
          <AnimatedWord
            words={animatedWords}
            className="text-primary-black"
          />{' '}
          effortlessly.
        </h1>

        {/* Subheadline */}
        <p
          className={cn(
            'mt-6 mx-auto max-w-2xl',
            'text-lg sm:text-xl text-gray-600',
            'text-pretty'
          )}
        >
          {SITE_CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" withArrow>
            <Link href={SITE_CONFIG.demoUrl}>Get a Demo</Link>
          </Button>
          <Button asChild variant="light" size="lg" withArrow>
            <Link href={SITE_CONFIG.appUrl}>Get Started Free</Link>
          </Button>
        </div>

        {/* Visual Tags (decorative) */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
          aria-hidden="true"
        >
          <TagBadge label="Editing" variant="editing" />
          <TagBadge label="Reviewing" variant="reviewing" />
          <TagBadge label="button.copy" variant="code" />
        </div>
      </Container>
    </Section>
  );
}
