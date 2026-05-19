"use client"

import { motion } from "framer-motion"
import { Radio, ShieldCheck, Zap, Award, Trophy, Activity } from "lucide-react"

const benefits = [
  {
    icon: Radio,
    title: "Streaming 100% en vivo",
    desc: "Mirá cada partido en tiempo real por Discord o Twitch mientras nuestros pros juegan tu cuenta.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Máxima seguridad",
    desc: "Conexión cifrada, login seguro y protocolos VPN dedicados por país. Cero riesgos para tu cuenta.",
  },
  {
    icon: Zap,
    title: "Respuesta rápida",
    desc: "Comenzamos tu boosting en menos de 30 minutos desde la confirmación de tu pedido.",
  },
  {
    icon: Award,
    title: "Jugadores profesionales",
    desc: "Top 100 mundiales y eligibles, especialistas en FUT Champions con miles de partidas élite.",
  },
  {
    icon: Trophy,
    title: "Rango garantizado",
    desc: "Si no llegamos al rango contratado, te devolvemos tu dinero. Garantía total en cada compra.",
  },
  {
    icon: Activity,
    title: "Seguimiento en tiempo real",
    desc: "Dashboard con progreso, partidos ganados y stats actualizados al instante en tu pedido.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-3 py-1 mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Por qué elegirnos</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
            EL <span className="gold-text-gradient">BOOSTING PREMIUM</span>
            <br />
            QUE PODÉS VER EN VIVO
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed text-pretty">
            Transparencia total. Cero secretos. Mirá cada jugada en tiempo real desde la comodidad de tu casa.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative rounded-xl p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 ${
                b.featured
                  ? "premium-border lg:row-span-1 lg:col-span-1 bg-gradient-to-br from-[rgba(122,0,18,0.25)] to-[rgba(212,175,55,0.08)]"
                  : "border border-[rgba(212,175,55,0.15)] bg-card/60 hover:border-[rgba(212,175,55,0.4)]"
              }`}
            >
              {b.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white live-pulse">
                  <span className="h-1 w-1 rounded-full bg-white" />
                  EN VIVO
                </span>
              )}
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mb-5 transition ${
                  b.featured
                    ? "gold-gradient text-black"
                    : "bg-[rgba(212,175,55,0.08)] text-gold border border-[rgba(212,175,55,0.2)] group-hover:bg-[rgba(212,175,55,0.15)]"
                }`}
              >
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl tracking-wide">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
