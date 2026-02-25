@echo off
setlocal

cd /d "%~dp0"

if not exist "node_modules" (
  echo [INFO] node_modules not found, running npm install...
  call npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

if not exist "dist\index.html" (
  echo [INFO] dist not found, running npm run build...
  call npm run build
  if errorlevel 1 (
    echo [ERROR] npm run build failed.
    pause
    exit /b 1
  )
)

echo [INFO] Starting local preview server (no internet required)...
start "Bike Mountain Rush Preview" cmd /k "cd /d ""%~dp0"" && npm run preview -- --host 127.0.0.1 --port 4173"

timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173/"

echo [INFO] Browser opened at http://127.0.0.1:4173/
echo [INFO] Stop server: switch to the preview window and press Ctrl+C

endlocal
