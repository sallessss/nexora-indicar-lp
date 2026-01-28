# Nexora ViteJS Indicar LP

Este projeto é uma landing page desenvolvida com React, ViteJS e TailwindCSS para a Nexora Consulting.

## Tecnologias Utilizadas
- [ViteJS](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) (testes)
- [ESLint](https://eslint.org/) (lint)

## Estrutura do Projeto
```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── test/
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── ...
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

2. Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias:
   ```env
   VITE_API_URL=seu_endpoint_api
   VITE_APP_URL=seu_endpoint_app
   ```

3. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Para rodar os testes:
   ```bash
   npm run test
   # ou
   yarn test
   ```

## Scripts Disponíveis
- `dev`: inicia o servidor de desenvolvimento
- `build`: gera a build de produção
- `preview`: visualiza a build de produção localmente
- `test`: executa os testes com Vitest
- `lint`: executa o linter

## Licença
Este projeto é mantido pela Nexora Consulting. Uso interno e autorizado.
