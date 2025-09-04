import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Map of old numeric IDs to new slugs
const idToSlugMap: Record<number, string> = {
  1: 'future-library-technology-australian-libraries'
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path matches the old insights/[id] pattern
  const insightsIdMatch = pathname.match(/^\/insights\/(\d+)\/?$/);
  
  if (insightsIdMatch) {
    const oldId = parseInt(insightsIdMatch[1]);
    const newSlug = idToSlugMap[oldId];
    
    if (newSlug) {
      // Redirect to the new slug-based URL
      const newUrl = new URL(`/insights/${newSlug}`, request.url);
      return NextResponse.redirect(newUrl, 301); // Permanent redirect
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/insights/:path*',
  ],
}
