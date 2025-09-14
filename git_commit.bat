@echo off
echo Building the project...
npm run build

echo Staging all changes...
git add .

echo Checking git status...
git status --short

echo Committing changes...
git commit -m "fix: Update image paths for GitHub Pages deployment

- Fixed all image paths to include /URL-IRL basePath
- Updated case study images in data file
- Fixed metadata image paths in all pages
- Ensured proper image loading on GitHub Pages"

echo Pushing to GitHub...
git push origin master

echo Deployment complete! GitHub Actions will automatically deploy to Pages.
pause
