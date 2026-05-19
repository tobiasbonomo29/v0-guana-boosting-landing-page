"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Martín G.",
    rank: "Rank I · PS5",
    avatar: "/avatar-1.jpg",
    text: "Increíble servicio. Vi cada partido en vivo, llegaron a Rank I en menos de 40hs. Los pros son una bestia, vale cada peso.",
  },
  {
    name: "Lucas R.",
    rank: "Rank III · PC",
    avatar: "/avatar-2.jpg",
    text: "Lo mejor del streaming es que sabés qué está pasando todo el tiempo. Cero estrés, y los packs que saqué fueron locos.",
  },
  {
    name: "Camila V.",
    rank: "Rank II · Xbox",
    avatar: "/avatar-3.jpg",
    text: "Súper profesionales. Soporte 24/7 por Discord, me actualizaban cada partido. Es la primera vez que llego a Rank II sin sufrir.",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
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
              className="group relative rounded-xl border border-[rgba(212,175,55,0.15)] bg-card/60 p-6 md:p-7 hover:border-[rgba(212,175,55,0.4)] transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar || "/placeholder.svg"}
                  alt={`Foto de ${t.name}`}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.3)]"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gold">{t.rank}</div>
                </div>
              </div>

              <div className="mt-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {`"${t.text}"`}
              </p>

              <span className="absolute top-4 right-4 font-display text-5xl text-gold/15">{`"`}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
