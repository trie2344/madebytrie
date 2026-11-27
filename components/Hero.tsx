import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { client } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";

export default async function Hero() {
  const hero = await client.fetch(
    HERO_QUERY,
    {},
    { cache: "no-store" }
  );

  if (!hero) return null;
  const heading = hero.heading || "";

const highlightText = hero.highlightText?.trim() || "";

const renderHeadingLine = (line: string) => {
  const index = highlightText
    ? line.indexOf(highlightText)
    : -1;

  if (index === -1) return line;

  return (
    <>
      {line.slice(0, index)}
      <span className="relative isolate inline-block">
        <span className="relative z-10">{highlightText}</span>
        <span className="absolute -bottom-[0.02em] left-0 -z-0 h-[0.18em] w-full -rotate-2 rounded-sm bg-accent sm:h-[0.2em]" />
      </span>
      {line.slice(index + highlightText.length)}
    </>
  );
};
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 pb-16 pt-24 md:pb-24 md:pt-28">
      {/* FULL HERO HALFTONE */}
<div
  aria-hidden="true"
  className="hero-halftone pointer-events-none absolute inset-0 z-0"
/>
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP EDITORIAL BAR */}
        <div className="mb-9 flex flex-col justify-between gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-center md:mb-12">

          <Reveal>
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted sm:text-left">
              Independent Web Designer & Developer
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative left-1/2 inline-flex w-fit -translate-x-1/2 items-center gap-3 rounded-full border border-border/70 bg-surface/30 px-4 py-2.5 sm:left-0 sm:translate-x-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                {hero.availabilityText}
              </span>
            </div>
          </Reveal>

        </div>

        {/* MAIN EDITORIAL GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="relative z-10 lg:col-span-8">

            <Reveal delay={100}>

      <h1 className="max-w-5xl text-center text-5xl sm:text-left font-bold leading-[1.05] tracking-[-0.06em] text-foreground sm:text-6xl md:text-7xl lg:text-[92px] xl:text-[108px]">        
{renderHeadingLine(hero.headingLineOne || "")}{" "}
{renderHeadingLine(hero.headingLineTwo || "")}{" "}
{renderHeadingLine(hero.headingLineThree || "")}
</h1>
            </Reveal>

            <div className="mt-8 max-w-2xl md:mt-10">

  <Reveal delay={200}>
    <p className="w-full text-center text-base leading-[1.9] tracking-[-0.01em] text-muted sm:text-left md:text-lg md:leading-[1.85]">
      {hero.description}
    </p>
  </Reveal>

  <Reveal delay={300}>
  <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
    <Button
      href={hero.primaryButtonLink || "#work"}
      variant="primary"
    >
      {hero.primaryButtonText}
    </Button>

    <Button
      href={hero.secondaryButtonLink || "#contact"}
      variant="secondary"
    >
      {hero.secondaryButtonText}
    </Button>
  </div>
</Reveal>

</div>

          </div>

          {/* RIGHT EDITORIAL DECORATION */}
          <div className="relative mt-8 min-h-[460px] lg:col-span-4 lg:mt-0 lg:min-h-[520px]">

            <div className="relative flex h-full w-full flex-col items-center justify-between gap-10 border-t border-border/70 pt-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-full lg:border-l lg:border-t-0 lg:pt-8 lg:pb-8 lg:pl-6 lg:items-end lg:gap-0"> 

              <Reveal delay={300}>
                <p className="text-center text-[10px] font-semibold uppercase leading-7 tracking-[0.25em] text-muted lg:text-right">
                  DIGITAL
                  <br />
                  EXPERIENCES
                  <br />
                  THAT WORK
                </p>
              </Reveal>

              <Reveal delay={400}>
               
<div
  aria-hidden="true"
  className="absolute -right-2 top-[38%] h-px w-28 -rotate-45 bg-accent/50"
/>
                 <div className="group relative flex h-40 w-40 items-center justify-center rounded-full border border-border bg-surface/30 transition-all duration-500 hover:border-accent/60 sm:h-48 sm:w-48">

  {/* OUTER RING */}
  <div className="absolute inset-3 rounded-full border border-border/80 transition-all duration-1000 group-hover:rotate-90 group-hover:border-accent/50" />

  {/* INNER RING */}
  <div className="absolute inset-6 rounded-full border border-accent/50 transition-transform duration-700 group-hover:scale-105" />

{/* CENTER PORTRAIT */}
<div className="relative">

  {/* SOFT GLOW */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute -inset-4 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
  />

  {/* PROFILE IMAGE */}
  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-accent/70 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-accent sm:h-28 sm:w-28">
    <Image
      src="/images/profile.png"
      alt="Trie — Personal Portfolio"
      fill
      sizes="112px"
      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
    />
  </div>

</div>

  {/* ACCENT DOTS */}
  <span className="absolute right-4 top-8 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-sm transition-transform duration-500 group-hover:scale-125" />

  <span className="absolute bottom-7 left-5 h-2 w-2 rounded-full bg-foreground/40 transition-all duration-500 group-hover:scale-125 group-hover:bg-accent" />

</div>
                <div className="mt-8 text-center lg:text-right">
  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
  Personal Portfolio
</p>
  <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-foreground">
  Web Design & Development
</p>
</div>
              </Reveal>

              <Reveal delay={500}>
                <p className="text-center text-[10px] font-semibold uppercase leading-7 tracking-[0.25em] text-muted lg:text-right">
                  STRATEGY
                  <br />
                  DESIGN
                  <br />
                  DEVELOPMENT
                </p>
              </Reveal>

            </div>

          </div>

        </div>

        {/* BOTTOM INFORMATION */}
        <Reveal delay={500}>
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:flex-row sm:text-left">
            <p>{hero.bottomLeftText}</p>
            <p>{hero.bottomRightText}</p>
          </div>
        </Reveal>

      </div>

    </section>
  );
}
