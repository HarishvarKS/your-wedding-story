import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const values = [
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" className="h-20 w-20">
        <circle cx="40" cy="30" r="15" />
        <path d="M20 70 Q40 50 60 70" />
        <path d="M30 25 L35 20 M45 20 L50 25" />
        <line x1="25" y1="45" x2="55" y2="45" strokeDasharray="2 3" />
      </svg>
    ),
    title: 'ART',
    description:
      'We approach every frame as a canvas. Our work blends cinematic composition with fine-art sensibility, creating images that transcend documentation into something truly timeless.',
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" className="h-20 w-20">
        <path d="M40 65 C40 65 15 45 15 30 C15 20 25 12 35 18 L40 22 L45 18 C55 12 65 20 65 30 C65 45 40 65 40 65Z" />
      </svg>
    ),
    title: 'EMOTIONS',
    description:
      'The stolen glances, the trembling hands, the tears of joy — we live for the in-between moments. Our lens captures the raw, unscripted emotions that make your story uniquely yours.',
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" className="h-20 w-20">
        <rect x="15" y="10" rx="2" width="50" height="60" />
        <line x1="25" y1="25" x2="55" y2="25" />
        <line x1="25" y1="35" x2="55" y2="35" />
        <line x1="25" y1="45" x2="45" y2="45" />
        <path d="M35 55 Q40 50 45 55 Q50 60 55 55" />
      </svg>
    ),
    title: 'STORY',
    description:
      'Every couple has a narrative waiting to be told. We weave together the details, the laughter, and the love into a cohesive visual story that you\'ll relive for generations.',
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-background px-8 py-24 md:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-3 md:gap-12">
          {values.map((value, i) => (
            <ValueColumn key={value.title} {...value} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueColumn = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="mb-6 text-muted-foreground">{icon}</div>
      <h3 className="font-serif-display mb-4 text-2xl tracking-[0.2em]">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default ValuesSection;
