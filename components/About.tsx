
export default function About() {
  return (
    <>
      
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-[#D9D8D0] px-6 py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              A Little About Me
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              The person
              <br />
              behind the
              <br />
              <span className="text-neutral-500">pixels.</span>
            </h2>
          </div>

          <div>
            <p className="text-xl font-semibold leading-relaxed md:text-2xl">
              Hi, I&apos;m Trie — an independent web designer
              and developer passionate about creating
              meaningful digital experiences.
            </p>

            <p className="mt-8 text-base leading-8 text-neutral-600">
              I combine design thinking, visual creativity,
              and technical skills to build websites that
              are not only visually engaging but also
              purposeful and easy to use.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600">
              My focus is helping businesses establish
              a stronger online presence through thoughtful
              website design and development.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-neutral-400 pt-8">

              <div>
                <p className="text-2xl font-bold">Design</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Visual & User Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">Develop</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Modern Website Building
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
