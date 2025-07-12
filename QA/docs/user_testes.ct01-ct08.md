# Casos de Teste - Usuário Comum

Este documento descreve os casos de teste realizados com o usuário comum (`test@test.com`) na aplicação **Cypress Heroes**.
Cada cenário foi executado manualmente e automatizado para garantir a confiabilidade das funcionalidades disponíveis a este perfil.

---

## CT001 - Curtir herói
**Funcionalidade**: Interação com herói

**Pré-condições**: Usuário comum logado

**Passos**:
1. Acessar a tela de heróis
2. Localizar um herói na lista
3. Clicar no botão de like (curtir)

**Resultado Esperado**: A contagem de curtidas do herói aumenta em 1.

**Status**: Passou / Automatizado

---

## CT002 - Salvar herói
**Funcionalidade**: Interação com herói

**Pré-condições**: Usuário comum logado

**Passos**:
1. Acessar a tela de heróis
2. Clicar no botão de salvar (ícone de dinheiro)

**Resultado Esperado**:  A contagem de saves do herói aumenta em 1.

**Status**: Passou / Automatizado

---

## CT003 - Acesso negado à rota de criação de herói
**Funcionalidade**: Controle de acesso

**Pré-condições**: Usuário comum logado

**Passos**:
1. Acessar diretamente a URL `/heroes/new`

**Resultado Esperado**: O usuário é redirecionado recebe uma mensagem de acesso não autorizado e é redirecionado a pagina inicial.

**Resultado Obtido**: Acesso a pagina /new (criação de heroes)

**Status**: Falhou / Automatizado

---

## CT004 - Tentativa de criar herói
**Funcionalidade**: Restrições de permissão

**Pré-condições**: Usuário comum logado

**Passos**:
1. Tentar acessar interface de criação diretamente a URL `/heroes/new`
2. Preencher dados de um novo herói
3. Tentar enviar formulário

**Resultado Esperado**: A operação falha, pois o usuário comum não tem permissão para criar heróis.

**Status**: Passou / Automatizado

---

## CT005 - Acesso negado à edição de herói
**Funcionalidade**: Controle de acesso

**Pré-condições**: Usuário comum logado

**Passos**:
1. Acessar diretamente a rota `/heroes/{id}/edit`

**Resultado Esperado**: O sistema bloqueia a navegação ou exibe aviso de acesso restrito.

**Resultado Obtido**: Acesso a pagina `/heroes/{id}/edit`(Edição de heroes)


**Status**: Falhou / Automatizado

---

## CT006 - Exibição de mensagem de erro ao tentar editar
**Funcionalidade**: Experiência do usuário (UX)

**Pré-condições**: Usuário comum logado

**Passos**:
1. Acessar um herói e tentar editar (via botão ou rota direta "`/heroes/{id}/edit`")
2. Observar a mensagem exibida

**Resultado Esperado**: Uma mensagem de erro é apresentada informando que a ação não é permitida "Something went wrong"

**Status**: Passou / Automatizado

---

## CT007 - Exibição do botão "Logout"
**Funcionalidade**: Navegação e interface

**Pré-condições**: Usuário comum logado

**Passos**:
1. Acessar qualquer tela autenticada
2. Verificar se o botão de logout está visível

**Resultado Esperado**: O botão de logout está presente e acessível no layout da aplicação.

**Status**: Passou / Automatizado

---

## CT008 - Funcionamento do logout
**Funcionalidade**: Encerramento de sessão

**Pré-condições**: Usuário comum logado

**Passos**:
1. Clicar no botão de logout

**Resultado Esperado**: O usuário é deslogado e redirecionado para a tela de login.

**Status**: Passou / Automatizado

