# API de Receitas

Seções
=================
   * [Setup](#setup)
   * [Tecnologia](#tecnologia)
   * [Autor](#autor)

Setup
============

#### 1) Clonar e instalar dependências

- 1.1) Clone `https://github.com/gtodesco/api-receitas`.
- 1.2) `cd api-receitas` - acesse o novo diretório de projeto que você acabou de clonar.
- 1.3) Renomeie o arquivo `.env.example` para `.env`. Este arquivo contém a chave para API do Giphy.
- 1.4) Instale os pacotes NPM com `npm install`.

#### 2) Iniciar o servidor

- 2.1) No terminal, rode `npm run start` para rodar o servidor localmente.
- 2.2) Acesse o endpoint em seu navegador ou ferramenta Cliente REST (Postman/Insomnia): `http://localhost:3333/recipes?i=tomato,cheese,onion`. Após alguns segundos o resultado da busca aparecerá.
- 2.3) Os arquivos referentes a esta etapa são: 
    - RecipeController.js;
    - routes.js e
    - server.js.

#### 3) Rodar testes

- 3.1) No terminal, rode `npm run test` para rodar os testes unitários.
- 3.2) A ferramenta escolhida foi o JEST, que permite testar resultados de funções e status de requisições.
- 3.3) Neste caso foi testada a ordenação de ingredientes, com inserção de valores válidos e inválidos.
- 3.4) Os arquivos referentes a esta etapa são:
    - sortedarray.test.js.

#### 4) Rodar lint
- 4.1) No terminal, rode `npm run lint` para rodar o eslint.
- 4.2) Foi definido o padrão do Airbnb com a exceção de algumas regras.
- 4.3) Os arquivos referentes a esta etapa são:
    - .eslintrc.json e
    - .eslintignore.

Tecnologia
============

#### Node
- Dependências:
    - [axios](https://www.npmjs.com/package/axios)
    - [dotenv](https://www.npmjs.com/package/dotenv)
    - [express](https://www.npmjs.com/package/express)
- Dependências de desenvolvimento:
    - [eslint](https://www.npmjs.com/package/eslint)
    - [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
    - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
    - [jest](https://www.npmjs.com/package/jest)
    - [nodemon](https://www.npmjs.com/package/nodemon)

#### APIs
- RecipePuppy: http://www.recipepuppy.com/api/
- Giphy (necessário Key): https://api.giphy.com/v1/gifs/search/

Autor
============

[Gabriel Todesco](https://www.linkedin.com/in/gabriel-jensen-todesco/)
