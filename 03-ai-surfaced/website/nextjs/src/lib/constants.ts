/**
 * @fileoverview Design tokens and constants for Ditto website
 * @description Centralized configuration for colors, typography, spacing, and content
 * 
 * AI/LLM GUIDE:
 * - All design tokens are defined here for consistency
 * - Update SITE_CONFIG for branding changes
 * - NAV_ITEMS controls navigation structure
 * - FEATURES and SOLUTIONS define product offerings
 */

// =============================================================================
// SITE CONFIGURATION
// =============================================================================

export const SITE_CONFIG = {
  name: 'Ditto',
  tagline: 'Source of truth for product copy',
  description: 'Build and manage your team\'s single source of truth for product copy — from draft to design to deploy.',
  url: 'https://www.dittowords.com',
  appUrl: 'https://app.dittowords.com',
  demoUrl: 'https://calendly.com/ditto-team/ditto-chat?utm_source=landing_page',
} as const;

// =============================================================================
// DESIGN TOKENS - COLORS
// =============================================================================

export const COLORS = {
  // Primary palette
  primary: {
    black: '#13274E',
    white: '#FFFFFF',
    beige: '#F7F5F3',
    graphite: '#6B7280',
  },
  // Accent colors
  accent: {
    yellow: '#FFDD33',
    red: '#E53E3E',
    blue: '#3B82F6',
    green: '#10B981',
    purple: '#8B5CF6',
    pink: '#EC4899',
    sky: '#0EA5E9',
    gold: '#F59E0B',
    lavender: '#A78BFA',
    lichen: '#6EE7B7',
    olive: '#84CC16',
  },
  // Background colors
  background: {
    light: '#F7F5F3',
    dark: '#13274E',
    brown: '#78716C',
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const TYPOGRAPHY = {
  fontFamily: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
  fontSize: {
    xxl: 'clamp(3rem, 8vw, 6rem)',
    xl: 'clamp(2rem, 5vw, 4rem)',
    lg: 'clamp(1.5rem, 3vw, 2.5rem)',
    md: 'clamp(1.125rem, 2vw, 1.5rem)',
    base: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
  },
} as const;

// =============================================================================
// NAVIGATION ITEMS
// =============================================================================

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  icon?: string;
  color?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      {
        label: 'Tailored to your needs',
        children: [
          { label: 'For Content Designers', href: '/roles/for-content-designers', color: 'red' },
          { label: 'For Developers', href: '/roles/for-developers', color: 'sky' },
          { label: 'For Localization Managers', href: '/roles/for-localization-managers', color: 'pink' },
          { label: 'For Product Designers', href: '/roles/for-product-designers', color: 'purple' },
        ],
      },
      {
        label: 'Trusted across use cases',
        children: [
          { label: 'Build a Reusable Text Library', href: '/product-pages/build', color: 'purple' },
          { label: 'Centralize Copy Reviews', href: '/product-pages/manage-reviews', color: 'blue' },
          { label: 'Build an AI Content System', href: '/product-pages/ai-content-system', color: 'lichen' },
          { label: 'Keep Designs in Sync', href: '/product-pages/design-sync', color: 'lavender' },
          { label: 'Integrate with Engineering', href: '/product-pages/integrate', color: 'yellow' },
          { label: 'Localize Product Copy', href: '/product-pages/localize', color: 'green' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', href: '/blog', color: 'blue' },
      { label: 'What\'s New', href: '/whats-new', color: 'gold' },
      { label: 'Help Center', href: 'https://help.dittowords.com/en/', color: 'green' },
      { label: 'Developer Docs', href: 'https://developer.dittowords.com/introduction', color: 'lavender' },
    ],
  },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Pricing', href: '/pricing' },
];

// =============================================================================
// FEATURES / USE CASES
// =============================================================================

export interface Feature {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export const FEATURES: Feature[] = [
  {
    id: 'reusable-library',
    title: 'Build a reusable text library',
    description: 'Create a centralized library of product copy that your entire team can access and reuse.',
    href: '/product-pages/build',
  },
  {
    id: 'copy-reviews',
    title: 'Centralize copy reviews',
    description: 'Streamline the review process with collaborative tools designed for content teams.',
    href: '/product-pages/manage-reviews',
  },
  {
    id: 'localize',
    title: 'Localize product copy',
    description: 'Manage translations and localization workflows in one place.',
    href: '/product-pages/localize',
  },
  {
    id: 'integrate',
    title: 'Pull copy updates into code',
    description: 'Integrate Ditto with your development workflow for seamless copy updates.',
    href: '/product-pages/integrate',
  },
  {
    id: 'design-sync',
    title: 'Keep designs in sync',
    description: 'Automatically sync copy between Ditto and your design tools.',
    href: '/product-pages/design-sync',
  },
  {
    id: 'ai-content',
    title: 'Enforce consistency with AI',
    description: 'Use AI to maintain voice and tone consistency across all your product copy.',
    href: '/product-pages/ai-content-system',
  },
];

// =============================================================================
// WORKFLOW STEPS
// =============================================================================

export interface WorkflowStep {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'draft',
    label: 'Draft',
    title: 'Start drafting product copy in a dedicated space.',
    description: 'Connect text to designs whenever you\'re ready.',
    image: '/images/draft.webp',
    color: 'brown',
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Connect copy directly to your designs.',
    description: 'Keep designers and writers in sync.',
    image: '/images/design.webp',
    color: 'purple',
  },
  {
    id: 'review',
    label: 'Review',
    title: 'Collaborate on copy reviews.',
    description: 'Get stakeholder feedback in one place.',
    image: '/images/review.webp',
    color: 'blue',
  },
  {
    id: 'translate',
    label: 'Translate',
    title: 'Manage translations efficiently.',
    description: 'Localize your product for global audiences.',
    image: '/images/translate.webp',
    color: 'pink',
  },
  {
    id: 'personalize',
    label: 'Personalize',
    title: 'Create personalized experiences.',
    description: 'Tailor copy to different user segments.',
    image: '/images/personalize.webp',
    color: 'green',
  },
  {
    id: 'ship',
    label: 'Ship',
    title: 'Deploy copy updates seamlessly.',
    description: 'Push changes directly to production.',
    image: '/images/ship.webp',
    color: 'yellow',
  },
  {
    id: 'iterate',
    label: 'Iterate',
    title: 'Continuously improve your copy.',
    description: 'Track changes and iterate quickly.',
    image: '/images/iterate.webp',
    color: 'sky',
  },
];

// =============================================================================
// STATS
// =============================================================================

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '70%', label: 'faster resolution of copy fixes' },
  { value: '40', label: 'hrs of dev time saved per release' },
  { value: '20%', label: 'faster product release cycles' },
];

