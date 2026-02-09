# Ortobom Empório Marista - Next.js 15 (SSG)

Site da Ortobom Goiânia migrado de React/Vite SPA para **Next.js 15 com Static Site Generation (SSG)**, otimizado para SEO.

## 🚀 Deploy

### Netlify
```bash
# Build command
npm run build

# Publish directory
out/
```

O `netlify.toml` já está configurado. Basta conectar o repositório ao Netlify.

### Local
```bash
npm install
npm run build    # Gera site estático em /out
npm run dev      # Desenvolvimento local
```

## 📁 Estrutura

```
app/
├── layout.tsx              # Layout global + Schema LocalBusiness
├── page.tsx                # Home (antiga Marista)
├── globals.css             # Tailwind + estilos globais
├── sitemap.ts              # Sitemap automático
├── robots.ts               # robots.txt
├── not-found.tsx            # Página 404
├── galeria/page.tsx         # Galeria (antiga Index/gallery)
└── colchao/[slug]/page.tsx  # Páginas de produto (SSG)

components/                  # Todos os componentes migrados
lib/
├── products.ts              # Dados dos produtos + SEO
└── utils.ts                 # Utilitários (cn)
```

## 📄 Páginas Geradas

| URL | Descrição |
|-----|-----------|
| `/` | Home - Landing page Marista |
| `/galeria/` | Galeria de produtos |
| `/colchao/pillow-top/` | Colchão Pillow Top |
| `/colchao/liberty/` | Colchão Liberty |
| `/colchao/bellona/` | Colchão Bellona |
| `/colchao/absolut/` | Colchão Absolut |
| `/colchao/orion/` | Colchão Orion |
| `/colchao/orthopur/` | Colchão Orthopur |
| `/sitemap.xml` | Sitemap automático |
| `/robots.txt` | Robots.txt |

## ✅ Checklist SEO Implementado

### Técnico
- [x] SSG completo — HTML pré-renderizado (conteúdo visível para Google)
- [x] `output: 'export'` — site 100% estático
- [x] Sitemap.xml gerado automaticamente
- [x] robots.txt configurado
- [x] Canonical tags em todas as páginas
- [x] Trailing slashes habilitados

### On-Page (Páginas de Produto)
- [x] H1 com keyword no início ("Colchão [Nome] Ortobom em Goiânia")
- [x] Meta title otimizado por página
- [x] Meta description otimizado por página
- [x] Texto rico (300-500 palavras) com keyword nas primeiras linhas
- [x] Especificações técnicas em tabela
- [x] Benefícios listados
- [x] CTA WhatsApp com texto personalizado por produto
- [x] Breadcrumb navigation
- [x] Links internos entre produtos ("Outros Colchões")
- [x] Imagens com alt text descritivo

### Structured Data (Schema.org)
- [x] LocalBusiness (layout global)
- [x] Product (cada página de produto)
- [x] FAQPage (home)
- [x] AggregateRating

### Open Graph & Social
- [x] og:title, og:description, og:image por página
- [x] og:locale pt_BR
- [x] Twitter Card tags
- [x] Geo meta tags (Local SEO)

### Conteúdo AI-Optimized
- [x] AIOptimizedContent com schema markup (galeria)
- [x] Conteúdo semântico para crawlers de IA

## 🔄 Mudanças em relação ao projeto original

1. **React/Vite SPA → Next.js 15 SSG** — conteúdo agora renderizado em HTML estático
2. **React Router → Next.js App Router** — rotas baseadas em arquivos
3. **React Helmet → Next.js Metadata API** — metadata nativa do framework
4. **`/gallery` → `/galeria/`** — URL em português para SEO local
5. **6 novas páginas de produto** — `/colchao/[slug]/` com conteúdo SEO rico
6. **Sitemap e robots.txt** — gerados automaticamente
7. **Schema.org Product** — dados estruturados por produto
8. **Breadcrumbs** — navegação em todas as páginas de produto
9. **Links internos** — produtos relacionados em cada página
10. **`output: 'export'`** — deploy estático para Netlify (sem servidor)
