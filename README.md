# Blogs API 📝

API RESTful para gerenciamento de posts, categorias e usuários de um blog, desenvolvida com Node.js, Express e Sequelize, construída como projeto da [Trybe](https://www.betrybe.com/).

---

## Sobre o Projeto

O **Blogs API** é uma aplicação back-end que permite criar e gerenciar posts de blog com autenticação de usuários. A API oferece endpoints para cadastro e login de usuários, criação de categorias e publicação de posts associados a categorias específicas.

A autenticação é realizada via **JWT (JSON Web Token)**, garantindo que apenas usuários autenticados possam acessar e manipular os recursos protegidos.

---

## Funcionalidades

- 🔐 **Login** — autenticação com geração de token JWT
- 👤 **Usuários** — cadastro, listagem e busca por ID
- 🗂️ **Categorias** — criação e listagem de categorias de posts
- 📝 **Posts** — criação, listagem, busca por ID e atualização de posts

---

## Tecnologias Utilizadas

- **Node.js** — ambiente de execução
- **Express** — framework web para criação dos endpoints
- **Sequelize** — ORM para comunicação com o banco de dados MySQL
- **MySQL** — banco de dados relacional
- **JSON Web Token (JWT)** — autenticação e autorização
- **Joi** — validação de dados de entrada
- **Morgan** — logger de requisições HTTP
- **Nodemon** — hot reload em desenvolvimento
- **ESLint** — padronização do código (config Trybe)
- **Jest / Mocha / Chai** — testes automatizados

---

## O que foi desenvolvido

Durante o projeto, foram demonstradas as seguintes competências:

- ✅ Criação de uma API RESTful com Express
- ✅ Modelagem e relacionamento de dados com Sequelize
- ✅ Autenticação e autorização com JWT
- ✅ Validação de dados com Joi
- ✅ Criação e execução de migrations e seeders com Sequelize CLI
- ✅ Testes automatizados com Jest, Mocha e Chai

---

## Estrutura do Banco de Dados

| Modelo | Descrição |
|--------|-----------|
| `User` | Usuários da plataforma |
| `Category` | Categorias dos posts |
| `BlogPost` | Posts do blog, associados a um usuário |
| `PostCategory` | Tabela de junção entre posts e categorias |

---

## Endpoints

### Autenticação
| Método | Rota | Auth |
|--------|------|------|
| POST | `/login` | ❌ |

### Usuários
| Método | Rota | Auth |
|--------|------|------|
| POST | `/user` | ❌ |
| GET | `/user` | ✅ |
| GET | `/user/:id` | ✅ |

### Categorias
| Método | Rota | Auth |
|--------|------|------|
| POST | `/categories` | ✅ |
| GET | `/categories` | ✅ |

### Posts
| Método | Rota | Auth |
|--------|------|------|
| POST | `/post` | ✅ |
| GET | `/post` | ✅ |
| GET | `/post/:id` | ✅ |
| PUT | `/post/:id` | ✅ |

> ✅ Requer o header `Authorization: Bearer <token>`

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone git@github.com:raissavillela/blogs-api.git
   cd blogs-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp env.example .env
   ```
   Edite o `.env` com suas credenciais do MySQL e uma chave secreta para o JWT.

4. Inicie a aplicação (cria o banco e roda as migrations automaticamente):
   ```bash
   npm run dev
   ```

5. Opcional — popular o banco com dados iniciais:
   ```bash
   npm run seed
   ```

---

## O que já veio pronto da Trybe

A Trybe forneceu a estrutura base do projeto, cabendo ao estudante implementar a lógica da aplicação:

| Arquivo / Diretório | Descrição |
|---------------------|-----------|
| `src/config/config.js` | Configuração do Sequelize com suporte a múltiplos ambientes (dev, test) |
| `src/models/index.js` | Inicialização automática dos modelos pelo Sequelize CLI |
| `src/seeders/` | Dados iniciais para popular o banco (usuários, categorias e posts de exemplo) |
| `jest.config.js` | Configuração dos testes automatizados |
| `.eslintrc.json` | Regras de padronização de código (config `trybe-backend`) |
| `.sequelizerc` | Configuração dos diretórios do Sequelize CLI |
| `.mocharc.json` / `.nycrc.json` | Configuração do Mocha e da cobertura de testes |
| `docker-compose.yml` / `Dockerfile` | Infraestrutura para rodar a aplicação em containers |
| `env.example` | Modelo das variáveis de ambiente necessárias |
| `package.json` | Scripts de execução, testes e linting |

O que foi implementado durante o projeto:

- `src/app.js` — configuração do Express e mapeamento de todas as rotas
- `src/server.js` — inicialização do servidor
- `src/controller/` — handlers de cada rota (login, usuários, categorias e posts)
- `src/middleware/` — validação de dados e autenticação JWT
- `src/models/` — modelos `User`, `Category`, `BlogPost` e `PostCategory` com seus relacionamentos
- `src/migrations/` — migrations para criação das tabelas no banco de dados

---

## Testes

```bash
# Rodar testes com Jest
npm test

# Rodar com cobertura de código
npm run test-coverage
```

---

## Desenvolvido por

[Raissa Villela](https://github.com/raissavillela) — Projeto desenvolvido durante a Formação em Desenvolvimento Web Full-Stack na **[Trybe](https://www.betrybe.com/)**.

> Os arquivos de configuração, testes e estrutura base são de autoria da Trybe.
