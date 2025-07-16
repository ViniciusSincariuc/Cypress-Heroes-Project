# Casos de Teste - Segurança e UX

Este documento abrange os casos de teste relacionados à segurança de rotas e à experiência do usuário na aplicação Cypress Heroes.

---

## CT01 - Acesso direto à rota de edição sem autenticação
**Funcionalidade**: Segurança de rotas

**Pré-condições**: Nenhum usuário autenticado

**Passos**:
1. Acessar diretamente a URL `/heroes/edit/:id` sem estar logado

**Resultado Esperado**: Acesso negado e Retorno para pagina de login

**Resultado Obtido**: Acesso a pagina Edit heroes(edição de heroes)

**Status**: Falhou / Automatizado

---

## CT02 - Acesso direto à rota de criação sem autenticação
**Funcionalidade**: Segurança de rotas

**Pré-condições**: Nenhum usuário autenticado

**Passos**:
1. Acessar diretamente a URL `/heroes/new` sem estar logado

**Resultado Esperado**: Acesso negado e Redirecionamento para a tela de login

**Resultado Obtido**: Acesso a pagina new heroes(criação de heroes)

**Status**: Falhou / Automatizado

---

## CT03 - mensagem de erro clara ao digitar dados incorretos
**Funcionalidade**: UX - Experiência do usuário

**Pré-condições**: Tentativa de login com dados inválidos

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com valor incorreto
3. Preencher o campo senha com valor incorreto
4. Clicar no botão de login

**Resultado Esperado**: Mensagem de erro clara Invalid email or password

**Status**: Passou / Automatizado

---

## CT04 - Caracteres da senha devem ficar ocultos
**Funcionalidade**: UX - Segurança visual

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a tela de login
2. Digitar qualquer valor no campo senha

**Resultado Esperado**: Os caracteres devem ser ocultados com a tipagem "password"

**Status**: Passou / Automatizado

---

## CT005 - Botão Logout admin
**Funcionalidade**: Logout

**Pré-condições**: Ter um usuário valido logado (comum ou admin)

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com um usuário válido
3. Preencher o campo senha 
4. Clicar no botão de login
5. Verificar se o botão de logout aparece na interface

**Resultado Esperado**: Após a autenticação, o botão de logout deve estar visível no canto superior da interface.

**Status**: Passou / Automatizado

---

## CT006 - Funcionamento Logout admin
**Funcionalidade**: Logout

**Pré-condições**: Ter um usuário valido logado (comum ou admin)

**Passos**:
1. Estar com usuário logado (comum ou admin)
2. Verificar se o botão de LOGOUT esta visivel
3. Clicar no botão de Logout

**Resultado Esperado**: Após o click no botão LOGOUT o usuário é redirecionado para pagina de login.

**Status**: Passou / Automatizado

---