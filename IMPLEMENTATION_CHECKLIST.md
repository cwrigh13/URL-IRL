# Portfolio Website Implementation Checklist

## Overview
This comprehensive implementation plan addresses critical issues identified across seven key areas: Code Quality, Content & Copywriting, UI/UX & Design, Performance Optimization, SEO, Accessibility, and Security.

**Priority Levels:**
- **[P1 - Critical]**: Urgent issues like security flaws or site-breaking bugs
- **[P2 - High]**: Issues significantly impacting user experience, SEO, or performance
- **[P3 - Medium]**: Important improvements for code quality, accessibility, or design consistency
- **[P4 - Low]**: Minor tweaks, cosmetic changes, or best-practice updates with low impact

---

## Code Quality & Project Structure

### [P1 - Critical] Fix Missing Critical Assets
- [ ] **Create missing Open Graph and hero images**
  - **Files to Modify**: `public/og-image.jpg`, `public/homepage-hero.jpg`, `public/contact-hero.jpg`, `public/about-hero.jpg`, `public/services-hero.jpg`, `public/insights-hero.jpg`, `public/case-studies-hero.jpg`, `public/logo.png`
  - **Detailed Instructions**: Create 1200x630px Open Graph images and hero banners for each page. Use consistent branding with professional library/technology imagery. Ensure all images are optimized for web (WebP format preferred, fallback to JPEG).
  - **Verification**: Check that all image references in metadata resolve to actual files and display correctly in social media previews.

### [P2 - High] Implement Proper Image Optimization
- [ ] **Add Next.js Image component with optimization**
  - **Files to Modify**: All components using `<img>` tags, `next.config.ts`
  - **Detailed Instructions**: Replace all `<img>` tags with Next.js `<Image>` component. Add `priority` prop to above-the-fold images. Implement `sizes` attribute for responsive images. Configure `next.config.ts` to use `unoptimized: false` for production.
  - **Verification**: Run Lighthouse audit and verify image optimization score is 100.

### [P2 - High] Fix CSS Font Loading Issues
- [ ] **Resolve font loading conflicts in globals.css**
  - **Files to Modify**: `src/app/globals.css`
  - **Detailed Instructions**: Remove conflicting font-family declaration on line 40. The body element should use the CSS variables defined in the layout (--font-source-sans). Update to: `font-family: var(--font-source-sans), system-ui, sans-serif;`
  - **Verification**: Check that fonts load consistently and match the design system.

### [P3 - Medium] Improve TypeScript Configuration
- [ ] **Enhance TypeScript strictness and add missing types**
  - **Files to Modify**: `tsconfig.json`, add type definitions
  - **Detailed Instructions**: Enable `strictNullChecks`, `noImplicitReturns`, and `noUnusedLocals` in tsconfig.json. Add proper type definitions for all case study data and blog post content.
  - **Verification**: Run `npm run build` and ensure no TypeScript errors.

### [P3 - Medium] Add Missing Error Boundaries
- [ ] **Implement error boundaries for better error handling**
  - **Files to Modify**: Create `src/components/ErrorBoundary.tsx`, update `src/app/layout.tsx`
  - **Detailed Instructions**: Create a React error boundary component and wrap the main content in layout.tsx. Include proper error logging and user-friendly error messages.
  - **Verification**: Test error boundary by intentionally causing a component error.

---

## Content & Copywriting

### [P2 - High] Fix Inconsistent Branding
- [ ] **Standardize brand name across all content**
  - **Files to Modify**: All page metadata, component text, structured data
  - **Detailed Instructions**: Replace all instances of "The Librarian Who Codes" with "URL IRL" to match the actual brand. Update email addresses from `librarianwhocodes.com.au` to `urlirl.com.au` or appropriate domain. Ensure consistency in all metadata, structured data, and contact information.
  - **Verification**: Search entire codebase for old brand references and verify all are updated.

### [P2 - High] Add Missing Contact Information
- [ ] **Complete contact details and business information**
  - **Files to Modify**: `src/components/layout/Footer.tsx`, `src/components/ui/StructuredData.tsx`
  - **Detailed Instructions**: Replace placeholder ABN with actual business number. Add real phone number, complete address, and update all contact information. Ensure structured data matches actual business details.
  - **Verification**: Verify all contact information is accurate and consistent across the site.

