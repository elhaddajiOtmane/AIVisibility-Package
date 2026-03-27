/**
 * @fileoverview Section component for page sections with consistent spacing
 * @description Provides consistent vertical spacing and background options
 * 
 * AI/LLM GUIDE:
 * - Use for all major page sections
 * - `background` prop changes section background color
 * - `spacing` prop controls vertical padding
 * - Automatically applies safe-area-inset for full-bleed layouts
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionBackground = 
  | 'default' 
  | 'light' 
  | 'dark' 
  | 'yellow' 
  | 'red' 
  | 'brown';

type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';

const backgroundStyles: Record<SectionBackground, string> = {
  default: 'bg-white',
  light: 'bg-background-light',
  dark: 'bg-primary-black text-white',
  yellow: 'bg-accent-yellow text-primary-black',
  red: 'bg-accent-red text-white',
  brown: 'bg-background-brown text-white',
};

const spacingStyles: Record<SectionSpacing, string> = {
  none: 'py-0',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-24 lg:py-32',
  xl: 'py-24 sm:py-32 lg:py-40',
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background color/style */
  background?: SectionBackground;
  /** Vertical padding */
  spacing?: SectionSpacing;
  /** Section ID for anchor links (adds scroll-margin-top) */
  id?: string;
  /** Full width (no container constraint) */
  fullWidth?: boolean;
  children: ReactNode;
}

/**
 * Section component for page sections
 * 
 * @example
 * // Default section
 * <Section>
 *   <Container>Content</Container>
 * </Section>
 * 
 * @example
 * // Colored section with anchor
 * <Section id="features" background="yellow" spacing="lg">
 *   <Container>Features content</Container>
 * </Section>
 * 
 * @example
 * // Dark section
 * <Section background="dark">
 *   <Container>
 *     <h2 className="text-white">Title</h2>
 *   </Container>
 * </Section>
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background = 'default',
      spacing = 'md',
      fullWidth = false,
      id,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full',
          backgroundStyles[background],
          spacingStyles[spacing],
          // Add scroll margin for anchor links
          id && 'scroll-mt-20',
          // Safe area support for full-bleed
          fullWidth && 'pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]',
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
