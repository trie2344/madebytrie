import {
  Handshake,
  PenTool,
  Globe,
  Gauge,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import Reveal from "./Reveal";
import { client } from "@/sanity/lib/client";
import { TRUST_QUERY } from "@/sanity/lib/queries";
import Button from "./Button";

const trustIcons = {
  "01": Handshake,
  "02": PenTool,
  "03": Globe,
  "04": Gauge,
  "05": SlidersHorizontal,
  "06": Target,
};

export default async function Trust() {
  const trust = await client.fetch(
    TRUST_QUERY,
    {},
    { cache: "no-store" }
  );

  if (!trust) return null;
    const heading = trust.heading || "";
  const highlightText = trust.highlightText || "";
  const highlightIndex = highlightText
    ? heading.indexOf(highlightText)
    : -1;

  const before =
    highlightIndex >= 0
      ? heading.slice(0, highlightIndex)
      : heading;

  const highlighted =
    highlightIndex >= 0
      ? heading.slice(
          highlightIndex,
          highlightIndex + highlightText.length
        )
      : "";

  const after =
    highlightIndex >= 0
      ? heading.slice(highlightIndex + highlightText.length)
      : "";

  return (
    <section className="bg-background px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <Reveal>
          <div className="mb-14 grid gap-7 md:mb-18 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                {trust.sectionLabel}
              </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.055em] text-foreground md:text-6xl">
              {before}
              {highlighted && (
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 h-3 bg-accent/60"
                  />
                  <span className="relative text-foreground">
                    {highlighted}
                  </span>
                </span>
              )}
              {after}
            </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted md:justify-self-end md:text-base md:leading-8">
  {trust.introDescription}
</p>
          </div>
        </Reveal>

        {/* BENTO GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {trust.trustItems?.map((item: {
  number: string;
  title: string;
  description: string;
  size?: string;
}, index: number) => (
            <Reveal
              key={item.number}
              delay={(index % 3) * 100}
              className={item.size || "lg:col-span-1"}
            >
              <article className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/55 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 md:p-9">

                {/* NUMBER & ICON */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-muted md:text-xs">
  / {item.number}
</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/40 text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
  {(() => {
    const Icon =
      trustIcons[item.number as keyof typeof trustIcons];

    return Icon ? (
      <Icon size={21} strokeWidth={1.6} />
    ) : null;
  })()}
</span>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.03em] text-foreground md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-muted md:text-base md:leading-7">
  {item.description}
</p>
                </div>

                {/* DECORATIVE ELEMENT */}
                <div className="pointer-events-none absolute -bottom-14 -right-10 h-36 w-36 rounded-full border border-border/50 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:border-accent/30" />

              </article>
            </Reveal>
          ))}

          {/* CTA CARD */}
          <Reveal delay={200}>
            <article className="group flex h-full min-h-[300px] flex-col justify-between rounded-[1.5rem] border border-contrast-foreground/10 bg-contrast-background p-7 transition-all duration-500 ease-out hover:-translate-y-1 md:p-9">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent md:text-xs">
                  {trust.ctaLabel}
                </p>

                <h3 className="trust-cta-heading mt-6 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
  {trust.ctaHeading}
  <span>
    {" "}{trust.ctaHighlight}
  </span>
</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-contrast-foreground/65 md:text-base md:leading-7">
  {trust.ctaDescription}
</p>
              </div>

<Button
  href={trust.ctaButtonLink || "#contact"}
  variant="primary"
  className="mt-8 !min-h-12 !w-fit !gap-3 !px-6 !text-xs md:!text-sm"
>
  {trust.ctaButtonText}
</Button>

            </article>
          </Reveal>

        </div>

        {/* BOTTOM STATEMENT */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-border pt-6">
            {trust.bottomStatements?.map((statement: string) => (
              <p
                key={statement}
                className="text-xs font-medium uppercase tracking-widest text-muted"
              >
                {statement}
              </p>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
