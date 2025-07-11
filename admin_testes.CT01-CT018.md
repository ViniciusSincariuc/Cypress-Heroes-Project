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

**Resultado Esperado**: Exibição de mensagem de erro informando falha na autenticação.

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

**Resultado Esperado**: Exibição de mensagem de erro informando falha na autenticação.

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

**Resultado Esperado**: Mensagem de erro deve ser exibida.

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

## CT009 - Login com usuário administrador com espaços extras
**Funcionalidade**: Login

**Pré-condições**: Ter um usuário administrador cadastrado (`admin@test.com / test123`)

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com ` admin@test.com `
3. Preencher o campo senha com ` test123 `
4. Clicar no botão de login

**Resultado Esperado**: O sistema deve exibir uma mensagem de erro, impedindo o login por conta dos espaços extras.

**Status**: Passou / Automatizado

---

## CT010 - Login com usuário administrador e senha com caracteres inválidos
**Funcionalidade**: Validação de segurança

**Pré-condições**: Ter um usuário administrador cadastrado (`admin@test.com`)

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com `admin@test.com`
3. Preencher o campo senha com `admin123!@#`
4. Clicar no botão de login

**Resultado Esperado**: O sistema deve exibir mensagem de erro informando senha inválida.

**Status**: Passou / Automatizado

---

## CT011 - Usuário administrador edita herói com sucesso
**Funcionalidade**: Edição de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Navegar até a página de heróis
2. Clicar em editar um herói existente
3. Modificar um ou mais campos do herói
4. Salvar alterações

**Resultado Esperado**: Herói é atualizado com sucesso e refletido na listagem.

**Status**: Passou / Automatizado

---

## CT012 - Administrador deleta herói pela listagem
**Funcionalidade**: Exclusão de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Navegar até a página de heróis
2. Clicar no botão de deletar em um herói
3. Confirmar a exclusão

**Resultado Esperado**: Herói é removido da listagem.

**Status**: Passou / Automatizado

---

## CT013 - Criar herói com todos os campos preenchidos corretamente
**Funcionalidade**: Cadastro de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Acessar tela de criação de herói
2. Preencher todos os campos obrigatórios
3. Clicar em salvar

**Resultado Esperado**: Novo herói é criado e aparece na listagem.

**Status**: Passou / Automatizado

---

## CT014 - Criar herói com campos em branco
**Funcionalidade**: Cadastro de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Acessar tela de criação de herói
2. Deixar campos obrigatórios em branco
3. Clicar em salvar

**Resultado Esperado**: Mensagens de erro são exibidas e herói não é criado.

**Status**: Passou / Automatizado

---

## CT015 - Criar herói com valores negativos
**Funcionalidade**: Cadastro de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Acessar tela de criação de herói
2. Informar valores negativos para preço, fãs ou salvos
3. Clicar em salvar

**Resultado Esperado**: Sistema impede a criação e exibe mensagens de erro.

**Status**: Passou / Automatizado

---

## CT016 - Criar herói com nome duplicado
**Funcionalidade**: Cadastro de Heróis

**Pré-condições**: Estar logado como `admin@test.com` e ter um herói com nome "HeroX" cadastrado

**Passos**:
1. Acessar tela de criação de herói
2. Preencher os campos com nome "HeroX"
3. Clicar em salvar

**Resultado Esperado**: Sistema deve exibir erro informando que o nome já existe.

**Status**: Passou / Automatizado

---

## CT017 - Adicionar múltiplos poderes ao herói
**Funcionalidade**: Cadastro de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Acessar tela de criação de herói
2. Selecionar dois ou mais poderes
3. Preencher os demais campos e salvar

**Resultado Esperado**: Herói é criado com os poderes selecionados corretamente.

**Status**: Passou / Automatizado

---

## CT018 - Editar imagem de um herói
**Funcionalidade**: Edição de Heróis

**Pré-condições**: Estar logado como `admin@test.com`

**Passos**:
1. Acessar tela de edição de herói
2. Alterar o link da imagem
3. Salvar alterações

**Resultado Esperado**: Imagem do herói é atualizada com sucesso.

**Status**: Passou / Automatizado

---

