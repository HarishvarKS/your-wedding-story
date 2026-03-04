import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const ApproachSection = () => {
  const { ref: textRef, isVisible } = useScrollAnimation();
  const { ref: imgRef, offset } = useParallax(0.15);

  return (
    <section className="bg-background px-8 py-24 md:px-16 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 items-center">
        {/* Image with parallax */}
        <div ref={imgRef} className="relative overflow-hidden aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
            alt="Wedding photography approach"
            className="h-full w-full object-cover grayscale transition-transform duration-300 hover:scale-105"
            style={{ transform: `translateY(${offset}px) scale(1.1)` }}
            loading="lazy"
          />
        </div>

        {/* Text content */}
        <div
          ref={textRef}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
          }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Philosophy
          </p>
          <h2 className="font-serif-display mb-8 text-4xl font-light md:text-5xl">
            Approach & Style
          </h2>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              We believe in unobtrusive storytelling. Our approach is rooted in documentary
              filmmaking — observing, waiting, and capturing the authentic moments as they unfold
              naturally around us.
            </p>
            <p>
              Every image we create balances the spontaneity of photojournalism with the elegance of
              fine art. We don't manufacture moments; we illuminate the ones already there.
            </p>
            <p>
              Our post-production is deliberate and timeless. We favor deep contrasts, luminous skin
              tones, and a cinematic quality that feels as powerful decades from now as it does today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
