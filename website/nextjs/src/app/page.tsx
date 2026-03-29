/**
 * @fileoverview Home page component assembling all landing page sections.
 *
 * @ai-guide This is the main landing page that composes all section components.
 * The sections are rendered in visual order from top to bottom:
 *
 * 1. AnnouncementBanner - Top promotional banner (optional)
 * 2. HeroSection - Main headline with animated words and CTAs
 * 3. LogoMarqueeSection - Scrolling company logos (social proof)
 * 4. BetterWaySection - Problem/solution visualization
 * 5. WorkflowSection - Product workflow steps
 * 6. FeaturesSection - Feature list with cards
 * 7. StatsSection - Metrics and testimonials
 * 8. CTASection - Pre-footer call-to-action
 *
 * To modify the page:
 * - Reorder sections by changing their position in the JSX
 * - Remove sections by commenting out or deleting imports/JSX
 * - Add new sections by importing and placing in desired position
 * - Pass props to sections to customize content (see each component)
 *
 * Performance notes:
 * - This is a Server Component by default (no 'use client')
 * - Client interactivity is isolated to individual section components
 * - Images use next/image for automatic optimization
 */

import {
  AnnouncementBanner,
  HeroSection,
  LogoMarqueeSection,
  BetterWaySection,
  WorkflowSection,
  FeaturesSection,
  StatsSection,
  CTASection,
} from '@/components/sections';

/**
 * Home page component - Landing page for Ditto.
 *
 * @returns The complete landing page with all sections
 */
export default function HomePage() {
  return (
    <>
      {/* ========================================
          Announcement Banner
          Optional top banner for promotions/news
          ======================================== */}
      <AnnouncementBanner />

      {/* ========================================
          Hero Section
          Main headline with animated word cycling
          Primary and secondary CTAs
          ======================================== */}
      <HeroSection />

      {/* ========================================
          Logo Marquee
          Social proof with company logos
          "Join 8,000+ teams" messaging
          ======================================== */}
      <LogoMarqueeSection />

      {/* ========================================
          Better Way Section
          Problem visualization (scattered copy)
          Solution positioning
          ======================================== */}
      <BetterWaySection />

      {/* ========================================
          Workflow Section
          Product workflow steps visualization
          Draft → Design → Review → Translate → etc.
          ======================================== */}
      <WorkflowSection />

      {/* ========================================
          Features Section
          Feature cards with icons
          Hover effects and descriptions
          ======================================== */}
      <FeaturesSection />

      {/* ========================================
          Stats Section
          Key metrics (hours saved, teams, etc.)
          Customer testimonials/quotes
          ======================================== */}
      <StatsSection />

      {/* ========================================
          CTA Section
          Pre-footer call-to-action
          Final conversion opportunity
          ======================================== */}
      <CTASection />
    </>
  );
}
