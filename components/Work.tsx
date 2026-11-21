
export default function Work() {
  return (
    <>
      
       {/* SELECTED WORK */}
      <section id="work" className="bg-[#171717] px-6 py-28 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C1ED00]">
                Selected Projects — 01
              </p>

              <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
                Selected
                <br />
                <span className="text-neutral-500">Work.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-neutral-400">
              A collection of digital experiences built with
              thoughtful design, functionality, and attention
              to detail.
            </p>

          </div>

          <div className="grid gap-12 lg:grid-cols-2">

            {/* PROJECT 01 */}
            <article className="group">

              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#E8E5DC] p-8 transition duration-500 group-hover:bg-[#C1ED00]">

                <div className="w-full rounded-lg bg-white p-3 shadow-2xl transition duration-500 group-hover:-translate-y-2">

                  <div className="mb-3 flex items-center gap-1.5 border-b pb-3">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <div className="bg-[#F2F0EB] p-6 md:p-10">
                    <p className="text-xs font-bold tracking-widest text-neutral-500">
                      GT HAIR
                    </p>

                    <h3 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                      Modern
                      <br />
                      Hair Studio.
                    </h3>

                    <div className="mt-8 h-2 w-24 rounded-full bg-[#C1ED00]" />
                  </div>

                </div>

              </div>

              <div className="mt-6 flex justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">GT HAIR</h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    Website Redesign
                  </p>
                </div>

                <span className="text-sm text-[#C1ED00]">01 / 03</span>
              </div>

            </article>

            {/* PROJECT 02 */}
            <article className="group lg:mt-28">

              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#DCE5D9] p-8 transition duration-500 group-hover:bg-[#C1ED00]">

                <div className="w-full rounded-lg bg-[#101010] p-3 shadow-2xl transition duration-500 group-hover:-translate-y-2">

                  <div className="mb-3 flex items-center gap-1.5 border-b border-neutral-700 pb-3">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <div className="bg-[#171717] p-6 md:p-10">
                    <p className="text-xs font-bold tracking-widest text-[#C1ED00]">
                      CRYPTO MILLIONS
                    </p>

                    <h3 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-5xl">
                      The Future
                      <br />
                      of Finance.
                    </h3>

                    <div className="mt-8 h-2 w-24 rounded-full bg-[#C1ED00]" />
                  </div>

                </div>

              </div>

              <div className="mt-6 flex justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Crypto Millions</h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    Website Design & Build
                  </p>
                </div>

                <span className="text-sm text-[#C1ED00]">02 / 03</span>
              </div>

            </article>

          </div>

          <div className="mt-20 border-t border-neutral-700 pt-8">
            <p className="text-sm text-neutral-400">
              More projects coming soon.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}
