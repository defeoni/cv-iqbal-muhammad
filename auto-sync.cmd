@echo off
setlocal
if exist "%~dp0.auto-sync.lock" exit /b 0
type nul > "%~dp0.auto-sync.lock"
set "IQBAL_AUTO_SYNC=1"
set "NOPAUSE=1"
call "%~dp0sync.cmd" "Auto-sync saat save VS Code"
del /q "%~dp0.auto-sync.lock" 2>nul
exit /b %errorlevel%
