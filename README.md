# App Projeto - Stack: GitHub + Vercel + Supabase

Tipo: App Web com login + dashboard + API + pronto para escalar.

## 📋 Requisitos

- Node.js 18+
- npm ou yarn
- Conta Supabase (grátis)
- Conta Vercel (grátis)

## 1️⃣ Configuração Local

### Clone ou configure o projeto

```bash
npm install
```

### 2️⃣ Configure Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Vá para Settings → API
3. Copie suas credenciais:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

### 3️⃣ Configure variáveis de ambiente

Edite `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

### 4️⃣ Rode localmente

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
/app-projeto
 ├─ /app
 │   ├─ page.js           # Home
 │   ├─ /login
 │   │   └─ page.js       # Login com OTP
 │   └─ /dashboard
 │       └─ page.js       # Dashboard autenticado
 ├─ /lib
 │   └─ supabaseClient.js # Configuração Supabase
 ├─ .env.local            # Variáveis de ambiente
 ├─ package.json
 ├─ next.config.js
 └─ README.md
```

## 🚀 Deploy na Vercel

1. Push para GitHub:
```bash
git add .
git commit -m "primeira versao"
git push -u origin main
```

2. Vá para [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Conecte seu repositório GitHub
5. Adicione as mesmas variáveis de ambiente
6. Deploy automático!

## ✨ Funcionalidades Atuais

- ✅ Login com email (OTP)
- ✅ Dashboard autenticado
- ✅ Backend gratuito (Supabase)
- ✅ Deploy profissional (Vercel)
- ✅ Estrutura escalável

## 🔄 Próximas Funcionalidades

- [ ] Sistema de pagamento
- [ ] CRUD com banco de dados
- [ ] Integração de APIs externas
- [ ] App mobile (React Native)
- [ ] Sistema de backtest
- [ ] Automação avançada

## 📞 Suporte

Para dúvidas sobre:
- **Next.js**: [docs.nextjs.org](https://docs.nextjs.org)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)