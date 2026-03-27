/**
 * @fileoverview Icon components for Ditto website
 * @description Centralized SVG icons with consistent API
 * 
 * AI/LLM GUIDE:
 * - All icons accept className for styling
 * - Icons are aria-hidden by default (decorative)
 * - Use aria-label on parent button/link for accessibility
 * - Add new icons following the same pattern
 */

import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
  /** Only set to false if icon conveys meaning without text */
  decorative?: boolean;
}

/**
 * Arrow icon pointing right - used in buttons and links
 */
export function ArrowRightIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M8.5 0.224365L18.5 8.22436L8.5 16.2244V10.2244H0.5L0.5 6.22437L8.5 6.22437L8.5 0.224365Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Chevron down icon - used in dropdowns
 */
export function ChevronDownIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path d="M8 4L4 9L0 4H3V0H5V4H8Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Edit/pencil icon - used in editing states
 */
export function EditIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M1.66667 13.3333H2.85417L11 5.1875L9.8125 4L1.66667 12.1458V13.3333ZM0 15V11.4583L11 0.479167C11.1667 0.326389 11.3507 0.208333 11.5521 0.125C11.7535 0.0416667 11.9653 0 12.1875 0C12.4097 0 12.625 0.0416667 12.8333 0.125C13.0417 0.208333 13.2222 0.333333 13.375 0.5L14.5208 1.66667C14.6875 1.81944 14.809 2 14.8854 2.20833C14.9618 2.41667 15 2.625 15 2.83333C15 3.05556 14.9618 3.26736 14.8854 3.46875C14.809 3.67014 14.6875 3.85417 14.5208 4.02083L3.54167 15H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Flag icon - used in review states
 */
export function FlagIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M9.4 1.76471L9 0H0V15H2V8.82353H7.6L8 10.5882H15V1.76471H9.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Code brackets icon - used for developer features
 */
export function CodeIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="25"
      height="15"
      viewBox="0 0 25 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M7.5 15L0 7.5L7.5 0L9.28125 1.78125L3.53125 7.53125L9.25 13.25L7.5 15ZM17.5 15L15.7187 13.2187L21.4688 7.46875L15.75 1.75L17.5 0L25 7.5L17.5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Heart icon - used in footer "Made with love"
 */
export function HeartIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : 'love'}
    >
      <path
        d="M11 3.53321L9.1127 1.70179C7.02808 -0.321113 3.64825 -0.321225 1.56351 1.70179C-0.521227 3.7248 -0.521112 7.00457 1.56351 9.02747L11 18.1846L20.4365 9.02747C22.5212 7.00446 22.5211 3.72469 20.4365 1.70179C18.3519 -0.321113 14.972 -0.321225 12.8873 1.70179L11 3.53321Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Quote/quotation marks icon - used in testimonials
 */
export function QuoteIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="58"
      height="44"
      viewBox="0 0 58 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5122 0.199219C9.63129 0.199219 0 9.83051 0 21.7114H1.91865L1.19093e-05 21.7114V28.8822C1.19093e-05 36.8027 6.4209 43.2236 14.3415 43.2236C22.262 43.2236 28.6829 36.8027 28.6829 28.8822C28.6829 21.094 22.4749 14.7557 14.7373 14.5461L21.5122 0.199219Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.195 0.199219C38.3141 0.199219 28.6828 9.83051 28.6828 21.7114H30.6013L28.6826 21.7114V28.8822C28.6826 36.8027 35.1035 43.2236 43.0241 43.2236C50.9447 43.2236 57.3655 36.8027 57.3655 28.8822C57.3655 21.094 51.1576 14.7558 43.4201 14.5461L50.195 0.199219Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Content designer icon - book/pages
 */
export function ContentDesignerIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 3.5H0.25V0.5H1.75C3.21902 0.5 4.54711 1.10335 5.5 2.07576C6.45289 1.10335 7.78098 0.5 9.25 0.5H10.75V3.5H9.25C8.00736 3.5 7 4.50736 7 5.75V13.25C7 14.4926 8.00736 15.5 9.25 15.5H10.75V18.5H9.25C7.78098 18.5 6.45289 17.8966 5.5 16.9242C4.54711 17.8966 3.21902 18.5 1.75 18.5H0.25V15.5H1.75C2.99264 15.5 4 14.4926 4 13.25V5.75C4 4.50736 2.99264 3.5 1.75 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Terminal/developer icon
 */
