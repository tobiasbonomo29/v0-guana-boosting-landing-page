"use client"

import { motion } from "framer-motion"
import { ShoppingCart, MessageCircle, Eye, Gift } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "Elegí tu rango",
    desc: "Seleccioná el rango que querés alcanzar entre nuestras opciones premium.",
  },
  {
    icon: MessageCircle,
    title: "Contactanos",
    desc: "Coordinamos por Discord o WhatsApp en menos de 30 minutos.",
  },
  {
    icon: Eye,
    title: "Mirá en vivo",
    desc: "Recibí el link del stream y seguí cada partido en tiempo real.",
  },
  {
    icon: Gift,
    title: "Recibí tus recompensas",
    desc: "Disfrutá de tus packs, jugadores y rewards FUT Champions.",
  },
]

export function HowItWorks() {
  return (
    <section id="como" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-[#080404] to-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Proceso simple</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            ¿CÓMO <span className="gold-text-gradient">FUNCIONA?</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.4)] to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative inline-flex h-24 w-24 items-center justify-center mx-auto">
                  <span className="absolute inset-0 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.3)]" />
                  <span className="absolute -inset-2 rounded-full border border-[rgba(212,175,55,0.12)]" />
                  <s.icon className="h-9 w-9 text-gold relative" />
                  <span className="absolute -top-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full gold-gradient text-black font-display text-base">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
