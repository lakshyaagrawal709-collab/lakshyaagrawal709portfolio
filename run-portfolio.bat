@echo off
title Lakshay Agrawal Portfolio Launcher
color 0A
echo ========================================================
echo   Launching Lakshay Agrawal's Portfolio Web App...
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/3] Building production assets...
call npm run build

echo [2/3] Opening browser at http://127.0.0.1:3030 ...
timeout /t 2 /nobreak >nul
start http://127.0.0.1:3030

echo [3/3] Server running live on http://127.0.0.1:3030 (Do not close window)
call npx vite preview --port 3030 --host 127.0.0.1

pause
