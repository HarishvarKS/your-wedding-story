import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background px-8 py-24 md:px-16 lg:py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 items-center transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Portrait */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
            alt="Founder portrait"
            className="h-full w-full object-cover grayscale transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Bio */}
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Person Behind the Lens
          </p>
          <h2 className="font-serif-display mb-2 text-4xl font-light md:text-5xl">
            Alex Mercer
          </h2>
          <p className="font-serif-display mb-6 text-lg italic text-muted-foreground">
            Founder + Storyteller
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              With over a decade behind the lens, Alex founded Lumière Studios with a singular
              vision: to elevate wedding photography into an art form. Drawing from a background in
              documentary filmmaking and fine art, Alex brings a rare combination of technical
              precision and emotional intuition to every project.
            </p>
            <p>
              When not capturing love stories across the globe, Alex can be found teaching
              masterclasses, curating exhibitions, and mentoring the next generation of visual
              storytellers.
            </p>
          </div>
          <a
            href="#about"
            className="story-link mt-6 inline-block text-xs uppercase tracking-[0.2em] text-foreground"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
