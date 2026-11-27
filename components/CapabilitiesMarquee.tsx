
export default function CapabilitiesMarquee() {
  const capabilities = [
    "WEB DESIGN",
    "WEB DEVELOPMENT",
    "WORDPRESS SPECIALIST",
    "ELEMENTOR EXPERTISE",
    "CUSTOM WEBSITE DESIGN",
    "LANDING PAGE DEVELOPMENT",
    "RESPONSIVE DESIGN",
    "WEBSITE REDESIGN",
    "PERFORMANCE-FOCUSED",
    "GLOBAL COLLABORATION",
  ];

  return (
    <section
      className="capabilities-marquee border-y border-contrast-foreground/15 bg-contrast-background"
      aria-label="Capabilities"
    >
      <div className="capabilities-track">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center py-4 md:py-5"
            aria-hidden={group === 1}
          >
            {capabilities.map((item, index) => (
              <span
                key={`${group}-${index}`}
                className="inline-flex items-center gap-7 px-7 whitespace-nowrap md:gap-9"
              >
                <span
                  className={`text-sm font-semibold tracking-[0.12em] md:text-base ${
                    index % 2 === 1
                      ? "text-accent"
                      : "text-contrast-foreground/80"
                  }`}
                >
                  {item}
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl font-normal leading-none text-accent"
                >
                  ⁕
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
