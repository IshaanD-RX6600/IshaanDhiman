#!/usr/bin/env pwsh

# GitHub Issue Checker Script
# This script checks for open issues across multiple repositories

# Ensure we're authenticated
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not authenticated with GitHub. Please run 'gh auth login' first." -ForegroundColor Red
    exit 1
}

# Get the username of the authenticated user
$user = gh api user | ConvertFrom-Json
$username = $user.login
Write-Host "Checking for issues in repositories for $username..." -ForegroundColor Cyan

# Fetch repositories for the user
$repos = gh api "users/$username/repos?per_page=100" | ConvertFrom-Json

# Initialize counters
$totalIssues = 0
$reposWithIssues = @()

Write-Host "`nScanning repositories for open issues..." -ForegroundColor Yellow
foreach ($repo in $repos) {
    $repoName = $repo.name
    $repoFullName = $repo.full_name
    
    # Check if the repository has issues enabled
    if ($repo.has_issues -eq $true) {
        # Get open issues for this repository
        $issues = gh api "repos/$repoFullName/issues" | ConvertFrom-Json
        
        # Only count actual issues (not pull requests)
        $actualIssues = $issues | Where-Object { -not $_.pull_request }
        $issueCount = ($actualIssues | Measure-Object).Count
        
        if ($issueCount -gt 0) {
            $totalIssues += $issueCount
            
            # Store repository and its issues
            $repoInfo = [PSCustomObject]@{
                Name = $repoName
                URL = $repo.html_url
                IssueCount = $issueCount
                Issues = $actualIssues
            }
            
            $reposWithIssues += $repoInfo
            
            Write-Host "Found $issueCount issue(s) in $repoName" -ForegroundColor Yellow
        }
    }
}

# Display summary
Write-Host "`nIssue Summary:" -ForegroundColor Green
Write-Host "==============" -ForegroundColor Green

if ($totalIssues -eq 0) {
    Write-Host "No open issues found across any repositories." -ForegroundColor Green
} else {
    Write-Host "Found a total of $totalIssues open issue(s) across $($reposWithIssues.Count) repositories." -ForegroundColor Cyan
    
    # Display details for repositories with issues
    foreach ($repoInfo in $reposWithIssues) {
        Write-Host "`nRepository: $($repoInfo.Name)" -ForegroundColor White
        Write-Host "URL: $($repoInfo.URL)" -ForegroundColor Blue
        Write-Host "Issue Count: $($repoInfo.IssueCount)" -ForegroundColor Yellow
        
        # List issues
        Write-Host "Issues:" -ForegroundColor Gray
        foreach ($issue in $repoInfo.Issues) {
            Write-Host "  #$($issue.number): $($issue.title)" -ForegroundColor White
            Write-Host "     Opened by: $($issue.user.login) on $($issue.created_at)" -ForegroundColor DarkGray
            Write-Host "     URL: $($issue.html_url)" -ForegroundColor Blue
        }
    }
} 