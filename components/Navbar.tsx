
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";

const WHATSAPP_URL = "https://wa.me/6287759375123";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  
const ThemeButton = ({ mobile = false }: { mobile?: boolean }) => (
  <button
    type="button"
    onClick={toggleTheme}
    disabled={!mounted}
    aria-label={
      mounted
        ? isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
        : "Toggle theme"
    }
    title={
      mounted
        ? isDark
          ? "Light Mode"
          : "Dark Mode"
        : "Toggle theme"
    }
    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-transparent text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#171717] ${
      mobile ? "lg:hidden" : "hidden lg:flex"
    }`}
  >
    {mounted ? (
      isDark ? (
        <Sun size={19} strokeWidth={1.8} />
      ) : (
        <Moon size={19} strokeWidth={1.8} />
      )
    ) : (
      <span className="h-4 w-4 rounded-full border-2 border-current" />
    )}
  </button>
);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 px-6 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          madebytrie<span className="text-accent">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <ThemeButton />

          <Button
            href={WHATSAPP_URL}
            variant="cta"
            className="min-h-11 px-6 py-3"
          >
            Let's Talk
          </Button>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeButton mobile />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-accent hover:text-[#171717]"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/15 bg-[#171717] shadow-xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/15 py-4 text-sm font-medium !text-white transition-colors hover:!text-accent"
            >
              {link.label}
            </a>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-accent bg-accent px-6 py-4 text-sm font-semibold !text-[#171717] transition-all duration-300 hover:-translate-y-1"
          >
            Let's Talk
            <ArrowUpRight size={18} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  );
}
