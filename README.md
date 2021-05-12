# Open Food Scraper

Nesse desafio foi desenvolvido um sistema que utilizará os dados do projeto Open Food Facts, dados retirados através de um scraper, configurado diaramente.

### :tv: CLIENT

### Instale as dependências
#### `npm install`

### Compila o projeto no modo de desenvolvimento:
#### `npm start`

***
### :gear: API
### Instale as dependências

#### `npm install`

### Edite o aquivo .env.exemplo:

Você precisa especificar a url de conexão com o banco MongoDB, local ou cloud.

Renomeie o aquivo de ".env.exemplo" para ".env"

### API está pronta! você pode roda-lá:

#### `npm run dev`

Irá rodar a api em modo de desenvolvimento.

## Rotas

Rotas                      |     Métodos HTTP   |      Descrição              |      Links                 
-------------------------  | -----------------  | ---------------------         | ---------------------------------------- 
/                          |       GET          | Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 20201026"      | GET:    http://localhost:3030/      
/products                  |       GET          | Listar todos os produtos da base de dados       | GET:    http://localhost:3030/products      
/products/:code            |       GET          | Obter a informação somente de um produto       | GET:   http://localhost:3030/products/:code 

***
### :watch: CRON

Realiza o scraping da página do Open Food Facts uma vez ao día.

Para iniciar a CRON basta estar na pasta da api e executar o comando:

#### `npm run scrape`