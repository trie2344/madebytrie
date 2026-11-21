
export default function Footer() {
  return (
    <footer className="bg-foreground px-6 py-14 text-background">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-12 border-b border-background/20 pb-12 lg:flex-row lg:items-start">

          <div className="max-w-sm">
            <a
              href="#"
              className="text-3xl font-bold tracking-tight transition-opacity hover:opacity-70"
            >
              madebytrie<span className="text-accent">.</span>
            </a>

            <p className="mt-5 text-sm leading-7 text-background/60">
              Independent web designer and developer
              creating thoughtful digital experiences
              for businesses worldwide.
            </p>

            <p className="mt-6 text-xs uppercase tracking-widest text-background/40">
              Based in Indonesia · Working Worldwide
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-background/40">
                Explore
              </p>

              <nav className="flex flex-col gap-4 text-sm text-background/70">
                <a href="#work" className="transition-colors hover:text-accent">
                  Work
                </a>
                <a href="#about" className="transition-colors hover:text-accent">
                  About
                </a>
                <a href="#services" className="transition-colors hover:text-accent">
                  Services
                </a>
                <a href="#process" className="transition-colors hover:text-accent">
                  Process
                </a>
              </nav>
            </div>

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-background/40">
                Get in Touch
              </p>

              <nav className="flex flex-col gap-4 text-sm text-background/70">
                <a
                  href="#contact"
                  className="transition-colors hover:text-accent"
                >
                  Contact
                </a>
                <a
                  href="mailto:hello@madebytrie.my.id"
                  className="transition-colors hover:text-accent"
                >
                  Email Me
                </a>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-background/40">
                Availability
              </p>

              <p className="text-sm leading-7 text-background/70">
                Open for selected freelance projects
                and remote collaborations.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-background/40 sm:flex-row sm:items-center">

          <p>
            © {new Date().getFullYear()} madebytrie. All rights reserved.
          </p>

          <p>
            Designed & Built by Trie.
          </p>

          <a
            href="#"
            className="transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}
