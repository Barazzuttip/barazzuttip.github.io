# Genera las capturas que falten y el PDF del CV a partir de datos.js
# Se ejecuta con doble clic en "generar-pdf.bat" (carpeta principal).

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent

$navegador = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $navegador) { throw "No encontre Edge ni Chrome instalados." }

Add-Type -AssemblyName System.Drawing

# Abre el navegador invisible con un perfil propio, espera el archivo de salida y lo cierra.
function Invoke-Navegador([string[]]$argumentos, [string]$salida, [int]$segundos) {
  $perfil = Join-Path $env:TEMP ("cv-pablo-" + [guid]::NewGuid().ToString("N"))
  $todos = @("--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
             "--no-default-browser-check", "--user-data-dir=`"$perfil`"") + $argumentos
  Start-Process -FilePath $navegador -WindowStyle Hidden -ArgumentList $todos | Out-Null
  $limite = (Get-Date).AddSeconds($segundos)
  $tam = -1
  while ((Get-Date) -lt $limite) {
    Start-Sleep -Milliseconds 700
    if (Test-Path $salida) {
      $nuevo = (Get-Item $salida).Length
      if ($nuevo -gt 0 -and $nuevo -eq $tam) { break }   # termino de escribirse
      $tam = $nuevo
    }
  }
  Get-CimInstance Win32_Process -Filter "Name='msedge.exe' OR Name='chrome.exe'" |
    Where-Object { $_.CommandLine -like "*$perfil*" } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
  Start-Sleep -Milliseconds 500
  Remove-Item $perfil -Recurse -Force -ErrorAction SilentlyContinue
  return (Test-Path $salida)
}

# ---------- 1) Capturas de los sitios del portfolio ----------
$datos = [IO.File]::ReadAllText((Join-Path $root "datos.js"), [Text.Encoding]::UTF8)
$urls = [regex]::Matches($datos, 'url:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
$dirCap = Join-Path $root "capturas"
New-Item -ItemType Directory -Force $dirCap | Out-Null

foreach ($u in $urls) {
  $dominio = ([uri]$u).Host -replace '^www\.', ''
  $destino = Join-Path $dirCap "$dominio.jpg"
  if (Test-Path $destino) { continue }
  Write-Host "Sacando captura de $dominio ..."
  $tmp = Join-Path $env:TEMP "cap-$dominio.png"
  if (Test-Path $tmp) { Remove-Item $tmp }
  $ok = Invoke-Navegador @("--window-size=1440,1000", "--virtual-time-budget=15000", "--screenshot=`"$tmp`"", $u) $tmp 60
  if (-not $ok) { Write-Host "  (no se pudo capturar $dominio, se muestra sin imagen)"; continue }
  # Recortar la parte de arriba (sin el aviso de cookies de abajo) y achicar a 960x600 en JPG
  $img = [Drawing.Image]::FromFile($tmp)
  $bmp = New-Object Drawing.Bitmap 960, 600
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.DrawImage($img, (New-Object Drawing.Rectangle 0, 0, 960, 600), (New-Object Drawing.Rectangle 0, 0, 1440, 900), [Drawing.GraphicsUnit]::Pixel)
  $codec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $prm = New-Object Drawing.Imaging.EncoderParameters 1
  $prm.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality), 82L
  $bmp.Save($destino, $codec, $prm)
  $g.Dispose(); $bmp.Dispose(); $img.Dispose(); Remove-Item $tmp
}

# ---------- 2) PDF del CV en español e ingles ----------
$versiones = @(
  @{ lang = "es"; archivo = "CV - Pablo Barazzutti.pdf" },
  @{ lang = "en"; archivo = "Resume - Pablo Barazzutti.pdf" }
)
foreach ($v in $versiones) {
  $pdf = Join-Path $root $v.archivo
  $tmpPdf = Join-Path $env:TEMP ("cv-pablo-tmp-" + $v.lang + ".pdf")
  $html = "file:///" + ((Join-Path $root "cv\cv.html") -replace '\\', '/') + "?lang=" + $v.lang
  Write-Host ("Generando PDF (" + $v.lang + ") ...")
  if (Test-Path $tmpPdf) { Remove-Item $tmpPdf }
  $ok = Invoke-Navegador @("--no-pdf-header-footer", "--virtual-time-budget=10000", "--print-to-pdf=`"$tmpPdf`"", $html) $tmpPdf 90
  if (-not $ok) { throw ("No se genero el PDF " + $v.archivo) }
  Move-Item $tmpPdf $pdf -Force
  Write-Host "Listo: $pdf"
}