### [P3 - Medium] Enhance Call-to-Action Copy
- [ ] **Improve CTA clarity and urgency**
  - **Files to Modify**: `src/components/sections/hero/Hero.tsx`, `src/components/sections/why-me/WhyMe.tsx`
  - **Detailed Instructions**: Make CTAs more specific and action-oriented. Change "Book a Free Consultation" to "Book Your Free 30-Minute Consultation" and add value propositions like "No obligation, just expert advice."
  - **Verification**: A/B test different CTA variations and measure conversion rates.

### [P3 - Medium] Add Australian English Consistency
- [ ] **Ensure consistent Australian English spelling and terminology**
  - **Files to Modify**: All content files
  - **Detailed Instructions**: Replace American spellings with Australian English (e.g., "optimize" → "optimise", "color" → "colour"). Use Australian terminology for library services and government references.
  - **Verification**: Use Australian English spell-check and have native Australian English speaker review.

---

## UI/UX & Design


### [P2 - High] Improve Mobile Navigation
- [ ] **Enhance mobile menu accessibility and UX**
  - **Files to Modify**: `src/components/layout/Header.tsx`
  - **Detailed Instructions**: Add proper ARIA attributes for mobile menu. Implement keyboard navigation (Tab, Enter, Escape). Add focus management when menu opens/closes. Ensure menu items are properly announced by screen readers.
  - **Verification**: Test mobile navigation with keyboard-only navigation and screen reader.

### [P2 - High] Add Loading States and Skeleton UI
- [ ] **Implement loading states for better perceived performance**
  - **Files to Modify**: Create `src/components/ui/LoadingSkeleton.tsx`, update page components
  - **Detailed Instructions**: Create skeleton loading components for case studies, blog posts, and other dynamic content. Add loading states to form submissions and page transitions.
  - **Verification**: Test loading states on slow connections and verify smooth user experience.

### [P3 - Medium] Improve Visual Hierarchy
- [ ] **Enhance typography and spacing consistency**
  - **Files to Modify**: `tailwind.config.ts`, component files
  - **Detailed Instructions**: Define consistent typography scale in Tailwind config. Ensure proper heading hierarchy (h1 > h2 > h3). Add consistent spacing system and improve line heights for better readability.
  - **Verification**: Use design system audit tools to verify typography consistency.

### [P3 - Medium] Add Micro-interactions
- [ ] **Implement subtle animations and hover effects**
  - **Files to Modify**: Component files
  - **Detailed Instructions**: Add smooth transitions for buttons, cards, and interactive elements. Implement hover states that provide clear feedback. Use consistent animation timing and easing functions.
  - **Verification**: Test animations on different devices and ensure they don't cause motion sickness.

---

## Performance Optimisation

### [P1 - Critical] Fix Image Loading Performance
- [ ] **Implement proper image optimization and lazy loading**
  - **Files to Modify**: All image references, `next.config.ts`
  - **Detailed Instructions**: Convert all images to WebP format with JPEG fallbacks. Implement proper lazy loading for below-the-fold images. Add `priority` prop to critical images. Configure Next.js image optimization properly.
  - **Verification**: Run Lighthouse audit and achieve 100% performance score for images.

### [P2 - High] Optimize Bundle Size
- [ ] **Reduce JavaScript bundle size**
  - **Files to Modify**: `next.config.ts`, component imports
  - **Detailed Instructions**: Implement dynamic imports for non-critical components. Use tree-shaking for Lucide React icons. Add bundle analyzer to identify large dependencies. Consider code splitting for case study pages.
  - **Verification**: Use `npm run build` and analyze bundle size. Aim for < 250KB initial bundle.

### [P2 - High] Add Service Worker for Caching
- [ ] **Implement PWA features for better performance**
  - **Files to Modify**: Create `public/sw.js`, update `next.config.ts`
  - **Detailed Instructions**: Add service worker for caching static assets. Implement offline functionality for core pages. Add PWA manifest for mobile installation.
  - **Verification**: Test offline functionality and verify assets are cached properly.

### [P3 - Medium] Optimize Font Loading
- [ ] **Improve font loading performance**
  - **Files to Modify**: `src/app/layout.tsx`
  - **Detailed Instructions**: Add `font-display: swap` to font loading. Preload critical fonts. Consider using system fonts as fallbacks to reduce layout shift.
  - **Verification**: Check font loading in Network tab and measure layout shift.

