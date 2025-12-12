export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  testimonial: string;
  rating?: number;
};

export type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-container py-20">
      <h2 className="gradient-text text-center">Client Testimonials</h2>
      <p className="mt-4 text-center text-neutral-400">
        What people say about working with me
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={`${testimonial.name}-${testimonial.company || testimonial.role}`} className="card">
            <div className="mb-4 flex items-center gap-3">
              {testimonial.avatar && (
                <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-neutral-400">
                  {testimonial.role}
                  {testimonial.company && ` at ${testimonial.company}`}
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-300">&quot;{testimonial.testimonial}&quot;</p>
            {testimonial.rating && (
              <div className="mt-4 flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }, (_, idx) => (
                  <span key={`filled-${idx}-${testimonial.name}`} className="text-yellow-400">★</span>
                ))}
                {testimonial.rating < 5 && Array.from({ length: 5 - testimonial.rating }, (_, idx) => (
                  <span key={`empty-${idx}-${testimonial.name}`} className="text-neutral-600">★</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