export function TerminalIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8713 8.75011L3.06068 16.5608L0.939357 14.4395L6.6287 8.75011L0.939358 3.06077L3.06068 0.939453L10.8713 8.75011Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 18.5H8V15.5H17.75V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Localization/globe dots icon
 */
export function LocalizationIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <circle cx="9.5" cy="3.5" r="3" transform="rotate(90 9.5 3.5)" fill="currentColor" />
      <circle cx="9.5" cy="15.5" r="3" transform="rotate(90 9.5 15.5)" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="3" transform="rotate(-180 15.5 9.5)" fill="currentColor" />
      <circle cx="3.5" cy="9.5" r="3" transform="rotate(-180 3.5 9.5)" fill="currentColor" />
    </svg>
  );
}

/**
 * Cursor/pointer icon - product designer
 */
export function CursorIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M2.43945 2.62158C2.86173 2.19931 3.49417 2.06774 4.0498 2.28662L16.0498 7.01416C16.6155 7.23709 16.991 7.7792 17 8.38721C17.009 8.99525 16.6498 9.54903 16.0908 9.78857L11.5518 11.7339L9.60645 16.2729C9.3669 16.8319 8.81313 17.1911 8.20508 17.1821C7.59707 17.1731 7.05496 16.7977 6.83203 16.2319L2.10449 4.23193C1.88561 3.6763 2.01718 3.04386 2.43945 2.62158Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Sparkle/AI icon
 */
export function SparkleIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M14.75 10.12C14.98 10.12 15.14 10.19 15.24 10.24L15.38 10.33L15.51 10.45C15.58 10.53 15.65 10.62 15.69 10.72L15.75 10.88L15.76 10.9L16.24 12.76L18.1 13.24L18.11 13.25C18.28 13.29 18.43 13.38 18.55 13.49L18.67 13.62L18.76 13.76C18.84 13.91 18.88 14.08 18.88 14.25C18.88 14.48 18.81 14.7 18.67 14.88C18.53 15.06 18.33 15.19 18.11 15.25L18.1 15.26L16.24 15.74L15.76 17.6C15.76 17.61 15.75 17.61 15.75 17.62C15.69 17.84 15.56 18.03 15.38 18.17C15.2 18.31 14.98 18.38 14.75 18.38C14.52 18.38 14.3 18.31 14.12 18.17C13.94 18.03 13.81 17.84 13.75 17.62L13.74 17.6L13.26 15.74L11.4 15.26C11.39 15.26 11.38 15.25 11.38 15.25C11.16 15.19 10.97 15.06 10.83 14.88C10.73 14.74 10.66 14.58 10.63 14.42L10.62 14.25L10.63 14.08C10.66 13.92 10.73 13.76 10.83 13.62C10.97 13.44 11.16 13.31 11.38 13.25L11.4 13.24L13.26 12.76L13.74 10.9L13.75 10.88C13.81 10.66 13.94 10.47 14.12 10.33C14.3 10.19 14.52 10.12 14.75 10.12Z"
        fill="currentColor"
      />
      <path
        d="M6 0.12C6.18 0.12 6.37 0.17 6.53 0.25L6.68 0.35L6.82 0.47C6.9 0.56 6.97 0.66 7.02 0.77L7.09 0.95L7.09 0.96L7.88 4.03L7.89 4.06C7.9 4.07 7.91 4.08 7.91 4.08C7.93 4.1 7.95 4.11 7.97 4.12L11.04 4.91L11.05 4.91C11.26 4.97 11.45 5.08 11.59 5.24L11.65 5.32L11.7 5.39C11.82 5.57 11.88 5.78 11.88 6C11.88 6.25 11.8 6.49 11.65 6.68C11.5 6.88 11.29 7.02 11.05 7.09L11.04 7.09L7.97 7.88C7.95 7.89 7.93 7.9 7.91 7.92C7.91 7.92 7.9 7.93 7.89 7.94L7.88 7.97L7.09 11.04C7.09 11.05 7.09 11.05 7.09 11.05C7.03 11.27 6.9 11.46 6.72 11.6C6.54 11.74 6.32 11.82 6.09 11.82C5.86 11.82 5.64 11.74 5.46 11.6C5.28 11.46 5.15 11.27 5.09 11.05L5.09 11.04L4.3 7.97L4.29 7.94C4.28 7.93 4.27 7.92 4.27 7.92C4.25 7.9 4.23 7.89 4.21 7.88L1.14 7.09C1.13 7.09 1.12 7.09 1.11 7.09C0.89 7.02 0.7 6.89 0.56 6.71C0.45 6.57 0.38 6.41 0.35 6.24L0.34 6.06L0.35 5.88C0.38 5.71 0.45 5.55 0.56 5.41C0.7 5.23 0.89 5.1 1.11 5.04L1.14 5.03L4.21 4.24C4.23 4.23 4.25 4.22 4.27 4.2C4.27 4.2 4.28 4.19 4.29 4.18L4.3 4.15L5.09 1.08C5.09 1.07 5.09 1.07 5.09 1.07C5.15 0.85 5.28 0.66 5.46 0.52C5.64 0.38 5.86 0.3 6.09 0.3L6.26 0.31L6 0.12Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Grid/sync icon
 */
