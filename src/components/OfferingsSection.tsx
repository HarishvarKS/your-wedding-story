import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tags = ['Weddings', 'Engagements', 'Destinations', 'Families', 'Commercials'];

const OfferingsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-primary px-8 py-24 text-primary-foreground md:px-16 lg:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-4xl text-center transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
          What We Do
        </p>
        <h2 className="font-serif-display mb-8 text-4xl font-light md:text-5xl lg:text-6xl">
          Our Offerings
        </h2>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-primary-foreground/30 px-5 py-2 text-xs uppercase tracking-[0.15em] text-primary-foreground/80 transition-colors duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-primary-foreground/70">
          From intimate elopements on cliff edges to grand celebrations in heritage palaces, we bring an
          editorial eye to every occasion. Our packages are crafted around your vision — because no two
          love stories are ever the same.
        </p>
      </div>
    </section>
  );
};

export default OfferingsSection;
