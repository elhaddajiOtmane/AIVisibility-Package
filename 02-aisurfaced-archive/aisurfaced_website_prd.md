# AISurfaced Website - Product Requirements Document

> Comprehensive engineering PRD for the AISurfaced agency website. This document serves as the single source of truth for development, design, product, and external vendor teams.

**Document Type:** Product Requirements Document (PRD)  
**Version:** 1.0  
**Last Updated:** March 2026  
**Status:** Draft  
**Owner:** Product Team  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Goals](#2-product-vision--goals)
3. [User Personas & Jobs-to-be-Done](#3-user-personas--jobs-to-be-done)
4. [Functional Requirements](#4-functional-requirements)
5. [User Stories & Epics](#5-user-stories--epics)
6. [Information Architecture](#6-information-architecture)
7. [Technical Requirements](#7-technical-requirements)
8. [Design Requirements](#8-design-requirements)
9. [Performance & Accessibility](#9-performance--accessibility)
10. [Analytics & Event Tracking](#10-analytics--event-tracking)
11. [Content Requirements](#11-content-requirements)
12. [Launch Strategy](#12-launch-strategy)
13. [Risks & Dependencies](#13-risks--dependencies)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

### 1.1 Project Overview

AISurfaced is building a high-converting agency website that positions the company as a leader in AI-driven growth ecosystems. The website must communicate premium quality, demonstrate measurable results, and convert qualified visitors into booked strategy sessions.

### 1.2 Business Context

| Attribute | Description |
|-----------|-------------|
| **Company** | AISurfaced — Modern Growth Agency (2026) |
| **Industry** | B2B Agency Services (SaaS, E-commerce, Professional Services) |
| **Positioning** | AI-integrated, outcome-focused growth partner |
| **Primary Revenue Model** | Project-based + retainer engagements ($15K-$150K+) |

### 1.3 Project Objectives

| Priority | Objective | Success Metric |
|----------|-----------|----------------|
| **P0** | Generate qualified leads | 20-30 booked strategy sessions/month |
| **P0** | Establish credibility | 5,000+ monthly visitors within 6 months |
| **P1** | Build nurture pipeline | 500+ newsletter subscribers/month |
| **P1** | Demonstrate expertise | 3+ minutes average session duration |
| **P2** | Enable partnerships | 5 inbound partner inquiries/month |

### 1.4 Timeline Summary

| Phase | Duration | Scope |
|-------|----------|-------|
| **Phase 1: MVP** | Weeks 1-3 | Core pages, booking flow, basic CRM |
| **Phase 2: Extended** | Weeks 4-5 | All services, blog, pricing, case studies |
| **Phase 3: Lead Gen** | Weeks 6-7 | Growth Lab, advanced integrations |
| **Phase 4: Launch** | Week 8 | QA, content, go-live |

### 1.5 Key Stakeholders

| Role | Responsibility | Approval Authority |
|------|----------------|-------------------|
| Product Owner | Requirements, priorities, acceptance | Final sign-off |
| Design Lead | Visual identity, UX patterns | Design decisions |
| Tech Lead | Architecture, implementation | Technical decisions |
| Content Lead | Copy, assets, case studies | Content approval |
| Marketing Lead | Conversion strategy, analytics | Marketing decisions |

---

## 2. Product Vision & Goals

### 2.1 Vision Statement

> Build the most compelling agency website in the growth marketing space—one that doesn't just describe our capabilities but *demonstrates* them through immersive experience, measurable proof, and frictionless conversion.

### 2.2 Product Principles

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **Outcome-First** | Every element points to results | Metrics visible on all key pages |
| **Fluid Experience** | Interactions feel alive and responsive | Purposeful animations, smooth transitions |
| **Trust Through Proof** | Show, don't tell | Case studies, testimonials, real numbers |
| **Zero Friction** | Remove barriers to conversion | Max 2 clicks to book, smart forms |
| **Premium Quality** | Every detail reflects expertise | Polished design, fast performance |

### 2.3 Objectives & Key Results (OKRs)

#### Objective 1: Become the Primary Lead Generation Channel

| Key Result | Target | Measurement |
|------------|--------|-------------|
| KR1.1 | 20-30 qualified strategy sessions booked/month | Cal.com bookings |
| KR1.2 | 5% visitor-to-lead conversion rate | Form submissions / unique visitors |
| KR1.3 | <48 hour average response time | CRM timestamps |

#### Objective 2: Establish Digital Thought Leadership

| Key Result | Target | Measurement |
|------------|--------|-------------|
| KR2.1 | 5,000+ monthly organic visitors within 6 months | PostHog analytics |
| KR2.2 | Top 10 ranking for "AI growth agency" | SEO tracking |
| KR2.3 | 500+ newsletter subscribers/month | ConvertKit metrics |

#### Objective 3: Deliver Best-in-Class User Experience

| Key Result | Target | Measurement |
|------------|--------|-------------|
| KR3.1 | 90+ Lighthouse performance score | Lighthouse CI |
| KR3.2 | <2.5s Largest Contentful Paint | Core Web Vitals |
| KR3.3 | <30% bounce rate on key pages | PostHog analytics |

### 2.4 Success Criteria

The website launch will be considered successful when:

- [ ] All MVP pages are live and functional
- [ ] Booking flow is operational with CRM integration
- [ ] Core Web Vitals pass on all pages
- [ ] At least 5 strategy sessions booked in first 2 weeks
- [ ] Zero critical accessibility violations (WCAG AA)
- [ ] Analytics tracking validated for all conversion events

---

## 3. User Personas & Jobs-to-be-Done

### 3.1 Primary Personas

#### Persona 1: Sarah — B2B SaaS CMO

| Attribute | Details |
|-----------|---------|
| **Title** | Chief Marketing Officer |
| **Company** | Series B SaaS startup ($5M-$20M ARR) |
| **Age** | 35-45 |
| **Reports To** | CEO |
| **Team Size** | 5-15 marketers |

**Goals:**
- Scale pipeline without proportionally scaling headcount
- Prove marketing ROI to board and CEO
- Stay ahead of AI/technology curve

**Pain Points:**
- Current agency feels outdated, not strategic
- Website not converting despite traffic
- Struggling to differentiate in crowded market

**Behavior:**
- Researches extensively before engaging
- Values case studies and proof over promises
- Will book call only after validation

**Journey:** Home → Services → Case Studies → About → Book Call

---

#### Persona 2: Michael — E-commerce Founder

| Attribute | Details |
|-----------|---------|
| **Title** | Founder / CEO |
| **Company** | DTC e-commerce brand ($2M-$10M revenue) |
| **Age** | 30-40 |
| **Reports To** | Investors / Board |
| **Team Size** | 2-5 in-house |

**Goals:**
- Create immersive shopping experiences that convert
- Differentiate from Amazon/commodity competitors
- Build brand loyalty, not just transactions

**Pain Points:**
- Generic Shopify template doesn't convey premium quality
- High traffic but low conversion rates
- 3D/AR feels out of reach technically

**Behavior:**
- Very visual — needs to see examples
- Fast decision maker if impressed
- Budget-conscious but willing to invest for results

**Journey:** Home → Work (portfolio) → Services → Pricing → Book Call

---

#### Persona 3: David — Professional Services Partner

| Attribute | Details |
|-----------|---------|
| **Title** | Managing Partner |
| **Company** | Law firm or medical practice |
| **Age** | 45-55 |
| **Reports To** | Partnership |
| **Team Size** | Delegates digital decisions |

**Goals:**
- Dominate local/niche search results
- Establish authority and trust online
- Generate qualified leads (not tire-kickers)

**Pain Points:**
- Current website feels dated, doesn't reflect expertise
- Competitors outranking despite less experience
- No idea if website is actually working

**Behavior:**
- Less technically savvy, needs clear explanations
- Values reputation and referrals highly
- Longer decision cycle, involves partners

**Journey:** Blog (via search) → Services → About → Case Studies → Contact

---

#### Persona 4: Jessica — Marketing Director (Referral Evaluator)

| Attribute | Details |
|-----------|---------|
| **Title** | Director of Marketing |
| **Company** | Mid-market company ($20M-$100M) |
| **Age** | 30-40 |
| **Reports To** | VP Marketing or CMO |
| **Team Size** | Manages 3-8 people |

**Goals:**
- Find vendors she can recommend to leadership
- De-risk agency selection process
- Ensure agency can deliver what they promise

**Pain Points:**
- Burned by agencies that over-promised
- Needs ammunition to justify recommendation
- Must prove ROI to get budget approved

**Behavior:**
- Downloads resources, reads case studies thoroughly
- Compares multiple agencies before recommending
- Values transparency in pricing and process

**Journey:** Services → Pricing → Case Studies → Download Resource → Share with CMO

---

### 3.2 Jobs-to-be-Done Framework

| Job Category | Job Statement | Website Solution |
|--------------|---------------|------------------|
| **Functional** | When I need to scale growth, help me find a capable partner so I can hit my targets | Clear service descriptions, case study proof |
| **Functional** | When evaluating agencies, help me quickly assess fit so I don't waste time | Pricing transparency, clear ICP indicators |
| **Emotional** | When choosing a partner, help me feel confident so I can recommend without risk | Trust signals, testimonials, methodology |
| **Social** | When presenting to leadership, help me look smart so I maintain credibility | Downloadable resources, shareable case studies |

### 3.3 User Scenarios

#### Scenario 1: Organic Discovery → Booking

```
Sarah searches "AI marketing agency for SaaS"
  → Lands on blog post about AI-driven growth
  → Clicks to homepage, scans hero
  → Navigates to Services, reads SaaS Growth page
  → Views 2 case studies with similar companies
  → Reads about team on About page
  → Books strategy session
```

**Critical Path:** Blog → Home → Services → Case Studies → Book  
**Conversion Time:** 2-3 sessions over 1-2 weeks

#### Scenario 2: Referral → Quick Evaluation

```
Michael receives recommendation from founder network
  → Goes directly to homepage
  → Immediately clicks "See Our Work"
  → Spends 5 minutes viewing portfolio
  → Checks pricing page for ballpark
  → Books call same session
```

**Critical Path:** Home → Work → Pricing → Book  
**Conversion Time:** Single session, 10-15 minutes

#### Scenario 3: Research Mode → Nurture → Convert

```
Jessica finds AISurfaced while researching agencies
  → Downloads "2026 Growth Blueprint" lead magnet
  → Receives nurture emails over 2 weeks
  → Returns to site, reads 3 case studies
  → Shares link with CMO
  → CMO books strategy session
```

**Critical Path:** Growth Lab → Email → Case Studies → (Share) → Book  
**Conversion Time:** 2-4 weeks with multiple touchpoints

---

## 4. Functional Requirements

### 4.1 Global Components

#### REQ-G01: Navigation Header

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| G01.1 | Sticky header with logo, nav links, and primary CTA | P0 | Header remains visible on scroll |
| G01.2 | Nav links: Services, Work, About, Blog, Pricing | P0 | All links functional and accessible |
| G01.3 | Primary CTA: "Book a Call" button | P0 | Links to /book, visible at all breakpoints |
| G01.4 | Mobile: Hamburger menu with full navigation | P0 | Menu opens/closes smoothly, all links accessible |
| G01.5 | Active state indication for current page | P1 | Current nav item highlighted |
| G01.6 | Header background transitions on scroll | P2 | Transparent → solid on scroll past hero |

#### REQ-G02: Footer

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| G02.1 | Site navigation links (all main pages) | P0 | All links functional |
| G02.2 | Contact information (email, phone) | P0 | Click-to-email, click-to-call on mobile |
| G02.3 | Social media links (LinkedIn, X) | P1 | Open in new tab, proper aria-labels |
| G02.4 | Newsletter signup form | P1 | Integrates with ConvertKit |
| G02.5 | Legal links (Privacy, Terms) | P0 | Links to legal pages |
| G02.6 | Copyright notice with current year | P0 | Year updates dynamically |

#### REQ-G03: Cookie Consent

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| G03.1 | Cookie consent banner on first visit | P0 | Displays before any tracking |
| G03.2 | Accept/Decline options | P0 | Choice persisted in localStorage |
| G03.3 | Link to privacy policy | P0 | Opens privacy policy page |
| G03.4 | Analytics only fires after consent | P0 | Verified via network inspection |

---

### 4.2 Homepage (`/`)

**Purpose:** First impression, establish credibility, drive to booking or portfolio

#### REQ-H01: Hero Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H01.1 | Headline: Value proposition (max 10 words) | P0 | Renders above fold on all devices |
| H01.2 | Subheadline: Supporting copy (max 25 words) | P0 | Clearly readable, proper contrast |
| H01.3 | Primary CTA: "Book Strategy Session" | P0 | Links to /book |
| H01.4 | Secondary CTA: "See Our Work" | P0 | Links to /work |
| H01.5 | 3D visual element (Spline embed) | P1 | Loads within 2s, graceful fallback |
| H01.6 | Trust bar: 4-6 client logos | P0 | Logos lazy-loaded, grayscale treatment |
| H01.7 | Entrance animation sequence | P1 | Elements stagger-animate on load |

#### REQ-H02: Problem Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H02.1 | Problem statement headline | P0 | Agitates target audience pain |
| H02.2 | 3 problem statistics with icons | P1 | Numbers animate (count up) on scroll |
| H02.3 | Scroll-triggered animation | P1 | Activates when 50% in viewport |

#### REQ-H03: Solution Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H03.1 | Solution headline | P0 | Introduces AISurfaced approach |
| H03.2 | 3 solution pillars (AI, Immersive, ROI) | P0 | Cards with icons, titles, descriptions |
| H03.3 | Cards animate in from sides | P1 | Staggered animation on scroll |

#### REQ-H04: Services Preview

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H04.1 | 3 service cards with icons | P0 | Each links to respective service page |
| H04.2 | Service name, brief description | P0 | Max 20 words per description |
| H04.3 | Hover state with elevation change | P1 | Shadow and translate transform |
| H04.4 | "View All Services" link | P1 | Links to /services |

#### REQ-H05: Social Proof Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H05.1 | Featured testimonial with photo | P0 | Name, title, company, quote |
| H05.2 | Key metrics (3 stats) | P0 | Numbers with labels (e.g., "340% avg ROI") |
| H05.3 | Client logo carousel | P1 | Auto-scrolling, pausable |
| H05.4 | Metrics count-up animation | P1 | Triggers on scroll into view |

#### REQ-H06: Case Study Feature

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H06.1 | Featured case study card | P0 | Client name, industry, result headline |
| H06.2 | Before/after visual comparison | P1 | Split-screen or slider interface |
| H06.3 | Key result metric prominent | P0 | Large number with context |
| H06.4 | "Read Full Case Study" CTA | P0 | Links to specific case study |

#### REQ-H07: Process Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H07.1 | 4-step process visualization | P0 | Discovery, Strategy, Build, Optimize |
| H07.2 | Step numbers, titles, descriptions | P0 | Clear hierarchy |
| H07.3 | Sequential reveal animation | P1 | Steps appear one at a time on scroll |
| H07.4 | Visual connector between steps | P2 | Line or flow indicator |

#### REQ-H08: CTA Banner

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H08.1 | Full-width banner with gradient background | P0 | Uses brand gradient |
| H08.2 | Compelling headline | P0 | Action-oriented copy |
| H08.3 | "Book Your Strategy Session" CTA | P0 | Links to /book |
| H08.4 | Subtle background animation | P2 | Gradient pulse or particle effect |

#### REQ-H09: Blog Preview

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| H09.1 | 3 latest blog post cards | P1 | Fetched from CMS |
| H09.2 | Post title, excerpt, date | P0 | Truncated excerpt (max 100 chars) |
| H09.3 | Category tags | P2 | Clickable, filter to category |
| H09.4 | "View All Posts" link | P1 | Links to /blog |

---

### 4.3 Services Hub (`/services`)

**Purpose:** Overview all capabilities, route to detailed service pages

#### REQ-S01: Services Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| S01.1 | Page headline and description | P0 | Frames services context |
| S01.2 | Breadcrumb navigation | P1 | Home > Services |

#### REQ-S02: Services Grid

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| S02.1 | 3 primary service cards | P0 | SaaS Growth, E-commerce 3D, Professional Services |
| S02.2 | Each card: icon, title, description, CTA | P0 | Links to service detail page |
| S02.3 | Hover states with visual feedback | P1 | Elevation, border, or glow change |

#### REQ-S03: Differentiation Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| S03.1 | "AISurfaced vs. Traditional Agencies" comparison | P1 | Table or side-by-side format |
| S03.2 | 5-6 comparison points | P1 | Clear advantage indicators |

#### REQ-S04: Services CTA

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| S04.1 | "Not sure which service?" help section | P1 | Brief copy + CTA |
| S04.2 | "Let's Discuss Your Needs" CTA | P0 | Links to /contact or /book |

---

### 4.4 Service Detail Pages (`/services/[slug]`)

**Purpose:** Deep dive into specific service offering, convert interested visitors

#### REQ-SD01: Service Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| SD01.1 | Service name headline | P0 | Clear, specific service title |
| SD01.2 | Service description (50-100 words) | P0 | Value proposition for this service |
| SD01.3 | Relevant visual/illustration | P1 | Service-specific imagery |
| SD01.4 | Primary CTA | P0 | "Get Started" or "Book a Call" |

#### REQ-SD02: Service Details

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| SD02.1 | "What We Deliver" section | P0 | Bullet list of deliverables |
| SD02.2 | "Who This Is For" section | P0 | Ideal client description |
| SD02.3 | "Our Approach" methodology | P1 | Process steps specific to service |

#### REQ-SD03: Service Social Proof

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| SD03.1 | Relevant case study preview | P0 | Related to this service vertical |
| SD03.2 | Service-specific testimonial | P1 | From client in this vertical |
| SD03.3 | Key results metrics | P0 | 2-3 impressive numbers |

#### REQ-SD04: Service FAQ

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| SD04.1 | 5-7 service-specific FAQs | P1 | Accordion component |
| SD04.2 | Schema markup for FAQs | P1 | FAQPage structured data |

#### REQ-SD05: Related Services

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| SD05.1 | 2 related service cards | P2 | Cross-sell other services |
| SD05.2 | "Often combined with..." framing | P2 | Suggests bundling |

---

### 4.5 Work / Portfolio (`/work`)

**Purpose:** Showcase results, build credibility through proof

#### REQ-W01: Portfolio Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| W01.1 | "Our Work" headline | P0 | Clean, confident |
| W01.2 | Brief intro copy | P0 | Sets context for case studies |
| W01.3 | Filter by industry/service | P1 | Functional filter toggles |

#### REQ-W02: Case Study Grid

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| W02.1 | Grid of case study cards | P0 | Minimum 3 for launch |
| W02.2 | Each card: thumbnail, client, result headline | P0 | Clickable to detail page |
| W02.3 | Hover state with overlay | P1 | Shows "View Case Study" |
| W02.4 | Lazy loading for images | P0 | Images load on scroll |

#### REQ-W03: Results Summary

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| W03.1 | Aggregate results banner | P1 | "X clients, $Y revenue generated" etc. |
| W03.2 | Count-up animation | P2 | Numbers animate on scroll |

---

### 4.6 Case Study Detail (`/work/[slug]`)

**Purpose:** Deep proof of results, convert convinced visitors

#### REQ-CS01: Case Study Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CS01.1 | Client name and industry | P0 | Clear identification |
| CS01.2 | Hero result headline | P0 | "340% Increase in Pipeline" format |
| CS01.3 | Client logo (if permitted) | P1 | High-quality logo |
| CS01.4 | Hero image/screenshot | P0 | Visual of the work |

#### REQ-CS02: Challenge Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CS02.1 | "The Challenge" narrative | P0 | Client's situation before |
| CS02.2 | Specific pain points listed | P0 | 2-3 bullet points |

#### REQ-CS03: Solution Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CS03.1 | "Our Approach" narrative | P0 | What AISurfaced did |
| CS03.2 | Key tactics/deliverables | P0 | Specific actions taken |
| CS03.3 | Screenshots/visuals of work | P1 | Carousel or gallery |

#### REQ-CS04: Results Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CS04.1 | "The Results" with 3-4 key metrics | P0 | Large numbers, before/after |
| CS04.2 | Metrics animate on scroll | P1 | Count-up effect |
| CS04.3 | Timeline context | P1 | "In just 90 days..." |

#### REQ-CS05: Testimonial

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CS05.1 | Client testimonial quote | P0 | Direct quote from client |
| CS05.2 | Photo, name, title | P1 | Adds credibility |

#### REQ-CS06: Case Study CTA

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CS06.1 | "Get Similar Results" CTA | P0 | Links to /book |
| CS06.2 | Related case studies | P1 | 2 other case study cards |

---

### 4.7 About (`/about`)

**Purpose:** Build trust, humanize the brand, show expertise

#### REQ-A01: About Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| A01.1 | Company story headline | P0 | "About AISurfaced" or compelling hook |
| A01.2 | Mission statement | P0 | Clear, concise mission |
| A01.3 | Hero visual | P1 | Team photo or abstract brand visual |

#### REQ-A02: Company Story

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| A02.1 | Founding story narrative | P0 | 2-3 paragraphs |
| A02.2 | Values section | P1 | 4 core values with descriptions |
| A02.3 | Vision statement | P1 | Where we're headed |

#### REQ-A03: Team Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| A03.1 | Leadership team cards | P1 | Photo, name, title, brief bio |
| A03.2 | LinkedIn links | P2 | Opens profile in new tab |
| A03.3 | "View Full Team" link | P2 | Links to /about/team |

#### REQ-A04: Why Choose Us

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| A04.1 | Differentiators section | P1 | 3-4 reasons to choose AISurfaced |
| A04.2 | Supporting evidence for each | P1 | Stats or proof points |

---

### 4.8 Blog (`/blog`)

**Purpose:** Thought leadership, SEO, lead nurturing

#### REQ-B01: Blog Index

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| B01.1 | Featured/latest post hero | P1 | Large featured card |
| B01.2 | Blog post grid | P0 | Cards with thumbnail, title, excerpt, date |
| B01.3 | Category filter | P1 | Filter posts by category |
| B01.4 | Pagination or infinite scroll | P0 | Handle 20+ posts |
| B01.5 | Search functionality | P2 | Search posts by keyword |

#### REQ-B02: Blog Post (`/blog/[slug]`)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| B02.1 | Article title (H1) | P0 | SEO-optimized |
| B02.2 | Author info with photo | P1 | Name, title, photo |
| B02.3 | Publish date and read time | P0 | Calculated read time |
| B02.4 | Category tags | P1 | Clickable to category filter |
| B02.5 | Table of contents | P1 | For posts >1500 words |
| B02.6 | Rich text content from CMS | P0 | Supports headings, images, code blocks |
| B02.7 | Social share buttons | P1 | LinkedIn, X, copy link |
| B02.8 | Author bio at end | P1 | Brief bio with LinkedIn |
| B02.9 | Related posts | P1 | 3 related articles |
| B02.10 | Newsletter CTA | P0 | Inline signup form |
| B02.11 | Article schema markup | P0 | Structured data for SEO |

---

### 4.9 Pricing (`/pricing`)

**Purpose:** Qualify leads, set expectations, reduce friction

#### REQ-P01: Pricing Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| P01.1 | Pricing page headline | P0 | Clear, sets context |
| P01.2 | "Investment ranges, not fixed prices" framing | P0 | Manages expectations |

#### REQ-P02: Pricing Tiers

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| P02.1 | 3 pricing tiers | P0 | Growth, Scale, Enterprise |
| P02.2 | Each tier: name, price range, features list | P0 | Clear differentiation |
| P02.3 | "Most Popular" badge on middle tier | P1 | Visual highlight |
| P02.4 | CTA per tier | P0 | "Book a Call" or "Contact Us" |
| P02.5 | Comparison table view option | P2 | Toggle between cards and table |

#### REQ-P03: Pricing FAQ

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| P03.1 | 5-7 pricing FAQs | P0 | Payment terms, process, etc. |
| P03.2 | Accordion component | P0 | Expand/collapse |

#### REQ-P04: Custom Projects

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| P04.1 | "Need something custom?" section | P1 | For enterprise/complex needs |
| P04.2 | "Let's Talk" CTA | P0 | Links to /contact |

---

### 4.10 Contact (`/contact`)

**Purpose:** Capture leads, provide contact options

#### REQ-C01: Contact Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| C01.1 | "Let's Start a Conversation" headline | P0 | Inviting tone |
| C01.2 | Brief intro copy | P0 | Set expectations |

#### REQ-C02: Contact Form

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| C02.1 | Form fields: Name, Email, Company, Message | P0 | All required except Message |
| C02.2 | Company size dropdown | P1 | Qualification field |
| C02.3 | Service interest dropdown | P1 | Multi-select |
| C02.4 | Budget range dropdown | P2 | Optional qualification |
| C02.5 | Form validation | P0 | Real-time validation with Zod |
| C02.6 | Submit button with loading state | P0 | Spinner during submission |
| C02.7 | Success message | P0 | Confirmation after submit |
| C02.8 | Error handling | P0 | Clear error messages |
| C02.9 | Honeypot spam protection | P0 | Hidden field for bots |
| C02.10 | HubSpot CRM integration | P0 | Creates contact/deal on submit |

#### REQ-C03: Contact Information

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| C03.1 | Email address | P0 | Click-to-email |
| C03.2 | Phone number | P1 | Click-to-call on mobile |
| C03.3 | Response time expectation | P0 | "We respond within 24 hours" |

#### REQ-C04: Alternative CTA

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| C04.1 | "Prefer to book directly?" option | P0 | Link to /book |
| C04.2 | "Start a chat" option | P1 | Opens Intercom widget |

---

### 4.11 Book a Call (`/book`)

**Purpose:** Frictionless scheduling for strategy sessions

#### REQ-BK01: Booking Interface

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| BK01.1 | Cal.com embed | P0 | Full calendar/scheduling interface |
| BK01.2 | 30-minute "Growth Strategy Session" event type | P0 | Pre-configured |
| BK01.3 | Timezone auto-detection | P0 | Shows times in user's timezone |
| BK01.4 | Confirmation screen | P0 | After booking |
| BK01.5 | Calendar invite sent | P0 | Google/Outlook/iCal |

#### REQ-BK02: Booking Context

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| BK02.1 | "What to Expect" section | P1 | Brief agenda overview |
| BK02.2 | "How to Prepare" tips | P2 | Maximize session value |
| BK02.3 | Testimonial about the session | P2 | Social proof |

#### REQ-BK03: Booking Integration

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| BK03.1 | Webhook to HubSpot on booking | P0 | Creates/updates contact |
| BK03.2 | UTM parameter capture | P1 | Source attribution |
| BK03.3 | PostHog event tracking | P0 | "booking_completed" event |

---

### 4.12 Growth Lab (`/growth-lab`)

**Purpose:** Interactive lead magnet, demonstrate AI capabilities

#### REQ-GL01: Growth Lab Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| GL01.1 | "Growth Lab" headline | P0 | Intriguing, value-focused |
| GL01.2 | Description of what user will get | P0 | Clear value proposition |
| GL01.3 | Visual preview of analysis | P1 | Screenshot or animation |

#### REQ-GL02: Analysis Tool

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| GL02.1 | URL input field | P0 | User enters their website URL |
| GL02.2 | Email capture (required for results) | P0 | Gate full results behind email |
| GL02.3 | Loading/analysis animation | P0 | "Analyzing your site..." (3-5 sec) |
| GL02.4 | Basic results preview | P1 | Show 2-3 findings ungated |
| GL02.5 | Full report via email | P0 | ConvertKit automation |

#### REQ-GL03: Results Display

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| GL03.1 | Score or grade visualization | P1 | Visual representation |
| GL03.2 | 3-5 findings/recommendations | P0 | Actionable insights |
| GL03.3 | "Discuss with an expert" CTA | P0 | Links to /book |

---

### 4.13 Newsletter (`/newsletter`)

**Purpose:** Dedicated signup page for email list

#### REQ-N01: Newsletter Hero

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| N01.1 | Compelling headline | P0 | "Join X growth leaders" |
| N01.2 | What subscribers receive | P0 | Value proposition |
| N01.3 | Frequency expectation | P0 | "Bi-weekly insights" |

#### REQ-N02: Signup Form

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| N02.1 | Email field + submit | P0 | Simple, low friction |
| N02.2 | First name field (optional) | P2 | Personalization |
| N02.3 | ConvertKit integration | P0 | Adds to correct sequence |
| N02.4 | Double opt-in confirmation | P0 | GDPR compliance |

#### REQ-N03: Social Proof

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| N03.1 | Subscriber count | P2 | "Join 2,500+ subscribers" |
| N03.2 | Sample past issues | P2 | Links or previews |

---

### 4.14 Legal Pages

#### REQ-L01: Privacy Policy (`/privacy`)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| L01.1 | Complete privacy policy | P0 | Covers data collection, use, rights |
| L01.2 | GDPR compliant | P0 | EU user rights section |
| L01.3 | Cookie policy section | P0 | Lists all cookies used |
| L01.4 | Contact for privacy inquiries | P0 | Email address |
| L01.5 | Last updated date | P0 | Visible at top |

#### REQ-L02: Terms of Service (`/terms`)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| L02.1 | Complete terms of service | P0 | Usage terms, limitations |
| L02.2 | Intellectual property section | P0 | Content ownership |
| L02.3 | Limitation of liability | P0 | Legal protection |
| L02.4 | Governing law | P0 | Jurisdiction statement |
| L02.5 | Last updated date | P0 | Visible at top |

---

## 5. User Stories & Epics

### 5.1 Epic Overview

| Epic ID | Epic Name | Description | Priority |
|---------|-----------|-------------|----------|
| E01 | Core Site Infrastructure | Navigation, footer, global components | P0 |
| E02 | Homepage Experience | All homepage sections and animations | P0 |
| E03 | Services Showcase | Services hub and detail pages | P0 |
| E04 | Portfolio & Proof | Work gallery and case studies | P0 |
| E05 | Lead Capture | Contact, booking, forms | P0 |
| E06 | Content Platform | Blog index and posts | P1 |
| E07 | Pricing & Sales | Pricing page, payment flow | P1 |
| E08 | Lead Magnets | Growth Lab, newsletter | P1 |
| E09 | Integrations | CRM, email, analytics, chat | P0 |
| E10 | Performance & Polish | Optimization, accessibility, testing | P0 |

---

### 5.2 User Stories by Epic

#### Epic E01: Core Site Infrastructure

```
US-001: As a visitor, I want to see a consistent header on all pages so I can navigate easily.
  Acceptance Criteria:
  - Header displays logo, nav links, and primary CTA
  - Header is sticky on scroll
  - Mobile view shows hamburger menu
  - All links are keyboard accessible

US-002: As a visitor, I want to find additional links and information in the footer so I can access secondary content.
  Acceptance Criteria:
  - Footer displays all main navigation links
  - Contact information is clickable
  - Newsletter signup form is functional
  - Legal links are present

US-003: As a visitor, I want to control my cookie preferences so I can protect my privacy.
  Acceptance Criteria:
  - Cookie banner appears on first visit
  - Accept/decline options work correctly
  - Choice is persisted across sessions
  - Analytics only fires after consent
```

#### Epic E02: Homepage Experience

```
US-004: As a visitor, I want to immediately understand what AISurfaced does so I can decide if it's relevant to me.
  Acceptance Criteria:
  - Headline is visible above fold
  - Value proposition is clear within 5 seconds
  - Primary CTA is prominent
  - Page loads in under 3 seconds

US-005: As a visitor, I want to see proof of results so I can trust AISurfaced's claims.
  Acceptance Criteria:
  - Client logos are displayed
  - Key metrics show real numbers
  - At least one testimonial is visible
  - Case study preview shows actual results

US-006: As a visitor, I want to understand AISurfaced's process so I know what to expect as a client.
  Acceptance Criteria:
  - Process steps are clearly numbered
  - Each step has a title and description
  - Visual flow connects the steps
  - Animation reveals steps sequentially

US-007: As a visitor, I want engaging animations so the site feels premium and modern.
  Acceptance Criteria:
  - Hero elements animate on load
  - Scroll-triggered animations activate appropriately
  - Animations respect prefers-reduced-motion
  - No animation blocks content access
```

#### Epic E03: Services Showcase

```
US-008: As a visitor, I want to browse all services so I can find the one relevant to my needs.
  Acceptance Criteria:
  - All 3 main services are displayed
  - Each service has a clear description
  - Cards link to detail pages
  - Visual differentiation between services

US-009: As a visitor, I want to learn details about a specific service so I can evaluate if it fits my needs.
  Acceptance Criteria:
  - Service detail page loads for each service
  - Deliverables are clearly listed
  - Ideal client description is present
  - Related case study is shown
  - CTA drives to booking

US-010: As a visitor, I want to compare AISurfaced to traditional agencies so I can understand the differentiation.
  Acceptance Criteria:
  - Comparison section is visible
  - At least 5 comparison points
  - Clear visual indication of advantages
```

#### Epic E04: Portfolio & Proof

```
US-011: As a visitor, I want to browse case studies so I can see AISurfaced's work quality.
  Acceptance Criteria:
  - Grid displays all case studies
  - Each card shows client, industry, key result
  - Cards are clickable to detail pages
  - Filter by industry/service works

US-012: As a visitor, I want to read a detailed case study so I can understand the full story and results.
  Acceptance Criteria:
  - Challenge section explains the problem
  - Solution section describes the approach
  - Results section shows 3+ metrics
  - Client testimonial is included
  - CTA encourages booking

US-013: As a visitor, I want to see before/after comparisons so I can visualize the impact.
  Acceptance Criteria:
  - Visual comparison is clear
  - Metrics show improvement percentages
  - Timeline context is provided
```

#### Epic E05: Lead Capture

```
US-014: As a visitor, I want to submit a contact form so I can start a conversation.
  Acceptance Criteria:
  - Form validates inputs correctly
  - Submission shows loading state
  - Success message confirms receipt
  - Data syncs to HubSpot CRM
  - Confirmation email is sent

US-015: As a visitor, I want to book a strategy session so I can speak with someone directly.
  Acceptance Criteria:
  - Cal.com calendar loads correctly
  - Available times are shown in my timezone
  - Booking confirmation is received
  - Calendar invite is sent
  - Booking syncs to HubSpot

US-016: As a visitor, I want multiple contact options so I can choose my preferred method.
  Acceptance Criteria:
  - Contact form is available
  - Booking link is prominent
  - Email address is clickable
  - Live chat option is present
```

#### Epic E06: Content Platform

```
US-017: As a visitor, I want to browse blog posts so I can learn from AISurfaced's expertise.
  Acceptance Criteria:
  - Blog index displays all posts
  - Posts show title, excerpt, date
  - Category filter works
  - Pagination handles many posts

US-018: As a visitor, I want to read a full blog post so I can gain valuable insights.
  Acceptance Criteria:
  - Article renders from CMS
  - Table of contents aids navigation
  - Author information is shown
  - Related posts are suggested
  - Newsletter CTA is present

US-019: As a visitor, I want to share blog posts so I can spread valuable content.
  Acceptance Criteria:
  - Share buttons for LinkedIn, X
  - Copy link functionality works
  - Open graph meta tags are correct
```

#### Epic E07: Pricing & Sales

```
US-020: As a visitor, I want to see pricing information so I can self-qualify before contacting.
  Acceptance Criteria:
  - 3 pricing tiers are displayed
  - Each tier shows price range and features
  - CTAs drive to appropriate next step
  - FAQ answers common questions

US-021: As a qualified lead, I want to understand what's included so I can compare options.
  Acceptance Criteria:
  - Features list is comprehensive
  - Differentiation between tiers is clear
  - "Most Popular" helps with decision
```

#### Epic E08: Lead Magnets

```
US-022: As a visitor, I want to analyze my website so I can get immediate value.
  Acceptance Criteria:
  - URL input works correctly
  - Analysis animation provides feedback
  - Basic results are shown immediately
  - Full results require email
  - CTA drives to booking

US-023: As a visitor, I want to subscribe to the newsletter so I can receive ongoing insights.
  Acceptance Criteria:
  - Signup form is simple
  - ConvertKit integration works
  - Confirmation email is sent
  - Double opt-in is enforced
```

#### Epic E09: Integrations

```
US-024: As a business, I want form submissions in our CRM so we can follow up effectively.
  Acceptance Criteria:
  - Contact form creates HubSpot contact
  - Booking creates/updates HubSpot contact
  - Lead source is tracked
  - UTM parameters are captured

US-025: As a business, I want analytics tracking so we can measure performance.
  Acceptance Criteria:
  - PostHog tracks page views
  - Conversion events are tracked
  - Funnels can be analyzed
  - User sessions can be replayed

US-026: As a visitor, I want to chat with support so I can get quick answers.
  Acceptance Criteria:
  - Intercom widget loads correctly
  - Chat appears on all pages
  - Initial message is customized
  - Offline message capture works

US-027: As a subscriber, I want to receive email sequences so I can be nurtured.
  Acceptance Criteria:
  - ConvertKit integration works
  - Welcome sequence is triggered
  - Lead magnet delivery works
  - Unsubscribe works correctly
```

#### Epic E10: Performance & Polish

```
US-028: As a visitor, I want fast page loads so I don't abandon the site.
  Acceptance Criteria:
  - LCP under 2.5s
  - FCP under 1.5s
  - TTI under 3.5s
  - CLS under 0.1

US-029: As a visitor with disabilities, I want an accessible experience so I can use the site.
  Acceptance Criteria:
  - All images have alt text
  - Keyboard navigation works
  - Screen reader compatible
  - Color contrast meets AA
  - Focus indicators visible

US-030: As a mobile user, I want a fully responsive experience so I can browse on any device.
  Acceptance Criteria:
  - Layout adapts to all breakpoints
  - Touch targets are 44px minimum
  - No horizontal scroll
  - Forms are mobile-friendly
```

---

### 5.3 Story Points Estimation

| Epic | Story Count | Estimated Points | Effort |
|------|-------------|------------------|--------|
| E01: Infrastructure | 3 | 8 | Small |
| E02: Homepage | 4 | 21 | Large |
| E03: Services | 3 | 13 | Medium |
| E04: Portfolio | 3 | 13 | Medium |
| E05: Lead Capture | 3 | 13 | Medium |
| E06: Content | 3 | 13 | Medium |
| E07: Pricing | 2 | 8 | Small |
| E08: Lead Magnets | 2 | 13 | Medium |
| E09: Integrations | 4 | 21 | Large |
| E10: Performance | 3 | 13 | Medium |
| **Total** | **30** | **136** | |

---

## 6. Information Architecture

### 6.1 Sitemap Reference

See `AISurfaced_website_architecture.md` for complete sitemap and page hierarchy.

### 6.2 Content Model

#### Page Types

| Page Type | CMS Managed | Fields |
|-----------|-------------|--------|
| Static Page | No | Hardcoded content |
| Service Page | Yes | title, slug, description, deliverables, faq, relatedCases |
| Case Study | Yes | title, slug, client, industry, challenge, solution, results, testimonial, images |
| Blog Post | Yes | title, slug, author, date, category, excerpt, body, featuredImage |
| Team Member | Yes | name, title, bio, photo, linkedin |

#### CMS Schema (Sanity)

```javascript
// Case Study Schema
{
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'client', type: 'string' },
    { name: 'industry', type: 'string', options: { list: ['SaaS', 'E-commerce', 'Professional Services'] } },
    { name: 'heroImage', type: 'image' },
    { name: 'challenge', type: 'text' },
    { name: 'solution', type: 'array', of: [{ type: 'block' }] },
    { name: 'results', type: 'array', of: [{ type: 'resultMetric' }] },
    { name: 'testimonial', type: 'object', fields: [
      { name: 'quote', type: 'text' },
      { name: 'author', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'photo', type: 'image' }
    ]},
    { name: 'relatedServices', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] }
  ]
}

// Blog Post Schema
{
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'author', type: 'reference', to: [{ type: 'teamMember' }] },
    { name: 'publishDate', type: 'datetime' },
    { name: 'category', type: 'string', options: { list: ['Growth', 'AI', 'Strategy', 'Case Study'] } },
    { name: 'excerpt', type: 'text', validation: Rule => Rule.max(160) },
    { name: 'featuredImage', type: 'image' },
    { name: 'body', type: 'array', of: [
      { type: 'block' },
      { type: 'image' },
      { type: 'code' }
    ]}
  ]
}
```

### 6.3 URL Structure

| Pattern | Example | Content Source |
|---------|---------|----------------|
| `/` | Homepage | Static |
| `/services` | Services hub | Static |
| `/services/[slug]` | `/services/saas-growth` | CMS |
| `/work` | Portfolio index | Static + CMS query |
| `/work/[slug]` | `/work/acme-corp` | CMS |
| `/blog` | Blog index | Static + CMS query |
| `/blog/[slug]` | `/blog/ai-marketing-2026` | CMS |
| `/about` | About page | Static |
| `/pricing` | Pricing page | Static |
| `/contact` | Contact page | Static |
| `/book` | Booking page | Static + Cal.com |
| `/growth-lab` | Lead magnet tool | Static + API |
| `/newsletter` | Newsletter signup | Static |
| `/privacy` | Privacy policy | Static |
| `/terms` | Terms of service | Static |

---

## 7. Technical Requirements

### 7.1 Technology Stack

| Layer | Technology | Version | Rationale |
|-------|------------|---------|-----------|
| **Framework** | Next.js | 14+ (App Router) | SSG, SSR, performance, SEO |
| **Language** | TypeScript | 5.x | Type safety, DX |
| **Styling** | Tailwind CSS | 3.x | Utility-first, design system alignment |
| **Animation** | Framer Motion | 10.x | Declarative, performant |
| **3D Graphics** | Spline | Latest | No-code 3D, embeddable |
| **CMS** | Sanity | 3.x | Real-time, flexible schemas |
| **Forms** | React Hook Form + Zod | Latest | Validation, type safety |
| **Hosting** | Vercel | N/A | Edge network, Next.js native |
| **Analytics** | PostHog | Cloud | Privacy-friendly, full-featured |
| **Booking** | Cal.com | Cloud | Open-source, customizable |
| **CRM** | HubSpot | Free/Starter | Industry standard, integrations |
| **Email** | ConvertKit | Creator plan | Creator-focused, automations |
| **Chat** | Intercom | Starter | Modern, full-featured |
| **Payments** | Stripe | Latest | Industry standard |

### 7.2 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Next.js App Router                        ││
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       ││
│  │  │  Pages   │ │Components│ │  Hooks   │ │  Utils   │       ││
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘       ││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                   │
│  ┌───────────────────────────┴───────────────────────────────┐  │
│  │                    API Routes (/api)                       │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │  │
│  │  │ Contact  │ │ Newsletter│ │ GrowthLab│ │ Webhooks │     │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│    Sanity    │      │   HubSpot    │      │  ConvertKit  │
│     CMS      │      │     CRM      │      │    Email     │
└──────────────┘      └──────────────┘      └──────────────┘
        
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   Cal.com    │      │   PostHog    │      │   Intercom   │
│   Booking    │      │  Analytics   │      │     Chat     │
└──────────────┘      └──────────────┘      └──────────────┘
                               │
                               ▼
                      ┌──────────────┐
                      │    Stripe    │
                      │   Payments   │
                      └──────────────┘
```

### 7.3 API Specifications

#### Contact Form Submission

```typescript
// POST /api/contact
interface ContactFormRequest {
  name: string;
  email: string;
  company: string;
  companySize?: '1-10' | '11-50' | '51-200' | '200+';
  services?: string[];
  budget?: string;
  message?: string;
  source?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

interface ContactFormResponse {
  success: boolean;
  message: string;
  hubspotContactId?: string;
}
```

#### Newsletter Signup

```typescript
// POST /api/newsletter
interface NewsletterRequest {
  email: string;
  firstName?: string;
  source: string;
}

interface NewsletterResponse {
  success: boolean;
  message: string;
}
```

#### Growth Lab Analysis

```typescript
// POST /api/growth-lab/analyze
interface GrowthLabRequest {
  url: string;
  email: string;
}

interface GrowthLabResponse {
  success: boolean;
  analysisId: string;
  preview: {
    score: number;
    findings: string[];
  };
}
```

### 7.4 Integration Specifications

#### HubSpot CRM Integration

| Trigger | Action | Data Mapped |
|---------|--------|-------------|
| Contact form submit | Create/update contact | Name, email, company, message, source |
| Booking completed | Create/update contact, create deal | Name, email, booking time, source |
| Growth Lab submit | Create/update contact, add to list | Email, URL, analysis results |

**Webhook Endpoints:**
- `POST /api/webhooks/hubspot` — Receive HubSpot events
- Cal.com webhook → HubSpot contact update

#### ConvertKit Integration

| Trigger | Action | Tags/Sequences |
|---------|--------|----------------|
| Newsletter signup | Subscribe to form | Tag: `newsletter-subscriber` |
| Growth Lab email | Subscribe + send report | Tag: `growth-lab-lead`, Sequence: `growth-lab-followup` |
| Blog subscription | Subscribe to form | Tag: `blog-subscriber` |

#### PostHog Event Tracking

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `page_view` | Page load | `path`, `referrer`, `utm_*` |
| `cta_click` | CTA button click | `cta_text`, `cta_location`, `destination` |
| `form_start` | Form field focus | `form_name` |
| `form_submit` | Form submission | `form_name`, `success` |
| `booking_started` | Cal.com opened | `source_page` |
| `booking_completed` | Cal.com confirmed | `meeting_type`, `source_page` |
| `growth_lab_started` | URL submitted | `url` |
| `growth_lab_completed` | Email submitted | `url`, `score` |
| `chat_opened` | Intercom widget opened | `page` |

#### Intercom Configuration

| Setting | Value |
|---------|-------|
| Widget position | Bottom right |
| Launcher visibility | Always visible |
| Custom launcher | Branded colors |
| Initial message | "Hi! Have questions about growth? I'm here to help." |
| Office hours | 9am-6pm ET |
| Away message | "We're away but will respond within 24 hours." |

#### Stripe Integration (Pricing Page)

| Product | Price ID | Mode |
|---------|----------|------|
| Growth Tier Deposit | `price_growth_deposit` | Payment |
| Scale Tier Deposit | `price_scale_deposit` | Payment |
| Enterprise | Custom quote | N/A |

**Checkout Flow:**
1. User clicks "Get Started" on pricing tier
2. Redirect to Stripe Checkout with deposit amount
3. On success, redirect to `/book` with `?tier=growth` param
4. Booking pre-filled with tier context

### 7.5 Environment Variables

```bash
# Application
NEXT_PUBLIC_SITE_URL=https://AISurfaced.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk-xxxxxxxx

# HubSpot
HUBSPOT_API_KEY=pat-xxxxxxxx
HUBSPOT_PORTAL_ID=xxxxxxxx

# ConvertKit
CONVERTKIT_API_KEY=xxxxxxxx
CONVERTKIT_API_SECRET=xxxxxxxx
CONVERTKIT_FORM_ID_NEWSLETTER=xxxxxxxx
CONVERTKIT_FORM_ID_GROWTH_LAB=xxxxxxxx

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Cal.com
NEXT_PUBLIC_CAL_LINK=AISurfaced/strategy-session

# Intercom
NEXT_PUBLIC_INTERCOM_APP_ID=xxxxxxxx

# Stripe
STRIPE_SECRET_KEY=sk_live_xxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxx
```

### 7.6 Security Requirements

| Requirement | Implementation |
|-------------|----------------|
| HTTPS only | Vercel automatic SSL |
| Environment variables | Vercel encrypted env vars |
| API rate limiting | Vercel Edge rate limiting |
| Form spam protection | Honeypot field + reCAPTCHA v3 |
| CSP headers | Strict Content Security Policy |
| Input sanitization | Zod validation + DOMPurify |
| Dependency scanning | Dependabot enabled |

---

## 8. Design Requirements

### 8.1 Design System Reference

See `AISurfaced_visual_identity.md` for complete color, typography, and visual specifications.

### 8.2 Key Design Principles

| Principle | Application |
|-----------|-------------|
| Dark mode first | Primary experience optimized for dark |
| 60-30-10 color rule | Deep Space (60%), Slate (30%), Teal (10%) |
| Purposeful animation | Motion reinforces "Flow" concept |
| Premium quality | Every detail reflects expertise |
| Mobile-first responsive | Design for mobile, enhance for desktop |

### 8.3 Component Library

| Component | Variants | States |
|-----------|----------|--------|
| Button | Primary, Secondary, Ghost, Link | Default, Hover, Active, Disabled, Loading |
| Card | Default, Elevated, Interactive | Default, Hover, Selected |
| Input | Text, Email, Textarea, Select | Default, Focus, Error, Disabled |
| Badge | Default, Success, Warning, Error | Default only |
| Navigation | Desktop, Mobile | Default, Active, Hover |
| Modal | Default, Large | Open, Closed |
| Toast | Success, Error, Info, Warning | Visible, Hidden |
| Accordion | Default | Open, Closed |
| Tabs | Default | Active, Inactive |
| Carousel | Default | Auto-play, Manual |

### 8.4 Responsive Breakpoints

| Name | Width | Target Devices |
|------|-------|----------------|
| `xs` | 0-639px | Mobile phones |
| `sm` | 640-767px | Large phones, small tablets |
| `md` | 768-1023px | Tablets |
| `lg` | 1024-1279px | Small laptops, tablets landscape |
| `xl` | 1280-1535px | Laptops, desktops |
| `2xl` | 1536px+ | Large desktops |

### 8.5 Animation Specifications

| Animation Type | Duration | Easing | Use Case |
|----------------|----------|--------|----------|
| Micro (hover, focus) | 150-200ms | `ease-out` | Buttons, links, icons |
| Small (cards, reveals) | 200-300ms | `ease-out` | Card hovers, tooltips |
| Medium (sections, modals) | 300-400ms | `ease-in-out` | Section reveals, modals |
| Large (page transitions) | 400-600ms | `ease-in-out` | Page loads, hero animations |
| Spring (bouncy elements) | 500ms | `spring(1, 80, 10)` | CTAs, attention elements |

---

## 9. Performance & Accessibility

### 9.1 Core Web Vitals Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Largest Contentful Paint (LCP) | < 2.5s | Time to largest content element |
| First Input Delay (FID) | < 100ms | Time to interactive response |
| Cumulative Layout Shift (CLS) | < 0.1 | Visual stability score |
| First Contentful Paint (FCP) | < 1.5s | Time to first content |
| Time to Interactive (TTI) | < 3.5s | Time to fully interactive |

### 9.2 Performance Optimization Strategies

| Strategy | Implementation |
|----------|----------------|
| Image optimization | Next.js Image component, WebP/AVIF, lazy loading |
| Code splitting | Dynamic imports for heavy components |
| Font optimization | `next/font` with display swap |
| CSS optimization | Tailwind purge, critical CSS inline |
| Caching | Vercel Edge caching, stale-while-revalidate |
| 3D optimization | Lazy load Spline, fallback image |
| Bundle analysis | `@next/bundle-analyzer` in CI |

### 9.3 Lighthouse Targets

| Category | Target Score |
|----------|--------------|
| Performance | 90+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### 9.4 Accessibility Requirements (WCAG 2.1 AA)

| Requirement | Implementation | Testing |
|-------------|----------------|---------|
| Color contrast | 4.5:1 for text, 3:1 for large text | Lighthouse, axe-core |
| Keyboard navigation | All interactive elements focusable | Manual testing |
| Focus indicators | Visible focus rings (2px teal outline) | Visual inspection |
| Screen reader | Semantic HTML, ARIA labels | VoiceOver, NVDA |
| Alt text | All images have descriptive alt | Lighthouse |
| Form labels | All inputs have associated labels | axe-core |
| Skip links | "Skip to main content" link | Manual testing |
| Reduced motion | `prefers-reduced-motion` support | CSS inspection |
| Heading hierarchy | Proper H1-H6 nesting | Lighthouse |
| Link purpose | Descriptive link text (no "click here") | Manual review |

### 9.5 Testing Requirements

| Test Type | Tool | Frequency |
|-----------|------|-----------|
| Unit tests | Vitest | Every PR |
| Component tests | Testing Library | Every PR |
| E2E tests | Playwright | Every PR |
| Visual regression | Chromatic | Every PR |
| Accessibility audit | axe-core, Lighthouse | Every PR |
| Performance audit | Lighthouse CI | Every PR |
| Cross-browser | BrowserStack | Before release |
| Mobile testing | Real devices | Before release |

---

## 10. Analytics & Event Tracking

### 10.1 Analytics Platform: PostHog

**Why PostHog:**
- Privacy-friendly (can self-host)
- Product analytics + session replay
- Feature flags for A/B testing
- Funnels and retention analysis

### 10.2 Event Taxonomy

#### Page Events

| Event | Properties | Trigger |
|-------|------------|---------|
| `$pageview` | `path`, `referrer`, `title` | Automatic on route change |
| `$pageleave` | `path`, `time_on_page` | Automatic on navigation |

#### Interaction Events

| Event | Properties | Trigger |
|-------|------------|---------|
| `cta_click` | `cta_id`, `cta_text`, `page`, `position` | Any CTA button click |
| `nav_click` | `nav_item`, `is_mobile` | Navigation link click |
| `external_link` | `url`, `page` | External link click |
| `scroll_depth` | `depth_percent`, `page` | 25%, 50%, 75%, 100% scroll |

#### Form Events

| Event | Properties | Trigger |
|-------|------------|---------|
| `form_view` | `form_name`, `page` | Form enters viewport |
| `form_start` | `form_name`, `first_field` | First field interaction |
| `form_field_error` | `form_name`, `field`, `error` | Validation error shown |
| `form_submit` | `form_name`, `success`, `error_message` | Form submission |
| `form_abandon` | `form_name`, `fields_completed` | Navigate away from form |

#### Conversion Events

| Event | Properties | Trigger |
|-------|------------|---------|
| `lead_captured` | `source`, `form_name`, `utm_*` | Any lead form submitted |
| `booking_started` | `source_page`, `utm_*` | Cal.com widget opened |
| `booking_completed` | `meeting_type`, `source_page`, `utm_*` | Meeting booked |
| `newsletter_subscribed` | `source`, `form_location` | Newsletter signup |
| `growth_lab_started` | `url_entered` | Growth Lab URL submitted |
| `growth_lab_completed` | `url`, `score`, `email_captured` | Growth Lab email submitted |

#### Engagement Events

| Event | Properties | Trigger |
|-------|------------|---------|
| `case_study_view` | `case_study_slug`, `industry` | Case study page view |
| `blog_post_view` | `post_slug`, `category`, `author` | Blog post page view |
| `blog_post_read` | `post_slug`, `read_time`, `scroll_depth` | 75%+ scroll on post |
| `video_play` | `video_id`, `page` | Video playback started |
| `video_complete` | `video_id`, `watch_time` | Video watched to end |
| `chat_opened` | `page`, `trigger` | Intercom widget opened |
| `share_click` | `platform`, `content_type`, `content_id` | Social share button |

### 10.3 Conversion Funnels

#### Primary Funnel: Visitor → Booked Call

```
Step 1: Homepage view
  ↓
Step 2: Services or Work view
  ↓
Step 3: Case study view
  ↓
Step 4: Booking started
  ↓
Step 5: Booking completed
```

#### Secondary Funnel: Visitor → Lead Captured

```
Step 1: Any page view
  ↓
Step 2: Contact or Growth Lab view
  ↓
Step 3: Form started
  ↓
Step 4: Form submitted (lead captured)
```

#### Content Funnel: Blog → Conversion

```
Step 1: Blog post view
  ↓
Step 2: Blog post read (75%+ scroll)
  ↓
Step 3: Newsletter subscribed OR CTA click
  ↓
Step 4: Booking completed
```

### 10.4 Dashboards

#### Executive Dashboard

| Metric | Visualization | Timeframe |
|--------|---------------|-----------|
| Total sessions | Line chart | Daily, 30 days |
| Unique visitors | Line chart | Daily, 30 days |
| Leads captured | Counter + trend | Daily, 30 days |
| Bookings completed | Counter + trend | Daily, 30 days |
| Conversion rate | Percentage + trend | Daily, 30 days |

#### Marketing Dashboard

| Metric | Visualization | Timeframe |
|--------|---------------|-----------|
| Traffic by source | Pie chart | Last 30 days |
| Top landing pages | Bar chart | Last 30 days |
| Blog post performance | Table | Last 30 days |
| UTM campaign performance | Table | Last 30 days |
| Newsletter growth | Line chart | Last 90 days |

#### Product Dashboard

| Metric | Visualization | Timeframe |
|--------|---------------|-----------|
| Page performance (load time) | Bar chart | Last 7 days |
| Funnel conversion rates | Funnel chart | Last 30 days |
| Form abandonment | Table | Last 30 days |
| Feature usage (Growth Lab) | Line chart | Last 30 days |
| Session recordings | List | Last 7 days |

---

## 11. Content Requirements

### 11.1 Content Inventory

| Page | Content Type | Word Count | Assets Needed | Owner | Status |
|------|--------------|------------|---------------|-------|--------|
| Homepage | Marketing copy | 500-700 | Hero 3D, logos, photos | Marketing | Not started |
| Services Hub | Marketing copy | 300-400 | Service icons | Marketing | Not started |
| SaaS Growth | Service copy | 600-800 | Screenshots, icons | Marketing | Not started |
| E-commerce 3D | Service copy | 600-800 | Screenshots, icons | Marketing | Not started |
| Professional Services | Service copy | 600-800 | Screenshots, icons | Marketing | Not started |
| About | Company copy | 400-600 | Team photos, office | Marketing | Not started |
| Pricing | Sales copy | 300-400 | Tier graphics | Sales | Not started |
| Contact | UI copy | 100-150 | None | Marketing | Not started |
| Book | UI copy | 100-150 | None | Marketing | Not started |
| Blog (x5) | Long-form articles | 1,500+ each | Featured images | Content | Not started |
| Case Studies (x3) | Narrative + data | 800-1,000 each | Screenshots, charts | Content | Not started |
| Privacy Policy | Legal | 2,000+ | None | Legal | Not started |
| Terms of Service | Legal | 1,500+ | None | Legal | Not started |

### 11.2 Asset Requirements

| Asset Type | Quantity | Specifications | Source |
|------------|----------|----------------|--------|
| Hero 3D model | 1 | Spline embed, <2MB | Design team |
| Client logos | 6 | SVG, grayscale treatment | From clients |
| Team photos | 4-6 | 800x800, professional | Photo shoot |
| Case study screenshots | 9-15 | 1200x800 min, high-res | From projects |
| Blog featured images | 5 | 1200x630, OG compatible | Design team |
| Service icons | 6 | SVG, consistent style | Design team |
| Testimonial photos | 3-5 | 200x200, professional | From clients |

### 11.3 SEO Content Requirements

| Page | Target Keyword | Meta Title | Meta Description |
|------|----------------|------------|------------------|
| Homepage | AI growth agency | AISurfaced — AI-Powered Growth Ecosystems | Transform your digital presence with AISurfaced. We build AI-integrated growth ecosystems that drive measurable ROI. Book your free strategy session. |
| SaaS Growth | SaaS growth agency | SaaS Growth Services — AISurfaced | Accelerate your SaaS growth with AI-driven strategies. Pipeline generation, conversion optimization, and sustainable growth. |
| E-commerce 3D | immersive e-commerce | E-commerce 3D Experiences — AISurfaced | Create immersive shopping experiences that convert. 3D product visualization, AR try-on, and conversion-focused design. |
| Blog | (varies by post) | [Title] — AISurfaced Blog | (First 155 chars of post excerpt) |

### 11.4 Content Workflow

```
1. Brief Created (Marketing)
   ↓
2. Draft Written (Content)
   ↓
3. SEO Review (Marketing)
   ↓
4. Design Assets Created (Design)
   ↓
5. Content Review (Stakeholder)
   ↓
6. Final Approval (Marketing Lead)
   ↓
7. Published to CMS (Content)
   ↓
8. QA on Staging (QA)
   ↓
9. Live
```

---

## 12. Launch Strategy

### 12.1 Phase Breakdown

#### Phase 1: MVP (Weeks 1-3)

**Goal:** Functional site with core conversion path

| Deliverable | Owner | Dependencies |
|-------------|-------|--------------|
| Infrastructure setup (Next.js, Vercel, Sanity) | Dev | None |
| Global components (header, footer, nav) | Dev | Design specs |
| Homepage (all sections) | Dev | Copy, 3D asset |
| Services hub page | Dev | Copy |
| Work page (grid only) | Dev | 2 case studies |
| 2 case study pages | Dev | Case study content |
| Contact page with form | Dev | HubSpot setup |
| Book page with Cal.com | Dev | Cal.com setup |
| Basic analytics (PostHog) | Dev | PostHog account |
| HubSpot integration | Dev | HubSpot setup |

**Phase 1 Exit Criteria:**
- [ ] All MVP pages live and functional
- [ ] Contact form submitting to HubSpot
- [ ] Booking flow working end-to-end
- [ ] Basic analytics tracking page views
- [ ] Lighthouse performance > 80

#### Phase 2: Extended (Weeks 4-5)

**Goal:** Complete service offering and content platform

| Deliverable | Owner | Dependencies |
|-------------|-------|--------------|
| 3 service detail pages | Dev | Service copy |
| 1 additional case study | Dev | Case study content |
| Blog index page | Dev | Sanity blog schema |
| 5 blog posts | Content | Blog content |
| Pricing page | Dev | Pricing structure |
| About page | Dev | About copy, photos |
| Intercom integration | Dev | Intercom account |
| ConvertKit integration | Dev | ConvertKit account |
| Newsletter signup flow | Dev | ConvertKit forms |

**Phase 2 Exit Criteria:**
- [ ] All service pages complete
- [ ] Blog functional with 5 posts
- [ ] Pricing page live
- [ ] Newsletter flow working
- [ ] Chat widget functional

#### Phase 3: Lead Gen (Weeks 6-7)

**Goal:** Advanced lead generation features

| Deliverable | Owner | Dependencies |
|-------------|-------|--------------|
| Growth Lab tool | Dev | API development |
| Growth Lab email automation | Dev | ConvertKit sequences |
| Advanced analytics (funnels, events) | Dev | Event taxonomy |
| Stripe integration (pricing deposits) | Dev | Stripe account |
| A/B testing setup | Dev | PostHog feature flags |
| Session replay configuration | Dev | PostHog settings |

**Phase 3 Exit Criteria:**
- [ ] Growth Lab functional end-to-end
- [ ] All conversion events tracking
- [ ] Funnels configured in PostHog
- [ ] Stripe checkout working
- [ ] A/B testing infrastructure ready

#### Phase 4: Launch (Week 8)

**Goal:** Production-ready release

| Deliverable | Owner | Dependencies |
|-------------|-------|--------------|
| Full QA pass | QA | All features complete |
| Accessibility audit and fixes | Dev/QA | Audit results |
| Performance optimization | Dev | Lighthouse results |
| Content final review | Marketing | All content complete |
| Legal page review | Legal | Policy drafts |
| DNS cutover | Dev/Ops | Domain access |
| Go-live | All | All above complete |

**Launch Criteria:**
- [ ] All pages pass QA
- [ ] Lighthouse scores meet targets
- [ ] Zero critical accessibility issues
- [ ] All integrations tested end-to-end
- [ ] Monitoring and alerting configured
- [ ] Rollback plan documented

### 12.2 Launch Checklist

#### Pre-Launch (T-3 days)

- [ ] All content finalized and in CMS
- [ ] All integrations tested in production environment
- [ ] SSL certificate verified
- [ ] robots.txt and sitemap.xml generated
- [ ] Open Graph and social meta verified
- [ ] 404 page created
- [ ] Redirects configured (if migrating)
- [ ] Analytics verified tracking correctly
- [ ] Forms tested end-to-end
- [ ] Booking flow tested end-to-end
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete

#### Launch Day (T-0)

- [ ] DNS propagation confirmed
- [ ] SSL working correctly
- [ ] All pages loading
- [ ] Forms submitting
- [ ] Tracking firing
- [ ] Chat widget loading
- [ ] No console errors
- [ ] Performance acceptable

#### Post-Launch (T+1 day)

- [ ] Monitor error rates
- [ ] Check form submissions received
- [ ] Verify analytics data flowing
- [ ] Check search console for issues
- [ ] Monitor server performance
- [ ] Gather initial user feedback

### 12.3 Rollback Plan

**Trigger Conditions:**
- Critical functionality broken (forms, booking)
- Severe performance degradation (>5s load times)
- Security vulnerability discovered

**Rollback Steps:**
1. Revert Vercel deployment to previous version
2. Notify stakeholders via Slack
3. Document incident in post-mortem
4. Fix issues in staging environment
5. Re-deploy after verification

---

## 13. Risks & Dependencies

### 13.1 Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content not ready on time | High | High | Start content early, use placeholder content for dev |
| 3D asset performance issues | Medium | Medium | Fallback image, lazy loading, optimization |
| Integration complexity (HubSpot, ConvertKit) | Medium | Medium | Prototype integrations early, have backup plans |
| Design changes mid-development | Medium | High | Lock designs before dev starts, change control process |
| Cal.com reliability issues | Low | High | Fallback to contact form, monitor uptime |
| SEO rankings take time | High | Medium | Set realistic expectations, focus on paid initially |
| Team availability | Medium | Medium | Document thoroughly, cross-train |

### 13.2 Dependencies

#### External Dependencies

| Dependency | Type | Risk Level | Contingency |
|------------|------|------------|-------------|
| Vercel | Hosting | Low | Alternative: Netlify |
| Sanity | CMS | Low | Export data, migrate to alternative |
| Cal.com | Booking | Medium | Calendly as backup |
| HubSpot | CRM | Low | Industry standard, unlikely to fail |
| ConvertKit | Email | Low | Mailchimp as backup |
| PostHog | Analytics | Low | Self-host option available |
| Intercom | Chat | Low | Crisp as backup |
| Stripe | Payments | Low | Industry standard |
| Spline | 3D | Medium | Static image fallback |

#### Internal Dependencies

| Dependency | Owner | Required By |
|------------|-------|-------------|
| Brand guidelines | Design | Week 1 |
| Final copy | Marketing | Week 2 |
| Case study content | Content | Week 2 |
| Team photos | Marketing | Week 4 |
| Legal policies | Legal | Week 6 |
| Pricing structure | Leadership | Week 4 |

### 13.3 Open Questions

| Question | Owner | Due Date | Status |
|----------|-------|----------|--------|
| Final pricing tiers and amounts? | Leadership | Week 2 | Open |
| Which case studies to feature? | Marketing | Week 1 | Open |
| Growth Lab analysis methodology? | Product | Week 3 | Open |
| Exact Cal.com meeting types needed? | Sales | Week 1 | Open |
| HubSpot pipeline stages? | Sales | Week 1 | Open |

---

## 14. Appendices

### 14.1 Glossary

| Term | Definition |
|------|------------|
| **CMS** | Content Management System (Sanity) |
| **CTA** | Call to Action |
| **CRM** | Customer Relationship Management (HubSpot) |
| **LCP** | Largest Contentful Paint (Core Web Vital) |
| **FID** | First Input Delay (Core Web Vital) |
| **CLS** | Cumulative Layout Shift (Core Web Vital) |
| **SSG** | Static Site Generation |
| **SSR** | Server-Side Rendering |
| **WCAG** | Web Content Accessibility Guidelines |
| **OKR** | Objectives and Key Results |
| **UTM** | Urchin Tracking Module (URL parameters) |

### 14.2 Reference Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Brand Identity | `AISurfaced_brand_identity.md` | Brand essence, voice, values |
| Visual Identity | `AISurfaced_visual_identity.md` | Colors, typography, design specs |
| Website Architecture | `AISurfaced_website_architecture.md` | Sitemap, wireframes, animations |
| Content Strategy | `AISurfaced_content_strategy.md` | Content pillars, editorial calendar |
| Marketing Plan | `AISurfaced_marketing_plan.md` | Go-to-market strategy |
| Acquisition Funnel | `AISurfaced_acquisition_funnel.md` | Lead gen tactics |

### 14.3 Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | March 2026 | Product Team | Initial PRD |

---

*AISurfaced Website PRD v1.0 — March 2026*
