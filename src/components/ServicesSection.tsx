import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    title: 'Wedding Films',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80',
  },
  {
    title: 'Wedding Documentaries',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
  },
  {
    title: 'Maternity & Milestones',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80',
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-secondary px-8 py-24 md:px-16 lg:py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Services
        </p>
        <h2 className="font-serif-display mb-14 text-center text-4xl font-light md:text-5xl">
          What We Create
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-all duration-500 group-hover:bg-foreground/50" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="font-serif-display text-xl tracking-wide text-primary-foreground transition-transform duration-500 group-hover:-translate-y-2 md:text-2xl">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