### [P3 - Medium] Add Performance Monitoring
- [ ] **Implement performance tracking**
  - **Files to Modify**: `src/components/analytics/GoogleAnalytics.tsx`
  - **Detailed Instructions**: Add Core Web Vitals tracking to Google Analytics. Monitor LCP, FID, and CLS metrics. Set up performance alerts.
  - **Verification**: Verify performance metrics are being tracked in Google Analytics.

---

## Search Engine Optimisation (SEO)

### [P1 - Critical] Fix Missing Meta Images
- [ ] **Create and optimize all Open Graph images**
  - **Files to Modify**: Create missing image files, update metadata
  - **Detailed Instructions**: Create 1200x630px Open Graph images for each page with consistent branding. Include page title, URL IRL logo, and relevant imagery. Optimize file sizes to < 1MB each.
  - **Verification**: Test social media sharing previews on Facebook, Twitter, and LinkedIn.

### [P2 - High] Improve Structured Data
- [ ] **Enhance and fix structured data implementation**
  - **Files to Modify**: `src/components/ui/StructuredData.tsx`
  - **Detailed Instructions**: Update structured data with real business information. Add missing required fields (address, phone, business hours). Implement proper JSON-LD formatting. Add breadcrumb structured data for navigation.
  - **Verification**: Use Google's Rich Results Test to validate structured data.

### [P2 - High] Add Missing Meta Tags
- [ ] **Complete meta tag implementation**
  - **Files to Modify**: All page metadata files
  - **Detailed Instructions**: Add missing meta tags: `robots`, `viewport`, `theme-color`. Implement proper canonical URLs. Add hreflang tags if targeting multiple regions. Include proper `article:author` and `article:published_time` for blog posts.
  - **Verification**: Use SEO audit tools to verify all meta tags are present and correct.

### [P3 - Medium] Improve Internal Linking
- [ ] **Add strategic internal linking**
  - **Files to Modify**: Component files
  - **Detailed Instructions**: Add contextual internal links between related pages. Implement breadcrumb navigation. Add "related articles" sections. Link case studies to relevant services.
  - **Verification**: Use SEO tools to analyze internal linking structure and page authority distribution.

### [P3 - Medium] Add XML Sitemap
- [ ] **Generate and implement XML sitemap**
  - **Files to Modify**: Create `public/sitemap.xml`, update `next.config.ts`
  - **Detailed Instructions**: Generate XML sitemap with all pages, case studies, and blog posts. Include last modified dates and priority values. Submit to Google Search Console.
  - **Verification**: Validate sitemap with Google Search Console and ensure all pages are indexed.

---

## Accessibility (a11y)

### [P1 - Critical] Fix Missing Alt Text
- [ ] **Add alt text to all images**
  - **Files to Modify**: All image elements
  - **Detailed Instructions**: Add descriptive alt text to all images. For decorative images, use empty alt="". For complex images (charts, diagrams), provide detailed descriptions. Ensure alt text is contextually relevant and not redundant with surrounding text.
  - **Verification**: Use screen reader to test all images and verify alt text is announced correctly.

### [P2 - High] Improve Keyboard Navigation
- [ ] **Enhance keyboard accessibility**
  - **Files to Modify**: All interactive components
  - **Detailed Instructions**: Ensure all interactive elements are keyboard accessible. Add proper tab order. Implement skip links for main content. Add focus indicators that meet WCAG contrast requirements. Test with Tab, Shift+Tab, Enter, and Space keys.
  - **Verification**: Navigate entire site using only keyboard and verify all functionality is accessible.

### [P2 - High] Add ARIA Labels and Roles
- [ ] **Implement proper ARIA attributes**
  - **Files to Modify**: All components
  - **Detailed Instructions**: Add ARIA labels to form inputs, buttons, and interactive elements. Use proper ARIA roles for custom components. Implement ARIA live regions for dynamic content updates. Add proper heading hierarchy with ARIA landmarks.
  - **Verification**: Use screen reader to test all interactive elements and verify proper announcements.

