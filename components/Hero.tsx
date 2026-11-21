
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 pb-20 pt-32 md:pb-28 md:pt-40">

      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--surface) 1px, transparent 1px),
            linear-gradient(to bottom, var(--surface) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* Availability */}
        <Reveal>
          <div className="mb-12 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Available for selected projects
            </p>
          </div>
        </Reveal>

        {/* Hero Content */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Content */}
          <div>
            <Reveal delay={100}>
              <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-6xl md:text-7xl xl:text-[88px]">
                I BUILD
                <br />
                DIGITAL
                <br />
                <span className="relative inline-block">
                  EXPERIENCES
                  <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-accent md:h-5" />
                </span>
                <br />
                THAT MOVE
                <br />
                BUSINESSES.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-9 max-w-lg text-base leading-8 text-muted md:text-lg">
                I design and build thoughtful websites that
                combine modern aesthetics, clear communication,
                and purposeful functionality to help businesses
                grow their digital presence.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#work"
                  className="group inline-flex items-center gap-4 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background"
                >
                  Explore My Work

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-4 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-foreground"
                >
                  Let's Talk

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>

              </div>
            </Reveal>
          </div>

          {/* Right Interactive Visual */}
          <Reveal delay={200}>
            <div className="group relative mx-auto w-full max-w-xl">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-accent/20 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-accent/30" />

              {/* Main Browser */}
              <div className="relative rounded-2xl border border-border bg-card p-3 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1 md:p-5">

                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                  </div>

                  <div className="rounded-full bg-surface px-5 py-2 text-[10px] tracking-wider text-muted">
                    madebytrie.website
                  </div>

                  <span className="text-xs text-muted">↗</span>
                </div>

                {/* Website Preview */}
                <div className="relative mt-3 overflow-hidden rounded-xl bg-surface p-6 md:p-8">

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-tight">
                      YOUR BRAND<span className="text-accent">.</span>
                    </span>

                    <div className="flex gap-2">
                      <span className="h-1.5 w-6 rounded-full bg-muted/40" />
                      <span className="h-1.5 w-6 rounded-full bg-muted/40" />
                    </div>
                  </div>

                  <div className="py-12 md:py-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                      Digital Experience
                    </p>

                    <h2 className="mt-5 max-w-xs text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                      Make your
                      <br />
                      brand <span className="text-muted">stand out.</span>
                    </h2>

                    <div className="mt-7 h-2 w-20 rounded-full bg-accent" />

                    <div className="mt-10 flex items-center justify-between">
                      <span className="rounded-full bg-foreground px-5 py-3 text-[10px] font-semibold text-background">
                        Discover More ↗
                      </span>

                      <span className="text-xs text-muted">
                        01 / 03
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-lg bg-background" />
                    <div className="h-14 rounded-lg bg-accent" />
                    <div className="h-14 rounded-lg bg-foreground" />
                  </div>

                </div>

                {/* Browser Footer */}
                <div className="flex items-center justify-between px-2 pt-4 text-[10px] uppercase tracking-widest text-muted">
                  <span>Design</span>
                  <span>Development</span>
                  <span>Experience</span>
                </div>

              </div>

              {/* Floating Design Badge */}
              <div className="absolute -left-5 top-1/4 rounded-xl border border-border bg-background p-4 shadow-xl transition-transform duration-500 group-hover:-translate-x-2 md:-left-10">
                <p className="text-[10px] uppercase tracking-widest text-muted">
                  Creative
                </p>
                <p className="mt-1 text-sm font-bold">
                  Web Design
                </p>
              </div>

              {/* Floating Responsive Badge */}
              <div className="absolute -bottom-7 right-0 rounded-xl border border-border bg-background p-4 shadow-xl transition-transform duration-500 group-hover:translate-y-2 md:-right-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-lg">
                    ↗
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted">
                      Built for
                    </p>
                    <p className="text-sm font-bold">
                      Every Screen
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

        </div>

        {/* Bottom Information */}
        <Reveal delay={400}>
          <div className="mt-28 grid gap-5 border-t border-border pt-6 text-xs uppercase tracking-widest text-muted md:grid-cols-3">
            <p>Independent Web Designer & Developer</p>

            <p className="md:text-center">
              Based in Indonesia · Working Worldwide
            </p>

            <a
              href="#work"
              className="group flex items-center gap-2 transition-colors hover:text-foreground md:justify-end"
            >
              Scroll to Explore
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
