"use client"

import { motion } from "framer-motion"
import { Play, ShoppingCart, Shield, Radio, Zap, Trophy } from "lucide-react"
import { Particles } from "./particles"

const badges = [
  { icon: Shield, label: "Servicio Seguro" },
  { icon: Radio, label: "Streaming en Vivo" },
  { icon: Zap, label: "Entrega Rápida" },
  { icon: Trophy, label: "Rango Garantizado" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-stadium.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <Particles count={35} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.06)] px-4 py-1.5 mb-6 backdrop-blur"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              EA Sports FC · FUT Champions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-balance"
          >
            ELITE FUT
            <br />
            CHAMPIONS
            <br />
            <span className="gold-text-gradient">BOOSTING</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
          >
            Jugadores profesionales. Partidos transmitidos{" "}
            <span className="text-gold font-semibold">100% en vivo</span>. Máxima seguridad para tu cuenta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#precios"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-black gold-gradient hover:opacity-95 transition glow-gold"
            >
              <ShoppingCart className="h-5 w-5" />
              Comprar Boosting
              <span className="absolute inset-0 rounded-md shimmer opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a
              href="#streaming"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-foreground border border-[rgba(212,175,55,0.3)] bg-background/40 backdrop-blur hover:border-gold hover:bg-background/60 transition"
            >
              <Play className="h-5 w-5 text-gold" />
              Ver Streaming
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-md border border-[rgba(212,175,55,0.18)] bg-card/60 backdrop-blur px-3 py-2.5"
              >
                <b.icon className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-xs font-medium text-muted-foreground leading-tight">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column - FUT card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <FutCard />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  )
}

function FutCard() {
  return (
    <div className="relative w-[280px] sm:w-[340px] aspect-[3/4] group">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.45),transparent_60%)] blur-2xl opacity-80 group-hover:opacity-100 transition" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full rounded-2xl overflow-hidden gold-gradient p-[2px]"
      >
        <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-[#1a0a0a] via-[#0a0a0a] to-[#1a1208] overflow-hidden">
          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(212,175,55,0.12) 0 1px, transparent 1px 16px)",
            }}
          />

          {/* Top */}
          <div className="absolute top-6 left-6 flex flex-col items-center">
            <span className="font-display text-5xl gold-text-gradient leading-none">99</span>
            <span className="font-display text-xl text-gold mt-1">ELITE</span>
            <div className="mt-2 h-px w-8 bg-gold/60" />
            <div className="mt-2 flex flex-col items-center gap-1.5">
              {["PAC", "DRI", "PAS"].map((s) => (
                <span key={s} className="text-[10px] tracking-wider text-gold/80 font-semibold">
                  99 <span className="text-gold/50">{s}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Player silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-b from-[rgba(212,175,55,0.25)] to-transparent flex items-center justify-center">
              <Trophy className="h-24 w-24 text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 inset-x-0 p-5 text-center">
            <div className="font-display text-2xl tracking-widest gold-text-gradient">GUANA</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-gold/70">Rank I · Champion</div>
            <div className="mt-3 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold text-xs">
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Live badge */}
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-red-600/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white live-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            LIVE
          </div>
        </div>
      </motion.div>
    </div>
  )
}
