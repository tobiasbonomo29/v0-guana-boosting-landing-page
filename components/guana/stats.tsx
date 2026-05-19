"use client"

import { motion } from "framer-motion"
import { Counter } from "./counter"

const stats = [
  { value: 500, suffix: "+", label: "Boostings completados" },
  { value: 98, suffix: "%", label: "Win Rate" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
  { value: 100, suffix: "%", label: "Partidos transmitidos" },
]

export function Stats() {
  return (
    <section className="relative py-16 border-y border-[rgba(212,175,55,0.15)] bg-gradient-to-r from-background via-[#0a0405] to-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(122,0,18,0.4), transparent 50%), radial-gradient(circle at 75% 50%, rgba(212,175,55,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl gold-text-gradient leading-none">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
