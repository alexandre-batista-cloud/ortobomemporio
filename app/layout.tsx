import type { Metadata } from "next";
import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ortobom Goiânia - Empório Marista",
  image: ["https://ortobomgoiania.com.br/logo.jpg"],
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
    "https://www.instagram.com/ortobom.emporio.marista",
    "https://web.facebook.com/profile.php?id=61576184542738",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ortobomgoiania.com.br"),
  title: {
    default: "Ortobom Goiânia - Colchões em Goiânia | Loja Marista",
    template: "%s | Ortobom Goiânia",
  },
  description:
    "Loja Ortobom em Goiânia. Colchões com entrega em 1 dia, 4.9★ (122 avaliações Google), 20 anos no Marista. Consultores especializados. WhatsApp: (62) 99614-8873",
  keywords:
    "colchão goiania, ortobom goiania, colchao marista, loja colchao goiania, colchão ortobom, entrega rapida goiania",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ortobomgoiania.com.br",
    siteName: "Ortobom Goiânia",
    title: "Ortobom Goiânia - Colchões em Goiânia | Loja Marista",
    description:
      "Loja Ortobom em Goiânia. Colchões com entrega em 1 dia, 4.9★ (122 avaliações), 20 anos no Marista. WhatsApp: (62) 99614-8873",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortobom Goiânia - Colchões em Goiânia",
    description:
      "Colchões Ortobom em Goiânia com entrega rápida. 4.9★ no Google. WhatsApp: (62) 99614-8873",
  },
  other: {
    "geo.region": "BR-GO",
    "geo.placename": "Goiânia",
    "geo.position": "-16.7026872;-49.264068",
    ICBM: "-16.7026872, -49.264068",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
