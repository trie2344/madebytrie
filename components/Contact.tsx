
export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
<section id="contact" className="bg-[#C1ED00] px-6 py-28 text-[#171717]">
  <div className="mx-auto max-w-7xl">
    <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em]">
      Have a project in mind?
    </p>

    <h2 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-8xl">
      LET&apos;S BUILD<br />
      SOMETHING<br />
      <span className="text-white">GREAT.</span>
    </h2>

    <div className="mt-16 flex flex-col items-start gap-10 border-t border-black/20 pt-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider">
          Start a conversation
        </p>
        <a
          href="mailto:hello@madebytrie.my.id"
          className="text-xl font-bold underline decoration-2 underline-offset-8 transition-opacity hover:opacity-60 md:text-3xl"
        >
          hello@madebytrie.my.id
        </a>
        <p className="mt-6 text-sm text-black/60">
          Available for freelance projects worldwide.
        </p>
      </div>

      <a
        href="mailto:hello@madebytrie.my.id"
        className="inline-flex w-fit items-center gap-4 rounded-full bg-[#171717] px-8 py-5 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
      >
        LET&apos;S TALK <span>↗</span>
      </a>
    </div>
  </div>
</section>
    </>
  );
}
