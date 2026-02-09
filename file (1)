# 🚀 Guia de Implementação AIO - ortobomgoiania.com.br

## 📦 Arquivos Gerados

✅ **SEOHead.tsx** - Meta tags + Schema markup  
✅ **AIOptimizedContent.tsx** - Conteúdo estruturado oculto  
✅ **IMPLEMENTACAO_AIO.md** - Este guia

---

## 🎯 O QUE FAZER (passo a passo)

### **PASSO 1: Instalar dependências**

```bash
npm install react-helmet-async
# ou
yarn add react-helmet-async
```

---

### **PASSO 2: Adicionar os arquivos ao projeto**

Copie os arquivos para a estrutura do seu projeto React:

```
src/
├── components/
│   ├── SEOHead.tsx          ← Cole aqui
│   └── AIOptimizedContent.tsx   ← Cole aqui
└── App.tsx
```

---

### **PASSO 3: Configurar o HelmetProvider**

No arquivo principal (`main.tsx` ou `index.tsx`), envolva o app com `HelmetProvider`:

```tsx
// main.tsx (ou index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
```

---

### **PASSO 4: Usar os componentes nas páginas**

#### **Página Home (principal)**

```tsx
// Em qualquer página/componente
import SEOHead from './components/SEOHead';
import AIOptimizedContent from './components/AIOptimizedContent';

export default function HomePage() {
  return (
    <>
      {/* SEO + Schema */}
      <SEOHead page="home" />
      
      {/* Conteúdo oculto para IAs */}
      <AIOptimizedContent />
      
      {/* Seu conteúdo normal continua aqui */}
      <header>
        <h1>Seu novo colchão Ortobom está aqui.</h1>
        {/* ... resto do componente ... */}
      </header>
    </>
  );
}
```

#### **Outras páginas**

```tsx
// Página de produtos
<SEOHead page="produtos" />

// Página de contato
<SEOHead page="contato" />
```

---

### **PASSO 5: Corrigir o título no index.html**

Edite o arquivo `index.html` na raiz do projeto:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Título base (será substituído pelo SEOHead) -->
    <title>Ortobom Goiânia - Colchões no Marista</title>
    
    <!-- ADICIONE ESTAS META TAGS BÁSICAS -->
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <link rel="canonical" href="https://ortobomgoiania.com.br" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 🎨 CSS para Conteúdo Oculto

Se não tiver a classe `.sr-only`, adicione no seu CSS global:

```css
/* src/index.css */

/* Screen Reader Only - oculta visualmente mas mantém acessível para IAs */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 🔍 VALIDAÇÃO (como testar)

### **1. Testar Schema Markup**

Acesse: https://validator.schema.org/

Cole o código HTML gerado ou a URL do site.

✅ **Deve mostrar:**
- LocalBusiness ✓
- FAQPage ✓
- Organization ✓

---

### **2. Testar Meta Tags**

Use: https://www.opengraph.xyz/

Valida Open Graph (Facebook/WhatsApp preview).

---

### **3. Testar no Google**

1. Publique o site
2. Vá em: https://search.google.com/search-console
3. Use "Inspeção de URL"
4. Verifique se o schema foi detectado

---

### **4. Testar com IAs**

Pergunte ao ChatGPT, Perplexity ou Claude:

```
"Onde fica a loja Ortobom em Goiânia?"
"Qual o horário da Ortobom Marista?"
"Qual a avaliação da Ortobom Goiânia?"
```

✅ Se implementado corretamente, as IAs vão **citar seu site** com dados precisos.

---

## ⚠️ PROBLEMAS COMUNS E SOLUÇÕES

### **Problema 1: Schema não aparece no Google**

**Causa:** SPA (Single Page App) sem SSR.

**Solução:**
- Use Vite com `vite-plugin-ssr` ou
- Use Next.js (SSR nativo) ou
- Use Astro (SSG)

---

### **Problema 2: Meta tags não mudam entre páginas**

**Causa:** React Helmet não configurado corretamente.

**Solução:**
- Garanta que `<HelmetProvider>` está no arquivo raiz
- Use `<SEOHead page="home" />` em cada rota

---

### **Problema 3: Conteúdo oculto não é lido por IAs**

**Causa:** CSS muito agressivo (display: none).

**Solução:**
- Use a classe `.sr-only` (fornecida acima)
- **NUNCA** use `display: none` ou `visibility: hidden`

---

## 🚀 DEPLOY (CRÍTICO!)

Se estiver usando **Vite + React puro**, você precisa de **prerendering** para IAs lerem o conteúdo.

### **Opção A: Adicionar Prerendering ao Vite**

```bash
npm install vite-plugin-prerender
```

```js
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', '/produtos', '/contato'],
      renderer: 'puppeteer',
    }),
  ],
});
```

### **Opção B: Migrar para framework SSR**

- **Next.js** (recomendado, SSR nativo)
- **Astro** (SSG ultra-rápido)
- **Remix** (SSR moderno)

---

## 📊 RESULTADOS ESPERADOS

✅ **Google:** Schema markup válido  
✅ **IAs:** Citam seu site com dados precisos  
✅ **WhatsApp:** Preview bonito ao compartilhar  
✅ **SEO Local:** Aparecer em "colchão goiânia"  
✅ **Avaliações:** 4.9★ visível nas buscas

**Tempo até resultados:** 2-4 semanas

---

## 🆘 SUPORTE

Se tiver dúvidas:
1. Valide no schema.org validator
2. Teste com Google Rich Results Test
3. Me chame no WhatsApp: (62) 99614-8873

---

## 📝 CHECKLIST FINAL

Antes de dar deploy, confirme:

- [ ] `react-helmet-async` instalado
- [ ] `HelmetProvider` no arquivo raiz
- [ ] `SEOHead` importado na página home
- [ ] `AIOptimizedContent` importado na página home
- [ ] CSS `.sr-only` adicionado
- [ ] Título do `index.html` corrigido
- [ ] Meta tag `robots` adicionada
- [ ] Schema validado no schema.org
- [ ] OpenGraph validado no opengraph.xyz
- [ ] Site publicado e testado

---

**Bora implementar e dominar os resultados de IA! 🚀**
