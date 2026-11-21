
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your business, audience, goals, and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Creating the website structure, content direction, and user journey.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Developing a visual direction and responsive website layouts.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turning the approved design into a functional and responsive website.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Testing the website and preparing everything for launch.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-surface px-6 py-28 text-foreground"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                How I Work
              </p>

              <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                From idea
                <br />
                to <span className="text-muted">launch.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-muted">
              A clear and collaborative process to turn
              your ideas into a website built around
              your business goals.
            </p>

          </div>
        </Reveal>

        {/* Process Steps */}
        <div className="grid border-t border-border md:grid-cols-2 lg:grid-cols-5">

          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <article className="group relative flex h-full flex-col border-b border-border py-9 transition-colors duration-300 hover:bg-background/50 md:px-5 md:first:pl-0 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0">

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">
                    / {step.number}
                  </span>

                  <span className="text-xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground">
                    ↗
                  </span>
                </div>

                <h3 className="mb-4 mt-14 text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-muted">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

              </article>
            </Reveal>
          ))}

        </div>

        {/* Bottom Note */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 sm:flex-row">
            <p className="text-xs uppercase tracking-widest text-muted">
              Clear communication
            </p>

            <p className="text-xs uppercase tracking-widest text-muted">
              Thoughtful execution
            </p>

            <p className="text-xs uppercase tracking-widest text-muted">
              Collaborative process
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
