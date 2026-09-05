@echo off
setlocal EnableDelayedExpansion
REM ============================================================
REM  SATU PERINTAH, SEMUA IKUT BERUBAH.
REM
REM    sync.cmd                  -> pesan commit otomatis
REM    sync.cmd "ganti foto"     -> pesan commit sendiri
REM
REM  Urutan kerja:
REM    1. build.py   -> dist\iqbal-landing.html (berkas tunggal)
REM    2. salin      -> ..\iqbal-landing.html   (bahan Artifact Claude)
REM    3. git        -> push ke github.com/defeoni/cv-iqbal-muhammad
REM    4. wrangler   -> https://cviqbalmuhammad.pages.dev
REM
REM  Artifact claude.ai tidak bisa otomatis - hanya bisa diterbitkan dari
REM  dalam percakapan Claude. Langkah 2 sudah menyiapkan berkasnya.
REM ============================================================
cd /d "%~dp0"

set "PESAN=%~1"
if not defined PESAN set "PESAN=Perbarui landing page"

echo.
echo ============================================
echo  1/4  Merakit berkas tunggal
echo ============================================
python build.py
if errorlevel 1 goto :gagal_build

echo.
echo ============================================
echo  2/4  Menyiapkan bahan Artifact
echo ============================================
copy /y "dist\iqbal-landing.html" "..\iqbal-landing.html" >nul
if errorlevel 1 goto :gagal_salin
echo   ..\iqbal-landing.html diperbarui

echo.
echo ============================================
echo  3/4  Mengirim ke GitHub
echo ============================================
git add -A
git diff --cached --quiet
if errorlevel 1 goto :ada_perubahan
echo   Tidak ada perubahan untuk di-commit.
goto :cloudflare

:ada_perubahan
git commit -m "!PESAN!"
git push origin main
if errorlevel 1 echo   PERINGATAN: push gagal. Lanjut ke Cloudflare.

:cloudflare
echo.
echo ============================================
echo  4/4  Menerbitkan ke Cloudflare Pages
echo ============================================
if exist "..\deploy-cv" rmdir /s /q "..\deploy-cv"
mkdir "..\deploy-cv"
copy /y index.html "..\deploy-cv\" >nul
xcopy css "..\deploy-cv\css\" /e /i /y >nul
xcopy js  "..\deploy-cv\js\"  /e /i /y >nul
xcopy img "..\deploy-cv\img\" /e /i /y >nul
if exist "_headers" copy /y "_headers" "..\deploy-cv\" >nul
del /q "..\deploy-cv\img\BACA-DULU.txt"   2>nul
del /q "..\deploy-cv\img\_GANTI-INI.json" 2>nul
call npx --yes wrangler@4 pages deploy "..\deploy-cv" --project-name=cviqbalmuhammad --branch=main --commit-dirty=true
if errorlevel 1 goto :gagal_deploy

echo.
echo ============================================
echo  SELESAI - ketiganya sudah sama
echo ============================================
echo   Situs   : https://cviqbalmuhammad.pages.dev
echo   Kode    : https://github.com/defeoni/cv-iqbal-muhammad
echo   Artifact: minta Claude terbitkan ulang bila perlu
goto :akhir

:gagal_build
echo.
echo BERHENTI: build gagal. Baca pesan di atas, perbaiki, jalankan lagi.
goto :akhir

:gagal_salin
echo.
echo BERHENTI: gagal menyalin dist\iqbal-landing.html
goto :akhir

:gagal_deploy
echo.
echo BERHENTI: unggah ke Cloudflare gagal.
echo Kalau diminta login: npx wrangler login
goto :akhir

:akhir
echo.
if "%NOPAUSE%"=="1" exit /b 0
pause
