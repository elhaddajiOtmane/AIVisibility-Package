/**
 * @fileoverview Button component with multiple variants
 * @description Reusable button component following design system
 *
 * AI/LLM GUIDE:
 * - Use `variant` prop to change visual style
 * - Use `size` prop to change dimensions
 * - Use `asChild` to render as a different element (e.g., Link)
 * - Always provide aria-label for icon-only buttons
 */

import {
  forwardRef,
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactNode,
  type ReactElement,
} from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@/components/icons';

/* ============================================
   Variant Style Mappings
   ============================================ */
const variantStyles = {
  primary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900',
  secondary: 'bg-yellow-400 text-neutral-900 hover:bg-yellow-300 focus-visible:ring-yellow-400',
  light: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-300',
  ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400',
  link: 'bg-transparent text-neutral-900 underline-offset-4 hover:underline focus-visible:ring-neutral-400 p-0 h-auto',
  // Dark variants for dark backgrounds
  'primary-dark': 'bg-white text-neutral-900 hover:bg-neutral-100 focus-visible:ring-white',
  'secondary-dark': 'bg-yellow-400 text-neutral-900 hover:bg-yellow-300 focus-visible:ring-yellow-400',
  'ghost-dark': 'bg-transparent text-white hover:bg-white/10 focus-visible:ring-white',
  'link-dark': 'bg-transparent text-white underline-offset-4 hover:underline focus-visible:ring-white p-0 h-auto',
} as const;

const sizeStyles = {
  sm: 'h-9 px-4 text-sm rounded-md',
  md: 'h-11 px-6 text-base rounded-lg',
  lg: 'h-14 px-8 text-lg rounded-xl',
  icon: 'h-10 w-10 rounded-lg p-0',
} as const;

/* ============================================
   Base Styles
   ============================================ */
const baseStyles = [
  'inline-flex items-center justify-center gap-2',
  'font-medium',
  'transition-all duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ');

/* ============================================
   Types
   ============================================ */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: keyof typeof variantStyles;
  /** Size variant */
  size?: keyof typeof sizeStyles;
  /** Render as child element (for use with Link, etc.) */
  asChild?: boolean;
  /** Show arrow icon */
  withArrow?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Left icon */
  leftIcon?: ReactNode;
  /** Right icon (overridden by withArrow) */
  rightIcon?: ReactNode;
}

/**
 * Get combined button class names
 */
export function getButtonClassName(
  variant: keyof typeof variantStyles = 'primary',
  size: keyof typeof sizeStyles = 'md',
  withArrow: boolean = false,
  className?: string
) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    withArrow && size !== 'icon' && 'pr-4',
    className
  );
}

/**
 * Primary button component
 *
 * @example
 * // Primary button
 * <Button>Get Started</Button>
 *
 * @example
 * // Button with arrow
 * <Button withArrow>Learn More</Button>
 *
 * @example
 * // As a Link (using asChild)
 * <Button asChild variant="secondary">
 *   <Link href="/pricing">View Pricing</Link>
 * </Button>
 *
 * @example
 * // Icon-only button (requires aria-label)
 * <Button size="icon" aria-label="Close dialog">
 *   <CloseIcon />
 * </Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      withArrow = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClassName = getButtonClassName(variant, size, withArrow, className);

    // Content to render inside
    const content = isLoading ? (
      <>
        <span className="animate-spin" aria-hidden="true">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
        <span>Loading…</span>
      </>
    ) : (
      <>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {asChild ? (children as ReactElement)?.props?.children : children}
        {withArrow ? (
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        ) : rightIcon ? (
          <span className="shrink-0">{rightIcon}</span>
        ) : null}
      </>
    );

    // If asChild, clone the child element with button styles
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<{ className?: string; children?: ReactNode }>, {
        className: cn(buttonClassName, (children as ReactElement<{ className?: string }>).props.className),
        children: content,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