// =============================================================================
// TESTIMONIALS
// =============================================================================

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Numbers aside, the biggest thing is that I have is just way more confidence in the content. With Ditto, we can see problems way faster. It does save me a ton of time, but I never cared about that as much as value for our members.',
    author: '',
    role: 'Designer',
    company: 'Big Sky Health',
  },
  {
    quote: 'With our data in Looker and content in Ditto, we have complete visibility into user states and are able to really rapidly tweak and deploy content\u2026shipping content updates almost daily.',
    author: '',
    role: 'Engineer',
    company: 'Big Sky Health',
  },
];

// =============================================================================
// TRUSTED COMPANIES (Logo Marquee)
// =============================================================================

export interface Company {
  name: string;
  logo: string;
  width: number;
}

export const TRUSTED_COMPANIES: Company[] = [
  { name: 'Staffbase', logo: '/logos/staffbase.webp', width: 104 },
  { name: 'Root', logo: '/logos/root.webp', width: 80 },
  { name: 'Microsoft', logo: '/logos/microsoft.webp', width: 87 },
  { name: 'eBay', logo: '/logos/ebay.webp', width: 56 },
  { name: 'Stash', logo: '/logos/stash.svg', width: 100 },
  { name: 'BigCommerce', logo: '/logos/bigcommerce.webp', width: 98 },
  { name: 'OwnUp', logo: '/logos/ownup.svg', width: 102 },
  { name: 'Uber Carshare', logo: '/logos/uber-carshare.webp', width: 47 },
  { name: 'McAfee', logo: '/logos/mcafee.webp', width: 109 },
  { name: 'Zero', logo: '/logos/zero.svg', width: 68 },
  { name: 'Curology', logo: '/logos/curology.svg', width: 81 },
  { name: 'Happy Money', logo: '/logos/happy-money.svg', width: 147 },
];

// =============================================================================
// FOOTER LINKS
// =============================================================================

export interface FooterSection {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'For Content Designers', href: '/roles/for-content-designers' },
      { label: 'For Developers', href: '/roles/for-developers' },
      { label: 'For Localization Managers', href: '/roles/for-localization-managers' },
      { label: 'For Product Designers', href: '/roles/for-product-designers' },
      { label: 'Build a Reusable Library', href: '/product-pages/build' },
      { label: 'Centralize Copy Reviews', href: '/product-pages/manage-reviews' },
      { label: 'Localize Product Copy', href: '/product-pages/localize' },
      { label: 'Integrate with Engineering', href: '/product-pages/integrate' },
      { label: 'Keep Designs in Sync', href: '/product-pages/design-sync' },
      { label: 'Build an AI Content System', href: '/product-pages/ai-content-system' },
      { label: 'For Financial Services', href: '/industry/for-financial-services' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Ditto Overview', href: '/product' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'User Help Guides', href: 'https://help.dittowords.com/', external: true },
      { label: 'Developer Docs', href: 'https://developer.dittowords.com/introduction', external: true },
      { label: 'Blog', href: '/blog' },
      { label: 'What\'s New', href: '/whats-new' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Security', href: '/security' },
    ],
  },
];
