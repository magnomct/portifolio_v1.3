# carlosmagno.cloudengineer — Portfolio v1.3

<div align="center">

**[🇺🇸 English](#english) | [🇧🇷 Português-BR](#português-br)**

</div>

---

## English

### Overview

Personal portfolio for **Carlos Magno Cordeiro da Silva** — Cloud Engineer, SRE & DevOps.

Built as a full-screen slide-deck single-page application (SPA) with 11 slides covering expertise, cloud platforms, projects, certifications, and contact information.

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (SPA via Vite) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v3 (mobile-first) |
| Icons | Lucide React |
| Build Tool | Vite 5 |
| Linter | ESLint 9 (flat config) |

### Project Structure

```
portifolio_v1.3/
├── public/
│   └── favicon.svg              # SVG favicon
├── src/
│   ├── assets/                  # Static images, SVGs
│   ├── components/              # Reusable UI components
│   │   ├── CtaRow.tsx
│   │   ├── Deck.tsx             # Slide deck orchestrator
│   │   ├── Kicker.tsx
│   │   ├── NavDots.tsx
│   │   ├── Navigation.tsx       # Bottom navigation bar
│   │   ├── Panel.tsx
│   │   ├── ProjectStep.tsx
│   │   ├── Slide.tsx            # Individual slide container
│   │   ├── StatPanel.tsx
│   │   ├── StatusBar.tsx
│   │   ├── Tag.tsx
│   │   ├── TagList.tsx
│   │   └── Timeline.tsx
│   ├── context/                 # Global state providers
│   ├── data/
│   │   └── portfolio.ts         # All portfolio content data
│   ├── features/                # Feature-specific slide modules
│   │   ├── hero/
│   │   ├── executive-summary/
│   │   ├── problems-solutions/
│   │   ├── case-study/
│   │   ├── cloud-platforms/
│   │   ├── devops-stack/
│   │   ├── ai-differentiator/
│   │   ├── certifications/
│   │   ├── trajectory/
│   │   ├── social-proof/
│   │   └── contact/
│   ├── hooks/
│   │   ├── useSlideNavigation.ts  # Keyboard, touch, swipe nav
│   │   └── useTheme.ts
│   ├── lib/
│   │   └── utils.ts               # cn() utility (clsx + tailwind-merge)
│   ├── routes/
│   │   └── App.tsx                # Root app — assembles all slides
│   ├── types/
│   │   └── index.ts               # Global TypeScript interfaces
│   ├── index.css                  # Global styles + Tailwind directives
│   └── main.tsx                   # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

### Slide Navigation

| Method | Action |
|---|---|
| `←` / `→` arrow keys | Previous / Next slide |
| `PageUp` / `PageDown` | Previous / Next slide |
| Number keys `1`–`9` | Jump to slide N |
| Swipe left/right | Mobile touch navigation |
| Nav dots (bottom center) | Click to jump to any slide |
| Prev/Next buttons | Bottom left/right buttons |

### Local Development

#### Prerequisites
- Node.js 18+
- npm 9+

#### Install & Run

```bash
# Clone the repository
git clone https://github.com/magnomct/carlosmagno-cloudengineer.git
cd carlosmagno-cloudengineer

# Install dependencies
npm install

# Start dev server (opens http://localhost:5173)
npm run dev
```

#### Other Commands

```bash
# Type check only (no emit)
npm run type-check

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Publishing to a Web Server

### 1. Production Build

```bash
npm run build
```

This generates a `dist/` folder with optimized static files (HTML, CSS, JS, assets).

---

### 2. Vercel (Recommended — Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root (auto-detects Vite)
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

**Vercel settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

### 3. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag & drop the `dist/` folder at [netlify.com/drop](https://app.netlify.com/drop).

Create `netlify.toml` in the project root for SPA routing support:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 4. GitHub Pages

1. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
"homepage": "https://magnomct.github.io/carlosmagno-cloudengineer",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Add `base` to `vite.config.ts` (if deploying to a sub-path):

```ts
export default defineConfig({
  base: '/carlosmagno-cloudengineer/',
  // ...
})
```

4. Deploy:

```bash
npm run deploy
```

---

### 5. Nginx (Self-hosted / VPS)

```bash
# Build
npm run build

# Copy dist/ to web root
sudo cp -r dist/* /var/www/html/

# Nginx config (/etc/nginx/sites-available/portfolio)
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/html;
    index index.html;

    # SPA fallback — all routes serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|svg|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Enable gzip
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

Enable HTTPS with Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### 6. Apache (Self-hosted)

```bash
# Copy dist/ to web root
sudo cp -r dist/* /var/www/html/
```

Create `/var/www/html/.htaccess`:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

---

### 7. AWS S3 + CloudFront (Cloud Deploy)

```bash
# Install AWS CLI and configure credentials
aws configure

# Create S3 bucket (replace with your bucket name)
aws s3 mb s3://carlosmagno-portfolio

# Build and sync
npm run build
aws s3 sync dist/ s3://carlosmagno-portfolio --delete

# Enable static website hosting
aws s3 website s3://carlosmagno-portfolio \
  --index-document index.html \
  --error-document index.html
```

**CloudFront distribution** (recommended for HTTPS + CDN):

1. Go to AWS Console → CloudFront → Create Distribution
2. Origin: your S3 website endpoint
3. Default root object: `index.html`
4. Create a custom error response: `404` → `/index.html` → `200` (SPA routing)
5. Point your domain via Route 53

---

### 8. OCI Object Storage (Oracle Cloud)

```bash
# Install OCI CLI
pip install oci-cli
oci setup config

# Create bucket and enable public access
oci os bucket create --name portfolio --compartment-id <OCID>

# Build and upload
npm run build
oci os object bulk-upload --bucket-name portfolio --src-dir dist/

# Enable static website hosting on OCI Object Storage
# → Bucket Settings → Static Website → Index document: index.html
```

---

## License

MIT — Free to use as a personal portfolio template.

---

---

## Português-BR

### Visão Geral

Portfólio pessoal de **Carlos Magno Cordeiro da Silva** — Cloud Engineer, SRE & DevOps.

Desenvolvido como um SPA em formato de deck de slides full-screen, com 11 slides cobrindo expertise, plataformas cloud, projetos, certificações e contato.

### Stack Tecnológico

| Camada | Tecnologia |
|---|---|
| Framework | React 19 (SPA via Vite) |
| Linguagem | TypeScript 5 (modo estrito) |
| Estilização | Tailwind CSS v3 (mobile-first) |
| Ícones | Lucide React |
| Build | Vite 5 |
| Linter | ESLint 9 (flat config) |

### Estrutura do Projeto

```
portifolio_v1.3/
├── public/
│   └── favicon.svg              # Favicon SVG
├── src/
│   ├── assets/                  # Imagens e arquivos estáticos
│   ├── components/              # Componentes reutilizáveis
│   ├── context/                 # Provedores de estado global
│   ├── data/
│   │   └── portfolio.ts         # Todos os dados do portfólio
│   ├── features/                # Módulos de slides por funcionalidade
│   ├── hooks/                   # Custom hooks globais
│   ├── lib/
│   │   └── utils.ts             # Utilitário cn() (clsx + tailwind-merge)
│   ├── routes/
│   │   └── App.tsx              # Componente raiz — monta todos os slides
│   ├── types/
│   │   └── index.ts             # Interfaces TypeScript globais
│   ├── index.css                # Estilos globais + diretivas Tailwind
│   └── main.tsx                 # Ponto de entrada React
└── ...config files
```

### Navegação por Slides

| Método | Ação |
|---|---|
| Teclas `←` / `→` | Slide anterior / próximo |
| `PageUp` / `PageDown` | Slide anterior / próximo |
| Teclas numéricas `1`–`9` | Ir para o slide N |
| Swipe esquerda/direita | Navegação por toque (mobile) |
| Dots de navegação | Clique para ir a qualquer slide |
| Botões Prev/Next | Cantos inferiores |

### Desenvolvimento Local

#### Pré-requisitos
- Node.js 18+
- npm 9+

#### Instalação e Execução

```bash
# Clonar o repositório
git clone https://github.com/magnomct/carlosmagno-cloudengineer.git
cd carlosmagno-cloudengineer

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

#### Outros Comandos

```bash
# Verificar tipos TypeScript (sem emitir)
npm run type-check

# Executar linter
npm run lint

# Build de produção
npm run build

# Visualizar build de produção localmente
npm run preview
```

---

## Publicando em um Servidor Web

### 1. Build de Produção

```bash
npm run build
```

Gera a pasta `dist/` com arquivos estáticos otimizados (HTML, CSS, JS, assets).

---

### 2. Vercel (Recomendado — Mais Fácil)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy (detecta Vite automaticamente)
vercel

# Deploy de produção
vercel --prod
```

Ou conecte seu repositório GitHub em [vercel.com](https://vercel.com) para deploys automáticos a cada push.

**Configurações Vercel:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

### 3. Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Crie `netlify.toml` na raiz do projeto:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 4. GitHub Pages

1. Instale o pacote `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
"homepage": "https://magnomct.github.io/carlosmagno-cloudengineer",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Execute o deploy:
```bash
npm run deploy
```

---

### 5. Nginx (VPS / Servidor Próprio)

```bash
npm run build
sudo cp -r dist/* /var/www/html/
```

Config do Nginx (`/etc/nginx/sites-available/portfolio`):

```nginx
server {
    listen 80;
    server_name seudominio.com;

    root /var/www/html;
    index index.html;

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de assets estáticos
    location ~* \.(js|css|png|svg|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

HTTPS com Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seudominio.com
```

---

### 6. AWS S3 + CloudFront

```bash
# Configure credenciais AWS
aws configure

# Criar bucket
aws s3 mb s3://carlosmagno-portfolio

# Build e sync
npm run build
aws s3 sync dist/ s3://carlosmagno-portfolio --delete

# Habilitar hospedagem estática
aws s3 website s3://carlosmagno-portfolio \
  --index-document index.html \
  --error-document index.html
```

Para HTTPS com CloudFront:
1. Crie uma distribuição no AWS Console → CloudFront
2. Origin: endpoint do bucket S3
3. Custom error: `404` → `/index.html` → `200` (roteamento SPA)

---

### 7. OCI Object Storage (Oracle Cloud)

```bash
# Instalar OCI CLI
pip install oci-cli
oci setup config

# Criar bucket
oci os bucket create --name portfolio --compartment-id <OCID>

# Build e upload
npm run build
oci os object bulk-upload --bucket-name portfolio --src-dir dist/
```

---

## Licença

MIT — Livre para uso como template de portfólio pessoal.
