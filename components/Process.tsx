
export default function Process() {
  return (
    <>
      
      {/* PROCESS SECTION */}
      <section id="process" className="bg-[#171717] px-6 py-28 text-[#F4F3EE]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C1ED00]">
                How I Work
              </p>
              <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                From idea<br />to <span className="text-[#C1ED00]">launch.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-neutral-400 lg:max-w-[520px]">
              A clear and collaborative process to turn your ideas into a website built around your business goals.
            </p>
          </div>

          <div className="grid gap-0 border-t border-neutral-700 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Discover",
                description: "Understanding your business, audience, goals, and project requirements.",
              },
              {
                number: "02",
                title: "Plan",
                description: "Creating the website structure, content direction, and user journey.",
              },
              {
                number: "03",
                title: "Design",
                description: "Developing a visual direction and responsive website layouts.",
              },
              {
                number: "04",
                title: "Build",
                description: "Turning the approved design into a functional website.",
              },
              {
                number: "05",
                title: "Launch",
                description: "Testing the website and preparing it for launch.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group border-b border-neutral-700 py-10 transition-colors duration-300 hover:bg-neutral-800/50 lg:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"
              >
                <p className="mb-12 text-sm font-semibold text-[#C1ED00]">
                  / {step.number}
                </p>
                <h3 className="mb-4 text-2xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
