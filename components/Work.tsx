
import Button from "./Button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Reveal from "./Reveal";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { projectStatusLabels, type ProjectStatus } from "@/data/projects";

export default async function Work() {
  const projects = await client.fetch(
  PROJECTS_QUERY,
  {},
  { cache: "no-store" }
);

  return (
    <section
      id="work"
      className="bg-background px-6 pt-28 pb-10 text-foreground md:pt-36 md:pb-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="mb-8 grid gap-8 md:mb-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Portfolio / Selected Projects
              </p>

              <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.05em] md:text-7xl">
  A Selection of Websites Built with Purpose.
  <br />
  
</h2>
            </div>

            <div className="md:justify-self-end md:pb-2">
              <p className="max-w-md text-base leading-8 text-muted md:text-lg">
                A collection of digital experiences designed to help businesses communicate clearly, build credibility, and connect with their customers.
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-foreground md:mt-8">
  Design with intention. Built with purpose.
</p>
            </div>
          </div>
        </Reveal>


{/* PROJECT LIST */}
<div className="relative">
  {projects.map((project: {
  slug: string;
  theme: string;
  image?: {
    asset?: unknown;
  };
  name: string;
  category: string;
  description: string;
  status?: string;
  toolsUsed?: string[];
  liveUrl?: string;
}, index: number) => (
    <article
      key={project.slug}
      className="sticky top-20 flex min-h-0 items-center bg-background py-2 sm:top-24 sm:min-h-[calc(85vh-6rem)] sm:py-6"
      style={{ zIndex: index + 1 }}
    >
      <div className="grid w-full items-center gap-5 lg:grid-cols-12 lg:gap-10">
        {/* PROJECT VISUAL */}
        <div
          className={`relative overflow-hidden rounded-2xl p-2 sm:p-4 lg:col-span-7 ${
            index % 2 === 1 ? "lg:order-2" : ""
          } ${
            project.theme === "light"
              ? "bg-surface"
              : "bg-foreground"
          }`}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

          <div
            className={`relative overflow-hidden rounded-xl shadow-2xl ${
              project.theme === "light"
                ? "bg-background"
                : "bg-card"
            }`}
          >
            <div className="flex h-10 items-center justify-between border-b border-border px-4">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-muted/50" />
                <span className="h-2 w-2 rounded-full bg-muted/50" />
                <span className="h-2 w-2 rounded-full bg-muted/50" />
              </div>
              <span className="text-xs text-muted">↗</span>
            </div>

            <div
              className={`relative aspect-[16/10] overflow-hidden ${
                project.theme === "light"
                  ? "bg-background"
                  : "bg-foreground"
              }`}
            >
              {project.image?.asset ? (
                <Image
                  src={urlFor(project.image).width(1600).quality(85).url()}
                  alt={`${project.name} website preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col justify-center p-8 sm:p-12">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {project.category}
                  </p>
                  <h3 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                    Image coming soon
                  </p>
                </div>
              )}
            </div>
          </div>

          <span className="relative mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Project {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* PROJECT DETAILS */}
        <div
          className={`lg:col-span-5 ${
            index % 2 === 1 ? "lg:order-1" : ""
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-muted">
              / {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-bold leading-[1.1] tracking-[-0.05em] md:text-4xl">
            {project.name}
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
            {project.description}
          </p>

          {project.status && (
            <p className="mt-3 inline-flex rounded-full border border-border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
              {projectStatusLabels[project.status as ProjectStatus]}
            </p>
          )}

          <div className="mt-7 border-t border-border pt-5">
            {project.toolsUsed && project.toolsUsed.length > 0 && (
              <>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Tools Used
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.toolsUsed.map((tool: string) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border px-3 py-2 text-xs font-medium text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </>
            )}

            {project.liveUrl && (
              <div className="mt-5">
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  variant="secondary"
                  className="min-h-[44px] gap-2 px-5 py-3 text-xs"
                >
                  View Live Website
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  ))}
</div>


        {/* BOTTOM NOTE */}
        <Reveal>
          <div className="mt-6 flex flex-col justify-between gap-4 border-t-0 pt-6 sm:mt-16 sm:flex-row sm:border-t sm:border-border">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Portfolio / madebytrie
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Selected Digital Experiences
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
