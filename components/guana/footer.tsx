import Image from "next/image"
import { MessageCircle, Instagram, Send } from "lucide-react"

const navCols = [
  {
    title: "Servicio",
    links: [
      { label: "Boosting", href: "#precios" },
      { label: "Streaming en vivo", href: "#streaming" },
      { label: "Precios", href: "#precios" },
      { label: "Cómo funciona", href: "#como" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Discord", href: "https://discord.gg/dzfmNbs8K", external: true },
      { label: "WhatsApp", href: "https://chat.whatsapp.com/Go4eq55QTDUJ3gOdxefrBc?mode=gi_t", external: true },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Reembolsos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(212,175,55,0.15)] bg-[#030303]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg overflow-hidden bg-black ring-1 ring-[rgba(212,175,55,0.35)] shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                <Image
                  src="/logo.png"
                  alt="Guana Boosting"
                  width={120}
                  height={120}
                  className="h-full w-full object-contain scale-125"
                />
              </span>
              <span className="font-display text-xl tracking-widest">
                GUANA <span className="gold-text-gradient">BOOSTING</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Servicio premium de boosting de FUT Champions transmitido 100% en vivo. Confianza, transparencia y
              resultados élite.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: MessageCircle, href: "https://discord.gg/dzfmNbs8K", label: "Discord" },
                { Icon: Send, href: "https://chat.whatsapp.com/Go4eq55QTDUJ3gOdxefrBc?mode=gi_t", label: "WhatsApp" },
                { Icon: Instagram, href: "https://www.instagram.com/guanaboosting?igsh=emhlaWZpNGtobTJy&utm_source=qr", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(212,175,55,0.2)] bg-card/60 text-gold hover:bg-[rgba(212,175,55,0.08)] hover:border-gold transition"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {navCols.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm tracking-[0.18em] text-gold uppercase">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition"
                        {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(212,175,55,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Guana Boosting. Todos los derechos reservados.</p>
          <p className="text-[11px]">
            No afiliado a EA Sports ni a Electronic Arts. FUT Champions es una marca de Electronic Arts Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
