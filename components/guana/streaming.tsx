"use client"

import { motion } from "framer-motion"
import { Eye, Users, MessageSquare, Heart, ExternalLink } from "lucide-react"
import Image from "next/image"

const KICK_CHANNEL = "elguanaa"

export function Streaming() {
  return (
    <section id="streaming" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(122,0,18,0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stream mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[rgba(220,30,50,0.3)] via-transparent to-[rgba(212,175,55,0.2)] blur-2xl" />

            <div className="relative rounded-xl overflow-hidden premium-border">
              {/* Top bar */}
              <div className="flex items-center justify-between bg-[#0a0a0a] px-4 py-2.5 border-b border-[rgba(212,175,55,0.15)]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <a
                  href={`https://kick.com/${KICK_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-muted-foreground tracking-wider hover:text-gold transition"
                >
                  kick.com/{KICK_CHANNEL} · LIVE
                </a>
                <a
                  href={`https://kick.com/${KICK_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir en Kick"
                  className="text-muted-foreground hover:text-gold transition"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Kick live player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://player.kick.com/${KICK_CHANNEL}`}
                  title={`${KICK_CHANNEL} en vivo en Kick`}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  frameBorder={0}
                />
              </div>

              {/* Footer action */}
              <div className="flex items-center justify-between bg-[#0a0a0a] border-t border-[rgba(212,175,55,0.15)] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Transmisión oficial en Kick
                  </span>
                </div>
                <a
                  href={`https://kick.com/${KICK_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold hover:underline"
                >
                  Ver en Kick
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden md:block absolute -right-6 top-12 rounded-lg border border-[rgba(212,175,55,0.3)] bg-card/90 backdrop-blur px-4 py-3 glow-gold"
            >
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span className="text-xs font-semibold">+2.4k</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="hidden md:block absolute -left-6 bottom-20 rounded-lg border border-[rgba(212,175,55,0.3)] bg-card/90 backdrop-blur px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold">Chat activo</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600/15 border border-red-600/30 px-3 py-1 mb-5">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-red-400 font-semibold">
                Streaming en directo
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
              MIRÁ CADA <br />
              PARTIDO EN <br />
              <span className="gold-text-gradient">TIEMPO REAL</span>
            </h2>

            <div className="mt-6">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold block mb-3">Disponible en</span>
              <div className="flex items-center gap-4">
                {[
                  { src: "/foto1.jpeg", alt: "Kick", href: "https://kick.com/juanortizz13", delay: 0 },
                  { src: "/foto2.png", alt: "Kick", href: "https://kick.com/elguanaa", delay: 0.1 },
                ].map(({ src, alt, href, delay }) => (
                  <motion.a
                    key={src}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-1 rounded-xl bg-linear-to-br from-[rgba(122,0,18,0.5)] to-[rgba(212,175,55,0.3)] opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
                    <div className="relative rounded-xl border border-[rgba(212,175,55,0.25)] overflow-hidden w-20 h-20 group-hover:border-[rgba(212,175,55,0.6)] transition-all duration-300">
                      <Image src={src} alt={alt} fill className="object-cover" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Somos el <span className="text-gold font-semibold">único servicio</span> que transmite el 100% del
              boosting en vivo. Sin trampas, sin escondites, sin sorpresas. Total transparencia para tu cuenta.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Eye, label: "Mirá cada partido en tiempo real" },
                { icon: Users, label: "Transparencia y seguridad total" },
                { icon: MessageSquare, label: "Chat directo con el pro player" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.06)]">
                    <item.icon className="h-4 w-4 text-gold" />
                  </span>
                  <span className="text-sm md:text-base text-foreground">{item.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#precios"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md font-semibold text-black gold-gradient hover:opacity-95 transition glow-gold"
              >
                Empezar ahora
              </a>
              <a
                href="https://discord.gg/dzfmNbs8K"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md font-semibold border border-[rgba(212,175,55,0.3)] text-gold hover:bg-[rgba(212,175,55,0.06)] transition"
              >
                Ver demo en Discord
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
