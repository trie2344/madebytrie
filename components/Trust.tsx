
import Reveal from "./Reveal";

const trustItems = [
  {
    number: "01",
    title: "Direct Collaboration",
    description:
      "Work directly with me throughout the project, from the first conversation to the final delivery.",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "A unified approach to website design and development, with consistent attention to every detail.",
  },
  {
    number: "03",
    title: "Global Communication",
    description:
      "Flexible remote collaboration with clear communication across different locations and time zones.",
  },
  {
    number: "04",
    title: "Business-Focused Design",
    description:
      "Thoughtful website experiences designed around your business goals and your audience.",
  },
  {
    number: "05",
    title: "Responsive Experience",
    description:
      "Websites carefully designed to deliver a consistent experience across desktop, tablet, and mobile.",
  },
  {
    number: "06",
    title: "Easy to Manage",
    description:
      "Practical WordPress and Elementor websites that make everyday content updates easier.",
  },
];

export default function Trust() {
  return (
    <section className="bg-background px-6 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Why Work With Me
              </p>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                More than just
                <br />
                a <span className="text-muted">good-looking</span> website.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted">
              A thoughtful approach to design, development,
              and collaboration — focused on creating
              websites that serve a real business purpose.
            </p>

          </div>
        </Reveal>

        {/* Trust Grid */}
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">

          {trustItems.map((item, index) => (
            <Reveal key={item.number} delay={(index % 3) * 100}>
              <article className="group relative flex h-full min-h-[245px] flex-col border-t border-border py-7 transition-colors duration-300 hover:border-accent">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-muted">
                    / {item.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    ↗
                  </span>
                </div>

                <div className="mt-auto pt-12">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>

              </article>
            </Reveal>
          ))}

        </div>

        {/* Bottom Statement */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 sm:flex-row">
            <p className="text-xs uppercase tracking-widest text-muted">
              Thoughtful Design
            </p>

            <p className="text-xs uppercase tracking-widest text-muted">
              Practical Development
            </p>

            <p className="text-xs uppercase tracking-widest text-muted">
              Personal Collaboration
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
