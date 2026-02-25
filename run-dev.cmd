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

echo [INFO] Starting Vite dev server...
start "Bike Mountain Rush Dev Server" cmd /k "cd /d ""%~dp0"" && npm run dev"

timeout /t 2 /nobreak >nul
start "" "http://localhost:5173/"

echo [INFO] Browser opened at http://localhost:5173/
echo [INFO] Stop server: switch to the dev server window and press Ctrl+C

endlocal
