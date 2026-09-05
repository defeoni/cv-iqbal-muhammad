@echo off
REM Terbitkan ulang ke https://cviqbalmuhammad.pages.dev
REM Klik dua kali berkas ini, atau jalankan: deploy.cmd
cd /d "%~dp0"

echo [1/3] Menyalin berkas...
if exist "..\deploy-cv" rmdir /s /q "..\deploy-cv"
mkdir "..\deploy-cv"
xcopy index.html "..\deploy-cv\" /y >nul
xcopy css "..\deploy-cv\css\" /e /i /y >nul
xcopy js  "..\deploy-cv\js\"  /e /i /y >nul
xcopy img "..\deploy-cv\img\" /e /i /y >nul
del /q "..\deploy-cv\img\BACA-DULU.txt" 2>nul
del /q "..\deploy-cv\img\_GANTI-INI.json" 2>nul

echo [2/3] Mengunggah ke Cloudflare Pages...
call npx --yes wrangler@4 pages deploy "..\deploy-cv" --project-name=cviqbalmuhammad --branch=main --commit-dirty=true

echo.
echo [3/3] Selesai. Buka https://cviqbalmuhammad.pages.dev
pause
