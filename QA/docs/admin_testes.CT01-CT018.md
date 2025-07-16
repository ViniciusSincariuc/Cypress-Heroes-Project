# Casos de Teste - Funcionalidades Admin

**Contexto:** Todos os testes abaixo assumem que o usuário **admin** (`admin@test.com / test123`) já está autenticado no sistema e se encontra na tela de listagem de heróis.

---

## CT001 - Funcionalidades de admin
**Funcionalidade**: Permissões de Acesso (Admin)

**Pré-condições**: Ter um usuário administrador cadastrado (admin@test.com / test123)

**Passos**:
1. Acessar a página de login
2. Preencher o campo email com  `admin@test.com`
3. Preencher o campo senha com `test123`
4. Clicar no botão de login

**Resultado Esperado**: O sistema autentica o usuário com sucesso e exibe funcionalidades exclusivas de administrador (criar, editar e excluir heróis).

**Status**: Passou / Automatizado

---

## CT002 - Vereficar funcionalidade do botão Edit
**Funcionalidade**: Edição de Herói

**Pré-condições**: Estar autenticado como usuário administrador, ter pelo menos um herói listado na tela 

**Passos**:
1. Clicar no botão "Edit" de um herói da lista

**Resultado Esperado**: O sistema deve redirecionar para a tela de edição do herói selecionado.

**Status**: Passou / Automatizado

---

## CT003 - Verificar atualização dos dados após edição do herói
**Funcionalidade**: Edição de Herói

**Pré-condições**: Estar na tela de listagem de heróis e ter um herói previamente criado.

**Passos**:
1. Clicar no botão "Edit" de um herói da lista
2. Alterar um ou mais campos do formulário (ex: nome, preço, fãs, etc.)
3. Clicar no botão "Submit"

**Resultado Esperado**: Após o envio do formulário, o sistema deve retornar à tela de listagem e exibir os dados atualizados do herói editado.

**Status**: Passou / Automatizado

---

## CT004 - Atualização de poder do herói admin
**Funcionalidade**:  Edição de Herói

**Pré-condições**: Estar na tela de listagem de heróis e ter um herói previamente criado.

**Passos**:
1. Clicar no botão Editar de um herói existente
2. Atualizar o campo Poder com um novo valor
3. Clicar no botão Submit

**Resultado Esperado**: O valor do poder atualizado é exibido corretamente na página principal, refletindo a alteração realizada.

**Status**: Passou / Automatizado

---

## CT005 - Impedir múltiplos poderes simultâneos
**Funcionalidade**:  Criação/Edição de Herói

**Pré-condições**: Estar na tela de criação ou edição de herói

**Passos**:
1. Preencher os campos obrigatórios do herói
2. Selecionar múltiplos poderes simultaneamente (se possível via teclado ou manipulação)
3. Clicar no botão Submit

**Resultado Esperado**:  O sistema deve impedir a seleção de múltiplos poderes simultaneamente, permitindo apenas um por herói.

**Resultado Obtido**: Foi possível selecionar dois ou mais poderes ao mesmo tempo segurando a tecla Ctrl, e o sistema permitiu o envio do formulário normalmente.

**Status**: Falhou / Automatizado

---

## CT006 - Redirecionamento ao clicar no botão "Create New Hero"
**Funcionalidade**: Navegação

**Pré-condições**: star logado como administrador e na tela de listagem de heróis

**Passos**:
1. Localizar o botão Create New Hero
2. Clicar no botão

**Resultado Esperado**: O usuário deve ser redirecionado para a rota /new, onde é possível criar um novo herói.

**Status**: Passou / Automatizado

---

## CT007 - Criar um novo herói
**Funcionalidade**: Criação de Herói

**Pré-condições**: Estar logado como administrador e na rota /new

**Passos**:
1. Localizar o botão Create New Hero e clicar
2. Preencher os campos obrigatórios(Nome, Preço, fãs, like, powers)
3. Clicar em Submit

**Resultado Esperado**: O herói deve ser criado com sucesso e exibido na listagem principal.

**Status**: Passou / Automatizado

---

## CT008 - Adicionar imagem ao criar novo herói
**Funcionalidade**: Criação de Herói

**Pré-condições**: Estar logado como administrador e na rota /new

**Passos**:
1. Localizar o botão Create New Hero e clicar
2. Preencher os campos obrigatórios
3. Clicar no campo de upload de imagem
4. Selecionar uma imagem do computador
5. Clicar em Submit

**Resultado Esperado**: A imagem deve ser carregada corretamente no card de pré-visualização e o herói deve ser criado com a imagem exibida na listagem principal.

**Status**: Passou / Automatizado

---

## CT009 - Excluir herói pela página principal
**Funcionalidade**: Exclusão de Herói

**Pré-condições**: Estar logado como administrador e na tela de listagem de heróis com pelo menos um herói criado

**Passos**:
1. Localizar o herói desejado na listagem
2. Clicar no botão Delete correspondente ao herói
3. Confirmar a exclusão (se aplicável)

**Resultado Esperado**: O herói é removido da lista e não aparece mais na tela principal.

**Status**: Passou / Automatizado

---

## CT010 - Excluir herói pela tela de edição 
**Funcionalidade**: Exclusão de herói

