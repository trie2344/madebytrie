
import Reveal from "./Reveal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { client } from "@/sanity/lib/client";
import {
  TESTIMONIALS_QUERY,
  TESTIMONIALS_SECTION_QUERY,
} from "@/sanity/lib/queries";


export default async function Testimonials() {
  const [testimonials, section] = await Promise.all([
  client.fetch(TESTIMONIALS_QUERY, {}, { cache: "no-store" }),
  client.fetch(TESTIMONIALS_SECTION_QUERY, {}, { cache: "no-store" }),
]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  const sectionLabel = section?.sectionLabel || "Client Feedback";
const heading = section?.heading || "Words from my clients.";
const highlightText = section?.highlightText || "";
const description =
  section?.description ||
  "A few words from the people I've had the opportunity to work with.";

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
    <section className="overflow-hidden bg-contrast-background px-6 pt-20 pb-12 text-contrast-foreground md:pt-28 md:pb-16">
      <div className="mx-auto max-w-7xl">


{/* HEADER */}
<Reveal>
  <div className="mb-14 flex flex-col justify-between gap-8 border-b border-contrast-foreground/15 pb-10 md:mb-16 md:flex-row md:items-end md:gap-12">
    <div>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {sectionLabel}
      </p>

      <h2 className="testimonials-heading text-5xl font-bold leading-[1.05] tracking-[-0.06em] md:text-7xl">
        {before}
        {highlighted && (
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 h-3 bg-accent/60"
            />
            <span className="relative text-[#F4F3EE]">
              {highlighted}
            </span>
          </span>
        )}
        {after}
      </h2>
    </div>

    <p className="max-w-md text-sm leading-7 text-contrast-foreground/60 md:text-base md:leading-8">
      {description}
    </p>
  </div>
</Reveal>


        {/* TESTIMONIAL CAROUSEL */}
        <Reveal delay={150}>
          <TestimonialsCarousel testimonials={testimonials} />
        </Reveal>

      </div>
    </section>
  );
}
