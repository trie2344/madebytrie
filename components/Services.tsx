
import Reveal from "./Reveal";
import { client } from "@/sanity/lib/client";
import {
  SERVICES_QUERY,
  SERVICES_SECTION_QUERY,
} from "@/sanity/lib/queries";

const services = [
  {
    number: "01",
    title: "Business Website",
    description:
      "A professional online presence that communicates your brand, builds credibility, and helps potential customers understand your business.",
    detail: "For businesses & growing brands",
  },
  {
    number: "02",
    title: "Landing Page Design",
    description:
      "Focused, persuasive landing pages that present your offer clearly and guide visitors toward taking the next step.",
    detail: "For campaigns & specific offers",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
      "Transform an outdated website into a modern, intuitive experience with improved structure, visual consistency, and usability.",
    detail: "For existing websites",
  },
  {
    number: "04",
    title: "WordPress & Elementor",
    description:
      "Flexible and easy-to-manage websites built with WordPress and Elementor, giving you more control over your content.",
    detail: "For flexible website management",
  },
];

export default async function Services() {
  const [services, section] = await Promise.all([
  client.fetch(SERVICES_QUERY, {}, { cache: "no-store" }),
  client.fetch(SERVICES_SECTION_QUERY, {}, { cache: "no-store" }),
]);

const heading =
  section?.heading || "Digital Solutions Designed Around Your Business.";

const highlightText = section?.highlightText || "";

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
    <section
      id="services"
      className="bg-background px-6 pt-20 pb-12 md:pt-28 md:pb-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <Reveal>
          <div className="mb-16 grid gap-8 md:mb-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
  {section?.sectionLabel || "What I Can Do For You"}
</p>

              <h2 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-foreground md:text-7xl">
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

            <p className="max-w-md text-[18px] leading-8 text-muted md:justify-self-end">
              From building your online presence to improving
              an existing website, I create thoughtful digital
              experiences tailored to your business needs.
            </p>
          </div>
        </Reveal>

        {/* SERVICE ROWS */}
        <div className="border-t border-border">
          {services.map((service: {
  number: string;
  title: string;
  description: string;
  detail: string;
}, index: number) => (
            <Reveal key={service.number} delay={index * 100}>
              <article className="group grid gap-5 border-b border-border px-5 py-12 transition-colors duration-300 hover:bg-surface md:grid-cols-12 md:items-center md:gap-6 md:px-8 md:py-14">
                {/* NUMBER */}
                <div className="md:col-span-1">
                  <span className="text-sm font-medium tabular-nums text-muted">
                    {service.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-5">
                  <p className="max-w-xl text-[18px] leading-8 text-muted">
                    {service.description}
                  </p>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-muted">
                    {service.detail}
                  </p>
                </div>

                {/* ARROW */}
                <div className="hidden justify-end md:col-span-2 md:flex">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-xl text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    ↗
                  </span>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
