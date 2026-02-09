import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">A página que você procura não existe ou foi movida.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
