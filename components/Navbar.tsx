'use client'

import { useState, useEffect } from 'react'
import { Zap, Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#o-mne', label: 'O mně' },
  { href: '#jak-to-funguje', label: 'Jak to funguje' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kral-black/95 backdrop-blur-sm border-b border-kral-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-kral-yellow flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-kral-black" fill="currentColor" />
            </div>
            <div className="leading-none">
              <div className="font-black text-kral-text text-sm tracking-widest uppercase">
                Král
              </div>
              <div className="text-kral-muted text-[10px] tracking-wider uppercase">
                Elektroinstalace
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-kral-muted hover:text-kral-text text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+420774043535"
              className="flex items-center gap-1.5 text-kral-muted hover:text-kral-yellow text-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +420 774 043 535
            </a>
            <a
              href="#kontakt"
              className="bg-kral-yellow text-kral-black font-bold text-sm px-5 py-2.5 hover:bg-kral-yellow-dark transition-colors"
            >
              Poptávka
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-kral-text p-2"
            aria-label="Otevřít menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-kral-black border-t border-kral-border px-6 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-kral-text font-medium py-3 border-b border-kral-border last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href="tel:+420774043535"
              className="flex items-center gap-2 text-kral-muted py-2"
            >
              <Phone className="w-4 h-4" />
              +420 774 043 535
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="block bg-kral-yellow text-kral-black font-bold text-center py-3"
            >
              Nezávazná poptávka
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
