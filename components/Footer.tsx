
export default function Footer() {
  return (
    <>
      {/* FOOTER SECTION */}
<footer className="bg-[#171717] px-6 py-12 text-[#F4F3EE]">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-10 border-b border-neutral-700 pb-12 lg:flex-row lg:items-center lg:justify-between">
      <a href="#" className="text-3xl font-bold tracking-tight">
        madebytrie<span className="text-[#C1ED00]">.</span>
      </a>

      <nav className="flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap text-xs text-neutral-400 md:gap-8 md:text-sm">
        <a href="#work" className="transition-colors hover:text-[#C1ED00]">Work</a>
        <a href="#services" className="transition-colors hover:text-[#C1ED00]">Services</a>
        <a href="#about" className="transition-colors hover:text-[#C1ED00]">About</a>
        <a href="#process" className="transition-colors hover:text-[#C1ED00]">Process</a>
        <a href="#contact" className="transition-colors hover:text-[#C1ED00]">Contact</a>
      </nav>
    </div>

    <div className="flex flex-col items-start gap-4 pt-8 text-xs text-neutral-500 lg:flex-row lg:items-center lg:justify-between">
      <p>© 2026 madebytrie. All rights reserved.</p>
      <p>Designed & Built by Trie.</p>
    </div>
  </div>
</footer>
    </>
  );
}
