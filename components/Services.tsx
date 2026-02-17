import { Zap, Cable, Lightbulb, Home, ClipboardCheck, Shield } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Silnoproudé instalace',
    desc: 'Kompletní elektroinstalace pro byty, domy a firmy. Rozvaděče, zásuvky, jističe, kabelové rozvody.',
  },
  {
    icon: Lightbulb,
    title: 'Osvětlení',
    desc: 'Montáž svítidel, LED osvětlení, venkovní osvětlení, světelné scény a spínání.',
  },
  {
    icon: Cable,
    title: 'Slaboproud',
    desc: 'Datové rozvody, strukturovaná kabeláž, televizní a satelitní rozvody.',
  },
  {
    icon: Home,
    title: 'Chytrá domácnost',
    desc: 'Smart home systémy, automatizace osvětlení, žaluzií a vytápění. Instalace a programování.',
  },
  {
    icon: ClipboardCheck,
    title: 'Revize elektroinstalací',
    desc: 'Výchozí i periodické revize pro byty, domy, firmy a pronajímané prostory. Protokol do 48 hodin.',
  },
  {
    icon: Shield,
    title: 'Zabezpečení',
    desc: 'Alarmy, kamerové systémy (CCTV), přístupové systémy a čipové zámky.',
  },
]

export default function Services() {
  return (
    <section id="sluzby" className="py-24 bg-kral-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-kral-yellow text-xs font-semibold tracking-widest uppercase mb-3">
            Co nabízíme
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-kral-text">
            Naše služby
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-kral-border p-8 hover:border-kral-yellow hover:bg-kral-surface transition-all duration-200 group cursor-default"
            >
              <div className="w-12 h-12 bg-kral-yellow/10 flex items-center justify-center mb-6 group-hover:bg-kral-yellow/20 transition-colors">
                <service.icon className="w-6 h-6 text-kral-yellow" />
              </div>
              <h3 className="text-lg font-bold text-kral-text mb-3">
                {service.title}
              </h3>
              <p className="text-kral-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-kral-muted mb-6">
            Nepotřebujete nic z výše uvedeného? Nevadí — ozvěte se a domluvíme se.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-kral-yellow text-kral-black font-bold px-8 py-4 hover:bg-kral-yellow-dark transition-colors"
          >
            Poptat práci
          </a>
        </div>
      </div>
    </section>
  )
}
