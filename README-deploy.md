Instruções de deploy e correção de conflito de dependências
---------------------------------------------------------

Problema detectado:

- O deploy no Vercel falhou por um conflito de peer-dependencies: o `package-lock.json` no repositório estava travado para `react@^19.0.0` enquanto o `package.json` declara `react@^18.2.0`. Isso causa erros em pacotes que exigem React 18, como `react-helmet-async`.

O que foi feito aqui:

- Removi o `package-lock.json` do repositório para forçar uma instalação limpa no ambiente de CI (Vercel), que deverá gerar um novo lockfile compatível com o `package.json`.

Passos recomendados (localmente):

1. Abra um terminal na pasta do projeto.
2. Remova `node_modules` e qualquer lockfile antigo e instale dependências:

   Para bash / WSL / macOS:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

   Para Windows (PowerShell):

   ```powershell
   Remove-Item -Recurse -Force node_modules,package-lock.json -ErrorAction SilentlyContinue
   npm install
   npm run build
   ```

   Ou em CMD:

   ```cmd
   rd /s /q node_modules
   del /f /q package-lock.json
   npm install
   npm run build
   ```

3. Se `npm install` falhar por causa de peer-deps, você pode usar temporariamente:

   ```bash
   npm install --legacy-peer-deps
   ```

   Use isto apenas como workaround temporário. O ideal é regenerar o lockfile com versões compatíveis.

4. Após verificar localmente, commit e push do novo `package-lock.json`:

   ```bash
   git add package-lock.json
   git commit -m "Regenerate lockfile to match package.json"
   git push
   ```

Se quiser, eu posso commitar e dar push das mudanças que já apliquei (remoção do lockfile e este README). Diga "sim" e eu faço o commit+push agora.

Observação: caso prefira migrar para React 19, avise — precisaremos verificar/atualizar dependências que ainda não suportam React 19.
