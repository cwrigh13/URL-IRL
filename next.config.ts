import type { NextConfig } from "next";

// Bundle analyzer configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/URL-IRL' : '',
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Ensure sitemap and robots.txt are generated
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default withBundleAnalyzer(nextConfig);
