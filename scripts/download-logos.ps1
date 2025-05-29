# Partner Logo Download Script
# Downloads logos from the Venn diagram with proper naming convention: companyName-logo.png/svg

# Create directory if it doesn't exist
$publicDir = "public"
if (!(Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir
}

Write-Host "Downloading partner logos..." -ForegroundColor Green

# Helper function to download files
function Download-Logo {
    param(
        [string]$Url,
        [string]$FileName,
        [string]$CompanyName
    )
    
    try {
        $outputPath = Join-Path $publicDir $FileName
        Write-Host "Downloading $CompanyName logo..." -ForegroundColor Cyan
        Invoke-WebRequest -Uri $Url -OutFile $outputPath -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        Write-Host "Successfully downloaded $FileName" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $CompanyName logo: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Epic Games Logo
Download-Logo -Url "https://logos-world.net/wp-content/uploads/2021/08/Epic-Games-Logo.png" -FileName "epic-games-logo.png" -CompanyName "Epic Games"

# Anthropic Logo  
Download-Logo -Url "https://avatars.githubusercontent.com/u/65766026?s=200&v=4" -FileName "anthropic-logo.png" -CompanyName "Anthropic"

# Weights and Biases Logo
Download-Logo -Url "https://raw.githubusercontent.com/wandb/assets/main/wandb-logo-yellow-dots-black-wb.svg" -FileName "weights-and-biases-logo.svg" -CompanyName "Weights and Biases"

# Run ai Logo
Download-Logo -Url "https://www.run.ai/wp-content/uploads/2021/06/runai-logo-1.png" -FileName "runai-logo.png" -CompanyName "Run ai"

# Cerebras Logo
Download-Logo -Url "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kVJSoBgHj3Hm7VXqMDJhKTJY6m2VFJr3yQ&s" -FileName "cerebras-logo.png" -CompanyName "Cerebras"

# Maind Logo
Download-Logo -Url "https://pbs.twimg.com/profile_images/1445726264936722434/dZjyg1Ye_400x400.jpg" -FileName "maind-logo.png" -CompanyName "Maind"

Write-Host ""
Write-Host "Download complete! Downloaded logos:" -ForegroundColor Green
Write-Host "- epic-games-logo.png" -ForegroundColor White
Write-Host "- anthropic-logo.png" -ForegroundColor White  
Write-Host "- weights-and-biases-logo.svg" -ForegroundColor White
Write-Host "- runai-logo.png" -ForegroundColor White
Write-Host "- cerebras-logo.png" -ForegroundColor White
Write-Host "- maind-logo.png" -ForegroundColor White

Write-Host ""
Write-Host "Note: Some logos may need manual cleaning for transparent backgrounds." -ForegroundColor Yellow
Write-Host "Logos not found automatically (please add manually):" -ForegroundColor Yellow
Write-Host "- Unreal Engine" -ForegroundColor Red
Write-Host "- Google Gemini" -ForegroundColor Red
Write-Host "- Some storage/networking vendors" -ForegroundColor Red 