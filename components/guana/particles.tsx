"use client"

import { useEffect, useState } from "react"

export function Particles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number; color: string }>>([])

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 12,
      duration: Math.random() * 14 + 10,
      color: Math.random() > 0.4 ? "rgba(212,175,55,0.7)" : "rgba(220,30,50,0.6)",
    }))
    setParticles(arr)
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
