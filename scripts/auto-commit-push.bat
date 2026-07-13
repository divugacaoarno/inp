@echo off
REM Auto commit and push helper
REM Usage: auto-commit-push.bat <remote-url> [branch]

where git >nul 2>&1
if errorlevel 1 (
  echo Git nao foi encontrado no PATH. Instale Git e tente novamente.
  pause
  exit /b 1
)

if not exist .git (
  echo Inicializando repositório git local...
  git init
)

echo Adicionando todas as alterações...
git add -A

echo Fazendo commit...
git commit -m "Fix: regen lockfile, add globals.d.ts and deploy helper" 2>nul || (
  echo Nenhuma alteração nova para commitar.
)

REM If remote URL provided, set or update origin
if "%~1"=="" (
  echo Nenhuma URL de remoto informada como argumento.
  echo Tentando usar remoto "origin" já configurado...
  git remote get-url origin >nul 2>&1
  if errorlevel 1 (
    echo Nao existe remoto "origin" configurado.
    echo Para push automatizado, rode:
    echo   auto-commit-push.bat https://github.com/usuario/repo.git main
    pause
    exit /b 1
  ) else (
    for /f "delims=" %%b in ('git branch --show-current') do set BRANCH=%%b
    if "%BRANCH%"=="" set BRANCH=main
    echo Fazendo push para origin/%BRANCH%...
    git push origin %BRANCH%
  )
) else (
  set REMOTE_URL=%~1
  set BRANCH=%~2
  if "%BRANCH%"=="" set BRANCH=main
  echo Configurando remote origin para %REMOTE_URL% ...
  git remote add origin %REMOTE_URL% 2>nul || git remote set-url origin %REMOTE_URL%
  echo Fazendo push para origin/%BRANCH% (upstream)...
  git push -u origin %BRANCH%
)

echo Operacao finalizada.
pause
