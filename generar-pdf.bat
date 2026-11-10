@echo off
chcp 65001 >nul
echo Generando CV de Pablo Barazzutti...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0herramientas\generar.ps1"
echo.
pause
