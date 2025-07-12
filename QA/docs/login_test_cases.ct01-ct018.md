# Casos de Teste - Login

Este documento descreve os casos de teste relacionados à funcionalidade de login do projeto **Cypress Heroes**. Cada caso contém uma descrição clara dos objetivos, pré-condições, passos e resultados esperados.

---

## CT001 - Login com usuário válido
**Funcionalidade**: Login

**Pré-condições**: Ter um usuário comum cadastrado (`test@test.com / test123`)

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com `test@test.com`
3. Preencher o campo senha com `test123`
4. Clicar no botão de login

**Resultado Esperado**: O usuário é autenticado com sucesso e redirecionado à tela de heróis.

**Status**: Passou / Automatizado

---

## CT002 - Login com usuário administrador válido
**Funcionalidade**: Login

**Pré-condições**: Ter um usuário admin cadastrado (`admin@test.com / test123`)

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com `admin@test.com`
3. Preencher o campo senha com `test123`
4. Clicar no botão de login

**Resultado Esperado**: O usuário é autenticado com sucesso e redirecionado à tela de heróis com permissões de administrador.

**Status**: Passou / Automatizado

---

## CT003 - Email correto e senha incorreta
**Funcionalidade**: Login

**Pré-condições**: Usuário `test@test.com` cadastrado

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com `test@test.com`
3. Preencher o campo senha com valor incorreto
4. Clicar no botão de login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT004 - Email incorreto e senha correta
**Funcionalidade**: Login

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com valor inexistente
3. Preencher o campo senha com `test123`
4. Clicar no botão de login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT005 - Email e senha incorretos
**Funcionalidade**: Login

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com valor incorreto
3. Preencher o campo senha com valor incorreto
4. Clicar no botão de login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT006 - Campos de login em branco
**Funcionalidade**: Validação de campos obrigatórios

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Deixar os campos de email e senha em branco
3. Clicar no botão de login

**Resultado Esperado**: Mensagem de erro informando que os campos são obrigatórios deve ser exibida.

**Status**: Passou / Automatizado

---

## CT007 - Apenas email preenchido
**Funcionalidade**: Validação de campos obrigatórios

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Preencher somente o campo de email
3. Deixar o campo de senha em branco
4. Clicar no botão de login

**Resultado Esperado**: Mensagem de erro informando campo obrigatório para senha.

**Status**: Passou / Automatizado

---

## CT008 - Apenas senha preenchida
**Funcionalidade**: Validação de campos obrigatórios

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Deixar o campo de email em branco
3. Preencher apenas o campo de senha
4. Clicar no botão de login

**Resultado Esperado**: Mensagem de erro informando campo obrigatório para email.

**Status**: Passou / Automatizado

---

## CT009 - Email com formato inválido
**Funcionalidade**: Validação de formato de email

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email em formato inválido (ex: `teste@com`)
3. Informar senha válida
4. Clicar no botão de login

**Resultado Esperado**: Mensagem de erro sobre o formato do email.

**Status**: Passou / Automatizado

---

## CT010 - Senha com caracteres inválidos
**Funcionalidade**: Validação de senha

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email válido
3. Preencher o campo senha com caracteres inválidos
4. Clicar no botão de login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT011 - Espaço antes do email
**Funcionalidade**: Validação de formatação

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar o email com um espaço antes (ex: ` test@test.com`)
3. Preencher senha válida
4. Clicar no botão de login

**Resultado Esperado**: Exibição de erro de login.

**Resultado Obtido**: login efetuado com sucesso e Acesso a pagina principal

**Status**: Falhou / Automatizado

---

## CT012 - Espaço após o email
**Funcionalidade**: Validação de formatação

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar o email com espaço após (ex: `test@test.com `)
3. Preencher senha válida
4. Clicar em login

**Resultado Esperado**: Exibição de erro de login.

**Resultado Obtido**: login efetuado com sucesso e Acesso a pagina principal

**Status**: Falhou / Automatizado

---

## CT013 - Espaço antes da senha
**Funcionalidade**: Validação de formatação

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email válido
3. Informar senha com espaço antes (ex: ` test123`)
4. Clicar em login

**Resultado Esperado**: Exibição de erro de login.

**Status**: Passou / Automatizado

---

## CT014 - Espaço após a senha
**Funcionalidade**: Validação de formatação

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email válido
3. Informar senha com espaço depois (ex: `test123 `)
4. Clicar em login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT015 - Espaços no meio do email
**Funcionalidade**: Validação de formatação

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email com espaço no meio (ex: `test @test.com`)
3. Informar senha válida
4. Clicar em login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT016 - Senha com formato inválidos
**Funcionalidade**: Validação de senha

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email válido
3. Preencher o campo senha com formato inválidos (ex: '@#123')
4. Clicar no botão de login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT017 - Espaços no meio do senha
**Funcionalidade**: Validação de formatação

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email valido
3. Informar senha com espaço no meio (ex: 'test 123')
4. Clicar em login

**Resultado Esperado**: Exibição de mensagem de erro informando email ou senha inválidos.

**Status**: Passou / Automatizado

---

## CT018 - Email com caracteres inválido
**Funcionalidade**: Validação de formato de email

**Pré-condições**: Nenhuma

**Passos**:
1. Acessar a página de login
2. Informar email em formato inválido (ex: `#teste@test.com`)
3. Informar senha válida
4. Clicar no botão de login

**Resultado Esperado**: Mensagem de erro sobre o formato do email.

**Status**: Passou / Automatizado

---


