import { Phone, ArrowDown, Zap } from 'lucide-react'

const cities = [
  'České Budějovice',
  'Písek',
  'Tábor',
  'Jindřichův Hradec',
  'Strakonice',
  'Český Krumlov',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-kral-black"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #FACC15 1px, transparent 1px), linear-gradient(to bottom, #FACC15 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Yellow top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-kral-yellow" />

      {/* Large faded "ELEKTRO" text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-black text-kral-yellow/[0.03] leading-none select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        ELEKTRO
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 pt-28 w-full">
        <div className="max-w-3xl">
          {/* Region badge */}
          <div className="inline-flex items-center gap-2 border border-kral-yellow/25 bg-kral-yellow/5 px-4 py-2 mb-8">
            <Zap className="w-3.5 h-3.5 text-kral-yellow" fill="currentColor" />
            <span className="text-sm text-kral-yellow font-medium tracking-wide">
              Elektrikář · Jižní Čechy
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-black text-kral-text leading-[1.05] tracking-tight mb-6">
            Elektroinstalace
            <br />
            <span className="text-kral-yellow">které fungují.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-kral-muted max-w-2xl mb-10 leading-relaxed">
            Jsem <strong className="text-kral-text">Tomáš Král</strong>, elektrikář
            na volné noze z Jižních Čech. Silnoproud, slaboproud, chytrá
            domácnost a revize — práce na míru pro váš dům, byt i firmu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-kral-yellow text-kral-black font-bold px-8 py-4 text-base hover:bg-kral-yellow-dark transition-colors"
            >
              Nezávazná poptávka
            </a>
            <a
              href="#sluzby"
              className="inline-flex items-center justify-center gap-2 border border-kral-border text-kral-text font-medium px-8 py-4 text-base hover:border-kral-yellow hover:text-kral-yellow transition-colors"
            >
              Naše služby
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Phone CTA */}
          <a
            href="tel:+420774043535"
            className="inline-flex items-center gap-4 group"
          >
            <div className="w-11 h-11 bg-kral-yellow/10 flex items-center justify-center group-hover:bg-kral-yellow/20 transition-colors flex-shrink-0">
              <Phone className="w-5 h-5 text-kral-yellow" />
            </div>
            <div>
              <div className="text-xs text-kral-muted uppercase tracking-wider mb-0.5">
                Zavolejte přímo
              </div>
              <div className="text-xl font-bold text-kral-text group-hover:text-kral-yellow transition-colors">
                +420 774 043 535
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Cities strip */}
      <div className="relative border-t border-kral-border bg-kral-surface/50 py-4 px-6 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-kral-muted">
            <span className="text-kral-yellow font-medium text-xs uppercase tracking-wider">
              Oblast působení:
            </span>
            {cities.map((city, i) => (
              <span key={i} className="flex items-center gap-6">
                {city}
                {i < cities.length - 1 && (
                  <span className="text-kral-border hidden sm:inline">·</span>
                )}
              </span>
            ))}
            <span className="text-kral-muted">a okolí</span>
          </div>
        </div>
      </div>
    </section>
  )
}
