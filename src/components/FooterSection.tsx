const FooterSection = () => {
  return (
    <footer className="bg-primary px-8 py-16 text-primary-foreground md:px-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif-display mb-6 text-3xl font-light md:text-4xl">
          Let's Create Something Beautiful
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-primary-foreground/60">
          Follow our journey on social media or reach out to start planning your story.
        </p>
        <div className="mb-12 flex justify-center gap-8">
          <a
            href="#"
            className="story-link text-xs uppercase tracking-[0.2em] text-primary-foreground/80 after:!bg-primary-foreground/80"
          >
            YouTube
          </a>
          <a
            href="#"
            className="story-link text-xs uppercase tracking-[0.2em] text-primary-foreground/80 after:!bg-primary-foreground/80"
          >
            Instagram
          </a>
          <a
            href="#contact"
            className="story-link text-xs uppercase tracking-[0.2em] text-primary-foreground/80 after:!bg-primary-foreground/80"
          >
            Contact
          </a>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs tracking-widest text-primary-foreground/40">
            © {new Date().getFullYear()} LUMIÈRE STUDIOS — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
