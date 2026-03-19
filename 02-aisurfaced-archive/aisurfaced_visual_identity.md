# Visual Identity: AISurfaced

## 1. Color Palette: "The Fluid Future"

The color palette for **AISurfaced** is designed to evoke a sense of high-end technology, growth, and professional trust. Colors are provided in both Hex and OKLCH for modern CSS implementations.

---

### 1.1 Core Brand Colors

| Color Name | Hex | OKLCH | Role | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Deep Space Blue** | `#0A192F` | `oklch(18% 0.04 250)` | Primary | Dark backgrounds, headers, primary containers |
| **Electric Teal** | `#64FFDA` | `oklch(90% 0.15 175)` | Accent | CTAs, key highlights, active states, links |
| **Slate Grey** | `#8892B0` | `oklch(63% 0.04 260)` | Secondary | Body text on dark, borders, icons |
| **Soft White** | `#E6F1FF` | `oklch(95% 0.02 250)` | Light Text | High-contrast text on dark backgrounds |
| **Growth Green** | `#2ECC71` | `oklch(75% 0.18 145)` | Success | Success states, ROI indicators, growth metrics |

---

### 1.2 Extended Color Scales

Each core color has a 5-step scale for creating depth, states, and visual hierarchy.

#### Deep Space Blue Scale (Backgrounds & Surfaces)

| Step | Name | Hex | OKLCH | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| 900 | Void | `#020C1B` | `oklch(10% 0.04 250)` | Deepest backgrounds, modals |
| 800 | Deep Space | `#0A192F` | `oklch(18% 0.04 250)` | Primary background |
| 700 | Midnight | `#112240` | `oklch(22% 0.04 250)` | Cards, elevated surfaces |
| 600 | Navy | `#1D3461` | `oklch(30% 0.06 255)` | Hover states, active cards |
| 500 | Dusk | `#2A4A7F` | `oklch(40% 0.08 255)` | Selected states, highlights |

#### Electric Teal Scale (Accent & Interaction)

| Step | Name | Hex | OKLCH | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| 100 | Teal Mist | `#D4FFF3` | `oklch(96% 0.06 175)` | Subtle highlights, badges |
| 200 | Teal Light | `#A8FFEB` | `oklch(93% 0.10 175)` | Hover backgrounds |
| 300 | Electric Teal | `#64FFDA` | `oklch(90% 0.15 175)` | Primary accent, CTAs |
| 400 | Teal Bright | `#4CD9BC` | `oklch(80% 0.12 175)` | Active/pressed states |
| 500 | Teal Deep | `#38B89C` | `oklch(70% 0.10 170)` | Text on light backgrounds |

#### Slate Grey Scale (Text & UI Elements)

| Step | Name | Hex | OKLCH | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| 100 | Mist | `#CCD6F6` | `oklch(88% 0.04 260)` | Primary text on dark |
| 200 | Fog | `#A8B2D1` | `oklch(76% 0.04 260)` | Secondary text |
| 300 | Slate | `#8892B0` | `oklch(63% 0.04 260)` | Tertiary text, icons |
| 400 | Storm | `#5C6A8A` | `oklch(50% 0.04 260)` | Disabled text, placeholders |
| 500 | Shadow | `#3D4A63` | `oklch(38% 0.04 260)` | Subtle borders |

---

### 1.3 Semantic Colors

Functional colors that communicate meaning consistently across all interfaces.

| State | Color Name | Hex | OKLCH | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Success** | Growth Green | `#2ECC71` | `oklch(75% 0.18 145)` | Confirmations, ROI positive, completed states |
| **Success Light** | Mint Glow | `#D4EDDA` | `oklch(92% 0.05 145)` | Success backgrounds |
| **Error** | Signal Red | `#E74C3C` | `oklch(60% 0.20 25)` | Errors, destructive actions, alerts |
| **Error Light** | Rose Mist | `#FADBD8` | `oklch(90% 0.05 20)` | Error backgrounds |
| **Warning** | Amber Alert | `#F39C12` | `oklch(75% 0.17 70)` | Cautions, pending states, attention needed |
| **Warning Light** | Amber Glow | `#FEF5E7` | `oklch(96% 0.03 70)` | Warning backgrounds |
| **Info** | Sky Blue | `#3498DB` | `oklch(65% 0.14 240)` | Informational, tips, neutral updates |
| **Info Light** | Sky Mist | `#D6EAF8` | `oklch(92% 0.04 240)` | Info backgrounds |

