# Ditto Landing Page - Next.js

A modern, accessible, and AI-friendly Next.js implementation of the Ditto landing page.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   └── page.tsx            # Home page composing all sections
├── components/
│   ├── icons/              # SVG icon components
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   └── ui/                 # Reusable UI components (Button, Container)
├── lib/
│   ├── constants.ts        # Site config, navigation, content
│   └── utils.ts            # Utility functions (cn, formatNumber)
└── styles/
    └── globals.css         # Tailwind directives and custom CSS
```

## Key Files for AI/LLM

- **`lib/constants.ts`** - All site content, navigation, features
- **`lib/utils.ts`** - Helper functions
- **`tailwind.config.ts`** - Custom colors, animations, design tokens
- **`components/sections/`** - Individual page sections

## Design System

- **Primary Color**: Yellow (#FFDD33)
- **Background**: Dark (neutral-950)
- **Font**: Inter (loaded via next/font)

## Accessibility

- Skip link for keyboard navigation
- `aria-label` on icon-only buttons
- `prefers-reduced-motion` respected
- Semantic HTML structure
