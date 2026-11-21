
export default function Services() {
  return (
    <>
      
      {/* SERVICES SECTION */}
      <section
        id="services"
        className="bg-[#F4F3EE] px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              What I Can Do For You
            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Services built
              <br />
              for <span className="text-neutral-400">your growth.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* SERVICE 01 */}
            <article className="group rounded-2xl border border-neutral-300 p-8 transition duration-300 hover:border-[#C1ED00] hover:bg-[#C1ED00] lg:p-10">
              <div className="flex justify-between">
                <span className="text-sm text-neutral-500 group-hover:text-black">01 / SERVICE</span>
                <span className="text-2xl transition group-hover:rotate-45">↗</span>
              </div>

              <h3 className="mt-16 text-3xl font-bold tracking-tight md:text-4xl">
                Business Website
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                Professional websites that communicate your brand,
                build trust, and help your business establish
                a strong digital presence.
              </p>
            </article>

            {/* SERVICE 02 */}
            <article className="group rounded-2xl border border-neutral-300 p-8 transition duration-300 hover:border-[#C1ED00] hover:bg-[#C1ED00] lg:p-10">
              <div className="flex justify-between">
                <span className="text-sm text-neutral-500 group-hover:text-black">02 / SERVICE</span>
                <span className="text-2xl transition group-hover:rotate-45">↗</span>
              </div>

              <h3 className="mt-16 text-3xl font-bold tracking-tight md:text-4xl">
                Landing Page Design
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                Focused landing pages designed to communicate
                your offer clearly and guide visitors toward
                meaningful action.
              </p>
            </article>

            {/* SERVICE 03 */}
            <article className="group rounded-2xl border border-neutral-300 p-8 transition duration-300 hover:border-[#C1ED00] hover:bg-[#C1ED00] lg:p-10">
              <div className="flex justify-between">
                <span className="text-sm text-neutral-500 group-hover:text-black">03 / SERVICE</span>
                <span className="text-2xl transition group-hover:rotate-45">↗</span>
              </div>

              <h3 className="mt-16 text-3xl font-bold tracking-tight md:text-4xl">
                Website Redesign
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                Transform outdated websites into modern,
                user-friendly experiences with better structure,
                clarity, and visual consistency.
              </p>
            </article>

            {/* SERVICE 04 */}
            <article className="group rounded-2xl border border-neutral-300 p-8 transition duration-300 hover:border-[#C1ED00] hover:bg-[#C1ED00] lg:p-10">
              <div className="flex justify-between">
                <span className="text-sm text-neutral-500 group-hover:text-black">04 / SERVICE</span>
                <span className="text-2xl transition group-hover:rotate-45">↗</span>
              </div>

              <h3 className="mt-16 text-3xl font-bold tracking-tight md:text-4xl">
                WordPress & Elementor
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                Flexible, easy-to-manage websites built with
                WordPress and Elementor to support your
                business needs.
              </p>
            </article>

          </div>

        </div>
      </section>
    </>
  );
}
