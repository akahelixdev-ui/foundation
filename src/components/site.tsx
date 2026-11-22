import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/halim-hashi-logo.png";

const nav = [
  { to: "/about", label: "Our story" },
  { to: "/programs", label: "What we do" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Get involved" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" aria-label="Halim Hashi Foundation home">
          <img src={logo} alt="Halim Hashi Foundation" className="h-11 w-auto md:h-12" />
        </Link>
        <nav className="flex items-center gap-1 text-sm font-semibold md:gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hidden rounded-full px-3 py-2 text-foreground/80 hover:text-foreground sm:inline-block"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Halim Hashi Foundation</p>
          <p className="mt-3 max-w-xs text-sm text-ink-foreground/70">
            Started by a family, in their mother's name. Books, supplies and a fair chance at school for children in Bangladesh.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-ink-foreground/80 hover:text-primary">{n.label}</Link>
          ))}
          <a
            href="https://akahelix.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-ink-foreground/50 hover:text-primary pt-2"
          >
            Mainly funded by akaHelix ↗
          </a>
        </div>
        <p className="text-sm text-ink-foreground/60 md:text-right">Est. 15 October 2026<br />Bangladesh</p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
