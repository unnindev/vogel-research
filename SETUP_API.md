# Configuração das APIs de Mercado

Este guia explica como configurar as APIs para obter dados de mercado em tempo real.

## 📊 APIs Utilizadas

### 1. Finnhub (Dados de Mercado)
- **Uso**: S&P 500, NASDAQ, DOW Jones, VIX
- **Plano**: Gratuito (60 chamadas/minuto)
- **Custo**: $0/mês

### 2. CNN Fear & Greed Index
- **Uso**: Índice de medo e ganância do mercado
- **Plano**: Endpoint público
- **Custo**: $0/mês (sem necessidade de API key)

## 🚀 Como Obter a API Key do Finnhub

### Passo 1: Criar Conta
1. Acesse: https://finnhub.io/register
2. Preencha o formulário de cadastro
3. Verifique seu email

### Passo 2: Obter API Key
1. Faça login em https://finnhub.io/dashboard
2. Copie sua API key que aparece na dashboard
3. A key será algo como: `xxxxxxxxxxxxxxxxxx`

### Passo 3: Configurar no Projeto
1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua `your_api_key_here` pela sua chave real:

```env
FINNHUB_API_KEY=sua_chave_aqui
```

### Passo 4: Reiniciar o Servidor
```bash
# Pare o servidor (Ctrl+C)
# Inicie novamente
npm run dev
```

## ✅ Verificar se Está Funcionando

1. Acesse o dashboard: http://localhost:3000/dashboard
2. Você deve ver os dados de mercado carregando
3. O indicador de cache mostrará "Atualizado há X min"
4. O Fear & Greed Index mostrará um valor entre 0-100

## 🔧 Solução de Problemas

### Erro: "FINNHUB_API_KEY não configurada"
- Verifique se você salvou o arquivo `.env.local`
- Verifique se a chave não tem espaços em branco
- Reinicie o servidor de desenvolvimento

### Erro: "Falha ao buscar dados de mercado"
- Verifique se sua chave está correta
- Verifique sua conexão com a internet
- Verifique se não ultrapassou o limite de 60 chamadas/minuto

### Dados Aparecem como Mock
- Isso é normal se a API key não estiver configurada
- Configure a chave seguindo os passos acima

## 📈 Limites e Cache

### Limites da API Gratuita
- Finnhub: 60 chamadas/minuto
- Com nosso cache de 30min: apenas **48 requisições/dia**
- Isso serve tranquilamente para 500+ usuários simultâneos

### Como Funciona o Cache
1. Server-side cache de **30 minutos**
2. Client-side refresh a cada **5 minutos**
3. Se a API falhar, usa dados em cache (stale data)

## 💰 Upgrade (Opcional)

Se no futuro você precisar de mais dados ou chamadas:

### Finnhub Premium
- $59.99/mês - 300 chamadas/minuto
- $99.99/mês - 600 chamadas/minuto
- Dados históricos adicionais
- Mais endpoints disponíveis

**Nota**: Para a maioria dos projetos, o plano gratuito é suficiente devido ao cache implementado.

## 📚 Referências

- [Finnhub API Documentation](https://finnhub.io/docs/api)
- [CNN Fear & Greed Index](https://www.cnn.com/markets/fear-and-greed)
- [Finnhub Dashboard](https://finnhub.io/dashboard)
