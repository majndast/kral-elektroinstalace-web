import { Zap } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-kral-black border-t border-kral-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-kral-yellow flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-kral-black" fill="currentColor" />
            </div>
            <div className="leading-none">
              <div className="font-black text-kral-text text-xs tracking-widest uppercase">
                Král Elektroinstalace
              </div>
              <div className="text-kral-muted text-[10px]">
                Tomáš Král · Jižní Čechy
              </div>
            </div>
          </a>

          {/* Nav */}
          <div className="flex items-center gap-6 text-xs text-kral-muted">
            <a href="#sluzby" className="hover:text-kral-yellow transition-colors">
              Služby
            </a>
            <a href="#o-mne" className="hover:text-kral-yellow transition-colors">
              O mně
            </a>
            <a
              href="#jak-to-funguje"
              className="hover:text-kral-yellow transition-colors"
            >
              Jak to funguje
            </a>
            <a
              href="#kontakt"
              className="hover:text-kral-yellow transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Copyright */}
          <div className="text-kral-muted text-xs">
            © {year} Tomáš Král. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  )
}
