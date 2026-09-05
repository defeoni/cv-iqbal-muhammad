@echo off
setlocal
set "LOCK=%TEMP%\iqbal-landing-auto-sync.lock"
if exist "%LOCK%" exit /b 0
type nul > "%LOCK%"
set "IQBAL_AUTO_SYNC=1"
set "NOPAUSE=1"
call "%~dp0sync.cmd" "Auto-sync saat save VS Code"
del /q "%LOCK%" 2>nul
exit /b %errorlevel%