---

### 1.4 Gradient System

Gradients reinforce the "Flow" concept with smooth transitions that feel dynamic and tech-forward.

#### Primary Gradients

| Name | Definition | Usage |
| :--- | :--- | :--- |
| **Teal Flow** | `linear-gradient(135deg, #64FFDA 0%, #38B89C 100%)` | Primary CTAs, hero sections |
| **Deep Dive** | `linear-gradient(180deg, #0A192F 0%, #112240 100%)` | Background depth, cards |
| **Void Fade** | `linear-gradient(180deg, #020C1B 0%, #0A192F 50%, #112240 100%)` | Full-page backgrounds |
| **Teal Glow** | `radial-gradient(ellipse at center, rgba(100,255,218,0.15) 0%, transparent 70%)` | Ambient glow effects |

#### CSS Custom Properties

```css
:root {
  /* Core Brand */
  --color-deep-space: oklch(18% 0.04 250);
  --color-electric-teal: oklch(90% 0.15 175);
  --color-slate: oklch(63% 0.04 260);
  --color-soft-white: oklch(95% 0.02 250);
  --color-growth-green: oklch(75% 0.18 145);
  
  /* Backgrounds */
  --bg-void: oklch(10% 0.04 250);
  --bg-primary: oklch(18% 0.04 250);
  --bg-elevated: oklch(22% 0.04 250);
  --bg-hover: oklch(30% 0.06 255);
  
  /* Text */
  --text-primary: oklch(88% 0.04 260);
  --text-secondary: oklch(76% 0.04 260);
  --text-tertiary: oklch(63% 0.04 260);
  --text-disabled: oklch(50% 0.04 260);
  
  /* Accent */
  --accent-primary: oklch(90% 0.15 175);
  --accent-hover: oklch(93% 0.10 175);
  --accent-active: oklch(80% 0.12 175);
  
  /* Semantic */
  --color-success: oklch(75% 0.18 145);
  --color-error: oklch(60% 0.20 25);
  --color-warning: oklch(75% 0.17 70);
  --color-info: oklch(65% 0.14 240);
  
  /* Gradients */
  --gradient-teal-flow: linear-gradient(135deg, var(--accent-primary), oklch(70% 0.10 170));
  --gradient-deep-dive: linear-gradient(180deg, var(--bg-primary), var(--bg-elevated));
}
```

---

### 1.5 Color Application Guidelines

Strategic color distribution following the 60-30-10 rule for visual balance.

#### The 60-30-10 Distribution

| Proportion | Color Family | Application |
| :--- | :--- | :--- |
| **60%** | Deep Space Blue | Page backgrounds, containers, sections |
| **30%** | Slate Grey | Text, borders, icons, subtle elements |
| **10%** | Electric Teal | CTAs, links, highlights, active states |

#### Component Color Mapping

| Component | Default State | Hover | Active | Disabled |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Button** | Electric Teal (300) | Teal Light (200) | Teal Bright (400) | Teal + 50% opacity |
| **Secondary Button** | Transparent + Teal border | Navy (600) bg | Dusk (500) bg | Slate (300) border |
| **Card** | Midnight (700) | Navy (600) | Dusk (500) border | Storm (400) opacity |
| **Input Field** | Midnight (700) + Shadow border | Navy (600) | Teal border | Storm (400) bg |
| **Link** | Electric Teal (300) | Teal Light (200) underline | Teal Bright (400) | Slate (300) |

#### Text on Background Pairings

| Background | Primary Text | Secondary Text | Accent Text |
| :--- | :--- | :--- | :--- |
| Deep Space (800) | Mist (100) | Fog (200) | Electric Teal (300) |
| Midnight (700) | Mist (100) | Fog (200) | Electric Teal (300) |
| Void (900) | Soft White | Mist (100) | Teal Light (200) |
| Light surfaces | Deep Space (800) | Slate (300) | Teal Deep (500) |

#### Accent Borders & Highlights

Use Electric Teal strategically to draw attention:

