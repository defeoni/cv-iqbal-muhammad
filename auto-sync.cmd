@echo off
setlocal
set "IQBAL_AUTO_SYNC=1"
set "NOPAUSE=1"
call "%~dp0sync.cmd" "Auto-sync saat save VS Code"
exit /b %errorlevel%
