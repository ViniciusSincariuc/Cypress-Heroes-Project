# Cypress Heroes - Projeto de Testes Automatizados com Cypress

Este projeto foi desenvolvido como um estudo prático para aplicar conceitos de QA (Quality Assurance) de forma profissional. Simula uma aplicação real de gerenciamento de heróis, com dois tipos de usuários: **usuário comum** e **administrador**. O projeto possui testes manuais documentados e posteriormente automatizados com Cypress, sendo executados em um fluxo que simula um ambiente real de CI/CD.

---

## 📁 Visão Geral da Aplicação

O projeto é estruturado como um **monorepo** com workspaces do `npm`, contendo dois principais módulos:

- **Client**: Aplicação frontend em React + Vite
- **Server**: API backend utilizando NestJS + Prisma ORM

### 🔹 Frontend - React (Vite)

- Localizado na pasta `client`
- Interface para visualização e interação com os heróis
- Consome API REST para manipulação dos dados

### 🔹 Backend - NestJS (Node.js)

- Localizado na pasta `server`
- API REST com endpoints para login, listagem, criação, edição e remoção de heróis
- Integração com banco de dados via Prisma

### 🔄 Resetar banco de dados

Para redefinir o banco de dados com os dados iniciais:

```bash
npm run resetdb
```

---

## ⚙️ Configuração Inicial

1. Clone o repositório e instale as dependências na raiz do projeto:

```bash
npm install
```

2. Configure e prepare a aplicação:

```bash
npm run setup
```

3. Para rodar o projeto em modo desenvolvimento:

```bash
npm run dev
```

> A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🌱 Variáveis de Ambiente

O client depende da variável `VITE_API_URL` para consumir a API:

```bash
VITE_API_URL=http://localhost:3001
```

---

## 🧪 Testes Automatizados com Cypress

O projeto cobre testes automatizados dos seguintes tipos:

- **Login com sucesso e falha**
- **Segurança e UX (rotas não permitidas, campos visuais)**
- **Funcionalidades de usuário comum (like, save, logout)**
- **Funcionalidades exclusivas de administrador (CRUD de heróis)**

Foram criados **48 casos de testes** documentados e automatizados em Cypress.

### 🧭 Caminho dos testes:

```
cypress-heroes/client/cypress/e2e
```

### ✅ Como executar os testes E2E

1. Acesse a pasta do client:

```bash
cd cypress-heroes/client
```

2. Instale as dependências (se necessário):

```bash
npm install
```

3. Resete o servidor(para garantir que não havera erros)

  ```bash
  npm run resetdb
  ```

4. Suba o backend:

```bash
npm run dev
```

5. Em outro terminal, Execute os testes E2E:

```bash
npx cypress run
```

> Obs: Os testes automatizados foram estruturados com base em **casos de teste manuais previamente criados e documentados no Jira**, simulando um ambiente de QA real.

---

## 👤 Usuários de Teste

- **Usuário Comum:**

  - Email: `test@test.com`
  - Senha: `test123`
  - Permissões: login e ações básicas como curtir e salvar heróis

- **Usuário Admin:**

  - Email: `admin@test.com`
  - Senha: `test123`
  - Permissões: login + criar, editar e deletar heróis

---

## 💡 Sobre o Projeto

Este projeto foi idealizado para praticar testes de software com qualidade profissional. A ideia foi:

- Criar e organizar **casos de teste manuais detalhados**
- Testar manualmente **todos os fluxos possíveis e negativos**
- Documentar tudo via **Jira e Markdown**
- Automatizar todos os testes com Cypress

Além disso, integrei conceitos de versionamento (Git/GitHub), uso de branches, documentação técnica e estruturação do projeto como se fosse entregue em uma empresa real.

---

## ✍️ Autor

**Vinicius Roberto Sincariuc**\
[LinkedIn](https://www.linkedin.com/in/viniciussincariuc/) | [GitHub](https://github.com/ViniciusSincariuc)

---

📌 *Este projeto é parte do meu portfólio profissional e tem como objetivo demonstrar minhas habilidades práticas com QA, automação de testes, organização e entrega de qualidade.*

