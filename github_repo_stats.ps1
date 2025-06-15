#!/usr/bin/env pwsh

# GitHub Repository Statistics Script
# This script fetches all repositories for the authenticated user and displays them sorted by stars

# Ensure we're authenticated
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not authenticated with GitHub. Please run 'gh auth login' first." -ForegroundColor Red
    exit 1
}

# Get the username of the authenticated user
$user = gh api user | ConvertFrom-Json
$username = $user.login
Write-Host "Fetching repositories for $username..." -ForegroundColor Cyan

# Fetch all repositories for the user
$repos = gh api "users/$username/repos?per_page=100" | ConvertFrom-Json

# Sort repositories by star count
$sortedRepos = $repos | Sort-Object -Property stargazers_count -Descending

# Display repositories with star counts
Write-Host "`nRepositories sorted by stars:" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
foreach ($repo in $sortedRepos) {
    Write-Host "$($repo.name)" -ForegroundColor White -NoNewline
    Write-Host " - Stars: " -ForegroundColor Gray -NoNewline
    Write-Host "$($repo.stargazers_count)" -ForegroundColor Yellow
    Write-Host "  $($repo.description)" -ForegroundColor DarkGray
    Write-Host "  URL: $($repo.html_url)" -ForegroundColor Blue
    Write-Host ""
}

Write-Host "Total repositories: $($sortedRepos.Count)" -ForegroundColor Cyan 