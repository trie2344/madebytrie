
import Reveal from "./Reveal";
import Button from "./Button";

const WHATSAPP_URL = "https://wa.me/6287759375123";

export default function ProjectCTA() {
  return (
    <section className="bg-background px-6 pt-20 pb-12 md:pt-28 md:pb-16 [&_.project-cta-heading]:!text-[#F4F3EE]">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-contrast-background px-7 py-20 text-center md:px-16 md:py-28">

        {/* DECORATIVE CIRCLE */}
        <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-accent/[0.07] blur-2xl md:h-[28rem] md:w-[28rem]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-contrast-foreground/20 px-4 py-2 text-xs font-medium uppercase tracking-widest text-contrast-foreground/70">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Have a Project in Mind?
            </span>

           
<h2 className="project-cta-heading mt-7 text-4xl font-bold leading-[1.1] tracking-[-0.05em] text-contrast-foreground sm:text-5xl md:mt-8 md:text-6xl">
  Have an Idea?
  <br />
  Let&apos;s Bring It to
  <span className="text-accent"> Life.</span>
</h2>


            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-contrast-foreground/60 md:mt-6 md:text-base md:leading-8">
  Have a website project in mind? Let&apos;s discuss your ideas
  and create something meaningful for your business.
</p>

            <Button
              href={WHATSAPP_URL}
              target="_blank"
              variant="primary"
              className="mt-9"
            >
              Let&apos;s Talk About Your Project
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
