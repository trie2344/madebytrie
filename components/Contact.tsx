
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-accent px-6 py-28 text-accent-foreground md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-10 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em]">
            Have a project in mind?
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="max-w-6xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-8xl lg:text-[110px]">
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          <span className="text-background">GREAT TOGETHER.</span>
        </h2>

        {/* Contact Information */}
        <div className="mt-20 grid gap-12 border-t border-foreground/20 pt-8 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
              Start a conversation
            </p>

            <a
              href="mailto:hello@madebytrie.my.id"
              className="inline-block break-all text-xl font-bold tracking-tight underline decoration-2 underline-offset-8 transition-opacity duration-300 hover:opacity-60 md:text-3xl"
            >
              hello@madebytrie.my.id
            </a>

            <p className="mt-8 max-w-sm text-sm leading-7 text-foreground/70">
              Available for freelance projects and
              remote collaborations worldwide.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">

            <a
              href="mailto:hello@madebytrie.my.id"
              className="group inline-flex w-fit items-center gap-5 rounded-full bg-foreground px-8 py-5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:text-foreground"
            >
              LET&apos;S TALK

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <p className="text-xs uppercase tracking-widest text-foreground/60 lg:text-right">
              Independent Web Designer & Developer
              <br />
              Based in Indonesia · Working Worldwide
            </p>

          </div>
        </div>

        {/* Decorative Footer Line */}
        <div className="mt-24 flex items-center justify-between border-t border-foreground/20 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest">
            madebytrie
          </p>

          <p className="text-xs uppercase tracking-widest">
            Let&apos;s create something meaningful.
          </p>
        </div>

      </div>
    </section>
  );
}
