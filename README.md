# API de Receitas

Seções
=================
   * [Setup](#setup)
   * [Tecnologia](#tecnologia)
   * [Resultado](#resultado)
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

Resultado
===========
```
{
  "keywords": [
    "cheese",
    "onion",
    "tomato"
  ],
  "recipes": [
    {
      "title": "Easy Mexican Casserole Recipe",
      "ingredients": [
        "cheese",
        "cottage cheese",
        "ground beef",
        "tomato",
        "tortilla chips"
      ],
      "link": "http://www.grouprecipes.com/36010/easy-mexican-casserole.html",
      "gif": "https://giphy.com/gifs/memecandy-YP1Jb0JNc7kqFDbdjm"
    },
    {
      "title": "Speedy Egg & Cheese Stack \r\n\r\n",
      "ingredients": [
        "cheese",
        "eggs",
        "flour tortillas",
        "tomato"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/speedy-egg-cheese-stack-91423.aspx",
      "gif": "https://giphy.com/gifs/eggs-qJkRbWM1MfVjq"
    },
    {
      "title": "Orzo Pasta Salad \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
      "ingredients": [
        "cheese",
        "italian dressing",
        "pasta",
        "tomato"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/orzo-pasta-salad-50545.aspx",
      "gif": "https://giphy.com/gifs/mtvcribs-pasta-jersey-shore-fnZxN5xrA9s1eRFHQv"
    },
    {
      "title": "Grilled Cheese Perfection",
      "ingredients": [
        "bread",
        "butter",
        "cheese",
        "tomato"
      ],
      "link": "http://www.recipezaar.com/Grilled-Cheese-Perfection-32702",
      "gif": "https://giphy.com/gifs/food-dinner-cow-l378v5zfXnryQFG1y"
    },
    {
      "title": "Ww 6 Point Bacon Chicken Melt",
      "ingredients": [
        "bacon",
        "cheese",
        "chicken",
        "tomato"
      ],
      "link": "http://www.recipezaar.com/Ww-6-Point-Bacon-Chicken-Melt-121770",
      "gif": "https://giphy.com/gifs/best-gifs-soup-chicken-campbells-UynvjkM3JtXr2"
    },
    {
      "title": "Breakfast Sandwich",
      "ingredients": [
        "avocado",
        "bread",
        "cheese",
        "tomato"
      ],
      "link": "http://www.recipezaar.com/Breakfast-Sandwich-120887",
      "gif": "https://giphy.com/gifs/cinemagraph-47CcqqOy4Fyk0pfMkR"
    },
    {
      "title": "Chili & Cheese Ramen Wonder",
      "ingredients": [
        "beans",
        "cheese",
        "ramen noodles",
        "tomato"
      ],
      "link": "http://www.recipezaar.com/Chili-Cheese-Ramen-Wonder-24822",
      "gif": "https://giphy.com/gifs/chili-ABc0eNo27IFFu"
    },
    {
      "title": "Low Carb High Protein Low Calorie Bagel Delight Recipe",
      "ingredients": [
        "avocado",
        "bagel",
        "bagel",
        "cheese",
        "tomato"
      ],
      "link": "http://www.grouprecipes.com/73314/low-carb-high-protein-low-calorie-bagel-delight.html",
      "gif": "https://giphy.com/gifs/aetv-rob-lowe-the-files-26n6JhR6hms1Qy2kg"
    },
    {
      "title": "Garlic Cheese And Tomato Bread Bites Recipe",
      "ingredients": [
        "cheese",
        "marinara sauce",
        "sandwich rolls",
        "tomato"
      ],
      "link": "http://www.grouprecipes.com/40866/garlic-cheese-and-tomato-bread-bites.html",
      "gif": "https://giphy.com/gifs/cooking-Q4PcMC8apFXBm"
    },
    {
      "title": "Haloumi Cheese And Tomato Toastie Recipe",
      "ingredients": [
        "bagel",
        "cheese",
        "pesto",
        "tomato"
      ],
      "link": "http://www.grouprecipes.com/405/haloumi-cheese-and-tomato-toastie.html",
      "gif": "https://giphy.com/gifs/rice-fried-leftover-Aj9EHGocwb4bu"
    }
  ]
}
```

Autor
============

[Gabriel Todesco](https://www.linkedin.com/in/gabriel-jensen-todesco/)
