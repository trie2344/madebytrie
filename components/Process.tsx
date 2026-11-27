import Reveal from "./Reveal";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { PROCESS_QUERY } from "@/sanity/lib/queries";

const processIcons = [Search, PenTool, Code2, Rocket];

export default async function Process() {
  const process = await client.fetch(
    PROCESS_QUERY,
    {},
    { cache: "no-store" }
  );

  if (!process) return null;

  const heading = process.heading || "";
const highlightText = process.highlightText || "";

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
      id="process"
className="bg-background px-6 pt-20 pb-12 md:pt-28 md:pb-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="mb-14 grid gap-7 md:mb-18 md:grid-cols-2 md:items-end md:gap-12">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted md:text-xs">
  {process.sectionLabel}
</p>

              <h2 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-foreground md:text-7xl">
  {before}
  {highlighted && (
    <span className="text-accent">
  {highlighted}
</span>
  )}
  {after}
</h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted md:justify-self-end md:text-base md:leading-8">
  {process.introDescription}
</p>
          </div>
        </Reveal>

        {/* PROCESS STEPS */}
        <div className="grid border-t border-border md:grid-cols-2 md:gap-x-0">
          {process.steps?.map((step: {
  number: string;
  title: string;
  description: string;
}, index: number) => (
            <Reveal key={step.number} delay={index * 100}>
              <article
              
  className={`group relative grid h-full grid-cols-[auto_1fr] items-center gap-5 border-b border-border py-10 md:gap-8 md:py-12 ${
    index % 2 === 0
      ? "md:border-r md:border-foreground/10 md:pr-8"
      : "md:pl-8"
      
  }`}
  
>
  <span className="absolute right-2 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-background text-muted transition-all duration-300 group-hover:bg-accent group-hover:text-[#171717] md:h-12 md:w-12">
  {(() => {
    const Icon = processIcons[index];

    return Icon ? (
      <Icon size={28} strokeWidth={1.7} />
    ) : null;
  })()}
</span>
  {/* LARGE NUMBER */}
  <div className="flex h-full items-center border-r border-foreground/10 pr-5 md:pr-8">
    <span className="text-7xl font-bold leading-none tracking-[-0.08em] text-muted transition-colors duration-300 group-hover:text-foreground md:text-8xl lg:text-9xl">
      {step.number}
    </span>
  </div>

  {/* STEP CONTENT */}
  <div className="flex items-center pr-12 md:pr-14">
    {/* <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-muted transition-all duration-300 group-hover:bg-accent group-hover:text-[#171717] md:h-22 md:w-22">
      {(() => {
        const Icon = processIcons[index];

        return Icon ? (
          <Icon size={28} strokeWidth={1.7} />
        ) : null;
      })()}
    </span> */}

    <div>
      <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-foreground transition-colors duration-300 group-hover:text-accent md:text-2xl lg:text-3xl">
        {step.title}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-7 text-muted md:text-base md:leading-7">
        {step.description}
      </p>
    </div>
  </div>
</article>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap justify-between gap-x-8 gap-y-3 pt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted md:text-xs">
            {process.bottomStatements?.map((statement: string, index: number) => (
              <p key={index}>{statement}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
