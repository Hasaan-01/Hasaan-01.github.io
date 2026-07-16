# Build script for Hasaan's Portfolio
# Run this after making HTML changes to regenerate purged CSS

Write-Host "Building purged Tailwind CSS..."
.\node_modules\.bin\tailwindcss.cmd -i src/input.css -o dist/styles.css --minify

$size = (Get-Item dist/styles.css).Length
Write-Host "Done! CSS size: $([math]::Round($size/1KB,2))KB"