export function GridIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M6.5 3.5H12.5V0.5H15.5V3.5H18.5V6.5H15.5V12.5H18.5V15.5H15.5V18.5H12.5V15.5H6.5V18.5H3.5V15.5H0.5V12.5H3.5V6.5H0.5V3.5H3.5V0.5H6.5V3.5ZM6.5 12.5H12.5V6.5H6.5V12.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Comment/chat bubble icon
 */
export function CommentIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 5.25C15.5 4.00735 14.4927 3 13.25 3H5.75C4.50736 3 3.5 4.00736 3.5 5.25V9.18262C3.5 10.4253 4.50735 11.4326 5.75 11.4326H11.8779L11.9922 11.4375C12.2581 11.4579 12.5144 11.549 12.7344 11.7021L15.5 13.6279V5.25ZM18.5 16.5C18.5 17.0587 18.1895 17.5715 17.6943 17.8301C17.1992 18.0886 16.601 18.0497 16.1426 17.7305L11.4062 14.4326H5.75C2.85051 14.4326 0.5 12.0822 0.5 9.18262V5.25C0.5 2.3505 2.8505 0 5.75 0H13.25C16.1495 0 18.5 2.35051 18.5 5.25V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Typography/text icon
 */
export function TypographyIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        d="M13.25 0.5C16.1495 0.5 18.5 2.8505 18.5 5.75V7.25H15.5V5.75C15.5 4.50736 14.4926 3.5 13.25 3.5H11V15.5H14.375V18.5H4.625V15.5H8V3.5H5.75C4.50736 3.5 3.5 4.50736 3.5 5.75V7.25H0.5V5.75C0.5 2.85051 2.8505 0.5 5.75 0.5H13.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Growth arrow icon
 */
export function GrowthIcon({ className, decorative = true }: IconProps) {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4443 3.5H8.03711V0.5H17.3153V9.77817H14.3153V5.87169L4.49264 15.6943H0.25L12.4443 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Export all icons as a namespace for easier discovery
export const Icons = {
  ArrowRight: ArrowRightIcon,
  ChevronDown: ChevronDownIcon,
  Edit: EditIcon,
  Flag: FlagIcon,
  Code: CodeIcon,
  Heart: HeartIcon,
  Quote: QuoteIcon,
  ContentDesigner: ContentDesignerIcon,
  Terminal: TerminalIcon,
  Localization: LocalizationIcon,
  Cursor: CursorIcon,
  Sparkle: SparkleIcon,
  Grid: GridIcon,
  Comment: CommentIcon,
  Typography: TypographyIcon,
  Growth: GrowthIcon,
};
