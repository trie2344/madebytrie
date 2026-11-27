import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import { client } from "@/sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Button from "./Button";


export default async function About() {
  const about = await client.fetch(
    ABOUT_QUERY,
    {},
    { cache: "no-store" }
  );

  if (!about) return null;
  const heading = about.heading || "";
const highlightText = about.highlightText || "";

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

  const profileImageUrl = about.profileImage?.asset
    ? urlFor(about.profileImage).width(1000).url()
    : "/images/profile.png";

  return (
    <section
      id="about"
      className="w-full bg-surface px-6 pt-20 pb-12 md:pt-28 md:pb-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">

          {/* VISUAL COLUMN */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto w-full max-w-[460px]">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-foreground/10 bg-contrast-background shadow-2xl">

                  {/* ROTATING CIRCULAR BADGE */}
<div className="absolute left-4 top-4 z-30 flex h-24 w-24 items-center justify-center">
  <svg
  viewBox="0 0 120 120"
  className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]"
>
  <defs>
    <path
      id="about-circle-text"
      d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
    />
  </defs>

  <text
    fill="var(--accent)"
    fontSize="8.5"
    fontWeight="600"
    letterSpacing="2.5"
  >
    <textPath
      href="#about-circle-text"
      textLength="289"
      lengthAdjust="spacing"
    >
      MADE BY TRIE • DESIGN & DEVELOPMENT •
    </textPath>
  </text>
</svg>

  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
    <Sparkles size={21} strokeWidth={1.8} />
  </div>
</div>
{/* DECORATIVE CIRCLE */}
<div className="absolute -right-16 top-12 h-72 w-72 rounded-full border border-accent/20 sm:h-80 sm:w-80" />
{/* SECOND DECORATIVE CIRCLE */}
<div className="absolute -right-8 top-20 h-56 w-56 rounded-full border border-contrast-foreground/10 sm:h-64 sm:w-64" />
                  {/* DECORATIVE BACKGROUND */}
<div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-accent/5" />
{/* HALFTONE DECORATION */}
<div
  className="absolute bottom-20 right-5 h-32 w-32 opacity-30"
  style={{
    backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
    backgroundSize: "9px 9px",
  }}
/>

{/* ACCENT LINE */}
<div className="absolute left-0 top-1/3 z-20 h-20 w-1 rounded-r-full bg-accent" />

                  {/* PROFILE IMAGE */}
                  <Image
                    src={profileImageUrl}
                    alt={
                      about.profileImage?.alt ||
                      "Trie, Independent Web Designer and Developer"
                    }
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-bottom"
                  />

                  {/* INFORMATION CARD */}
<div className="absolute bottom-4 left-4 right-4 z-20 overflow-hidden rounded-2xl border border-accent/30 bg-contrast-background/90 p-5 shadow-2xl backdrop-blur-xl">

  <div className="mb-4 flex items-center justify-between">
    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-contrast-foreground/60">
      A Little About Me
    </span>

    <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      Available Worldwide
    </span>
  </div>

  <div className="grid grid-cols-3 divide-x divide-contrast-foreground/15">
    {about.highlights?.map((item: { value: string; label: string }) => (
      <div key={item.value} className="px-2 text-center">
        <p className="text-lg font-bold tracking-tight text-accent sm:text-xl">
          {item.value}
        </p>

        <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-contrast-foreground/65 sm:text-[10px]">
          {item.label}
        </p>
      </div>
    ))}
  </div>

  <div className="absolute left-0 top-0 h-[2px] w-full bg-accent/70" />
</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* NARRATIVE COLUMN */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="flex flex-col items-start lg:pl-4">

                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  {about.sectionLabel}
                </p>

                <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl">
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

                <p className="mt-5 max-w-2xl text-[18px] leading-8 text-muted">
                  {about.paragraphOne}
                </p>

                <p className="mt-5 max-w-2xl text-[18px] leading-8 text-muted">
                  {about.paragraphTwo}
                </p>

                {/* CAPABILITIES */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {about.capabilities?.map((item: string) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-[11px] font-medium text-foreground"          >
                      <span className="text-accent">✦</span>
                      {item}
                    </span>
                  ))}
                </div>

             <Button href="#contact" variant="cta" className="mt-8">
  Let's Work Together
</Button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