**Pré-condições**: Estar logado como admin e Estar na tela de edição de um herói previamente criado

**Passos**:
1. Acessar a tela de edição de um herói existente
2. Clicar no botão Delete
3. Confirmar a exclusão (se houver confirmação)
4. Ser redirecionado para a listagem de heróis

**Resultado Esperado**: O herói excluído não deve mais aparecer na lista principal.

**Status**: Passou / Automatizado

---

## CT011 -  Verificar se consigo criar dois heróis com o mesmo nome
**Funcionalidade**: Criação de herói

**Pré-condições**: Estar na tela de criação de herói, estar logado como admin e ter um herói previamente criado com um nome específico. 

**Passos**:
1. Acessar a tela de criação de herói
2. Preencher os campos com os mesmos dados (nome) de um herói já existente
3. Clicar no botão Submit

**Resultado Esperado**: O sistema deve impedir a criação e exibir uma mensagem de erro informando que o nome já está em uso

**Resultado Obtido**: O sistema permitiu a criação de dois heróis com o mesmo nome

**Status**: Falhou / Automatizado

---

## CT012 - Verificar se após a criação os valores e informações estão corretos

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na tela de criação de herói

**Passos**:
1. Localizar o botão Create New Hero e clicar
2. Preencher todos os campos com valores válidos e distintos (nome, poderes, preço, fãs, saves, imagem)
3. Clicar no botão Submit
4. Ser redirecionado para a listagem de heróis
5. Localizar o herói recém criado


**Resultado Esperado**: As informações exibidas do herói (nome, poderes, preço, fãs, saves e imagem) devem ser exatamente as mesmas que foram preenchidas durante a criação

**Status**: Passou / Automatizado

---

## CT013 - Verificar se a foto do herói foi atualizada após edição pela página de edição

**Funcionalidade**: Edição de herói

**Pré-condições**: Estar logado como adm, estar na tela de listagem de heróise ter pelo menos um herói cadastrado com imagem definida

**Passos**:
1. Localizar um herói na listagem e clicar no botão de edição
2. Na tela de edição, alterar o campo da imagem
3. Clicar no botão Submit
4. Ser redirecionado para a listagem de heróis e procurar o mesmo

**Resultado Esperado**:A imagem do herói deve ser exibida atualizada na listagem após a submissão da edição.

**Status**: Passou / Automatizado

---

## CT014 - Verificar se aparece uma mensagem de erro ao criar um herói sem colocar nome

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Preencher todos os campos obrigatórios, exceto o campo 'nome'
2. Clicar no botão Submit

**Resultado Esperado**: Deve ser exibida uma mensagem de erro informando que o campo 'nome' é obrigatório

**Status**: Passou / Automatizado

---

## CT015 - Verificar se aparece uma mensagem de erro ao criar um herói sem colocar o preço

**Funcionalidade**: Criação de herói

**Pré-condições**:  Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Preencher todos os campos obrigatórios, exceto o campo 'preço'
2. Clicar no botão Submit

**Resultado Esperado**: Deve ser exibida uma mensagem de erro informando que o campo 'preço' é obrigatório

**Status**: Passou / Automatizado

---

## CT016 - Verificar se aparece uma mensagem de erro ao criar um herói sem preencher o campo fans

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Preencher todos os campos obrigatórios, exceto o campo 'fans'
2. Clicar no botão Submit

**Resultado Esperado**: Deve ser exibida uma mensagem de erro informando que o campo 'fans' é obrigatório

**Status**: Passou / Automatizado

---

## CT017 - Verificar se aparece uma mensagem de erro ao criar um herói sem preencher o campo saves

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Preencher todos os campos obrigatórios, exceto o campo 'saves'
2. Clicar no botão Submit

**Resultado Esperado**: Deve ser exibida uma mensagem de erro informando que o campo 'saves' é obrigatório

**Status**: Passou / Automatizado

---


## CT018 - Verificar se aparece uma mensagem de erro ao criar um herói sem selecionar poderes

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Preencher todos os campos obrigatórios, mas não selecionar nenhum poder
2. Clicar no botão Submit

**Resultado Esperado**: Deve ser exibida uma mensagem de erro informando que um poder deve ser selecionado

**Status**: Passou / Automatizado

---

## CT019 - Verificar se aparece mensagem de erro ao tentar criar um herói com todos os campos em branco

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Clicar diretamente em Submit, sem preencher nenhum campo

**Resultado Esperado**: Deve ser exibida uma mensagem de erro informando que todos os campos são obrigatórios

**Status**: Passou / Automatizado

---

## CT020 - Verificar se dá erro ao tentar criar um herói com números negativos

**Funcionalidade**: Criação de herói

**Pré-condições**: Estar logado como admin e estar na página de criação de novo herói (/new)

**Passos**:
1. Preencher todos os campos obrigatórios com valores válidos, exceto os campos numéricos, que devem receber valores negativos (ex: -100 para preço, -50 para fãs, -10 para saves)
2. Selecionar um poder
3. Clicar em Submit

**Resultado Esperado**: O sistema deve bloquear a criação do herói e exibir mensagens de erro para campos com valores negativos

**Resultado Obtido**: O herói foi criado mesmo com valores negativos, sem exibição de erro

**Status**: Falhou / Automatizado

---
