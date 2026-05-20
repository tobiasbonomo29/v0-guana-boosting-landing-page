"use client"

import { motion } from "framer-motion"
import { MessageCircle, Instagram, Send, Clock } from "lucide-react"

const channels = [
  {
    name: "Discord",
    handle: "guana_boosting",
    icon: MessageCircle,
    desc: "Respuesta inmediata · Streaming privado",
    color: "from-[#5865F2] to-[#3a45c4]",
    href: "https://discord.gg/dzfmNbs8K",
  },
  {
    name: "WhatsApp",
    handle: "+54 9 11 2310-6634",
    icon: Send,
    desc: "Atención personalizada · Pagos rápidos",
    color: "from-[#25D366] to-[#128C7E]",
    href: "https://chat.whatsapp.com/Go4eq55QTDUJ3gOdxefrBc?mode=gi_t",
  },
  {
    name: "Instagram",
    handle: "@guanaboosting",
    icon: Instagram,
    desc: "Promos exclusivas · Reels de partidos",
    color: "from-[#E1306C] to-[#833AB4]",
    href: "https://www.instagram.com/guanaboosting?igsh=emhlaWZpNGtobTJy&utm_source=qr",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.15), transparent 60%), radial-gradient(ellipse at 30% 30%, rgba(122,0,18,0.4), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-3 py-1 mb-5">
            <Clock className="h-3 w-3 text-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Disponible 24/7</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            LISTO PARA <span className="gold-text-gradient">DOMINAR FUT?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg text-pretty">
            Elegí tu canal favorito. Te respondemos en menos de 5 minutos a cualquier hora del día.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {channels.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl border border-[rgba(212,175,55,0.18)] bg-card/60 p-7 hover:border-[rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all duration-500"
            >
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg`}
              >
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide">{c.name}</h3>
              <div className="mt-1 text-sm text-gold">{c.handle}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                Contactar ahora
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(212,175,55,0.25)] bg-card/60 backdrop-blur px-5 py-3">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm">
              <span className="font-semibold">24 pros disponibles</span>{" "}
              <span className="text-muted-foreground">· Respuesta en &lt; 5 min</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
