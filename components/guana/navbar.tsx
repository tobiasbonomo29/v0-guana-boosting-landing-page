"use client"

import { useEffect, useState } from "react"
import { Menu, X, Trophy } from "lucide-react"

const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#precios", label: "Precios" },
  { href: "#streaming", label: "Streaming" },
  { href: "#como", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-[rgba(212,175,55,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md gold-gradient text-black">
            <Trophy className="h-5 w-5" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-md ring-1 ring-[rgba(212,175,55,0.6)] group-hover:ring-2 transition" />
          </span>
          <span className="font-display text-xl tracking-widest">
            GUANA <span className="gold-text-gradient">BOOSTING</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            En vivo ahora
          </span>
          <a
            href="#precios"
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold text-sm text-black gold-gradient hover:opacity-90 transition glow-gold"
          >
            Comprar Boosting
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(212,175,55,0.2)] text-gold"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[rgba(212,175,55,0.15)] bg-background/95 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-2 text-sm text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#precios"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 rounded-md font-semibold text-sm text-black gold-gradient"
              >
                Comprar Boosting
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
