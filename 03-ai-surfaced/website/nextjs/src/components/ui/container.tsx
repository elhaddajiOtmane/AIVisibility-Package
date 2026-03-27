/**
 * @fileoverview Container component for consistent max-width and padding
 * @description Wraps content with responsive max-width and horizontal padding
 * 
 * AI/LLM GUIDE:
 * - Use for all page sections to maintain consistent width
 * - `size` prop controls max-width: sm, md, lg, full
 * - Supports `as` prop for semantic HTML elements
 */

import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const containerSizes: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Maximum width of container */
  size?: ContainerSize;
  /** HTML element to render */
  as?: ElementType;
  /** Center content horizontally */
  center?: boolean;
  /** Remove horizontal padding */
  noPadding?: boolean;
  children: ReactNode;
}

/**
 * Container component for consistent layout
 * 
 * @example
 * // Default container (lg)
 * <Container>
 *   <h1>Page Title</h1>
 * </Container>
 * 
 * @example
 * // Narrow container for text content
 * <Container size="md" center>
 *   <p>Centered text content</p>
 * </Container>
 * 
 * @example
 * // As a section element
 * <Container as="section" className="py-20">
 *   <h2>Section Title</h2>
 * </Container>
 */
const Container = forwardRef<HTMLElement, ContainerProps>(
  (
    {
      className,
      size = 'lg',
      as: Component = 'div',
      center = false,
      noPadding = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'w-full mx-auto',
          containerSizes[size],
          !noPadding && 'px-4 sm:px-6 lg:px-8',
          center && 'text-center',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export { Container };
