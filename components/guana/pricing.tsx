"use client"

import { motion } from "framer-motion"
import { Check, Crown, Trophy, Medal, Award, Star } from "lucide-react"

const tiers = [
  {
    rank: "Rank V",
    icon: Star,
    usd: "49.99",
    eur: "42.99",
    time: "8-12 hs",
    popular: false,
  },
  {
    rank: "Rank IV",
    icon: Medal,
    usd: "59.99",
    eur: "51.99",
    time: "12-18 hs",
    popular: false,
  },
  {
    rank: "Rank III",
    icon: Award,
    usd: "69.99",
    eur: "59.99",
    time: "18-24 hs",
    popular: true,
  },
  {
    rank: "Rank II",
    icon: Trophy,
    usd: "74.99",
    eur: "64.99",
    time: "24-36 hs",
    popular: false,
  },
  {
    rank: "Rank I",
    icon: Crown,
    usd: "84.99",
    eur: "74.99",
    time: "36-48 hs",
    popular: false,
  },
]

const features = [
  "Streaming en vivo incluido",
  "Login 100% seguro (VPN)",
  "Jugador profesional dedicado",
  "Recompensas garantizadas",
]

export function Pricing() {
  return (
    <section id="precios" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-x-0 top-0 h-96 opacity-50"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(122,0,18,0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Precios premium</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            ELEGÍ TU <span className="gold-text-gradient">RANGO</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg text-pretty">
            Todos los servicios incluyen streaming en vivo y entrega garantizada por jugadores profesionales.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.rank}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group rounded-xl transition-all duration-500 hover:-translate-y-2 ${
                t.popular
                  ? "premium-border bg-gradient-to-b from-[rgba(212,175,55,0.12)] via-card to-card glow-gold lg:scale-105 lg:-translate-y-2"
                  : "border border-[rgba(212,175,55,0.15)] bg-card/60 hover:border-[rgba(212,175,55,0.4)]"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full gold-gradient px-3 py-1 text-[10px] font-bold tracking-widest text-black uppercase">
                    Más popular
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${
                      t.popular
                        ? "gold-gradient text-black"
                        : "bg-[rgba(212,175,55,0.08)] text-gold border border-[rgba(212,175,55,0.2)]"
                    }`}
                  >
                    <t.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.time}</span>
                </div>

                <h3 className="mt-5 font-display text-3xl tracking-wider">{t.rank}</h3>

                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">$</span>
                    <span className="font-display text-5xl gold-text-gradient leading-none">{t.usd}</span>
                    <span className="text-sm text-muted-foreground ml-1">USD</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">€{t.eur} EUR</div>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-6 inline-flex items-center justify-center px-4 py-3 rounded-md font-semibold text-sm transition ${
                    t.popular
                      ? "gold-gradient text-black hover:opacity-95"
                      : "border border-[rgba(212,175,55,0.3)] text-gold hover:bg-[rgba(212,175,55,0.08)] hover:border-gold"
                  }`}
                >
                  Comprar ahora
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          ¿Necesitás algo personalizado? <a href="#contacto" className="text-gold hover:underline">Contactanos por Discord</a>
        </p>
      </div>
    </section>
  )
}
