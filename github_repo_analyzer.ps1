#!/usr/bin/env pwsh

# GitHub Repository Analyzer Script
# This script provides detailed analysis of a specific GitHub repository

param(
    [Parameter(Mandatory=$true)]
    [string]$RepositoryName,
    
    [Parameter(Mandatory=$false)]
    [string]$Owner = ""
)

# Ensure we're authenticated
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not authenticated with GitHub. Please run 'gh auth login' first." -ForegroundColor Red
    exit 1
}

# If owner is not provided, use the authenticated user
if ($Owner -eq "") {
    $user = gh api user | ConvertFrom-Json
    $Owner = $user.login
}

$repoFullName = "$Owner/$RepositoryName"
Write-Host "Analyzing repository: $repoFullName" -ForegroundColor Cyan

# Get basic repository information
try {
    $repo = gh api "repos/$repoFullName" | ConvertFrom-Json
}
catch {
    Write-Host "Error: Repository not found or access denied: $repoFullName" -ForegroundColor Red
    exit 1
}

# Get languages used in the repository
$languages = gh api "repos/$repoFullName/languages" | ConvertFrom-Json

# Get contributors
$contributors = gh api "repos/$repoFullName/contributors" | ConvertFrom-Json

# Get recent commits
$commits = gh api "repos/$repoFullName/commits?per_page=30" | ConvertFrom-Json

# Get branches
$branches = gh api "repos/$repoFullName/branches" | ConvertFrom-Json

# Display repository overview
Write-Host "`nRepository Overview:" -ForegroundColor Green
Write-Host "=====================" -ForegroundColor Green
Write-Host "Name: $($repo.name)" -ForegroundColor White
Write-Host "Description: $($repo.description)" -ForegroundColor White
Write-Host "URL: $($repo.html_url)" -ForegroundColor Blue
Write-Host "Created: $($repo.created_at)" -ForegroundColor DarkGray
Write-Host "Last Updated: $($repo.updated_at)" -ForegroundColor DarkGray
Write-Host "Stars: $($repo.stargazers_count)" -ForegroundColor Yellow
Write-Host "Forks: $($repo.forks_count)" -ForegroundColor Yellow
Write-Host "Open Issues: $($repo.open_issues_count)" -ForegroundColor Yellow
Write-Host "Default Branch: $($repo.default_branch)" -ForegroundColor White
Write-Host "License: $(if ($repo.license) { $repo.license.name } else { 'None' })" -ForegroundColor White

# Display language breakdown
Write-Host "`nLanguage Breakdown:" -ForegroundColor Green
Write-Host "===================" -ForegroundColor Green
if ($languages.PSObject.Properties.Count -gt 0) {
    $totalBytes = 0
    $languages.PSObject.Properties | ForEach-Object { $totalBytes += $_.Value }
    
    $languages.PSObject.Properties | ForEach-Object {
        $percentage = [math]::Round(($_.Value / $totalBytes) * 100, 2)
        Write-Host "$($_.Name): $percentage%" -ForegroundColor White
    }
} else {
    Write-Host "No language data available." -ForegroundColor DarkGray
}

# Display contributors
Write-Host "`nTop Contributors:" -ForegroundColor Green
Write-Host "================" -ForegroundColor Green
if ($contributors.Count -gt 0) {
    $topContributors = $contributors | Select-Object -First 10
    foreach ($contributor in $topContributors) {
        Write-Host "$($contributor.login) - $($contributor.contributions) contributions" -ForegroundColor White
    }
    
    if ($contributors.Count -gt 10) {
        Write-Host "... and $($contributors.Count - 10) more contributors" -ForegroundColor DarkGray
    }
} else {
    Write-Host "No contributor data available." -ForegroundColor DarkGray
}

# Display commit activity
Write-Host "`nRecent Commit Activity:" -ForegroundColor Green
Write-Host "======================" -ForegroundColor Green
if ($commits.Count -gt 0) {
    $recentCommits = $commits | Select-Object -First 5
    foreach ($commit in $recentCommits) {
        $message = $commit.commit.message -split "`n" | Select-Object -First 1
        $date = [DateTime]$commit.commit.author.date
        $formattedDate = $date.ToString("yyyy-MM-dd HH:mm")
        Write-Host "$formattedDate - $($commit.author.login): $message" -ForegroundColor White
    }
    
    if ($commits.Count -gt 5) {
        Write-Host "... and $($commits.Count - 5) more recent commits" -ForegroundColor DarkGray
    }
} else {
    Write-Host "No commit data available." -ForegroundColor DarkGray
}

# Display branches
Write-Host "`nBranches:" -ForegroundColor Green
Write-Host "=========" -ForegroundColor Green
if ($branches.Count -gt 0) {
    foreach ($branch in $branches) {
        if ($branch.name -eq $repo.default_branch) {
            Write-Host "$($branch.name) (default)" -ForegroundColor Yellow
        } else {
            Write-Host $branch.name -ForegroundColor White
        }
    }
} else {
    Write-Host "No branch data available." -ForegroundColor DarkGray
}

Write-Host "`nAnalysis complete!" -ForegroundColor Cyan 