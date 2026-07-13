@echo off
REM Script to create branch, commit changes and push to origin
REM Run this from the project root (Windows)

set BRANCH=feat/fix-react-helmet-peer-deps

echo Creating and switching to branch %BRANCH%
git checkout -b %BRANCH%

echo Adding files
git add package.json package-lock.json src\pages\HomePage.module.css src\pages\HomePage.tsx

echo Committing
git commit -m "fix: use React 18 to satisfy react-helmet-async peer dependency; increase navbar logo size"

echo Pushing to origin
git push -u origin %BRANCH%

echo Done. If git prompts for credentials, provide your GitHub username and PAT or configure SSH.
