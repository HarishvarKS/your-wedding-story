import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    alt: 'Bride and groom walking through golden light',
  },
  {
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80',
    alt: 'Wedding ceremony in a beautiful garden',
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
    alt: 'Couple exchanging vows',
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
    alt: 'Romantic sunset wedding portrait',
  },
  {
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&q=80',
    alt: 'Elegant wedding details',
  },
];

const navLinks = ['Home', 'Portfolio', 'About', 'Contact'];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="h-full w-full object-cover grayscale"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
      ))}

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16">
        <a href="/" className="font-serif-display text-2xl tracking-widest text-primary-foreground md:text-3xl">
          LUMIÈRE STUDIOS
        </a>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="story-link text-sm font-light uppercase tracking-[0.2em] text-primary-foreground after:!bg-primary-foreground"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary-foreground/80 md:text-base animate-fade-in">
          Wedding Photography & Films
        </p>
        <h1 className="font-serif-display text-5xl font-light leading-tight text-primary-foreground md:text-7xl lg:text-8xl animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          Every Love Story
          <br />
          <span className="italic">Deserves Art</span>
        </h1>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <a
            href="#portfolio"
            className="border border-primary-foreground/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-primary-foreground' : 'w-2 bg-primary-foreground/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
