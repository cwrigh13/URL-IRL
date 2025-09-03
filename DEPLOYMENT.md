# Deploying to GitHub Pages

## What Was Fixed

The issue was that GitHub Pages was serving the default `README.md` content instead of your built Next.js application. This happened because:

1. **GitHub Pages serves static files only** - it doesn't run Node.js or build processes
2. **Your Next.js app needed static export** for GitHub Pages to work
3. **Dynamic routes needed `generateStaticParams()`** for static generation

## Changes Made

1. **Updated `next.config.ts`** to enable static export:
   - `output: 'export'` - generates static HTML files
   - `basePath: '/URL-IRL'` - matches your GitHub Pages URL
   - `trailingSlash: true` - ensures proper routing

2. **Added `generateStaticParams()`** to dynamic routes:
   - `/case-studies/[id]/page.tsx`
   - `/insights/[id]/page.tsx`

3. **Created GitHub Actions workflow** (`.github/workflows/deploy.yml`) for automatic deployment

4. **Added `.nojekyll` file** to prevent Jekyll processing

## How to Deploy

### Option 1: Automatic Deployment (Recommended)

1. **Push your changes** to the `main` branch
2. **GitHub Actions will automatically**:
   - Build your Next.js app
   - Generate static files
   - Deploy to GitHub Pages

### Option 2: Manual Deployment

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to your GitHub Pages branch

## Current Status

✅ **Build successful** - Your app now generates static files correctly  
✅ **Static export working** - All routes are pre-rendered  
✅ **GitHub Actions ready** - Automatic deployment configured  

## Next Steps

1. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Configure static export for GitHub Pages"
   git push origin main
   ```

2. **Check GitHub Actions** - The workflow will automatically build and deploy

3. **Verify deployment** - Your site should now show your actual content instead of the README

## Troubleshooting

- **If you still see the README**: Make sure GitHub Pages is configured to serve from the correct source
- **If links don't work**: Check that `basePath` in `next.config.ts` matches your repository name
- **If build fails**: Ensure all dynamic routes have `generateStaticParams()` functions

Your site should now display your beautiful "Bespoke Technology for Australian Libraries" content instead of the default Next.js starter page!

