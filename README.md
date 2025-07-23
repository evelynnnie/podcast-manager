# Podcast Manager

Um simples gerenciador de podcasts via API, construído com Node.js e TypeScript. Este projeto fornece endpoints para listar e filtrar episódios de podcasts a partir de um arquivo JSON local.

## ✨ Features

- Listagem de todos os episódios de podcast.
- Filtragem de episódios por nome do podcast.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[tsx](https://github.com/esbuild-kit/tsx)**: Executa arquivos TypeScript e ESM no Node.js sem a necessidade de pré-compilação.
- **[tsup](https://tsup.egoist.dev/)**: Ferramenta para compilar bibliotecas TypeScript com o poder do esbuild.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🏁 Como Começar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/evelynnnie/podcast-manager.git
    cd podcast-manager
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto.
    
    Edite o arquivo `.env` e defina a porta para o servidor:
    ```
    PORT=3000
    ```

## ▶️ Como Usar

O projeto possui scripts para facilitar o desenvolvimento e a execução em produção.

- **Modo de Desenvolvimento (com hot-reload):**
  Este comando iniciará o servidor e o reiniciará automaticamente a cada alteração nos arquivos.
  ```bash
  npm run start:watch
  ```

- **Modo de Desenvolvimento (apenas iniciar):**
  ```bash
  npm run start:dev
  ```

- **Build para Produção:**
  O comando a seguir irá compilar o projeto TypeScript para JavaScript na pasta `dist/`.
  ```bash
  npm run dist
  ```

- **Executar em modo de Produção:**
  Este comando primeiro faz o build e depois executa o servidor a partir dos arquivos compilados. Para que as variáveis de ambiente funcionem, certifique-se de configurá-las no seu ambiente de produção.
  ```bash
  npm run start:dist
  ```

Após iniciar o servidor, ele estará disponível em `http://localhost:3000` (ou a porta que você definiu).

## Endpoints da API

### Listar todos os episódios

- **URL:** `/api/list`
- **Método:** `GET`
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Conteúdo:** Um array com todos os objetos de podcast.
    ```json
    [
        {
            "podcastName": "flow",
            "episodeName": "CBUM - Flow #319",
            "videoId": "pQSuQmUfS30",
            "categories": ["saude", "esporte", "bodybuilder"]
        }
    ]
    ```

### Filtrar episódios por nome do podcast

- **URL:** `/api/episode`
- **Método:** `GET`
- **Query Parameter:** `p=<nome-do-podcast>`
- **Exemplo:** `http://localhost:3000/api/episode?p=flow`
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Conteúdo:** Um array com os episódios do podcast especificado.
- **Resposta para podcast não encontrado:**
  - **Código:** `204 No Content`

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

