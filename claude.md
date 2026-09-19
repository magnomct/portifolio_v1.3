# Projeto: carlosmagno.cloudengineer - Diretrizes de Desenvolvimento

## 🛠️ Stack Tecnológica de Referência
- **Framework:** React 19 (Single Page Application via Vite)
- **Linguagem:** TypeScript (Modo Estrito)
- **Estilização:** Tailwind CSS (Abordagem Mobile-First)
- **Componentes UI:** shadcn/ui + Lucide React (Ícones)
- **Roteamento:** TanStack Router (Ou react-router-dom v6)
- **Gerenciamento de Estado:** React Context para estado global leve / hooks nativos (useState, useReducer)

## 📁 Estrutura de Pastas Obrigatória
src/
├── assets/          # Imagens, SVGs e arquivos estáticos
├── components/      # Componentes globais e reutilizáveis (Ex: Button, Card)
├── features/        # Módulos isolados por funcionalidade (Ex: auth, dashboard)
│   └── [feature]/   # Componentes, hooks e tipos específicos da feature
├── hooks/           # Custom hooks globais
├── routes/          # Definições de rotas e páginas
├── context/         # Provedores de estado global (Context API)
└── types/           # Definições globais de TypeScript

## 📐 Padrões de Código e Arquitetura
- **Componentes:** Sempre use funções nomeadas exportadas diretamente (`export function NomeDoComponente()`). Evite `export default`.
- **Tipagem:** Prefira `interface` em vez de `type` para propriedades de componentes (`Props`).
- **Lógica e UI:** Separe efeitos colaterais e requisições HTTP em custom hooks (Ex: `useFetchData`). Mantenha os componentes focados na renderização.
- **Acessibilidade (a11y):** Garanta o uso correto de tags semânticas (main, section, nav) e atributos ARIA onde necessário.

## 🚀 Comandos Úteis
- Instalar dependências: `npm install`
- Executar servidor local: `npm run dev`
- Build de produção: `npm run build`
- Validação de tipos (Rodar antes de salvar mudanças): `npx tsc --noEmit`
- Linter / Formatação: `npm run lint`
