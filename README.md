# Vogel Research

Site institucional e plataforma de assinaturas da Vogel Research - análise de ações americanas.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (opcional)
- **Language:** TypeScript

## Estrutura do Projeto

```
vogel-research/
├── app/
│   ├── globals.css      # Estilos globais + Tailwind
│   ├── layout.tsx       # Layout raiz com metadata
│   └── page.tsx         # Landing page principal
├── components/
│   ├── Header.tsx       # Navegação + Logo
│   ├── Hero.tsx         # Seção principal
│   ├── About.tsx        # Sobre o Bruno/Vogel
│   ├── Services.tsx     # O que oferecemos
│   ├── Pricing.tsx      # Planos de assinatura
│   ├── FAQ.tsx          # Perguntas frequentes
│   ├── CTA.tsx          # Call to action final
│   ├── Footer.tsx       # Rodapé
│   └── index.ts         # Exports centralizados
├── public/              # Assets estáticos
├── lib/                 # Utilitários (futuro)
└── ...config files
```

## Getting Started

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 3. Build para produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Push o código para um repositório GitHub
2. Conecte o repositório na Vercel
3. Configure as variáveis de ambiente (se houver)
4. Deploy automático a cada push

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Escuro | `#0E4F3D` | Backgrounds, acentos |
| Verde | `#18785A` | Elementos secundários |
| Dourado | `#BFA66B` | CTAs, destaques, links |
| Preto | `#111111` | Background principal |
| Off-white | `#F7F7F4` | Texto principal |
| Cinza | `#9A9A9A` | Texto secundário |

## Próximos Passos

- [ ] Adicionar foto do Bruno na seção Sobre
- [ ] Conectar links de redes sociais reais
- [ ] Implementar página de assinatura (`/assinar`)
- [ ] Integrar sistema de pagamento (MercadoPago/PagSeguro)
- [ ] Criar área de membros com autenticação
- [ ] Configurar domínio na Vercel

## Contato

contato@vogelresearch.com
