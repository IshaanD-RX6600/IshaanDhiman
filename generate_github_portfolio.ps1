#!/usr/bin/env pwsh

# GitHub Portfolio Generator Script
# This script generates HTML content for a GitHub profile/portfolio to embed in a website

# Output file
$outputFile = "github_portfolio.html"

# Ensure we're authenticated
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not authenticated with GitHub. Please run 'gh auth login' first." -ForegroundColor Red
    exit 1
}

# Get user information
$user = gh api user | ConvertFrom-Json
$username = $user.login

Write-Host "Generating GitHub portfolio for $username..." -ForegroundColor Cyan

# Fetch repositories
$repos = gh api "users/$username/repos?per_page=100" | ConvertFrom-Json

# Sort repositories by stars
$sortedRepos = $repos | Sort-Object -Property stargazers_count -Descending

# Start building HTML
$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Portfolio - $($user.name)</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .profile {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            gap: 20px;
        }
        .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }
        .stats {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }
        .stat-box {
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 15px;
            flex: 1;
            min-width: 120px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .stat-box h3 {
            margin: 0;
            font-size: 14px;
            color: #555;
        }
        .stat-box p {
            margin: 10px 0 0;
            font-size: 24px;
            font-weight: bold;
        }
        .repos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 20px;
        }
        .repo-card {
            border: 1px solid #e1e4e8;
            border-radius: 8px;
            padding: 20px;
            transition: transform 0.2s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .repo-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .repo-card h3 {
            margin-top: 0;
            font-size: 18px;
        }
        .repo-card p {
            color: #586069;
            margin-bottom: 15px;
            min-height: 60px;
        }
        .repo-stats {
            display: flex;
            gap: 15px;
        }
        .repo-stat {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            color: #586069;
        }
        .language-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 5px;
        }
        .btn {
            display: inline-block;
            padding: 8px 12px;
            background-color: #0366d6;
            color: white;
            border-radius: 4px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            margin-top: 10px;
        }
        .btn:hover {
            background-color: #0255b3;
        }
        .updated {
            font-size: 12px;
            color: #586069;
            margin-top: 20px;
            text-align: center;
        }
        /* Language colors */
        .JavaScript { background-color: #f1e05a; }
        .TypeScript { background-color: #2b7489; }
        .HTML { background-color: #e34c26; }
        .CSS { background-color: #563d7c; }
        .Python { background-color: #3572A5; }
        .Java { background-color: #b07219; }
        .C { background-color: #555555; }
        .CPP { background-color: #f34b7d; }
    </style>
</head>
<body>
    <!-- Profile -->
    <div class="profile">
        <img class="profile-img" src="$($user.avatar_url)" alt="$($user.name)">
        <div>
            <h1>$($user.name)</h1>
            <p>$($user.bio)</p>
            <p>
                <a href="$($user.html_url)" target="_blank">@$($user.login) on GitHub</a>
"@

if ($user.blog) {
    $html += @"
                • <a href="$($user.blog)" target="_blank">Website</a>
"@
}

if ($user.twitter_username) {
    $html += @"
                • <a href="https://twitter.com/$($user.twitter_username)" target="_blank">Twitter</a>
"@
}

$html += @"
            </p>
        </div>
    </div>

    <!-- Stats -->
    <div class="stats">
        <div class="stat-box">
            <h3>Repositories</h3>
            <p>$($repos.Count)</p>
        </div>
        <div class="stat-box">
            <h3>Followers</h3>
            <p>$($user.followers)</p>
        </div>
        <div class="stat-box">
            <h3>Following</h3>
            <p>$($user.following)</p>
        </div>
    </div>

    <h2>My Projects</h2>
    <div class="repos">
"@

# Language color map
$languageColors = @{
    "JavaScript" = "#f1e05a"
    "TypeScript" = "#2b7489"
    "HTML" = "#e34c26"
    "CSS" = "#563d7c"
    "Python" = "#3572A5"
    "Java" = "#b07219"
    "C" = "#555555"
    "C++" = "#f34b7d"
    "C#" = "#178600"
    "PHP" = "#4F5D95"
    "Ruby" = "#701516"
    "Go" = "#00ADD8"
    "Swift" = "#ffac45"
    "Kotlin" = "#F18E33"
    "Rust" = "#dea584"
}

# Add repository cards (limit to 10 most recent/popular repos)
$displayRepos = $sortedRepos | Select-Object -First 10

foreach ($repo in $displayRepos) {
    # Skip forks if needed
    # if ($repo.fork) { continue }
    
    # Get repository languages
    $repoLanguages = gh api "repos/$($repo.full_name)/languages" | ConvertFrom-Json
    $primaryLanguage = ""
    $languageColor = "#dddddd"
    
    if ($repoLanguages.PSObject.Properties.Count -gt 0) {
        $primaryLanguage = $repoLanguages.PSObject.Properties.Name | Select-Object -First 1
        if ($languageColors.ContainsKey($primaryLanguage)) {
            $languageColor = $languageColors[$primaryLanguage]
        }
    }
    
    # Format description
    $description = if ($repo.description) { $repo.description } else { "No description available" }
    
    # Create repo card
    $html += @"
        <div class="repo-card">
            <h3><a href="$($repo.html_url)" target="_blank">$($repo.name)</a></h3>
            <p>$description</p>
            <div class="repo-stats">
"@

    if ($primaryLanguage) {
        $html += @"
                <div class="repo-stat">
                    <span class="language-dot" style="background-color: $languageColor;"></span>
                    $primaryLanguage
                </div>
"@
    }

    $html += @"
                <div class="repo-stat">
                    <span>⭐</span> $($repo.stargazers_count)
                </div>
                <div class="repo-stat">
                    <span>🍴</span> $($repo.forks_count)
                </div>
            </div>
            <a href="$($repo.html_url)" target="_blank" class="btn">View Project</a>
        </div>
"@
}

$currentDate = Get-Date -Format "MMMM d, yyyy"
$html += @"
    </div>
    
    <p class="updated">Last updated: $currentDate</p>
</body>
</html>
"@

# Save to file
$html | Out-File -FilePath $outputFile -Encoding utf8

Write-Host "GitHub portfolio has been generated: $outputFile" -ForegroundColor Green
Write-Host "You can now include this HTML file in your website or use its contents." -ForegroundColor Cyan 