"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, MessageCircle } from "lucide-react"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`lg:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 rounded-xl border border-[rgba(212,175,55,0.3)] bg-background/90 backdrop-blur-xl p-2 glow-gold">
        <a
          href="#precios"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg gold-gradient text-black font-semibold text-sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Comprar Boosting
        </a>
        <a
          href="#contacto"
          aria-label="Contacto"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(212,175,55,0.3)] text-gold"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
