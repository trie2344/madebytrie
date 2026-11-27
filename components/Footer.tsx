import { client } from "@/sanity/lib/client";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import { ArrowUpRight } from "lucide-react";
import { ArrowUp } from "lucide-react";

export default async function Footer() {
  "use cache";

  const footer = await client.fetch(FOOTER_QUERY);

  const brandName = footer?.brandName || "madebytrie";
const role =
  footer?.role || "Independent Web Designer & Developer";
const description =
  footer?.description ||
  "Helping businesses build a stronger online presence through thoughtful website design and development.";
const location =
  footer?.location || "Based in Indonesia · Working Worldwide";
const availabilityTitle =
  footer?.availabilityTitle || "Availability";
const availabilityDescription =
  footer?.availabilityDescription ||
  "Open for selected freelance projects and remote collaborations.";
const availabilityLinkText =
  footer?.availabilityLinkText || "Start a Project";
const email = footer?.email || "hello@madebytrie.my.id";
const copyrightText =
  footer?.copyrightText || "© 2026 madebytrie. All rights reserved.";
const creatorName = footer?.creatorName || "Trie";
  return (
    <footer className="bg-contrast-background px-6 py-16 text-contrast-foreground md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* MAIN FOOTER */}
        <div className="grid gap-14 border-b border-contrast-foreground/15 pb-14 lg:grid-cols-12 lg:gap-10">

          {/* BRAND */}
          <div className="lg:col-span-5">
            <a
              href="#"
              className="inline-block text-4xl font-bold tracking-[-0.06em] transition-opacity duration-300 hover:opacity-70 md:text-5xl"
            >
              {brandName}<span className="text-accent">.</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-8 text-contrast-foreground/60 md:text-base">
  {role}
  <br />
  <br />
  {description}
</p>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
              <p className="text-xs font-medium uppercase tracking-widest text-contrast-foreground/50">
                {location}
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">

            {/* EXPLORE */}
            <div>
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-contrast-foreground">
                Explore
              </p>

              <nav className="flex flex-col gap-4 text-sm text-contrast-foreground/70">
                <a href="#work" className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-accent">Work</a>
                <a href="#about" className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-accent">About</a>
                <a href="#services" className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-accent">Services</a>
                <a href="#process" className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-accent">Process</a>
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-contrast-foreground">
                Get in Touch
              </p>

              <nav className="flex flex-col gap-4 text-sm text-contrast-foreground/70">
                <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
                <a
  href={`mailto:${email}`}
  className="transition-colors hover:text-accent"
>
  Email Me
</a>
              </nav>
            </div>

            {/* AVAILABILITY */}
            <div className="col-span-2 max-w-xs sm:col-span-1">
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-contrast-foreground">
                {availabilityTitle}
              </p>

              <p className="text-sm leading-7 text-contrast-foreground/60">
                {availabilityDescription}
              </p>

            <a
  href="https://www.upwork.com/freelancers/~0134bb87915706bd1a?mp_source=share"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my Upwork profile"
  className="group mt-8 inline-flex items-center justify-center gap-2 text-contrast-foreground transition-colors duration-300 hover:text-accent"
>
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent p-2 text-[#171717] transition-colors duration-300 group-hover:bg-contrast-foreground">

  <svg
    viewBox="0 0 24 24"
    className="h-10 w-10"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439" />
  </svg>
  </span>

  <span className="text-3xl font-bold tracking-tight">
    Upwork
  </span>

  <ArrowUpRight
    size={18}
    strokeWidth={2}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>
            </div>

          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className=" flex flex-col justify-between gap-4 pt-7 text-sm text-contrast-foreground/50 sm:flex-row sm:items-center sm:gap-6">

          <p>
  {copyrightText}
</p>

          <p>
  Designed & Built by{" "}
  <span className="font-semibold text-contrast-foreground/90">
  {creatorName}
</span>.
</p>
          <a
  href="#"
  className="group inline-flex w-fit items-center gap-2 transition-colors duration-300 hover:text-accent"
>
  Back to top
  <ArrowUp
    size={14}
    strokeWidth={1.8}
    className="transition-transform duration-300 group-hover:-translate-y-1"
  />
</a>
        </div>

      </div>
    </footer>
  );
}
