const testimonials = [
  {
    id: 1,
    name: "ERIKA GONZALES",
    text: "Sou nova na cidade e estava procurando uma loja para comprar minha cama e colchão. Tive a felicidade de encontrar não só produtos incríveis, mas também um atendimento espetacular! Eles são super atenciosos, simpáticos e me ofereceram um colchão de excelente custo-benefício, além de outros produtos de altíssima qualidade. O pagamento foi super facilitado e a entrega aconteceu no mesmo dia. Uma loja maravilhosa, com certeza a melhor da cidade! Recomendo de olhos fechados!",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
  {
    id: 2,
    name: "AYALLA MEDEIROS",
    text: "Está sendo maravilhoso colchão realmente de alta qualidade muito confortável estamos dormindo muito bem desde o primeiro dia a base também é maravilhosa pois tem um material bem reforçado estamos amando muito e com certeza nos tornamos clientes e vamos indicar muito, a sim o atendimento também excelente,na verdade pra mim já do atendimento eu sei se compro ou não e com vocês tivemos uma experiência maravilhosa a entrega também foi muito rápida,pontual realmente serviço de qualidade em tudo muito obrigada que Deus continue abençoando essa empresa ☺️🙏🏼",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
  {
    id: 3,
    name: "FERNANDA MAKIS",
    location: "LOCAL GUIDE",
    text: "Eu recomendo essa loja não apenas pela qualidade dos produtos, mas também pelo atendimento e entrega rápida. O pessoal cumpre com o que promete, são muito simpáticos, profissionais e te ajudam na escolha do produto, independente do valor que você gastará na loja. Parabéns pessoal.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
];

export function TestimonialsMarista() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-center mb-2">
            <strong>
              <em>Veja o que nossos clientes falam</em>
            </strong>
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Name and Location */}
              <p className="font-bold text-brand-navy text-sm uppercase tracking-wide">
                {testimonial.name}, {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
