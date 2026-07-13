@echo off
setlocal enabledelayedexpansion

echo ==================================================
echo Fix de dependencias e deploy (Windows .bat)
echo ==================================================

echo 1) Removendo node_modules e package-lock.json (se existirem)...
if exist node_modules rd /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo.
echo 2) Instalando dependencias (npm install)...
npm install
if %ERRORLEVEL% NEQ 0 (
  echo npm install falhou. Tentando npm install --legacy-peer-deps...
  npm install --legacy-peer-deps
  if %ERRORLEVEL% NEQ 0 (
    echo Erro: nao foi possivel instalar dependencias mesmo com --legacy-peer-deps.
    pause
    exit /b 1
  )
)

echo.
echo 3) Rodando build (npm run build)...
npm run build
if %ERRORLEVEL% NEQ 0 (
  echo Erro: build falhou.
  pause
  exit /b 1
)

echo.
echo 4) Verificando tipos (npx tsc --noEmit)...
npx tsc --noEmit
if %ERRORLEVEL% NEQ 0 (
  echo Erros de tipos detectados pelo TypeScript.
  pause
  exit /b 1
)

echo.
echo 5) Tentando commitar e dar push (se o Git estiver instalado)...
git --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  git add package-lock.json README-deploy.md src\globals.d.ts || echo "git add: nada para adicionar"
  git commit -m "Fix: regen lockfile, add globals.d.ts and README-deploy" || echo "git commit: nada para commitar"
  git push || echo "git push falhou"
) else (
  echo "Git nao encontrado. Rode os comandos de git manualmente para commitar e pushar as mudancas."
)

echo.
echo Concluido. Verifique a saida acima para possiveis erros.
pause
