# Build release APK from a short path to avoid Windows MAX_PATH / space issues.
$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$buildRoot = 'C:\posbuild'

Write-Host "Copying project to $buildRoot ..."
if (Test-Path $buildRoot) {
  Remove-Item -Recurse -Force $buildRoot
}
New-Item -ItemType Directory -Path $buildRoot | Out-Null

robocopy $projectRoot $buildRoot /E /XD android node_modules .git releases /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy failed with exit code $LASTEXITCODE" }

Push-Location $buildRoot
try {
  Write-Host "Installing dependencies ..."
  npm install --silent

  Write-Host "Running expo prebuild ..."
  npx expo prebuild --platform android --no-install

  Write-Host "Building release APK (arm64) ..."
  Push-Location android
  .\gradlew.bat assembleRelease -PreactNativeArchitectures=arm64-v8a --no-daemon
  Pop-Location

  $version = (Get-Content app.json -Raw | ConvertFrom-Json).expo.version
  $releasesDir = Join-Path $projectRoot 'releases'
  New-Item -ItemType Directory -Force -Path $releasesDir | Out-Null
  $dest = Join-Path $releasesDir "KurdishPOS-v$version-release.apk"
  Copy-Item (Join-Path $buildRoot 'android\app\build\outputs\apk\release\app-release.apk') $dest -Force

  Write-Host ""
  Write-Host "Release APK ready:" -ForegroundColor Green
  Write-Host $dest
}
finally {
  Pop-Location
}
