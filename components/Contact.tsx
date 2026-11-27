import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { client } from "@/sanity/lib/client";
import { CONTACT_QUERY } from "@/sanity/lib/queries";

export default async function Contact() {
  "use cache";

  const contact = await client.fetch(CONTACT_QUERY);
  const sectionLabel = contact?.sectionLabel || "Have a Project in Mind?";
const heading = contact?.heading || "Let's Make It Happen.";
const highlightText = contact?.highlightText || "";
const description =
  contact?.description ||
  "Have an idea, a project, or a website that needs a better direction? Let's talk about how we can make it happen.";
const email = contact?.email || "hello@madebytrie.my.id";
const buttonText = contact?.buttonText || "LET'S TALK";

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
      id="contact"
      className="relative isolate overflow-hidden bg-background px-6 pt-20 pb-12 text-foreground md:pt-28 md:pb-16"
    >
      {/* DECORATIVE ELEMENT */}
      <div className="pointer-events-none absolute -right-40 -top-24 -z-10 h-[420px] w-[420px] rounded-full border border-accent/15 md:h-[600px] md:w-[600px]" />
      <div className="mx-auto max-w-7xl">

        {/* SECTION LABEL */}
        <Reveal>
          <div className="mb-16 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted md:text-xs">
              {sectionLabel}
            </p>
          </div>
        </Reveal>

        

{/* MAIN HEADING */}
<Reveal delay={100}>
  
<h2 className="max-w-full text-balance text-[clamp(2.5rem,7.5vw,8rem)] font-bold leading-[1.05] tracking-[-0.065em]">
  {before}
  {highlighted && (
    <span className="relative inline-block">
      {highlighted}
      <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-accent md:-bottom-3 md:h-3" />
    </span>
  )}
  {after}
</h2>

</Reveal>


        {/* CONTACT CONTENT */}
        <div className="mt-20 grid gap-12 border-t border-border pt-8 md:mt-24 md:gap-16 md:pt-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <Reveal delay={150}>
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Start a Conversation
              </p>

              <a
                href={`mailto:${email}`}
                className="group inline-flex max-w-full items-center gap-2 break-all text-lg font-bold tracking-tight transition-colors duration-300 hover:text-muted sm:gap-3 sm:text-xl md:text-3xl"  >
                {email}
                <span className="shrink-0 text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight
  size={22}
  strokeWidth={2}
  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
/>
                </span>
              </a>

              <p className="mt-7 max-w-lg text-sm leading-7 text-muted md:mt-8 md:text-base md:leading-8">
                {description}
              </p>
            </div>
          </Reveal>

          {/* RIGHT CTA */}
          <Reveal delay={250}>
            <div className="flex flex-col gap-8 lg:items-end">
              {/* <a
                href={`mailto:${email}`}
                className="group inline-flex min-h-14 w-fit items-center gap-5 rounded-full bg-foreground px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:!text-[#171717] sm:gap-6 sm:px-8 sm:text-sm"
              >
                {buttonText}

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
  <ArrowUpRight size={20} strokeWidth={2} />
</span>
              </a> */}

              <div className="text-xs uppercase leading-7 tracking-[0.15em] text-muted lg:text-right">
                Independent Web Designer &amp; Developer
                <br />
                Based in Indonesia · Working Worldwide
              </div>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM SIGNATURE */}
        <Reveal delay={300}>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:mt-24 sm:flex-row sm:items-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              madebytrie
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-muted">
              Let&apos;s create something meaningful.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
