# PRD: Semarang Introduction Website

## 1. Project Overview
Simple website introducing Semarang city covering history, tourism, geography, and recommendations.

## 2. Target Audience
- Travelers visiting Central Java
- Students/researchers
- General public interested in Indonesian culture

## 3. Content Structure

### 3.1 Header
- Logo (left)
- Navigation menu (right)
- Search functionality (optional)
- Language selector (optional)

### 3.2 Navigation
- Ordered list (`<ol>`) for tourism categories
- Anchor links for smooth scrolling
- Mobile-responsive hamburger menu

### 3.3 Main Section
- **Sejarah Semarang**: Historical timeline and background
- **Tempat Wisata**: Ordered list of attractions with descriptions
- **Geografis**: Location information, map integration
- **Rekomendasi**: Recommended places with ratings

### 3.4 Aside Element
- Photo gallery of Semarang
- Image carousel/grid
- Supporting information widgets

### 3.5 Footer
- Copyright information
- Quick links
- Social media icons
- Contact information

## 4. Layout & Responsiveness

### 4.1 Flexbox Layout
- Header: `display: flex; justify-content: space-between; align-items: center;`
- Main container: Two-column layout on desktop (content + aside)
- Footer: `display: flex; flex-wrap: wrap; justify-content: space-around;`

### 4.2 Float Usage
- Image floating within text content
- Sidebar sidebar using float for older browser support
- Clearfix for container containment

### 4.3 Breakpoints
- **Desktop**: 1200px+ - Full 3-column layout
- **Tablet**: 768-1199px - 2-column layout
- **Mobile**: <768px - Single column, stacked layout
- **Mobile Small**: <480px - Touch-optimized

## 5. Design Specifications

### 5.1 Color Palette
- **Waitu White**: `#F8F9FA` - Main background color
- **Blue**: `#2C5AA0` - Primary accent, links, headers
- **Orange**: `#FF6B35` - CTA buttons, highlights
- **Navy Blue**: `#1A365D` - Navigation, deep elements

### 5.2 Typography
- **Headings**: Quicksand, weight 700/ Bold
- **Body Text**: Open Sans, weight 400/ Regular
- **Sizes**: 
  - h1: 3rem (desktop), 2rem (mobile)
  - body: 1rem (desktop), 0.875rem (mobile)
  - Small text: 0.875rem

### 5.3 Visual Hierarchy
- White background with colored accents
- Navy blue navigation bar
- Orange CTA elements
- Blue links and highlights

### 5.4 Imagery
- High-quality Semarang photos in aside element
- Optimized for web (WebP format)
- Alt text for accessibility

## 6. Technical Requirements

### 6.1 HTML Structure
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- Proper heading hierarchy (h1-h6)
- Accessible anchor links
- Meta charset: UTF-8
- Viewport meta tag for responsive design

### 6.2 CSS Requirements
- External stylesheet (styles.css)
- Flexbox for main layout
- Float for image positioning within content
- Media queries for responsive breakpoints
- CSS reset or normalize

### 6.3 Responsiveness
- Mobile-first approach
- Tested on various screen sizes
- Touch-friendly navigation (minimum 44px tap targets)
- Image optimization for different resolutions

### 6.4 Browser Compatibility
- Chrome, Firefox, Safari, Edge latest versions
- Graceful degradation for older browsers

## 7. Success Metrics
- Page load time < 3 seconds
- Mobile responsiveness verified
- Accessibility score > 90 (Lighthouse)
- Content completeness (all sections present)