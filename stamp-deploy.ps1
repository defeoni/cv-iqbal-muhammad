param(
  [Parameter(Mandatory = $true)]
  [string]$Path
)

$content = [IO.File]::ReadAllText($Path)
$cap = [DateTime]::UtcNow.ToString('yyyyMMddHHmm')
$content = [regex]::Replace($content, '(\.(?:js|css))\?v=[^" ]*', ('$1?v=' + $cap))
[IO.File]::WriteAllText($Path, $content, (New-Object Text.UTF8Encoding($false)))
Write-Output "Cap versi deploy: $cap"
