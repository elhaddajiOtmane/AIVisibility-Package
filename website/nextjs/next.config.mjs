/**
 * @fileoverview Next.js configuration file.
 *
 * @ai-guide Configuration for the Next.js application:
 * - Image optimization settings for external domains
 * - Strict mode enabled for React best practices
 * - TypeScript strict checking enabled
 *
 * To add new image domains, add them to the remotePatterns array.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    // Remote image patterns for next/image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dittowords.com',
        pathname: '/**',
      },
    ],
    // Image formats to use
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental features
  // experimental: {
  //   typedRoutes: true,
  // },

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
