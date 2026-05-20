"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, X } from "lucide-react"

const testimonials = [
  {
    name: "Martín G.",
    rank: "Rank I · PS5",
    screenshot: "/a1.jpeg",
    text: "Increíble servicio. Vi cada partido en vivo, llegaron a Rank I en menos de 40hs. Los pros son una bestia, vale cada peso.",
  },
  {
    name: "Lucas R.",
    rank: "Rank III · PC",
    screenshot: "/a2.jpeg",
    text: "Lo mejor del streaming es que sabés qué está pasando todo el tiempo. Cero estrés, y los packs que saqué fueron locos.",
  },
  {
    name: "Camila V.",
    rank: "Rank II · Xbox",
    screenshot: "/a3.jpeg",
    text: "Súper profesionales. Soporte 24/7 por Discord, me actualizaban cada partido. Es la primera vez que llego a Rank II sin sufrir.",
  },
]

export function Testimonials() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="relative py-24 md:py-32">
      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-card border border-[rgba(212,175,55,0.3)] text-gold hover:bg-[rgba(212,175,55,0.1)] transition"
              >
                <X className="h-4 w-4" />
              </button>
              <img
                src={selected}
                alt="Captura completa"
                className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Testimonios</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            CLIENTES <span className="gold-text-gradient">CAMPEONES</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl border border-[rgba(212,175,55,0.15)] bg-card/60 overflow-hidden hover:border-[rgba(212,175,55,0.4)] transition"
            >
              {/* Screenshot */}
              <button
                onClick={() => setSelected(t.screenshot)}
                className="block w-full overflow-hidden cursor-zoom-in"
              >
                <img
                  src={t.screenshot}
                  alt={`Captura de ${t.name}`}
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
              </button>

              <div className="p-6 md:p-7">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gold">{t.rank}</div>
                </div>

                <div className="mt-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {`"${t.text}"`}
                </p>

                <span className="absolute bottom-24 right-4 font-display text-5xl text-gold/15">{`"`}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
