import { products, getProductBySlug, getAllSlugs } from "@/lib/products";
import type { Metadata } from "next";
import { MessageCircle, CheckCircle, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { HeaderMarista } from "@/components/HeaderMarista";
import { FooterMarista } from "@/components/FooterMarista";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Produto não encontrado" };
  }
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://ortobomgoiania.com.br/colchao/${product.slug}/`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://ortobomgoiania.com.br/colchao/${product.slug}/`,
      images: [{ url: product.image, width: 800, height: 600, alt: product.imageAlt }],
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-navy mb-4">Produto não encontrado</h1>
          <Link href="/" className="text-brand-blue hover:underline">Voltar para a página inicial</Link>
        </div>
      </div>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.fullName,
    image: product.image,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Ortobom",
    },
    offers: {
      "@type": "Offer",
      url: `https://ortobomgoiania.com.br/colchao/${product.slug}/`,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Ortobom Empório Marista Goiânia",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "122",
      bestRating: "5",
    },
  };

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <HeaderMarista />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4 w-full">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-brand-blue transition-colors">Início</Link></li>
          <li>/</li>
          <li><Link href="/galeria/" className="hover:text-brand-blue transition-colors">Colchões</Link></li>
          <li>/</li>
          <li className="text-brand-navy font-semibold">{product.name}</li>
        </ol>
      </nav>

      {/* Product Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
              {product.fullName} em Goiânia
            </h1>

            <p className="text-lg text-gray-700 mb-6">{product.description}</p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Entrega em 1 dia útil</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{product.specs.garantia}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">4.9★ (122 avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Teste na loja</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/5562996148873?text=Oi!%20Tenho%20interesse%20no%20${encodeURIComponent(product.fullName)}.%20Podem%20me%20ajudar?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-lg rounded-xl hover:bg-green-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Consultor
              </a>
              <a
                href="https://maps.app.goo.gl/ET9kAgcG1nRUhWj26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-blue text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                Visitar Loja
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content - SEO Text */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {product.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">
            Especificações Técnicas
          </h2>
          <div className="bg-brand-beige rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specs).map(([key, value], i) => {
                  const labels: Record<string, string> = {
                    altura: "Altura",
                    largura: "Largura",
                    comprimento: "Comprimento",
                    tipo: "Tipo",
                    garantia: "Garantia",
                    firmeza: "Firmeza",
                    tecnologia: "Tecnologia",
                  };
                  return (
                    <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-brand-beige"}>
                      <td className="px-6 py-4 font-semibold text-brand-navy">{labels[key] || key}</td>
                      <td className="px-6 py-4 text-gray-700">{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">
            Benefícios do {product.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-brand-navy to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quer testar o {product.name} pessoalmente?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Visite a Ortobom Empório Marista em Goiânia. Consultores especializados, estacionamento coberto e entrega em 1 dia útil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/5562996148873?text=Oi!%20Quero%20saber%20mais%20sobre%20o%20${encodeURIComponent(product.fullName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-lg rounded-xl hover:bg-green-700 hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp (62) 99614-8873
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">
            Outros Colchões Ortobom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/colchao/${p.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-blue"
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-blue transition-colors">
                    {p.fullName}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{p.description}</p>
                  <span className="inline-block mt-3 text-brand-blue font-semibold text-sm">
                    Ver detalhes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterMarista />
    </div>
  );
}
