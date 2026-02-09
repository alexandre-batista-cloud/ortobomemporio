export interface Product {
  slug: string;
  name: string;
  fullName: string;
  image: string;
  imageAlt: string;
  price: string;
  oldPrice?: string;
  description: string;
  longDescription: string;
  specs: {
    altura: string;
    largura: string;
    comprimento: string;
    tipo: string;
    garantia: string;
    firmeza: string;
    tecnologia: string;
  };
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    slug: "pillow-top",
    name: "Pillow Top",
    fullName: "Colchão Pillow Top HR Gel Ortobom",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Fd612ffb81afb40adbf56d9a083357262",
    imageAlt: "Colchão Pillow Top HR Gel Ortobom em Goiânia",
    price: "A consultar",
    description: "O Pillow Top HR Gel Ortobom é o colchão premium para quem busca o máximo conforto e alívio de pressão.",
    longDescription: `Colchão Pillow Top Ortobom em Goiânia — se você está buscando o melhor colchão para noites de sono profundo e reparador, o Pillow Top HR Gel da Ortobom é a escolha definitiva. Disponível na nossa loja no Setor Marista, este colchão combina a tecnologia de espuma HR (High Resilience) com gel termorregulador, oferecendo uma experiência de sono incomparável.

O Colchão Pillow Top Ortobom possui uma camada extra de conforto na parte superior que se adapta perfeitamente ao contorno do seu corpo. Essa tecnologia reduz em até 70% os pontos de pressão nos ombros e quadris, sendo especialmente recomendado para quem dorme de lado. A espuma HR Gel mantém a temperatura ideal durante toda a noite, evitando aquela sensação de calor que atrapalha o sono.

Na Ortobom Empório Marista em Goiânia, você pode testar o Pillow Top pessoalmente. Nossos consultores especializados, com mais de 10 anos de experiência, vão ajudar você a entender se este é o modelo ideal para suas necessidades. Entregamos em Goiânia em até 1 dia útil, com produtos frescos direto da fábrica — com menos de 2 semanas de fabricação.

O investimento em um Pillow Top de qualidade é um investimento na sua saúde. Dores nas costas, insônia e cansaço matinal podem estar relacionados ao colchão inadequado. Com a garantia de fábrica Ortobom e a possibilidade de parcelamento facilitado, transformar suas noites de sono nunca foi tão acessível. Visite nossa loja na Av. 85, 2385 - Setor Marista ou fale conosco pelo WhatsApp (62) 99614-8873.`,
    specs: {
      altura: "30 cm",
      largura: "138 cm (Casal)",
      comprimento: "188 cm",
      tipo: "Espuma HR com Gel",
      garantia: "10 anos de fábrica",
      firmeza: "Macio a Médio",
      tecnologia: "HR Gel Termorregulador + Pillow Top",
    },
    benefits: [
      "Camada Pillow Top extra conforto",
      "Espuma HR com Gel termorregulador",
      "Reduz pontos de pressão em até 70%",
      "Ideal para quem dorme de lado",
      "Controle térmico durante o sono",
      "Tratamento antiácaro e antialérgico",
    ],
    metaTitle: "Colchão Pillow Top Ortobom em Goiânia | Entrega Rápida - Ortobom Marista",
    metaDescription: "Colchão Pillow Top Ortobom em Goiânia com entrega em 1 dia. Espuma HR Gel, alívio de pressão, garantia 10 anos. Teste na loja Marista. WhatsApp (62) 99614-8873.",
  },
  {
    slug: "liberty",
    name: "Liberty",
    fullName: "Colchão Liberty Ortobom",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F35cfbd1b8406494f89f2c56d1294b29a",
    imageAlt: "Colchão Liberty Ortobom em Goiânia",
    price: "A consultar",
    description: "O Liberty é o colchão mais versátil da Ortobom, perfeito para quem muda de posição durante a noite.",
    longDescription: `Colchão Liberty Ortobom em Goiânia — o modelo mais vendido da Ortobom e a escolha perfeita para quem busca versatilidade e conforto equilibrado. Disponível para teste na nossa loja do Setor Marista, o Liberty é reconhecido por oferecer suporte adequado em qualquer posição de sono.

O Colchão Liberty Ortobom combina tecnologia de molas ensacadas com espuma de alta densidade, criando uma superfície que se adapta ao corpo sem perder firmeza. Se você vira muito durante a noite, este é o colchão ideal — ele absorve movimentos individualmente graças às molas pocket, garantindo que seu parceiro(a) não seja incomodado.

Na Ortobom Goiânia, o Liberty é frequentemente recomendado pelos nossos consultores para casais, justamente pela independência de movimentos. A tecnologia de molas ensacadas permite que cada lado do colchão funcione de forma independente, proporcionando conforto personalizado para cada pessoa.

Com entrega rápida em Goiânia (1 dia útil) e produtos frescos da fábrica, o Liberty chega até você nas melhores condições. Parcelamento facilitado e garantia de fábrica. Venha testar na Av. 85, 2385 - Setor Marista ou entre em contato pelo WhatsApp (62) 99614-8873. Estacionamento coberto disponível.`,
    specs: {
      altura: "31 cm",
      largura: "138 cm (Casal)",
      comprimento: "188 cm",
      tipo: "Molas Ensacadas + Espuma HD",
      garantia: "10 anos de fábrica",
      firmeza: "Equilibrado",
      tecnologia: "Molas Pocket Independentes",
    },
    benefits: [
      "Molas ensacadas com independência de movimentos",
      "Ideal para casais",
      "Firmeza equilibrada para todas as posições",
      "Espuma de alta densidade",
      "Excelente ventilação interna",
      "Tratamento antiácaro",
    ],
    metaTitle: "Colchão Liberty Ortobom em Goiânia | Molas Ensacadas - Ortobom Marista",
    metaDescription: "Colchão Liberty Ortobom em Goiânia, o mais vendido! Molas ensacadas, firmeza equilibrada, ideal para casais. Entrega 1 dia. WhatsApp (62) 99614-8873.",
  },
  {
    slug: "bellona",
    name: "Bellona",
    fullName: "Colchão Bellona Ortobom",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Fcecb727b71944c3fa60deea0f0a97c42",
    imageAlt: "Colchão Bellona Ortobom em Goiânia",
    price: "A consultar",
    description: "O Bellona é o colchão premium da linha Ortobom, com tecnologia avançada de conforto e suporte.",
    longDescription: `Colchão Bellona Ortobom em Goiânia — experimente o nível máximo de conforto e sofisticação que a Ortobom oferece. O Bellona é um colchão de linha premium, desenvolvido com as mais avançadas tecnologias de sono, disponível para teste na nossa loja do Setor Marista.

O Colchão Bellona Ortobom utiliza um sistema híbrido de suporte que combina molas ensacadas de última geração com camadas de espuma viscoelástica. Essa combinação oferece o melhor dos dois mundos: o suporte firme das molas com o aconchego adaptável da espuma memory foam. O resultado é um colchão que se molda ao seu corpo e distribui o peso de forma uniforme.

Para quem sofre com dores nas costas ou ombros, o Bellona é frequentemente recomendado pelos nossos consultores especializados em Goiânia. A camada viscoelástica responde à temperatura corporal, tornando-se mais macia nos pontos de maior pressão e mantendo firmeza onde o corpo precisa de suporte.

A Ortobom Empório Marista em Goiânia oferece entrega expressa do Bellona em até 1 dia útil. Nossos produtos chegam frescos da fábrica, com menos de 2 semanas de fabricação. Visite nossa loja na Av. 85, 2385 ou ligue pelo WhatsApp (62) 99614-8873 para agendar uma visita com estacionamento coberto.`,
    specs: {
      altura: "33 cm",
      largura: "138 cm (Casal)",
      comprimento: "188 cm",
      tipo: "Híbrido - Molas + Viscoelástica",
      garantia: "10 anos de fábrica",
      firmeza: "Médio a Firme",
      tecnologia: "Molas Ensacadas + Memory Foam",
    },
    benefits: [
      "Sistema híbrido molas + viscoelástica",
      "Distribuição uniforme do peso",
      "Alívio de dores nas costas e ombros",
      "Adaptação térmica inteligente",
      "Máxima durabilidade",
      "Tratamento antibacteriano premium",
    ],
    metaTitle: "Colchão Bellona Ortobom em Goiânia | Premium Híbrido - Ortobom Marista",
    metaDescription: "Colchão Bellona Ortobom em Goiânia — linha premium com molas ensacadas + memory foam. Alívio de dores, entrega 1 dia. Teste na loja. WhatsApp (62) 99614-8873.",
  },
  {
    slug: "absolut",
    name: "Absolut",
    fullName: "Colchão Absolut Ortobom",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F26fb647258c84aef8a6ab615f427af3f",
    imageAlt: "Colchão Absolut Ortobom em Goiânia",
    price: "A consultar",
    description: "O Absolut oferece firmeza superior com conforto, ideal para quem precisa de suporte extra para a coluna.",
    longDescription: `Colchão Absolut Ortobom em Goiânia — a solução definitiva para quem precisa de um colchão com suporte firme sem abrir mão do conforto. Disponível na Ortobom Empório Marista, o Absolut é especialmente desenvolvido para pessoas que preferem uma base mais estável durante o sono.

O Colchão Absolut Ortobom foi projetado com foco em saúde postural. Sua estrutura interna de alta densidade oferece suporte consistente para a coluna vertebral, mantendo o alinhamento correto durante toda a noite. Para quem sofre com dores lombares ou tem recomendação médica de colchão firme, o Absolut é a escolha certeira.

A tecnologia do Absolut inclui espuma de alta resiliência que não deforma com o tempo, garantindo anos de uso com a mesma qualidade de suporte. O tecido externo é tratado com tecnologia antiácaro e antialérgica, criando um ambiente de sono mais saudável. Mesmo sendo firme, o Absolut possui uma camada de conforto na superfície que evita a sensação de "dureza" excessiva.

Em Goiânia, oferecemos entrega expressa do Absolut em até 1 dia útil. Na Ortobom Marista (Av. 85, 2385), você pode testar o colchão pessoalmente com a orientação dos nossos consultores com mais de 10 anos de experiência. WhatsApp (62) 99614-8873 para agendar.`,
    specs: {
      altura: "28 cm",
      largura: "138 cm (Casal)",
      comprimento: "188 cm",
      tipo: "Espuma de Alta Resiliência",
      garantia: "10 anos de fábrica",
      firmeza: "Firme",
      tecnologia: "Espuma HR Alta Densidade",
    },
    benefits: [
      "Suporte firme para coluna vertebral",
      "Espuma de alta resiliência durável",
      "Ideal para quem prefere colchão firme",
      "Recomendado para dores lombares",
      "Não deforma com o tempo",
      "Tratamento antiácaro e antialérgico",
    ],
    metaTitle: "Colchão Absolut Ortobom em Goiânia | Suporte Firme - Ortobom Marista",
    metaDescription: "Colchão Absolut Ortobom em Goiânia com suporte firme para coluna. Alta resiliência, garantia 10 anos, entrega 1 dia. WhatsApp (62) 99614-8873.",
  },
  {
    slug: "orion",
    name: "Orion",
    fullName: "Colchão Orion Ortobom",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F2ff3b176dad548aba8b2d4a1f4420879",
    imageAlt: "Colchão Orion Ortobom em Goiânia",
    price: "A consultar",
    description: "O Orion combina tecnologia de molas com espuma especial para oferecer conforto progressivo.",
    longDescription: `Colchão Orion Ortobom em Goiânia — descubra o conforto progressivo que se adapta ao seu corpo ao longo da noite. O Orion é um dos modelos mais inovadores da linha Ortobom, combinando diferentes camadas de conforto para uma experiência de sono personalizada. Disponível para teste na nossa loja do Setor Marista.

O Colchão Orion Ortobom se destaca pela sua construção em múltiplas camadas, cada uma com uma função específica. A base firme garante suporte estrutural, enquanto as camadas superiores de espuma especial criam zonas de conforto que se adaptam às diferentes partes do corpo. É o que chamamos de conforto progressivo — quanto mais você deita, mais confortável fica.

O sistema de ventilação do Orion é outro diferencial importante. Canais internos de ar permitem a circulação constante, mantendo a temperatura ideal e evitando o acúmulo de umidade. Para o clima de Goiânia, essa característica é especialmente relevante, garantindo noites frescas e agradáveis.

A Ortobom Empório Marista oferece o Orion com entrega rápida em Goiânia (1 dia útil). Produtos frescos direto da fábrica, parcelamento facilitado e consultoria especializada. Visite-nos na Av. 85, 2385 - Setor Marista ou fale pelo WhatsApp (62) 99614-8873.`,
    specs: {
      altura: "29 cm",
      largura: "138 cm (Casal)",
      comprimento: "188 cm",
      tipo: "Múltiplas Camadas",
      garantia: "10 anos de fábrica",
      firmeza: "Médio",
      tecnologia: "Conforto Progressivo + Ventilação",
    },
    benefits: [
      "Conforto progressivo multicamadas",
      "Sistema de ventilação avançado",
      "Ideal para clima quente de Goiânia",
      "Zonas de conforto adaptáveis",
      "Base firme com superfície macia",
      "Tratamento antifúngico",
    ],
    metaTitle: "Colchão Orion Ortobom em Goiânia | Conforto Progressivo - Ortobom Marista",
    metaDescription: "Colchão Orion Ortobom em Goiânia com conforto progressivo multicamadas. Ventilação avançada, ideal para Goiânia. Entrega 1 dia. WhatsApp (62) 99614-8873.",
  },
  {
    slug: "orthopur",
    name: "Orthopur",
    fullName: "Colchão Orthopur Ortobom",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Fb26547b6fd724279a04732f61b7e72be",
    imageAlt: "Colchão Orthopur Ortobom em Goiânia",
    price: "A consultar",
    description: "O Orthopur é o colchão ortopédico da Ortobom, com foco em saúde da coluna e postura correta.",
    longDescription: `Colchão Orthopur Ortobom em Goiânia — o colchão ortopédico de referência da Ortobom, desenvolvido especificamente para quem prioriza a saúde da coluna e a postura correta durante o sono. Disponível na Ortobom Empório Marista para teste presencial com consultores especializados.

O Colchão Orthopur Ortobom é a escolha número um para quem busca um colchão com foco ortopédico. Sua espuma de poliuretano puro (PU) de alta qualidade oferece suporte uniforme e consistente, mantendo a coluna vertebral no alinhamento ideal em qualquer posição de sono. Ortopedistas e fisioterapeutas frequentemente recomendam colchões com estas características.

A tecnologia Orthopur utiliza espuma com densidade controlada que não cede em excesso, evitando o "afundamento" que causa desalinhamento da coluna. Ao mesmo tempo, a superfície possui tratamento especial que proporciona conforto na camada de contato com o corpo. O resultado é um colchão que cuida da sua postura sem sacrificar o bem-estar.

Para quem está em Goiânia e busca solução para problemas posturais ou simplesmente quer investir na saúde do sono, o Orthopur está disponível na Ortobom Marista (Av. 85, 2385) com entrega em 1 dia útil. Consultores com mais de 10 anos de experiência vão orientar a melhor escolha. WhatsApp (62) 99614-8873.`,
    specs: {
      altura: "25 cm",
      largura: "138 cm (Casal)",
      comprimento: "188 cm",
      tipo: "Espuma PU Ortopédica",
      garantia: "10 anos de fábrica",
      firmeza: "Firme (Ortopédico)",
      tecnologia: "Espuma PU Alta Qualidade",
    },
    benefits: [
      "Foco ortopédico e postural",
      "Espuma PU de alta qualidade",
      "Alinhamento ideal da coluna",
      "Recomendado por ortopedistas",
      "Não afunda com o tempo",
      "Tratamento hipoalérgico",
    ],
    metaTitle: "Colchão Orthopur Ortobom em Goiânia | Ortopédico - Ortobom Marista",
    metaDescription: "Colchão Orthopur Ortobom em Goiânia — ortopédico com foco postural. Espuma PU, alinhamento da coluna, garantia 10 anos. Entrega 1 dia. WhatsApp (62) 99614-8873.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
