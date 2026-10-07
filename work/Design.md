# Design Specification: Semarang Introduction Website

## 1. Color System

### Primary Colors
- **Waitu White**: `#F8F9FA`
  - Usage: Main background, card backgrounds
  - Applied to: body, header, main containers, footer

- **Blue**: `#2C5AA0`
  - Usage: Primary accents, navigation links, headings
  - Applied to: nav links, h1-h3, hero section accents

- **Orange**: `#FF6B35`
  - Usage: CTA buttons, highlight text, interactive elements
  - Applied to: call-to-action buttons, hover states, accent text

- **Navy Blue**: `#1A365D`
  - Usage: Navigation background, deep text, borders
  - Applied to: navbar background, section dividers, footer text

### Color Usage Guide
- Waitu White: 70% of design (backgrounds)
- Navy Blue: 15% (navigation, headers)
- Blue: 10% (links, secondary accents)
- Orange: 5% (CTAs, highlights)

## 2. Typography

### Font Families
- **Quicksand**: Used for all headings (h1-h6)
  - Weight: 400 (Regular), 500 (Medium), 700 (Bold)
  - Google Font: `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap`

- **Open Sans**: Used for body text and paragraphs
  - Weight: 400 (Regular), 600 (Semi-Bold)
  - Google Font: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap`

### Font Sizes (Mobile-First)
- h1: 2rem (32px) on mobile, 3rem (48px) on desktop
- h2: 1.75rem (28px) on mobile, 2.25rem (36px) on desktop
- h3: 1.5rem (24px) on mobile, 1.75rem (28px) on desktop
- body: 1rem (16px) on mobile, 1rem (16px) consistent
- small text: 0.875rem (14px)

### Line Heights
- Body: 1.6
- Headings: 1.25
- Navigation: 1.5

## 3. Layout System

### 3.1 Container
- Max width: 1200px
- Margin: 0 auto (centered)
- Padding: 1.5rem (desktop), 1rem (mobile)
- Background: Waitu White

### 3.2 Header Layout
- Display: flex
- Justify-content: space-between
- Align-items: center
- Height: 80px
- Background: Navy Blue with transparency
- Logo: Quicksand, white color, 1.5rem

### 3.3 Navigation Layout
- Desktop: Horizontal flex row
- Mobile: Block display, full width
- Links: Open Sans, navy blue color, hover orange
- Active link: Orange accent

### 3.4 Main Section Layout
- **Desktop (1200px+)**:
  - Two-column layout
  - Main content: 60% width
  - Aside: 40% width
  - Gap: 2rem between columns
  - Flex-direction: row

- **Tablet (768-1199px)**:
  - Single column
  - Main content: 100% width
  - Aside: 100% width (below main)
  - Order: main first, then aside

- **Mobile (<768px)**:
  - Single column, stacked layout
  - Main content: 100% width
  - Aside: 100% width
  - No gap needed (full width)

### 3.5 Footer Layout
- Display: flex
- Flex-wrap: wrap
- Justify-content: space-between
- Align-items: center
- Height: auto
- Border-top: 1px solid navy blue

## 4. Component Specifications

### 4.1 Hero Section (Frontpage)
- Background: Gradient navy blue to waitu white
- Main heading: Quicksand, 3rem, navy blue or orange accent
- Subheading: Open Sans, 1.5rem, navy blue
- CTA button: Orange background, white text, rounded corners
- Image: High-quality Semarang photo, max-width: 100%

### 4.2 Section Headings
- Color: Navy blue (#1A365D)
- Font: Quicksand, weight 700
- Size: h2 (section titles)
- Margin: 2rem 0 1rem 0
- Padding-bottom: 0.5rem
- Border-bottom: 2px solid orange accent

### 4.3 Tourism Cards (Ordered List Items)
- Background: Waitu white
- Border: 1px solid #dee2e6 (light gray)
- Border-radius: 8px
- Hover effect: transform translateY(-2px), box-shadow
- Transition: all 0.3s ease

### 4.4 Aside Image Gallery
- Frame: Navy blue border (2px solid)
- Border-radius: 8px
- Overflow: hidden for images
- Images: max-width: 100%, height: auto
- Caption: Orange text, Quicksand, centered

### 4.5 Navigation Links
- Color: Navy blue on white background
- Hover: Orange text color
- Active: Orange underline or background
- Text decoration: none (no underlines by default)
- Padding: 0.5rem 1rem
- Border-radius: 4px

### 4.6 CTA Buttons
- Background: Orange (#FF6B35)
- Text: White, Quicksand, medium weight
- Hover: Blue (#2C5AA0) background or darker orange
- Padding: 0.875rem 1.5rem
- Border: none
- Border-radius: 25px (pill shape)
- Transition: background 0.3s ease

## 5. Responsive Breakpoints

### 5.1 Breakpoint: 1200px
- Full desktop layout
- 3-column grid possible for grid items
- Large images, full features

### 5.2 Breakpoint: 768px (Tablet)
- Mobile-first: single column becomes optimal
- Navigation: hamburger menu
- Columns stack: main above aside
- Font sizes reduced by ~15%
- Touch targets: minimum 44px

### 5.3 Breakpoint: 480px (Small Mobile)
- Navigation: simplified
- Sidebars: full width
- Image sizes: reduced
- Padding: reduced to 0.75rem

### 5.4 Breakpoint: 320px (Very Small Mobile)
- Single column everything
- Vertical stacking order
- Minimal padding
- Text: readable without zoom

## 6. Interactive States

### 6.1 Hover States
- Links: color change to orange, background highlight
- Buttons: background darken to #e65a2b
- Cards: lift effect, shadow expansion
- Images: slight grayscale on hover (optional)

### 6.2 Focus States (Accessibility)
- Links/buttons: outline 2px solid orange
- Outline on focus, not just hover
- Keyboard navigation support

### 6.3 Active States
- Buttons: slightly depressed appearance
- Links: color darken
- Toggle states for mobile menu

## 7. Asset Specifications

### 7.1 Images
- Hero image: 1920x1080px minimum
- Gallery thumbnails: 400x300px
- Logo: SVG or PNG, transparent background
- All images: WebP format preferred, fallback JPEG/PNG

### 7.2 Iconography
- Social media icons: Font Awesome or SVG
- Navigation hamburger: 3-line icon
- CTA arrow: simple down arrow or chevron

### 7.3 Typography Files
- Quicksand: Regular (400), Medium (500), Bold (700)
- Open Sans: Regular (400), Semi-Bold (600)

## 8. Accessibility Requirements

### 8.1 Contrast Ratios
- Navy blue text on waitu white: 7:1 minimum (AAA)
- Orange text on waitu white: 4.5:1 minimum (AA)
- Blue links on waitu white: 4.5:1 minimum (AA)

### 8.2 Keyboard Navigation
- Tab order logical
- Focus visible on all interactive elements
- Skip link to main content

### 8.3 Alt Text
- All images have descriptive alt text
- Decorative images have empty alt
- Meaningful file names

### 8.4 Text Resizing
- Content reflows up to 200% zoom
- No horizontal scrolling up to 200% zoom
- Text remains readable

## 9. Performance Requirements

### 9.1 Load Time
- First contentful paint: < 1.5 seconds
- Time to interactive: < 3 seconds
- Total page weight: < 2MB (including images)

### 9.2 Optimization
- Images optimized and lazy-loaded
- Critical CSS inlined, non-critical deferred
- Font display: swap for faster rendering
- Gzip compression enabled

### 9.3 Caching
- Static assets cached (1 year)
- HTML cached (no cache or 1 hour)
- Fonts cached (1 month)