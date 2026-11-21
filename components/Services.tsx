
import Reveal from "./Reveal";

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

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F4F3EE] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#777777]">
                What I Can Do For You
              </p>

              <h2 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Services built
                <br />
                for <span className="text-[#777777]">your growth.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#777777]">
              From building your online presence to improving
              an existing website, I create thoughtful digital
              experiences tailored to your business needs.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={(index % 2) * 120}>
              <article className="group flex h-full min-h-[340px] flex-col justify-between rounded-2xl border border-[#D9D8D0] bg-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C1ED00] hover:bg-[#C1ED00] md:p-10">

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-[#777777] transition-colors group-hover:text-[#171717]">
                      {service.number} / SERVICE
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D8D0] text-xl transition-all duration-300 group-hover:rotate-45 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-[#C1ED00]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-14 text-3xl font-bold tracking-tight text-[#171717] md:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#777777] transition-colors group-hover:text-[#171717]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 border-t border-[#D9D8D0] pt-5 transition-colors group-hover:border-[#171717]/20">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#777777] transition-colors group-hover:text-[#171717]">
                    {service.detail}
                  </p>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
