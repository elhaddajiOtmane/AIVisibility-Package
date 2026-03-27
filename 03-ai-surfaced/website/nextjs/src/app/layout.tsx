/**
 * @fileoverview Root layout component for the Next.js application.
 *
 * @ai-guide This is the root layout that wraps all pages. It includes:
 * 1. HTML document structure with proper lang attribute
 * 2. Font loading with next/font for optimal performance
 * 3. Global styles import
 * 4. Metadata configuration for SEO
 * 5. Skip link for accessibility
 * 6. Navbar and Footer that appear on all pages
 *
 * To modify site-wide elements:
 * - Update metadata for SEO changes
 * - Modify Navbar/Footer imports for navigation changes
 * - Add providers (theme, auth, etc.) in the body wrapper
 */

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import '@/styles/globals.css';

/* ============================================
   Font Configuration
   ============================================ */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/* ============================================
   Metadata Configuration
   ============================================ */
export const metadata: Metadata = {
  title: {
    default: 'Ditto - Source of truth for product copy',
    template: '%s | Ditto',
  },
  description:
    "Build and manage your team's single source of truth for product copy — from draft to design to deploy.",
  keywords: [
    'product copy',
    'copy management',
    'design system',
    'localization',
    'translation',
    'content management',
    'Figma plugin',
    'developer tools',
  ],
  authors: [{ name: 'Ditto' }],
  creator: 'Ditto',
  publisher: 'Ditto',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dittowords.com',
    siteName: 'Ditto',
    title: 'Ditto - Source of truth for product copy',
    description:
      "Build and manage your team's single source of truth for product copy — from draft to design to deploy.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ditto - Source of truth for product copy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ditto - Source of truth for product copy',
    description:
      "Build and manage your team's single source of truth for product copy — from draft to design to deploy.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================
   Root Layout Component
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-neutral-950 font-sans text-white antialiased">
        {/* Skip link for keyboard users - accessibility */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        {/* Site header with navigation */}
        <Navbar />

        {/* Main content area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Site footer */}
        <Footer />
      </body>
    </html>
  );
}
