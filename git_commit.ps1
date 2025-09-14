Write-Host "Staging all changes..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "feat: Update site with latest changes and optimizations

- Updated case studies content and structure
- Added new case study images
- Optimized build configuration
- Updated static files and assets
- Improved site performance and SEO"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin master

Write-Host "Deployment complete!" -ForegroundColor Green
