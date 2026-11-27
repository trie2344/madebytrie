
"use client";

import { useState } from "react";

type Testimonial = {
  _id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({
  testimonials,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((index) =>
      index === 0 ? testimonials.length - 1 : index - 1
    );
  };

  const next = () => {
    setActiveIndex((index) =>
      index === testimonials.length - 1 ? 0 : index + 1
    );
  };

  const initials = current.clientName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative">
      {/* TESTIMONIAL CARD */}
      <div className="relative overflow-hidden rounded-[2rem] border border-contrast-foreground/10 bg-contrast-foreground/[0.045] px-7 py-12 shadow-2xl shadow-black/10 md:px-16 md:py-16 lg:px-20 lg:py-20">        {/* DECORATIVE QUOTE */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 -top-10 select-none font-serif text-[180px] leading-none text-accent/[0.10] md:-right-1 md:-top-16 md:text-[260px]"
        >
          ”
        </span>

        <div className="relative z-10">
          {/* CARD LABEL */}
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-contrast-foreground/45">
              Client Experience
            </span>
          </div>

          {/* QUOTE */}
          <blockquote
  key={current._id}
  className="max-w-5xl text-xl font-medium leading-[1.55] tracking-[-0.025em] text-contrast-foreground sm:text-2xl md:text-3xl lg:text-4xl"
>
  “{current.quote}”
</blockquote>
          {/* CLIENT PROFILE */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-contrast-foreground/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold tracking-wide text-accent">
                {initials}
              </div>

              <div>
                <p className="text-base font-semibold tracking-tight text-contrast-foreground">
  {current.clientName}
</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-contrast-foreground/50">
  {current.clientRole || "Client"}
</p>
              </div>
            </div>

            <span className="rounded-full border border-contrast-foreground/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-contrast-foreground/50">
              Client Feedback
            </span>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-7 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-contrast-foreground/40">
            Testimonials
          </p>

          <p className="mt-2 text-sm font-medium text-contrast-foreground">
            <span className="text-accent">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-contrast-foreground/30">/</span>
            <span className="text-contrast-foreground/50">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </p>
        </div>

        <div className="flex gap-2">
          <button
  type="button"
  onClick={previous}
  aria-label="Previous testimonial"
  className="flex h-14 w-14 items-center justify-center rounded-full border border-contrast-foreground/15 bg-contrast-foreground/[0.03] text-xl text-contrast-foreground/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/10"
>
  ←
</button>

          <button
  type="button"
  onClick={next}
  aria-label="Next testimonial"
  className="flex h-14 w-14 items-center justify-center rounded-full border border-contrast-foreground/15 bg-contrast-foreground/[0.03] text-xl text-contrast-foreground/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/10"
>
  →
</button>
        </div>
      </div>
    </div>
  );
}
