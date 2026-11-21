
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-background px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">

        {/* Left Column */}
        <Reveal>
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              A Little About Me
            </p>

            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              The person
              <br />
              behind the
              <br />
              <span className="text-muted">pixels.</span>
            </h2>

            <div className="mt-10 h-1 w-20 bg-accent" />
          </div>
        </Reveal>

        {/* Right Column */}
        <Reveal delay={150}>
          <div className="lg:pt-16">

            <p className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
              Hi, I&apos;m Trie — an independent web designer
              and developer passionate about creating
              meaningful digital experiences.
            </p>

            <p className="mt-8 text-base leading-8 text-muted">
              I combine design thinking, visual creativity,
              and technical skills to build websites that
              are not only visually engaging but also
              purposeful and easy to use.
            </p>

            <p className="mt-5 text-base leading-8 text-muted">
              My focus is helping businesses establish
              a stronger online presence through thoughtful
              website design and development.
            </p>

            {/* Skills */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8">

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  01 / Creative
                </span>

                <p className="mt-4 text-2xl font-bold text-foreground">
                  Design
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Visual Direction & User Experience
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  02 / Technical
                </span>

                <p className="mt-4 text-2xl font-bold text-foreground">
                  Develop
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  WordPress & Elementor Websites
                </p>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
