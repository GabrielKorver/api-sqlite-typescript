# 🚀 API REST - Node.js + TypeScript + Knex + SQLite

API RESTful desenvolvida com Node.js, TypeScript, Express e Knex Query
Builder, utilizando SQLite como banco de dados.

O projeto foi construído com foco em organização, versionamento de banco
e boas práticas de arquitetura backend.

------------------------------------------------------------------------

## 📌 Objetivo do Projeto

Este projeto é ideal para desenvolvedores que desejam:

-   📦 Explorar versionamento de banco com migrations
-   🗄️ Trabalhar com abstração SQL usando Knex
-   🧱 Estruturar APIs em camadas (Routes, Controllers, Repository)
-   🔐 Implementar validações no backend
-   📚 Criar CRUDs completos seguindo boas práticas

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   Node.js
-   TypeScript
-   Express
-   Knex Query Builder
-   SQLite
-   Dotenv
-   TSX

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

src/ ├── controller/ ├── routes/ ├── repository/ ├── database/ │ ├──
migrations/ │ ├── seeds/ │ ├── knex.ts │ └── database.db └── server.ts

------------------------------------------------------------------------

## 📚 Funcionalidades

### 👤 CRUD de Usuários

-   Criar usuário
-   Listar usuários
-   Atualizar usuário
-   Deletar usuário
-   Validação de campos obrigatórios
-   Validação de formato de email

### 📖 CRUD de Cursos

-   Criar curso
-   Listar cursos
-   Atualizar curso
-   Deletar curso

------------------------------------------------------------------------

## 🗄️ Versionamento de Banco

O projeto utiliza Knex Migrations, permitindo:

-   Criar tabelas versionadas
-   Alterar estrutura do banco com controle
-   Manter histórico de mudanças
-   Trabalhar em equipe com segurança

Rodar migrations:

npx knex migrate:latest

------------------------------------------------------------------------

## 🖥️ Visualizando o Banco de Dados

Para visualizar o banco SQLite de forma gráfica, utilize o Beekeeper
Studio:

1.  Instale o Beekeeper Studio
2.  Abra o programa
3.  Selecione SQLite
4.  Aponte para o arquivo database/database.db

------------------------------------------------------------------------

# 🚀 Como Executar o Projeto

## 1️⃣ Clone o repositório

git clone https://github.com/seu-usuario/api-sqlite-typescript.git

## 2️⃣ Acesse a pasta

cd api-sqlite-typescript

## 3️⃣ Instale as dependências

npm install

## 4️⃣ Execute as migrations

npx knex migrate:latest

## 5️⃣ Inicie o servidor

npm run dev

Servidor disponível em:

http://localhost:3000

------------------------------------------------------------------------

## 🎯 Diferenciais Técnicos

-   Estrutura escalável
-   Código organizado em camadas
-   Tipagem forte com TypeScript
-   Abstração SQL com Knex Query Builder
-   Versionamento de banco profissional
-   Projeto ideal para portfólio backend

------------------------------------------------------------------------

## 👨‍💻 Autor

Desenvolvido por Gabriel Korver 🚀
