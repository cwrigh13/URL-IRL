Write-Host "Building the project..." -ForegroundColor Green
npm run build

Write-Host "Staging all changes..." -ForegroundColor Green
git add .

Write-Host "Checking git status..." -ForegroundColor Yellow
git status --short

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "fix: Update image paths for GitHub Pages deployment

- Fixed all image paths to include /URL-IRL basePath
- Updated case study images in data file
- Fixed metadata image paths in all pages
- Ensured proper image loading on GitHub Pages"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin master

Write-Host "Deployment complete! GitHub Actions will automatically deploy to Pages." -ForegroundColor Green