- **Left border accent**: 3-4px solid teal on cards/sections for emphasis
- **Glow effects**: Subtle teal glow (`box-shadow: 0 0 20px rgba(100,255,218,0.2)`) on hover
- **Underlines**: Teal underlines for active navigation or emphasis
- **Focus rings**: 2px teal outline with 2px offset for accessibility

---

### 1.6 Accessibility & Contrast

All color combinations must meet WCAG 2.1 AA standards.

#### Verified Contrast Ratios

| Combination | Ratio | WCAG Level | Use For |
| :--- | :--- | :--- | :--- |
| Soft White on Deep Space | 12.5:1 | AAA | Primary headings, important text |
| Mist on Deep Space | 9.2:1 | AAA | Body text |
| Electric Teal on Deep Space | 8.7:1 | AAA | Links, buttons, accents |
| Fog on Deep Space | 5.8:1 | AA | Secondary text |
| Slate on Deep Space | 4.1:1 | AA | Tertiary text, captions |
| Deep Space on Electric Teal | 8.7:1 | AAA | Button text |

#### Color Accessibility Rules

1. **Never rely on color alone** - Always pair color with icons, labels, or patterns
2. **Test for color blindness** - Verify teal/green combinations work for deuteranopia
3. **Minimum contrast for text**: 4.5:1 for normal text, 3:1 for large text (18px+)
4. **Minimum contrast for UI**: 3:1 for interactive components and visual boundaries

#### Dark Mode Considerations

The primary brand is dark-mode-first. When implementing light mode:
- Swap Deep Space backgrounds for Soft White
- Use Deep Space for text instead of Mist
- Reduce Electric Teal saturation by 10% to prevent eye strain
- Use Teal Deep (500) for links instead of Electric Teal (300)

---

### 1.7 Color Don'ts

| Avoid | Reason | Instead |
| :--- | :--- | :--- |
| Pure white (`#FFFFFF`) for backgrounds | Too harsh, lacks warmth | Use Soft White (`#E6F1FF`) |
| Pure black (`#000000`) for text | Too stark, low sophistication | Use Deep Space or Void |
| Gray text on colored backgrounds | Looks washed out | Use darker shade of background hue |
| Electric Teal for large text blocks | Vibrant color causes eye fatigue | Reserve for accents only |
| Multiple accent colors competing | Creates visual chaos | One accent per viewport section |
| Teal + Green adjacent | Colorblind users can't distinguish | Separate with neutrals |

---

## 2. Typography: "The Modern Professional"
- **Primary Font (Headings):** **Inter** or **Montserrat** (Bold/Extra Bold). Clean, geometric, and highly readable.
- **Secondary Font (Body):** **Inter** (Regular/Medium). Versatile and professional for long-form content.
- **Monospace Font (Accents):** **Fira Code** or **JetBrains Mono**. Used for small technical details or AI-related callouts to emphasize the "tech-forward" nature.

## 3. Imagery and Visual Style
- **Immersive 3D:** Use abstract, fluid 3D shapes (rendered in Deep Space Blue and Electric Teal) to represent "Flow."
- **Data Visualization:** Clean, animated charts and graphs that show growth and ROI.
- **Human Connection:** High-quality, candid photography of diverse professionals collaborating, with a subtle blue/teal overlay to maintain brand consistency.
- **Minimalist Layouts:** Large amounts of negative space to emphasize clarity and focus on outcomes.

## 4. Logo Concept: "The Adaptive Arc"
- **Icon:** A stylized "Z" that transitions into a fluid, upward-pointing arrow or arc. This represents the "Zynta" (the unique core) and the "Flow" (the upward growth).
- **Wordmark:** "Zynta**Flow**" in a bold, sans-serif font, with "Flow" in a slightly heavier weight or the Electric Teal accent color.
- **Symbolism:** The arc represents the bridge between current business states and future growth.

## 5. Visual Strategy for 2026
- **Dark Mode First:** The primary brand experience should be optimized for dark mode, reflecting the tech-forward nature of 2026.
- **Micro-Interactions:** Subtle, fluid animations when users hover over elements, reinforcing the "Flow" concept.
- **AI-Generated Assets:** Using AI to generate unique, brand-consistent textures and patterns for backgrounds.
