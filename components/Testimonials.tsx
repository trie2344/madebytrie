
import Reveal from "./Reveal";

const testimonials = [
  {
    number: "01",
    title: "Client Experience",
    description:
      "This space is reserved for genuine feedback from a client after completing a project together.",
  },
  {
    number: "02",
    title: "Project Feedback",
    description:
      "Real stories and experiences will be featured here as new client collaborations are completed.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface px-6 py-28 text-foreground">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Client Feedback
              </p>

              <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Good work.
                <br />
                <span className="text-muted">Real relationships.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted">
              Every project is built on communication,
              collaboration, and a shared vision.
              Genuine client experiences will be featured here.
            </p>

          </div>
        </Reveal>

        {/* Feedback Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {testimonials.map((item, index) => (
            <Reveal key={item.number} delay={index * 150}>
              <article className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent md:p-10">

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-muted">
                      / {item.number}
                    </span>

                    <span className="text-4xl text-accent">
                      “
                    </span>
                  </div>

                  <h3 className="mt-12 text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    Genuine feedback
                  </span>

                  <span className="text-xl text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

              </article>
            </Reveal>
          ))}

        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-xs text-muted">
            Real client testimonials will be published with permission.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
