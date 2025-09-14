@echo off
echo Staging all changes...
git add .

echo Committing changes...
git commit -m "feat: Update site with latest changes and optimizations

- Updated case studies content and structure
- Added new case study images
- Optimized build configuration
- Updated static files and assets
- Improved site performance and SEO"

echo Pushing to GitHub...
git push origin master

echo Deployment complete!
pause
