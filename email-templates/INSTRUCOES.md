# Como Configurar os Templates de Email no Supabase

## 1. Acesse o Dashboard do Supabase

1. Vá para https://supabase.com/dashboard
2. Selecione seu projeto "Vogel Research"
3. No menu lateral, clique em **Authentication**
4. Clique na aba **Email Templates**

## 2. Configure o Template de Reset de Senha

1. Selecione **"Reset Password"** na lista de templates
2. Cole o conteúdo do arquivo `password-reset.html` no editor HTML
3. Configure o assunto (Subject):
   ```
   Recuperação de Senha - Vogel Research
   ```
4. Clique em **Save** para salvar

## 3. Variáveis Disponíveis

O Supabase substitui automaticamente estas variáveis:

- `{{ .ConfirmationURL }}` - URL completa para redefinir a senha
- `{{ .Token }}` - Token de recuperação
- `{{ .TokenHash }}` - Hash do token
- `{{ .Email }}` - Email do usuário
- `{{ .SiteURL }}` - URL do seu site

## 4. Outros Templates (Opcional)

Você pode customizar outros templates seguindo o mesmo padrão:

### Confirm Signup (Confirmação de Cadastro)
- Usado quando um novo usuário se registra
- Assunto: "Confirme seu cadastro - Vogel Research"

### Invite User (Convite de Usuário)
- Usado para convidar novos usuários
- Assunto: "Você foi convidado para a Vogel Research"

### Magic Link (Link Mágico)
- Login sem senha via email
- Assunto: "Seu link de acesso - Vogel Research"

### Change Email (Mudança de Email)
- Confirmar mudança de email
- Assunto: "Confirme seu novo email - Vogel Research"

## 5. Teste

Após configurar:

1. Acesse https://www.vogelresearch.com/esqueci-senha
2. Digite seu email
3. Verifique se o email chegou com o novo design
4. Teste o botão "Redefinir Senha"

## 6. Dicas

- **Preview**: O Supabase mostra um preview do email antes de salvar
- **Teste**: Envie emails de teste antes de publicar
- **Mobile**: O template é responsivo e funciona em mobile
- **Cores**: As cores seguem a identidade visual da Vogel Research:
  - Verde escuro: #0E4F3D
  - Dourado: #BFA66B
  - Preto: #0A0E0D

## 7. Troubleshooting

Se o email não chegar:
- Verifique a pasta de spam
- Confirme que o email está cadastrado no Supabase
- Verifique os logs em Authentication → Logs no dashboard

Se o link não funcionar:
- Verifique se as Redirect URLs estão configuradas corretamente
- O link expira em 1 hora
- Certifique-se de estar usando HTTPS em produção
