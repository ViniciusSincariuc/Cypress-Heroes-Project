# CT001 - Login com credenciais válidas

**Objetivo:**  
Verificar se o sistema realiza autenticação corretamente para usuários com perfis distintos (comum e admin).

---

## Pré-condições:

- Usuários de teste cadastrados:
  - Comum: `test@test.com` / `test123`
  - Admin: `admin@test.com` / `test123`
- Aplicação rodando localmente (`localhost:3000`)

---

## Passos para execução:

1. Acessar a URL `http://localhost:3000/login`
2. Inserir o e-mail e senha válidos
3. Clicar no botão "Login"

---

## Resultado Esperado:

### 🔸 Para usuário **comum** (`test@test.com`):
- Redirecionamento para `/heroes`
- Lista de heróis visível
- Botão "Cadastrar" **não deve aparecer**
- Token salvo no `localStorage`
- Sem mensagens de erro

### 🔹 Para usuário **admin** (`admin@test.com`):
- Redirecionamento para `/heroes`
- Lista de heróis visível
- Botão "Cadastrar" **deve aparecer**
- Token salvo no `localStorage`
- Sem mensagens de erro

---

## Prioridade:  
Alta

## Tipo de teste:  
Manual

## Relacionado ao Jira:  
CHQA-001
