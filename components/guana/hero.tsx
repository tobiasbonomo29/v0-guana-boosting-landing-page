"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ShoppingCart, Shield, Radio, Zap, Trophy } from "lucide-react"
import { Particles } from "./particles"

function HeroLogo() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex items-center justify-center w-full"
    >
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.45),transparent_65%)] blur-3xl" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)]" />
      <Image
        src="/logo.png"
        alt="Guana Boosting"
        width={900}
        height={900}
        priority
        className="relative w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-auto object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.55)]"
      />
    </motion.div>
  )
}

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
              href="https://kick.com/elguanaa"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Right column - Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <HeroLogo />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  )
}
