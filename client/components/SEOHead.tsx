import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Componente SEO otimizado para AIO (AI Optimization)
 * Implementa schema markup, meta tags e conteúdo estruturado
 * para melhorar visibilidade em IAs (ChatGPT, Perplexity, Claude)
 */

interface SEOHeadProps {
  page?: "home" | "produtos" | "contato";
}

export default function SEOHead({ page = "home" }: SEOHeadProps) {
  // Schema LocalBusiness (crítico para Google Maps + IAs)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ortobom Goiânia - Empório Marista",
    image: [
      "https://ortobomgoiania.com.br/logo.jpg",
      "https://ortobomgoiania.com.br/loja-fachada.jpg",
    ],
    "@id": "https://ortobomgoiania.com.br",
    url: "https://ortobomgoiania.com.br",
    telephone: "+55-62-99614-8873",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. 85, 2385 - St. Marista",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      postalCode: "74160-010",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.7026872,
      longitude: -49.264068,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "122",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.instagram.com/ortobomgoiania",
      "https://www.facebook.com/ortobomgoiania",
    ],
  };

  // Schema FAQ (perguntas frequentes otimizadas para IAs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Onde comprar colchão Ortobom em Goiânia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Ortobom Goiânia está localizada na Av. 85, 2385 - Setor Marista, em frente ao Empório Prime. Atendemos de segunda a sexta das 09h às 19h e sábado das 09h às 13h. WhatsApp: (62) 99614-8873",
        },
      },
      {
        "@type": "Question",
        name: "Qual o horário de funcionamento da Ortobom Marista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Segunda a Sexta: 09h às 19h. Sábado: 09h às 13h. Domingo: Fechado.",
        },
      },
      {
        "@type": "Question",
        name: "A Ortobom Goiânia faz entrega rápida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Entregamos em Goiânia em 1 dia útil. Produtos saem da fábrica com menos de 2 semanas de fabricação, muito mais frescos que encomendar pelo site oficial.",
        },
      },
      {
        "@type": "Question",
        name: "Tem estacionamento na loja Ortobom Marista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, temos estacionamento coberto na loja do Setor Marista. Localização estratégica com fácil acesso.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a avaliação da Ortobom Goiânia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "4.9 estrelas no Google com 122 avaliações. Referência em qualidade e atendimento em Goiás há 20 anos.",
        },
      },
    ],
  };

  // Schema Organization (credibilidade)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Ortobom Goiânia",
    alternateName: "Ortobom Empório Marista",
    url: "https://ortobomgoiania.com.br",
    logo: "https://ortobomgoiania.com.br/logo.jpg",
    description:
      "Loja Ortobom em Goiânia. Colchões com entrega rápida (1 dia), 4.9★ no Google, 20 anos no Marista. Consultores com 10+ anos de experiência, estacionamento coberto.",
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. 85, 2385",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      postalCode: "74160-010",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-62-99614-8873",
      contactType: "sales",
      availableLanguage: "Portuguese",
    },
  };

  const pageTitle = {
    home: "Ortobom Goiânia - Colchões em Goiânia | Loja Marista e Brasil Park",
    produtos: "Produtos Ortobom - Colchões em Goiânia | Entrega Rápida",
    contato: "Contato - Ortobom Goiânia | WhatsApp e Localização",
  };

  const pageDescription = {
    home: "Loja Ortobom em Goiânia. Colchões com entrega em 1 dia, 4.9★ (122 avaliações Google), 20 anos no Marista. Consultores especializados, estacionamento coberto. WhatsApp: (62) 99614-8873",
    produtos:
      "Colchões Ortobom em Goiânia: Liberty, Ouro Spring, Pro Saúde. Entrega rápida, produtos frescos direto da fábrica. Parcelamento facilitado.",
    contato:
      "Fale com a Ortobom Goiânia. Av. 85, 2385 - Marista. WhatsApp: (62) 99614-8873. Horário: Seg-Sex 09h-19h, Sáb 09h-13h.",
  };

  return (
    <Helmet>
      {/* Meta Tags Básicas */}
      <title>{pageTitle[page]}</title>
      <meta name="description" content={pageDescription[page]} />

      {/* Open Graph (Facebook, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle[page]} />
      <meta property="og:description" content={pageDescription[page]} />
      <meta property="og:url" content="https://ortobomgoiania.com.br" />
      <meta
        property="og:image"
        content="https://ortobomgoiania.com.br/og-image.jpg"
      />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle[page]} />
      <meta name="twitter:description" content={pageDescription[page]} />
      <meta
        name="twitter:image"
        content="https://ortobomgoiania.com.br/og-image.jpg"
      />

      {/* Keywords (ainda importa para alguns crawlers) */}
      <meta
        name="keywords"
        content="colchão goiania, ortobom goiania, colchao marista, loja colchao goiania, colchão ortobom, entrega rapida goiania"
      />

      {/* Geo Tags (Local SEO) */}
      <meta name="geo.region" content="BR-GO" />
      <meta name="geo.placename" content="Goiânia" />
      <meta name="geo.position" content="-16.7026872;-49.264068" />
      <meta name="ICBM" content="-16.7026872, -49.264068" />

      {/* Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
