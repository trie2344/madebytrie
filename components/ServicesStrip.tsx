
import Reveal from "./Reveal";

export default function ServicesStrip() {
  return (
    <section className="border-y border-border bg-surface/30 px-6 py-8">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Selected Work
            </p>
            <p className="mt-2 text-sm font-medium text-foreground md:text-base">
              A collection of ideas turned into digital experiences.
            </p>
          </div>

          <a
            href="#work"
            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-muted"
          >
            Explore projects
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
