Get-ChildItem -Path '.' -Recurse -Include '*.md','*.py','*.html','*.css','*.js','*.json','*.txt' -File |
  Where-Object { $_.FullName -notmatch '\.git\\' -and $_.FullName -notmatch 'node_modules' } |
  ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if ($content -and $content -match 'ZyntaFlow|zyntaflow') {
      Write-Host "Processing: $($_.FullName)"
      $content = $content -replace 'ZyntaFlow', 'AISurfaced' -replace 'zyntaflow', 'aisurfaced'
      Set-Content -Path $_.FullName -Value $content -NoNewline
    }
  }
Write-Host "Done with content replacements."
