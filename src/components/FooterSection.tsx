const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-8 py-8 md:px-16 lg:py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif-display mb-4 text-3xl font-light md:text-4xl">
            Let's Create Something Beautiful
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/60">
            Follow our journey on social media or reach out to start planning your story.
          </p>
          <div className="mb-8 flex justify-center gap-8">
            <a
              href="#"
              className="story-link text-xs uppercase tracking-[0.2em] text-primary-foreground/80 after:!bg-primary-foreground/80"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="story-link text-xs uppercase tracking-[0.2em] text-primary-foreground/80 after:!bg-primary-foreground/80"
            >
              Instagram
            </a>
            <a
              href="contact"
              className="story-link text-xs uppercase tracking-[0.2em] text-primary-foreground/80 after:!bg-primary-foreground/80"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Full-width divider + copyright bar */}
      <div className="border-t border-primary-foreground/10 py-6 text-center">
        <p className="text-xs tracking-widest text-primary-foreground/40">
          © {new Date().getFullYear()} IRAIVAN PHOTOGRAPHY — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
