"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "¿Es seguro el boosting?",
    a: "Sí. Usamos VPN dedicada por país, login encriptado y nunca compartimos tus credenciales. Todos nuestros pros firman acuerdos de confidencialidad y trabajamos con sistemas que protegen tu cuenta de cualquier riesgo.",
  },
  {
    q: "¿Cómo funciona el streaming en vivo?",
    a: "Apenas comienza tu boosting recibís un link privado por Discord o Twitch. Desde ahí podés ver TODOS los partidos en tiempo real, sin cortes y con audio incluido si querés.",
  },
  {
    q: "¿Cuánto tarda el boosting?",
    a: "Depende del rango: desde 8hs para Rank V hasta 36-48hs para Rank I. Los tiempos están detallados en cada plan y siempre cumplimos lo prometido.",
  },
  {
    q: "¿Puedo mirar todos los partidos?",
    a: "Por supuesto. Esa es nuestra principal diferencia. El 100% del boosting se transmite en vivo y vos decidís qué partidos querés ver.",
  },
  {
    q: "¿Mi cuenta está segura?",
    a: "Totalmente. Nunca cambiamos passwords, ni desbloqueamos códigos 2FA. Coordinamos cada login y nunca dejamos la cuenta logueada cuando no estamos jugando.",
  },
  {
    q: "¿Qué plataformas soportan?",
    a: "Trabajamos con PlayStation 5, Xbox Series X/S y PC (EA Sports FC en Steam y EA App).",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-[#080404] to-background">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Dudas frecuentes</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            PREGUNTAS <span className="gold-text-gradient">FRECUENTES</span>
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "border-[rgba(212,175,55,0.4)] bg-card"
                    : "border-[rgba(212,175,55,0.15)] bg-card/40 hover:bg-card/70"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg pr-4">{f.q}</span>
                  <span
                    className={`flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full transition ${
                      isOpen ? "gold-gradient text-black" : "border border-[rgba(212,175,55,0.3)] text-gold"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
