import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

/**
 * Sanitizes HTML content to prevent XSS attacks using DOMPurify
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHtml(html: string): string {
  // Create a virtual DOM for server-side rendering
  const window = new JSDOM('').window;
  const purify = DOMPurify(window as any);
  
  // Configure DOMPurify with strict settings
  const config = {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    SANITIZE_DOM: true,
    KEEP_CONTENT: true,
  };
  
  return purify.sanitize(html, config);
}

/**
 * Sanitizes HTML content for case studies with more permissive settings
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeCaseStudyHtml(html: string): string {
  // Create a virtual DOM for server-side rendering
  const window = new JSDOM('').window;
  const purify = DOMPurify(window as any);
  
  // More permissive config for case studies (allows more formatting)
  const config = {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'div', 'span', 'b', 'i'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    SANITIZE_DOM: true,
    KEEP_CONTENT: true,
  };
  
  return purify.sanitize(html, config);
}
