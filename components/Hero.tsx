import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-40 md:pb-36 md:pt-48 lg:pt-56">

        <div className="mb-10 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#C1ED00]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Available for projects
          </p>
        </div>

        <h1 className="max-w-6xl text-5xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-6xl md:text-8xl lg:text-[100px]">
          I BUILD
          <br />
          DIGITAL
          <br />
          <span className="relative inline-block">
            EXPERIENCES
            <span className="absolute -bottom-1 left-0 -z-0 h-3 w-full bg-[#C1ED00] md:h-5" />
          </span>
          <br />
          THAT MOVE
          <br />
          BUSINESSES.
        </h1>

        <div className="mt-14 flex flex-col items-start gap-8">

          <p className="max-w-lg text-base leading-8 text-neutral-600 md:text-lg">
            I design and build modern websites that combine
            thoughtful design, strategic thinking, and
            purposeful development to help businesses grow.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="#work"
              className="rounded-full bg-[#C1ED00] px-7 py-4 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              Explore My Work ↗
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-neutral-400 px-7 py-4 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              Get in Touch
            </Link>

          </div>

        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-neutral-300 pt-6 text-xs uppercase tracking-widest text-neutral-500 md:flex-row">
          <p>Independent Web Designer & Developer</p>
          <p>Based in Indonesia · Working Worldwide</p>
          <p>© 2026 madebytrie</p>
        </div>

      </section>
    </>
  );
}