### [P3 - Medium] Improve Color Contrast
- [ ] **Ensure WCAG AA color contrast compliance**
  - **Files to Modify**: `tailwind.config.ts`, component files
  - **Detailed Instructions**: Audit all text and background color combinations. Ensure 4.5:1 contrast ratio for normal text and 3:1 for large text. Update color palette to meet accessibility standards.
  - **Verification**: Use color contrast checking tools to verify all combinations meet WCAG AA standards.

### [P3 - Medium] Add Focus Management
- [ ] **Implement proper focus management**
  - **Files to Modify**: Modal and dynamic content components
  - **Detailed Instructions**: Manage focus when opening/closing modals. Return focus to trigger element after closing. Trap focus within modal dialogs. Announce focus changes to screen readers.
  - **Verification**: Test focus management with screen reader and keyboard navigation.

---

## Security Audit

### [P1 - Critical] Fix XSS Vulnerabilities
- [ ] **Sanitize dangerouslySetInnerHTML usage**
  - **Files to Modify**: `src/app/insights/[slug]/page.tsx`, `src/app/case-studies/library-kiosk-interface/page.tsx`
  - **Detailed Instructions**: Replace `dangerouslySetInnerHTML` with proper HTML sanitization library (DOMPurify). Sanitize all user-generated content before rendering. Implement Content Security Policy (CSP) headers.
  - **Verification**: Test with malicious HTML content to ensure it's properly sanitized.

### [P2 - High] Implement Security Headers
- [ ] **Add comprehensive security headers**
  - **Files to Modify**: `next.config.ts`, create `src/middleware.ts`
  - **Detailed Instructions**: Add security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and Content-Security-Policy. Implement HTTPS redirect. Add HSTS headers.
  - **Verification**: Use security header testing tools to verify all headers are present and properly configured.

### [P2 - High] Secure Form Handling
- [ ] **Implement proper form validation and CSRF protection**
  - **Files to Modify**: `src/components/sections/contact/ContactForm.tsx`
  - **Detailed Instructions**: Add server-side validation for all form inputs. Implement CSRF tokens. Add rate limiting for form submissions. Sanitize all input data before processing.
  - **Verification**: Test form with malicious inputs and verify proper validation and sanitization.

### [P3 - Medium] Update Dependencies
- [ ] **Keep dependencies up to date**
  - **Files to Modify**: `package.json`
  - **Detailed Instructions**: Regularly update all dependencies to latest stable versions. Use `npm audit` to check for vulnerabilities. Consider using Dependabot for automated updates.
  - **Verification**: Run `npm audit` and ensure no high or critical vulnerabilities exist.

### [P3 - Medium] Add Environment Variable Security
- [ ] **Secure environment variable handling**
  - **Files to Modify**: Environment configuration files
  - **Detailed Instructions**: Ensure sensitive data is not exposed in client-side code. Use proper environment variable prefixes. Implement proper secret management for production.
  - **Verification**: Audit all environment variable usage and ensure no secrets are exposed to the client.

---

## Implementation Priority

### Phase 1: Critical Issues 
1. Create missing Open Graph and hero images
2. Fix XSS vulnerabilities with HTML sanitization
3. Resolve dark mode CSS conflicts
4. Add alt text to all images

### Phase 2: High Priority 
1. Implement Next.js Image optimization
2. Fix font loading conflicts
3. Standardize branding across all content
4. Complete contact information
5. Improve mobile navigation accessibility
6. Optimize image loading performance

### Phase 3: Medium Priority 
1. Enhance TypeScript configuration
2. Add error boundaries
3. Improve CTA copy and Australian English consistency
4. Add loading states and skeleton UI
5. Optimize bundle size and add service worker
6. Improve structured data and meta tags

### Phase 4: Low Priority 
1. Add micro-interactions and visual hierarchy improvements
2. Implement internal linking and XML sitemap
3. Enhance color contrast and focus management
4. Update dependencies and secure environment variables

---

## Success Metrics

- **Performance**: Lighthouse score > 90 across all categories
- **Accessibility**: WCAG AA compliance with 100% keyboard navigation
- **SEO**: All meta tags present, structured data validated
- **Security**: Zero high/critical vulnerabilities, proper XSS protection
- **User Experience**: Consistent branding, smooth interactions, fast loading

---

*This checklist was generated from a comprehensive audit performed by a Senior Full-Stack Developer, UX/UI Design Lead, SEO Specialist, and Cybersecurity Analyst.*
