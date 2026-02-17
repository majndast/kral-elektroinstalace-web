import { Award, Clock, CheckCircle, ThumbsUp } from 'lucide-react'

const usp = [
  {
    icon: Award,
    title: 'Certifikovaný elektrikář',
    desc: 'Práce prováděné v souladu s platnou legislativou ČR a příslušnými normami.',
  },
  {
    icon: Clock,
    title: 'Rychlá odezva',
    desc: 'Na poptávku odpovím do 24 hodin. U urgentních případů i dříve.',
  },
  {
    icon: CheckCircle,
    title: 'Práce s zárukou',
    desc: 'Za každou odvedenou práci ručím. Záruční i pozáruční servis zajištěn.',
  },
  {
    icon: ThumbsUp,
    title: 'Férové ceny',
    desc: 'Žádné skryté poplatky. Cenu domluvíme předem — bez překvapení na konci.',
  },
]

export default function About() {
  return (
    <section id="o-mne" className="py-24 bg-kral-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <div className="text-kral-yellow text-xs font-semibold tracking-widest uppercase mb-3">
              O mně
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-kral-text mb-8 leading-tight">
              Proč si vybrat
              <br />
              <span className="text-kral-yellow">Tomáše Krále?</span>
            </h2>
            <div className="space-y-5 text-kral-muted text-base leading-relaxed">
              <p>
                Jsem elektrikář na volné noze z Jižních Čech se sídlem ve
                Všemyslicích u Českých Budějovic. Specializuji se na komplexní
                elektroinstalace pro rodinné domy, byty i komerční prostory.
              </p>
              <p>
                Každou zakázku beru jako svoji vlastní — přijdu v domluvený čas,
                odvedu práci pečlivě a nenechám za sebou nepořádek. Pracuji napříč
                celými Jižními Čechami.
              </p>
              <p>
                Ať potřebujete rozvody v novostavbě, rekonstrukci staré instalace,
                nebo jen přidat zásuvku — jsem tu pro vás.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center bg-kral-yellow text-kral-black font-bold px-7 py-3.5 hover:bg-kral-yellow-dark transition-colors"
              >
                Kontaktovat
              </a>
              <a
                href="tel:+420774043535"
                className="inline-flex items-center justify-center border border-kral-border text-kral-text font-medium px-7 py-3.5 hover:border-kral-yellow hover:text-kral-yellow transition-colors"
              >
                +420 774 043 535
              </a>
            </div>
          </div>

          {/* Right: USP cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {usp.map((item, i) => (
              <div
                key={i}
                className="border border-kral-border p-6 hover:border-kral-yellow/50 transition-colors"
              >
                <div className="w-10 h-10 bg-kral-yellow/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-kral-yellow" />
                </div>
                <h3 className="font-bold text-kral-text mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-kral-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
