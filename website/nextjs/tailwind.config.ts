/**
 * @fileoverview Tailwind CSS configuration for the Ditto landing page.
 *
 * @ai-guide This configuration extends Tailwind with:
 * 1. Custom brand colors (yellow primary, dark backgrounds)
 * 2. Custom animations matching the original Webflow site
 * 3. Extended typography with Inter font family
 * 4. Custom spacing and sizing utilities
 *
 * Key design decisions:
 * - Dark theme by default (neutral-950 background)
 * - Yellow (#FFDD33) as primary accent color
 * - Smooth, subtle animations that respect reduced-motion
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ========================================
         Colors - Brand palette
         ======================================== */
      colors: {
        // Primary brand color (yellow)
        primary: {
          DEFAULT: '#FFDD33',
          50: '#FFFDF0',
          100: '#FFFBE0',
          200: '#FFF7C2',
          300: '#FFF099',
          400: '#FFE866',
          500: '#FFDD33', // Main brand yellow
          600: '#E6C700',
          700: '#B39B00',
          800: '#806F00',
          900: '#4D4200',
          950: '#1A1600',
        },
        // Alias for easier usage
        brand: {
          yellow: '#FFDD33',
          'yellow-hover': '#FFD500',
        },
      },

      /* ========================================
         Typography - Font families
         ======================================== */
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },

      /* ========================================
         Spacing - Custom values
         ======================================== */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      /* ========================================
         Typography - Font sizes with line heights
         ======================================== */
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },

      /* ========================================
         Border Radius - Custom values
         ======================================== */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* ========================================
         Animations - Keyframes
         ======================================== */
      keyframes: {
        // Fade animations
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },

        // Scale animations
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'scale-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },

        // Slide animations
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },

        // Marquee for logo carousel
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },

        // Word cycling animation for hero
        'word-fade': {
          '0%, 16%': { opacity: '1', transform: 'translateY(0)' },
          '20%, 100%': { opacity: '0', transform: 'translateY(-10px)' },
        },

        // Pulse effects
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },

        // Shimmer for loading states
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },

        // Accordion animations
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      /* ========================================
         Animations - Animation utilities
         ======================================== */
      animation: {
        // Fade
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',

        // Scale
        'scale-in': 'scale-in 0.3s ease-out',
        'scale-out': 'scale-out 0.3s ease-out',

        // Slide
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',

        // Marquee (customizable duration via CSS variable)
        marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 30s) linear infinite',

        // Word cycling
        'word-fade': 'word-fade 5s ease-in-out infinite',

        // Effects
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',

        // Accordion
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      /* ========================================
         Transitions - Custom timing functions
         ======================================== */
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },

      /* ========================================
         Box Shadow - Custom shadows
         ======================================== */
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 221, 51, 0.15)',
        glow: '0 0 30px rgba(255, 221, 51, 0.2)',
        'glow-lg': '0 0 60px rgba(255, 221, 51, 0.25)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },

      /* ========================================
         Background Image - Gradients
         ======================================== */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-fade-down': 'linear-gradient(to bottom, transparent, rgb(13 13 13))',
        'gradient-fade-up': 'linear-gradient(to top, transparent, rgb(13 13 13))',
      },

      /* ========================================
         Z-Index - Named layers
         ======================================== */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};

export default config;
