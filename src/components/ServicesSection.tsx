import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const recentOutings = [
  {
    couple: 'Arjun & Meera',
    title: 'Fabric of Love',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop&q=80',
  },
  {
    couple: 'Vikram & Anjali',
    title: 'Timeless Vows',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop&q=80',
  },
  {
    couple: 'Siddharth & Kavya',
    title: 'The First Dance',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop&q=80',
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-secondary px-8 py-12 md:px-16 lg:py-16">
      <div ref={ref} className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Recent Work
        </p>
        <h2 className="font-serif-display mb-8 text-center text-4xl font-light md:text-5xl">
          Our Recent Outings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
          {recentOutings.map((item, i) => (
            <div
              key={item.couple}
              className="group relative overflow-hidden block w-full transition-all duration-700 ease-out"
              style={{
                height: '420px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <img
                src={item.image}
                alt={`${item.couple} — ${item.title}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Text overlay — bottom-aligned */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 px-4 text-center">
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-1 font-light"
                  style={{ fontFamily: "var(--font-sans, 'Montserrat', sans-serif)" }}
                >
                  {item.couple}
                </p>
                <h3
                  className="text-lg text-white font-light italic leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
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
