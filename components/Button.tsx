
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "cta";
  arrow?: boolean;
  className?: string;
  target?: "_blank" | "_self";
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
  target,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 active:translate-y-0";

  const variants = {
    primary:
      "border border-accent bg-accent !text-[#171717] shadow-md hover:border-accent-hover hover:bg-accent-hover hover:!text-[#171717] hover:shadow-lg",

    secondary:
      "border border-border bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:!text-background",

   cta: "cta-button shadow-md hover:shadow-lg",  };
  const ctaStyle =
  variant === "cta"
    ? {
        backgroundColor: "var(--cta-bg)",
        color: "var(--cta-text)",
        borderColor: "var(--cta-bg)",
      }
    : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={ctaStyle}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}

      {arrow && (
        <ArrowUpRight
          size={18}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </Link>
  );
}
