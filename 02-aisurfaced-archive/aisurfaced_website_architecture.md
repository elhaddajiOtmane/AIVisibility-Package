# AISurfaced Website Architecture

> Complete information architecture, page hierarchy, user flows, animations, and functional specifications for the AISurfaced website.

**Document Type:** Website Blueprint  
**Version:** 1.0  
**Last Updated:** March 2026

---

## Table of Contents

1. [Site Overview](#1-site-overview)
2. [Site Hierarchy](#2-site-hierarchy)
3. [Page Specifications](#3-page-specifications)
4. [User Flows](#4-user-flows)
5. [Navigation System](#5-navigation-system)
6. [Animation & Interaction System](#6-animation--interaction-system)
7. [Conversion Strategy](#7-conversion-strategy)
8. [Technical Requirements](#8-technical-requirements)

---

## 1. Site Overview

### 1.1 Site Purpose

| Objective | Description | Success Metric |
| :--- | :--- | :--- |
| **Primary** | Generate qualified leads for Growth Strategy Sessions | 20-30 bookings/month |
| **Secondary** | Establish thought leadership in AI-driven growth | 5,000+ monthly visitors |
| **Tertiary** | Build email list for nurturing | 500+ subscribers/month |

### 1.2 Target Users

| User Type | Intent | Priority Pages |
| :--- | :--- | :--- |
| **CEO/CMO (B2B SaaS)** | Find growth partner, validate expertise | Home → Services → Case Studies → Contact |
| **Marketing Director** | Research solutions, compare options | Services → Pricing → Case Studies |
| **Founder (Series A/B)** | Solve specific growth problem | Blog → Services → Book Call |
| **Referral Partner** | Understand partnership opportunity | About → Partners → Contact |

### 1.3 Site Personality

```
Tone: Confident, Forward-thinking, Outcome-focused
Feel: Premium, Tech-forward, Fluid/Dynamic
Speed: Fast, Purposeful animations, No friction
```

---

## 2. Site Hierarchy

### 2.1 Visual Sitemap

```
                                    ┌─────────────────┐
                                    │    HOMEPAGE     │
                                    │   (index.html)  │
                                    └────────┬────────┘
                                             │
           ┌─────────────┬─────────────┬─────┴─────┬─────────────┬─────────────┐
           │             │             │           │             │             │
    ┌──────┴──────┐ ┌────┴────┐ ┌──────┴──────┐ ┌──┴───┐ ┌───────┴───────┐ ┌───┴───┐
    │  SERVICES   │ │  WORK   │ │   ABOUT    │ │ BLOG │ │    CONTACT    │ │PRICING│
    │ /services   │ │  /work  │ │   /about   │ │/blog │ │   /contact    │ │/pricing│
    └──────┬──────┘ └────┬────┘ └──────┬──────┘ └──┬───┘ └───────┬───────┘ └───────┘
           │             │             │           │             │
    ┌──────┼──────┐      │             │           │             │
    │      │      │      │             │           │      ┌──────┴──────┐
┌───┴──┐┌──┴──┐┌──┴──┐┌──┴───┐   ┌─────┴─────┐┌───┴───┐  │             │
│ SaaS ││Ecom ││Prof ││Case  │   │   Team    ││ Post  │  │   Book a    │
│Growth││3D   ││Serv ││Study │   │  /team    ││  [n]  │  │    Call     │
└──────┘└─────┘└─────┘│Detail│   └───────────┘└───────┘  │  /book      │
                      └──────┘                           └─────────────┘

UTILITY PAGES (Footer/Legal)
├── /privacy      — Privacy Policy
├── /terms        — Terms of Service  
├── /growth-lab   — Interactive Demos (Lead Magnet)
└── /newsletter   — Newsletter Signup
```

### 2.2 Complete Page List

| Page | URL | Priority | Template |
| :--- | :--- | :--- | :--- |
| Homepage | `/` | Critical | Hero + Sections |
| Services Hub | `/services` | Critical | Hub + Cards |
| → SaaS Growth | `/services/saas-growth` | High | Service Detail |
| → E-commerce 3D | `/services/ecommerce-3d` | High | Service Detail |
| → Professional Services | `/services/professional-services` | High | Service Detail |
| Work/Portfolio | `/work` | Critical | Grid Gallery |
| → Case Study Detail | `/work/[slug]` | High | Case Study |
| About | `/about` | Medium | Story + Team |
| Team | `/about/team` | Low | Team Grid |
| Blog | `/blog` | High | Blog Index |
| → Blog Post | `/blog/[slug]` | High | Article |
| Contact | `/contact` | Critical | Form + Info |
| Book a Call | `/book` | Critical | Calendly Embed |
| Pricing | `/pricing` | High | Pricing Table |
| Growth Lab | `/growth-lab` | Medium | Interactive |
| Newsletter | `/newsletter` | Low | Signup Form |
| Privacy Policy | `/privacy` | Low | Legal |
| Terms of Service | `/terms` | Low | Legal |

---

## 3. Page Specifications

### 3.1 Homepage (`/`)

**Purpose:** First impression, establish credibility, drive to services or booking  
**Primary CTA:** "Book Your Growth Strategy Session"  
**Secondary CTA:** "See Our Work"

#### Section Breakdown

| # | Section | Purpose | Content | Animation |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Hero** | Hook visitor, state value prop | Headline, subhead, CTA, 3D visual | Fade-in-up stagger, 3D model rotation |
| 2 | **Problem** | Agitate pain points | "Your website isn't working" stats | Scroll-triggered counter animation |
| 3 | **Solution** | Introduce AISurfaced approach | 3 pillars: AI, Immersive, ROI | Cards slide in from sides |
| 4 | **Services Preview** | Show capabilities | 3 service cards with icons | Hover lift + glow |
| 5 | **Social Proof** | Build trust | Client logos, metrics, testimonial | Logo carousel, number count-up |
| 6 | **Case Study Feature** | Prove results | Before/after metrics, visual | Split-screen reveal on scroll |
| 7 | **Process** | Reduce uncertainty | 4-step process visualization | Step-by-step reveal |
| 8 | **CTA Banner** | Drive conversion | "Ready to grow?" + booking CTA | Gradient background pulse |
| 9 | **Blog Preview** | Show thought leadership | 3 latest posts | Card hover effects |
| 10 | **Footer** | Navigation, legal, contact | Links, social, newsletter | Static |

#### Hero Section Detail

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  ┌─ Nav ──────────────────────────────────────────────────────────────┐   │
│  │ [Logo]     Services  Work  About  Blog  Pricing    [Book a Call]   │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌─ Hero Content ─────────────────────────┐  ┌─ Hero Visual ──────────┐   │
│  │                                        │  │                        │   │
│  │  Your Website Isn't                    │  │    ┌──────────────┐    │   │
│  │  Working.                              │  │    │              │    │   │
│  │                                        │  │    │  3D Fluid    │    │   │
│  │  Your Growth                           │  │    │  Animation   │    │   │
│  │  Ecosystem Will.                       │  │    │  (Spline)    │    │   │
│  │                                        │  │    │              │    │   │
│  │  We engineer adaptive digital          │  │    └──────────────┘    │   │
│  │  experiences that evolve in            │  │                        │   │
│  │  real-time, delivering measurable ROI. │  │                        │   │
│  │                                        │  │                        │   │
│  │  [Book Strategy Session]  [See Work →] │  │                        │   │
│  │                                        │  │                        │   │
│  └────────────────────────────────────────┘  └────────────────────────┘   │
│                                                                            │
│  ┌─ Trust Bar ────────────────────────────────────────────────────────┐   │
│  │  "Trusted by growth-focused companies"   [Logo] [Logo] [Logo]      │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

#### Animation Sequence (Hero)

| Element | Animation | Delay | Duration | Easing |
| :--- | :--- | :--- | :--- | :--- |
| Nav | Fade in | 0ms | 300ms | ease-out |
| Headline Line 1 | Fade in + slide up | 100ms | 400ms | ease-out |
| Headline Line 2 | Fade in + slide up | 200ms | 400ms | ease-out |
| Subhead | Fade in | 400ms | 300ms | ease-out |
| CTA Buttons | Fade in + scale | 500ms | 300ms | spring |
| 3D Visual | Fade in + rotate | 300ms | 600ms | ease-out |
| Trust Bar | Fade in | 700ms | 300ms | ease-out |

---

### 3.2 Services Hub (`/services`)

**Purpose:** Overview all capabilities, route to detailed service pages  
**Primary CTA:** "Let's discuss your needs"  
**Secondary CTA:** Individual service pages

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Frame services context | Headline: "Growth Ecosystems, Not Websites" |
| 2 | **Services Grid** | Display all offerings | 3 main service cards with preview |
| 3 | **Approach** | Differentiate methodology | AI-first, data-driven, ROI-focused |
| 4 | **Comparison** | Show vs. traditional agencies | Table: AISurfaced vs. Others |
| 5 | **CTA** | Drive to consultation | Book strategy session |

#### Service Card Wireframe

```
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐    │
│  │      [Service Icon/3D]      │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  AI-Driven Conversion Funnels       │  ← Title
│  ─────────────────────────────      │
│                                     │
│  For B2B SaaS companies ready to    │  ← Description
│  scale lead generation with         │
│  intelligent, adaptive funnels.     │
│                                     │
│  • AI personalization               │  ← Key features
│  • Real-time optimization           │
│  • Measurable ROI tracking          │
│                                     │
│  [Learn More →]                     │  ← CTA
│                                     │
└─────────────────────────────────────┘
```

---

### 3.3 Service Detail (`/services/[slug]`)

**Purpose:** Deep dive on specific service, qualify leads  
**Primary CTA:** "Get a custom proposal"

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Service-specific hook | Headline, description, visual |
| 2 | **Problem** | Industry-specific pain | "SaaS companies struggle with..." |
| 3 | **Solution** | How we solve it | Feature breakdown with visuals |
| 4 | **Process** | What to expect | Timeline/steps |
| 5 | **Deliverables** | Tangible outputs | List of what's included |
| 6 | **Case Study** | Proof for this service | Relevant case study snippet |
| 7 | **Pricing Preview** | Set expectations | Starting at / typical range |
| 8 | **FAQ** | Overcome objections | Service-specific questions |
| 9 | **CTA** | Convert | Book consultation |

---

### 3.4 Work/Portfolio (`/work`)

**Purpose:** Showcase results, build credibility  
**Primary CTA:** "Let's create your success story"

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Frame portfolio | "Results That Speak" |
| 2 | **Featured Case** | Highlight best work | Large featured case study |
| 3 | **Filter Bar** | Help navigation | Industry / Service type filters |
| 4 | **Case Grid** | Display all work | Filterable grid of cases |
| 5 | **Metrics Banner** | Aggregate proof | Total clients, avg ROI, etc. |
| 6 | **CTA** | Convert | "Your story could be next" |

#### Case Study Card

```
┌─────────────────────────────────────────────┐
│  ┌─────────────────────────────────────┐    │
│  │                                     │    │
│  │         [Project Screenshot]        │    │
│  │                                     │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  [SaaS]  [Conversion Funnels]               │  ← Tags
│                                             │
│  TechCorp                                   │  ← Client name
│  ───────────────────────────────────        │
│                                             │
│  +340% demo bookings in 60 days             │  ← Key result
│                                             │
│  [View Case Study →]                        │  ← CTA
│                                             │
└─────────────────────────────────────────────┘
```

---

### 3.5 Case Study Detail (`/work/[slug]`)

**Purpose:** Deep proof of results, inspire confidence  
**Primary CTA:** "Get similar results"

#### Section Breakdown

| # | Section | Purpose | Content | Animation |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Hero** | Set context | Client, industry, headline result | Fade in |
| 2 | **Challenge** | Show understanding | What problem they faced | Text reveal |
| 3 | **Approach** | Show methodology | Our strategic approach | Step timeline |
| 4 | **Solution** | Show deliverables | What we built/implemented | Screenshots with zoom |
| 5 | **Results** | Prove impact | Before/after metrics | Counter animation |
| 6 | **Testimonial** | Social proof | Client quote with photo | Quote fade in |
| 7 | **Related** | Keep exploring | Similar case studies | Card slides |
| 8 | **CTA** | Convert | "Ready for your transformation?" | Sticky footer CTA |

#### Results Section Wireframe

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                           The Results                                      │
│                                                                            │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│  │                  │  │                  │  │                  │         │
│  │      +340%       │  │       60         │  │      $2.4M       │         │
│  │                  │  │      days        │  │                  │         │
│  │  Demo Bookings   │  │  Time to Results │  │  Pipeline Value  │         │
│  │                  │  │                  │  │                  │         │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│                                                                            │
│  ┌─ Before ────────────────────┐  ┌─ After ─────────────────────┐         │
│  │                             │  │                              │         │
│  │  • 12 demos/month           │  │  • 52 demos/month            │         │
│  │  • 2.1% conversion rate     │  │  • 8.4% conversion rate      │         │
│  │  • Generic landing pages    │  │  • AI-personalized journeys  │         │
│  │  • No visitor intelligence  │  │  • Real-time optimization    │         │
│  │                             │  │                              │         │
│  └─────────────────────────────┘  └──────────────────────────────┘         │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.6 About (`/about`)

**Purpose:** Build trust, show human side, share mission  
**Primary CTA:** "Join our journey" / "Work with us"

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Mission statement | "We Believe..." headline |
| 2 | **Story** | Origin narrative | How AISurfaced started, why |
| 3 | **Values** | Cultural alignment | Core values with icons |
| 4 | **Team Preview** | Human connection | Leadership team cards |
| 5 | **Timeline** | Show growth | Company milestones |
| 6 | **Partners** | Credibility | Technology & referral partners |
| 7 | **Careers CTA** | Recruiting | "Join the team" (if hiring) |

---

### 3.7 Blog (`/blog`)

**Purpose:** Thought leadership, SEO, nurture leads  
**Primary CTA:** Newsletter signup  
**Secondary CTA:** Related services

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Frame content | "The Growth Flow" |
| 2 | **Featured Post** | Highlight best content | Large featured article |
| 3 | **Category Tabs** | Navigation | AI & Growth, Immersive Design, etc. |
| 4 | **Post Grid** | Browse content | Paginated article cards |
| 5 | **Newsletter CTA** | Capture leads | Email signup banner |

---

### 3.8 Blog Post (`/blog/[slug]`)

**Purpose:** Educate, build authority, capture leads  
**Primary CTA:** Newsletter / Related service

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Header** | Context | Title, date, category, read time |
| 2 | **Hero Image** | Visual hook | Featured image |
| 3 | **Content** | Education | Article body with rich formatting |
| 4 | **Author Box** | Credibility | Author bio + photo |
| 5 | **CTA Banner** | Convert | Service or newsletter CTA |
| 6 | **Related Posts** | Keep reading | 3 related articles |
| 7 | **Comments** | Engagement | Optional discussion section |

---

### 3.9 Pricing (`/pricing`)

**Purpose:** Qualify leads, set expectations, reduce friction  
**Primary CTA:** "Book a call to discuss"

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Frame pricing approach | "Investment in Growth" |
| 2 | **Pricing Philosophy** | Set expectations | Outcome-based, not hourly |
| 3 | **Packages** | Show options | 3 tiers or engagement types |
| 4 | **What's Included** | Detail value | Feature comparison table |
| 5 | **FAQ** | Overcome objections | Pricing-specific questions |
| 6 | **CTA** | Convert | "Let's find the right fit" |

#### Pricing Table Wireframe

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  ┌─ Starter ───────────┐  ┌─ Growth ─────────────┐  ┌─ Scale ───────────┐ │
│  │                     │  │   ★ MOST POPULAR     │  │                   │ │
│  │                     │  │                      │  │                   │ │
│  │    $5,000/mo        │  │     $12,000/mo       │  │   $25,000/mo      │ │
│  │                     │  │                      │  │                   │ │
│  │  Perfect for        │  │  For scaling         │  │  Full growth      │ │
│  │  validating         │  │  companies           │  │  partnership      │ │
│  │                     │  │                      │  │                   │ │
│  │  ─────────────────  │  │  ────────────────    │  │  ───────────────  │ │
│  │                     │  │                      │  │                   │ │
│  │  ✓ Growth audit     │  │  ✓ Everything in     │  │  ✓ Everything in  │ │
│  │  ✓ Strategy         │  │    Starter           │  │    Growth         │ │
│  │  ✓ 1 landing page   │  │  ✓ AI personalization│  │  ✓ Dedicated team │ │
│  │  ✓ Monthly review   │  │  ✓ 3D experiences    │  │  ✓ Custom AI      │ │
│  │                     │  │  ✓ Weekly calls      │  │  ✓ Priority SLA   │ │
│  │                     │  │                      │  │                   │ │
│  │  [Get Started]      │  │  [Get Started]       │  │  [Contact Us]     │ │
│  │                     │  │                      │  │                   │ │
│  └─────────────────────┘  └──────────────────────┘  └───────────────────┘ │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.10 Contact (`/contact`)

**Purpose:** Capture leads, provide multiple contact options  
**Primary CTA:** Form submission  
**Secondary CTA:** Book a call

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Invitation | "Let's Start a Conversation" |
| 2 | **Form** | Capture lead | Name, email, company, message, budget |
| 3 | **Direct Options** | Alternative contact | Email, phone, social |
| 4 | **FAQ** | Pre-answer questions | Working with us FAQ |
| 5 | **Location** | Physical presence | Office location (if applicable) |

---

### 3.11 Book a Call (`/book`)

**Purpose:** Direct scheduling, reduce friction  
**Primary CTA:** Calendar selection

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Set expectations | "30-Minute Growth Strategy Session" |
| 2 | **What to Expect** | Reduce anxiety | Session agenda |
| 3 | **Calendar Embed** | Booking | Calendly/Cal.com integration |
| 4 | **Testimonial** | Reassurance | Quote about the session experience |

---

### 3.12 Growth Lab (`/growth-lab`)

**Purpose:** Interactive lead magnet, showcase capabilities  
**Primary CTA:** Email capture for results

#### Section Breakdown

| # | Section | Purpose | Content |
| :--- | :--- | :--- | :--- |
| 1 | **Hero** | Hook | "See Your Website Through AI Eyes" |
| 2 | **URL Input** | Engagement | Enter website URL |
| 3 | **Analysis Animation** | Delight | Animated scanning visual |
| 4 | **Results Preview** | Tease value | Partial results shown |
| 5 | **Email Gate** | Capture | "Enter email for full report" |
| 6 | **Full Report** | Deliver value | Detailed analysis |
| 7 | **CTA** | Convert | "Discuss findings with expert" |

---

## 4. User Flows

### 4.1 Primary Conversion Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│  Homepage   │────▶│  Services   │────▶│  Case Study │────▶│  Book Call  │
│             │     │             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │                   │
      │                   │                   │                   │
      ▼                   ▼                   ▼                   ▼
   Aware            Interested           Convinced           Converted
   
   Animation:       Animation:           Animation:          Animation:
   Hero reveal      Card hovers          Results counters    Confirmation
   Logo carousel    Process steps        Testimonial fade    Success state
```

### 4.2 Content Marketing Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│  Blog Post  │────▶│  Newsletter │────▶│   Services  │────▶│  Book Call  │
│  (via SEO)  │     │   Signup    │     │   (email)   │     │             │
│             │     │             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │                   │
      ▼                   ▼                   ▼                   ▼
   Discover          Subscribe            Nurture             Convert
```

### 4.3 Growth Lab Flow (Lead Magnet)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │     │             │
│ Growth Lab  │────▶│   Enter     │────▶│   Email     │────▶│   Full      │
│   Landing   │     │   URL       │     │   Capture   │     │   Report    │
│             │     │             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘     └──────┬──────┘
                                                                   │
                                                                   ▼
                                                           ┌─────────────┐
                                                           │  Book Call  │
                                                           │  (in email) │
                                                           └─────────────┘
```

### 4.4 Page Connection Matrix

| From → | Home | Services | Work | About | Blog | Contact | Book | Pricing |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Home** | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Services** | ✓ | — | ✓ | — | ✓ | ✓ | ✓ | ✓ |
| **Work** | ✓ | ✓ | — | — | — | ✓ | ✓ | — |
| **About** | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | — |
| **Blog** | ✓ | ✓ | — | — | — | — | ✓ | — |
| **Contact** | ✓ | — | — | — | — | — | ✓ | — |
| **Book** | ✓ | — | — | — | — | ✓ | — | — |
| **Pricing** | ✓ | ✓ | ✓ | — | — | ✓ | ✓ | — |

---

## 5. Navigation System

### 5.1 Primary Navigation (Desktop)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [Logo]       Services ▾    Work    About    Blog    Pricing    [Book]   │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
                    │
                    ▼
            ┌─────────────────────────────────────┐
            │  Services Dropdown                  │
            │  ────────────────────────────────   │
            │                                     │
            │  SaaS Growth           [→]          │
            │  AI-driven conversion funnels       │
            │                                     │
            │  E-commerce 3D         [→]          │
            │  Immersive shopping experiences     │
            │                                     │
            │  Professional Services [→]          │
            │  Authority & lead generation        │
            │                                     │
            │  ────────────────────────────────   │
            │  [View All Services]                │
            │                                     │
            └─────────────────────────────────────┘
```

### 5.2 Mobile Navigation

```
┌────────────────────────┐
│  [Logo]         [☰]    │
└────────────────────────┘
            │
            ▼ (hamburger tap)
┌────────────────────────┐
│                   [✕]  │
│                        │
│  Services              │
│    └─ SaaS Growth      │
│    └─ E-commerce 3D    │
│    └─ Professional     │
│                        │
│  Work                  │
│  About                 │
│  Blog                  │
│  Pricing               │
│                        │
│  ────────────────────  │
│                        │
│  [Book a Call]         │
│                        │
└────────────────────────┘
```

### 5.3 Footer Navigation

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  ┌─ Logo + Tagline ──────────────────────────────────────────────────────┐│
│  │  [AISurfaced Logo]                                                     ││
│  │  Adaptive Growth Ecosystems                                           ││
│  │  Powered by AI. Driven by ROI.                                        ││
│  └───────────────────────────────────────────────────────────────────────┘│
│                                                                            │
│  ┌─ Services ────┐  ┌─ Company ─────┐  ┌─ Resources ──┐  ┌─ Contact ────┐ │
│  │ SaaS Growth   │  │ About         │  │ Blog         │  │ Get in Touch │ │
│  │ E-commerce 3D │  │ Team          │  │ Growth Lab   │  │ Book a Call  │ │
│  │ Professional  │  │ Careers       │  │ Newsletter   │  │ LinkedIn     │ │
│  │ All Services  │  │ Partners      │  │ Case Studies │  │ Twitter/X    │ │
│  └───────────────┘  └───────────────┘  └──────────────┘  └──────────────┘ │
│                                                                            │
│  ────────────────────────────────────────────────────────────────────────  │
│                                                                            │
│  © 2026 AISurfaced. All rights reserved.    Privacy  •  Terms  •  Sitemap  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Animation & Interaction System

### 6.1 Global Animation Tokens

```css
:root {
  /* Durations */
  --anim-instant: 100ms;
  --anim-fast: 150ms;
  --anim-normal: 250ms;
  --anim-slow: 400ms;
  --anim-slower: 600ms;
  
  /* Easings */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 6.2 Page Transition Animations

| Transition | Animation | Duration | Notes |
| :--- | :--- | :--- | :--- |
| Page Enter | Fade in + slide up (16px) | 300ms | Apply to main content |
| Page Exit | Fade out | 150ms | Quick exit |
| Route Change | Crossfade | 200ms | Smooth between pages |

### 6.3 Scroll-Triggered Animations

| Element | Trigger Point | Animation | Repeat |
| :--- | :--- | :--- | :--- |
| Section headers | 20% in viewport | Fade in + slide up | Once |
| Cards | 15% in viewport | Stagger fade in | Once |
| Images | 10% in viewport | Fade in + scale (0.95→1) | Once |
| Stats/Numbers | 30% in viewport | Count up animation | Once |
| Testimonials | 25% in viewport | Fade in from sides | Once |
| CTA Banners | 50% in viewport | Subtle pulse glow | Loop |

### 6.4 Micro-Interactions

| Element | Trigger | Animation | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Button** | Hover | Lift 2px + shadow expand + glow | Encourage click |
| **Primary Button** | Click | Scale down 0.98 | Feedback |
| **Secondary Button** | Hover | Background fill from left | Subtle emphasis |
| **Card** | Hover | Lift 4px + shadow + border glow | Indicate interactive |
| **Link** | Hover | Underline grow from left | Standard affordance |
| **Nav Item** | Hover | Text color + subtle underline | Navigation clarity |
| **Nav Dropdown** | Open | Fade in + slide down 8px | Reveal smoothly |
| **Form Input** | Focus | Border glow + label float | Focus state |
| **Form Input** | Valid | Green checkmark fade in | Validation feedback |
| **Form Input** | Error | Shake + red border | Error feedback |
| **Logo** | Hover | Subtle teal glow pulse | Brand moment |
| **3D Element** | Scroll | Parallax rotation | Depth/interest |
| **3D Element** | Mouse move | Follow cursor slightly | Interactive delight |

### 6.5 Animation Choreography by Page

#### Homepage Animation Timeline

```
0ms     ──┬── Nav fades in
          │
100ms   ──┼── Headline Line 1 slides up
          │
200ms   ──┼── Headline Line 2 slides up
          │
350ms   ──┼── Subheadline fades in
          │
450ms   ──┼── CTA buttons spring in
          │
300ms   ──┼── 3D visual begins rotation (parallel)
          │
700ms   ──┼── Trust bar logos fade in
          │
800ms   ──┴── Hero complete, scroll animations armed

[On Scroll]

Section 1 ── Problem stats count up
Section 2 ── Solution cards stagger in (100ms delay each)
Section 3 ── Service cards slide in from alternating sides
Section 4 ── Logos carousel begins
Section 5 ── Before/After split reveal
Section 6 ── Process steps reveal sequentially
Section 7 ── CTA banner pulse begins
Section 8 ── Blog cards fade in
```

#### Case Study Animation Timeline

```
0ms     ──┬── Hero image scales in
          │
150ms   ──┼── Client name fades in
          │
250ms   ──┼── Headline result animates
          │
400ms   ──┴── Hero complete

[On Scroll to Results]

0ms     ──┬── "The Results" header fades in
          │
200ms   ──┼── Stat box 1 fades in, number counts
          │
350ms   ──┼── Stat box 2 fades in, number counts
          │
500ms   ──┼── Stat box 3 fades in, number counts
          │
700ms   ──┼── Before column slides in from left
          │
900ms   ──┴── After column slides in from right
```

### 6.6 Loading States

| Context | Animation | Duration |
| :--- | :--- | :--- |
| Page load | Logo pulse + progress bar | Until loaded |
| Form submit | Button spinner + "Sending..." | Until complete |
| Growth Lab analysis | Custom scanning animation | 3-5 seconds |
| Image lazy load | Blur-up placeholder | Until loaded |
| Content skeleton | Shimmer gradient | Until loaded |

### 6.7 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Keep essential state changes */
  .btn:hover { background: var(--accent-hover); }
  .card:hover { box-shadow: var(--shadow-lg); }
}
```

---

## 7. Conversion Strategy

### 7.1 CTA Hierarchy

| Priority | CTA Type | Placement | Design Treatment |
| :--- | :--- | :--- | :--- |
| **Primary** | Book a Call | Nav, Hero, Section ends | Solid teal button |
| **Secondary** | See Work / Learn More | Cards, sections | Outlined button or link |
| **Tertiary** | Newsletter signup | Blog, Footer | Inline form |
| **Contextual** | Service-specific | Service pages | Related CTA |

### 7.2 Conversion Points by Page

| Page | Primary Conversion | Secondary Conversion |
| :--- | :--- | :--- |
| Homepage | Book Strategy Session | See Our Work |
| Services | Get Custom Proposal | Download Case Study |
| Work | Discuss Your Project | Related Service |
| Case Study | Get Similar Results | Book Call |
| Blog | Newsletter Signup | Related Service |
| Pricing | Book Discussion | Contact Us |
| Growth Lab | Email for Full Report | Book Call |

### 7.3 Trust Signals

| Signal Type | Placement | Content |
| :--- | :--- | :--- |
| Client logos | Homepage hero, footer | 4-6 recognizable logos |
| Metrics | Homepage, case studies | "340% increase", "$2.4M pipeline" |
| Testimonials | Homepage, service pages | Photo + quote + name/title |
| Certifications | Footer, about | Google Partner, etc. |
| Social proof | Various | "Join 500+ growth leaders" |

---

## 8. Technical Requirements

### 8.1 Performance Targets

| Metric | Target | Priority |
| :--- | :--- | :--- |
| First Contentful Paint | < 1.5s | Critical |
| Largest Contentful Paint | < 2.5s | Critical |
| Time to Interactive | < 3.5s | High |
| Cumulative Layout Shift | < 0.1 | High |
| First Input Delay | < 100ms | Medium |

### 8.2 Technology Stack (Recommended)

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| Framework | Next.js 14+ (App Router) | SSG, performance, SEO |
| Styling | Tailwind CSS + CSS Variables | Design system alignment |
| Animation | Framer Motion | Declarative, performant |
| 3D | Spline / Three.js | Hero visuals |
| CMS | Sanity / Contentful | Blog, case studies |
| Forms | React Hook Form + Zod | Validation |
| Analytics | Plausible / PostHog | Privacy-friendly |
| Booking | Cal.com / Calendly | Scheduling |

### 8.3 SEO Requirements

| Page Type | Title Format | Meta Description |
| :--- | :--- | :--- |
| Homepage | AISurfaced — Adaptive Growth Ecosystems | AI-powered growth agency... |
| Service | [Service] — AISurfaced | Description of service... |
| Case Study | [Client] Case Study — AISurfaced | How we helped [client]... |
| Blog Post | [Title] — AISurfaced Blog | First 155 chars of post... |

### 8.4 Accessibility Requirements

| Requirement | Implementation |
| :--- | :--- |
| Keyboard navigation | All interactive elements focusable |
| Screen reader | Semantic HTML, ARIA labels |
| Color contrast | WCAG AA minimum (4.5:1) |
| Focus indicators | Visible focus rings |
| Alt text | All images described |
| Reduced motion | `prefers-reduced-motion` support |
| Skip links | Skip to main content |

---

## Appendix: Quick Reference

### Page Priority for Launch

| Phase | Pages | Notes |
| :--- | :--- | :--- |
| **MVP** | Home, Services (hub), Work (1-2 cases), Contact, Book | Minimum viable site |
| **Phase 2** | Service details, More cases, Blog (5 posts), Pricing | Full funnel |
| **Phase 3** | Growth Lab, Team, Partners, Newsletter landing | Lead gen expansion |

### Content Requirements

| Page | Content Needed |
| :--- | :--- |
| Homepage | Headlines, 3 service summaries, 3 testimonials, 3 blog teasers |
| Services | 3 service descriptions, process steps, FAQs |
| Work | 3-5 case studies with metrics, screenshots, testimonials |
| Blog | 5-10 articles (1,500+ words each) |
| About | Company story, values, team bios |

---

*AISurfaced Website Architecture v1.0 — March 2026*
