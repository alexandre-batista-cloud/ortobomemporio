import Link from "next/link";

const categories = [
  {
    name: "Colchões",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/f4ef87fa3cc2cafedb6766c493b364b02a1e1950?width=80",
    href: "#colchoes",
  },
  {
    name: "Bases",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/2bec688e11949ed005b8df9b7cabf114835fb4af?width=80",
    href: "#bases",
  },
  {
    name: "Travesseiros",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/be510a02349e9c77c427683eab7973c0ec5630de?width=80",
    href: "#travesseiros",
  },
  {
    name: "Roupas de Cama",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/22b98517565b489a46f19be84fdb8c383d9a4643?width=80",
    href: "#roupas",
  },
];

export function CategoryHighlights() {
  return (
    <section className="bg-brand-beige shadow-[5px_0_10px_0_rgba(0,0,0,0.25)_inset] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy text-center mb-8">
          Destaques da Semana na Ortobom
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-gradient-to-b from-white to-brand-gray-light p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow rounded-sm"
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-10 h-10"
              />
              <h3 className="text-brand-navy-dark text-lg text-center">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
