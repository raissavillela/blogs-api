# TrybeTunes 🎵

Plataforma de streaming de música desenvolvida com React.js, JavaScript, HTML e CSS, construída como projeto da [Trybe](https://www.betrybe.com/).

---

## Sobre o Projeto

O **TrybeTunes** é uma aplicação front-end que proporciona uma experiência interativa e personalizada de streaming musical. O usuário pode pesquisar artistas, explorar álbuns, ouvir prévias de músicas, favoritar faixas e editar seu perfil pessoal.

Os testes foram fornecidos pela Trybe utilizando a **React Testing Library (RTL)**, cabendo ao estudante implementar a aplicação baseando-se neles.

---

## Funcionalidades

- 🔐 **Login** — acesso à plataforma com identificação do usuário
- 🔍 **Pesquisa** — busca por bandas ou artistas específicos
- 💿 **Álbuns** — visualização da lista de álbuns disponíveis de cada artista
- 🎧 **Músicas** — exploração das faixas de um álbum com prévia de áudio
- ❤️ **Favoritos** — favoritar e desfavoritar músicas; lista de faixas favoritas
- 👤 **Perfil** — visualização e edição das informações do usuário

---

## Tecnologias Utilizadas

- **React.js** — construção da interface dinâmica e gerenciamento de componentes e estados
- **JavaScript** — lógica de manipulação de dados
- **HTML & CSS** — estrutura e estilização da interface
- **React Router Dom** — navegação entre páginas (`BrowserRouter`, `Routes`, `Route`, `Link`)
- **ESLint & StyleLint** — padronização e qualidade do código

---

## O que foi desenvolvido

Durante o projeto, foram demonstradas as seguintes competências:

- ✅ Requisições a APIs externas e consumo de dados
- ✅ Utilização do hook `useEffect`
- ✅ Utilização do hook `useState`
- ✅ Configuração correta do `BrowserRouter`
- ✅ Criação de rotas com `Route` e `Routes`
- ✅ Criação de links de navegação com o componente `Link`

---

## Estrutura de Serviços (fornecida pela Trybe)

O diretório `src/services/` contém os arquivos responsáveis pelas requisições simuladas:

| Arquivo | Responsabilidade |
|---------|-----------------|
| `userAPI.ts` | Gerenciamento dos dados do usuário |
| `searchAlbumsAPI.ts` | Busca de álbuns por artista |
| `musicsAPI.ts` | Listagem de músicas de um álbum |
| `favoriteSongsAPI.ts` | Favoritar e desfavoritar músicas |

Os tipos TypeScript utilizados pelas funções acima estão centralizados em `src/types.ts`.

---

## Testes

Os testes foram implementados pela Trybe utilizando a **React Testing Library (RTL)**. Para executá-los:

```bash
npm test
```

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone git@github.com:raissavillela/trybetunes.git
   cd trybetunes
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm start
   ```

---

## Desenvolvido por

[Raissa Villela](https://github.com/raissavillela) — Projeto desenvolvido durante a Formação em Desenvolvimento Web Full-Stack na **[Trybe](https://www.betrybe.com/)**.

> Os arquivos de configuração, banco de dados e estrutura base são de autoria da Trybe.
