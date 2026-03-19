# Rename files with 'zyntaflow' in their names
$basePath = "C:\laragon\www\ZyntaFlow_Brand_Package\02-zyntaflow-archive"

Get-ChildItem -Path $basePath -File | Where-Object { $_.Name -match 'zyntaflow' } | ForEach-Object {
    $newName = $_.Name -replace 'zyntaflow', 'aisurfaced'
    Write-Host "Renaming: $($_.Name) -> $newName"
    Rename-Item -Path $_.FullName -NewName $newName
}

# Rename the directory itself
$parentPath = "C:\laragon\www\ZyntaFlow_Brand_Package"
if (Test-Path "$parentPath\02-zyntaflow-archive") {
    Write-Host "Renaming directory: 02-zyntaflow-archive -> 02-aisurfaced-archive"
    Rename-Item -Path "$parentPath\02-zyntaflow-archive" -NewName "02-aisurfaced-archive"
}

Write-Host "File/directory renames done."
