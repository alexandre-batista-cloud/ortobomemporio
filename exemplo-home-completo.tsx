/**
 * EXEMPLO COMPLETO: Como usar os componentes AIO na sua página home
 * 
 * Este arquivo mostra exatamente onde colocar os componentes SEOHead e AIOptimizedContent
 * Cole este código no seu componente principal da home page
 */

import React from 'react';
import SEOHead from './components/SEOHead';
import AIOptimizedContent from './components/AIOptimizedContent';

// Seus componentes existentes (exemplo)
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      {/* 
        ═══════════════════════════════════════════════════════════
        🔥 ADICIONE ESTAS DUAS LINHAS NO TOPO DO SEU COMPONENTE 🔥
        ═══════════════════════════════════════════════════════════
      */}
      <SEOHead page="home" />
      <AIOptimizedContent />
      
      {/* 
        ════════════════════════════════════════════════════════
        Seu conteúdo normal continua abaixo (não mude nada)
        ════════════════════════════════════════════════════════
      */}
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <Hero />
        
        <Products />
        
        <Testimonials />
        
        <Contact />
        
        <Footer />
      </div>
    </>
  );
}

/**
 * ═══════════════════════════════════════════════════════════════════════
 * OUTRAS PÁGINAS (produtos, contato, etc.)
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Para outras páginas, use apenas o SEOHead com a prop 'page':
 */

// ─── Exemplo: Página de Produtos ───────────────────────────────────────
export function ProdutosPage() {
  return (
    <>
      <SEOHead page="produtos" />
      {/* Seu conteúdo de produtos */}
    </>
  );
}

// ─── Exemplo: Página de Contato ────────────────────────────────────────
export function ContatoPage() {
  return (
    <>
      <SEOHead page="contato" />
      {/* Seu conteúdo de contato */}
    </>
  );
}

/**
 * ═══════════════════════════════════════════════════════════════════════
 * IMPORTANTE: AIOptimizedContent
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Use AIOptimizedContent APENAS na página HOME.
 * 
 * Por quê?
 * - Ele contém todo o contexto estruturado da empresa
 * - IAs geralmente acessam a home first
 * - Evita conteúdo duplicado
 * 
 * Se quiser conteúdo específico em outras páginas, crie variações:
 * <AIOptimizedContent page="produtos" />
 */
