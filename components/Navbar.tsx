
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* LOGO */}
        <a href="#" className="text-2xl font-bold tracking-tight">
          madebytrie<span className="text-[#C1ED00]">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neutral-500"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#171717] px-6 py-3 text-white transition-transform hover:-translate-y-1"
          >
            Let&apos;s Talk ↗
          </a>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-[#171717] lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-6 right-6 top-20 overflow-hidden rounded-2xl bg-[#171717] transition-all duration-300 lg:flex
lg:hidden  ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-4 text-sm font-medium text-white transition-colors hover:text-[#C1ED00]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 rounded-full bg-[#C1ED00] px-6 py-4 text-center text-sm font-bold text-[#171717]"
          >
            Let&apos;s Talk ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
