
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    name: "GT HAIR",
    category: "Website Redesign",
    description:
      "A website redesign concept for a modern hair studio, focused on presenting the brand with a clear and contemporary digital experience.",
    theme: "light",
    heading: (
      <>
        Modern
        <br />
        Hair Studio.
      </>
    ),
    label: "GT HAIR",
  },
  {
    number: "02",
    name: "Crypto Millions",
    category: "Website Design & Build",
    description:
      "A digital experience concept for a finance-focused brand, combining bold typography and a distinctive visual direction.",
    theme: "dark",
    heading: (
      <>
        The Future
        <br />
        of Finance.
      </>
    ),
    label: "CRYPTO MILLIONS",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="bg-surface px-6 py-28 text-foreground"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Selected Projects
              </p>

              <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
                Selected
                <br />
                <span className="text-muted">Work.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted">
              A selection of website design and development
              projects, built with attention to visual clarity,
              functionality, and user experience.
            </p>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">

          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 150}>
              <article className={`group ${index === 1 ? "lg:mt-28" : ""}`}>

                {/* Project Preview */}
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl p-6 transition-colors duration-500 md:p-12 ${
                    project.theme === "light"
                      ? "bg-surface group-hover:bg-accent"
                      : "bg-card group-hover:bg-accent"
                  }`}
                >
                  <div
                    className={`relative w-full max-w-xl overflow-hidden rounded-xl p-3 shadow-2xl transition-transform duration-500 group-hover:-translate-y-3 ${
                      project.theme === "light"
                        ? "bg-background"
                        : "bg-foreground"
                    }`}
                  >

                    {/* Browser Header */}
                    <div className="mb-3 flex items-center gap-1.5 border-b border-border pb-3">
                      <span className="h-2 w-2 rounded-full bg-muted" />
                      <span className="h-2 w-2 rounded-full bg-muted" />
                      <span className="h-2 w-2 rounded-full bg-muted" />
                    </div>

                    {/* Website Preview */}
                    <div
                      className={`min-h-[220px] p-6 md:min-h-[280px] md:p-10 ${
                        project.theme === "light"
                          ? "bg-background text-foreground"
                          : "bg-card text-background"
                      }`}
                    >
                      <p className={`text-xs font-bold tracking-widest ${
                        project.theme === "light"
                          ? "text-muted"
                          : "text-accent"
                      }`}>
                        {project.label}
                      </p>

                      <h3 className="mt-8 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                        {project.heading}
                      </h3>

                      <div className="mt-8 h-2 w-24 rounded-full bg-accent" />
                    </div>
                  </div>

                  <span className="absolute bottom-6 right-6 text-xs font-semibold tracking-widest text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    PROJECT {project.number} ↗
                  </span>
                </div>

                {/* Project Information */}
                <div className="mt-7 flex flex-col justify-between gap-5 border-b border-foreground/20 pb-7 sm:flex-row sm:items-start">

                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs text-accent">
                        {project.number}
                      </span>

                      <span className="h-px w-8 bg-muted" />

                      <span className="text-xs uppercase tracking-wider text-muted">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-2xl text-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>

                </div>

              </article>
            </Reveal>
          ))}

        </div>

        {/* Bottom Note */}
        <Reveal>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-background/20 pt-8 sm:flex-row">
            <p className="text-sm text-muted">
              More projects coming soon.
            </p>

            <p className="text-xs uppercase tracking-widest text-muted">
              Design · Development · Experience
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
