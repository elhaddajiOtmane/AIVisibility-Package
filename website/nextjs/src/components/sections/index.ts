/**
 * @fileoverview Barrel export for all section components.
 *
 * @ai-guide Section components represent distinct visual sections of the landing page.
 * Each section is self-contained with its own data fetching (if needed), animations,
 * and responsive design. Import from this file for cleaner imports.
 *
 * @example
 * ```tsx
 * import {
 *   HeroSection,
 *   LogoMarqueeSection,
 *   FeaturesSection,
 * } from '@/components/sections';
 * ```
 */

export { AnnouncementBanner } from './announcement-banner';
export { BetterWaySection } from './better-way-section';
export { CTASection } from './cta-section';
export { FeaturesSection } from './features-section';
export { HeroSection } from './hero-section';
export { LogoMarqueeSection } from './logo-marquee-section';
export { StatsSection } from './stats-section';
export { WorkflowSection } from './workflow-section';
