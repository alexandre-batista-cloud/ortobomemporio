const testimonials = [
  {
    id: 1,
    name: "Richard Kenny",
    location: "UT",
    text: "Testimonial 1 goes here - get a testimonial from someone you've worked with or helped who can share their thoughts about you, your products/services, the measurable wins/results they've gotten, or the customer experience you provide.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
  {
    id: 2,
    name: "Ben Jennings",
    location: "ID",
    text: "Testimonial 2 goes here - get a testimonial from someone you've worked with or helped who can share their thoughts about you, your products/services, the measurable wins/results they've gotten, or the customer experience you provide.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
  {
    id: 3,
    name: "Bob Summers",
    location: "CA",
    text: "Testimonial 3 goes here - get a testimonial from someone you've worked with or helped who can share their thoughts about you, your products/services, the measurable wins/results they've gotten, or the customer experience you provide.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
];

export function TestimonialsMarista() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            Proven Outcomes
          </h2>
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
