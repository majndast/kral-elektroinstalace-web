'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

type FormData = {
  name: string
  phone: string
  email: string
  message: string
}

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setSending(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSent(true)
        reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-kral-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-kral-yellow text-xs font-semibold tracking-widest uppercase mb-3">
            Kontakt
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-kral-text">
            Ozvěte se nám
          </h2>
          <p className="text-kral-muted mt-4 max-w-xl">
            Vyplňte formulář a ozveme se vám do 24 hodin. Nebo rovnou zavolejte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">
          {/* Form */}
          <div className="border border-kral-border p-8 lg:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px]">
                <div className="w-16 h-16 bg-kral-yellow/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-kral-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-kral-text mb-2">
                  Zpráva odeslána!
                </h3>
                <p className="text-kral-muted">
                  Ozveme se vám co nejdříve, obvykle do 24 hodin.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm text-kral-muted hover:text-kral-yellow transition-colors underline"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-kral-muted uppercase tracking-wider mb-2">
                      Vaše jméno *
                    </label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full bg-kral-black border border-kral-border text-kral-text px-4 py-3 focus:outline-none focus:border-kral-yellow transition-colors placeholder:text-kral-border"
                      placeholder="Jan Novák"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1 block">
                        Povinné pole
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-kral-muted uppercase tracking-wider mb-2">
                      Telefon *
                    </label>
                    <input
                      {...register('phone', { required: true })}
                      type="tel"
                      className="w-full bg-kral-black border border-kral-border text-kral-text px-4 py-3 focus:outline-none focus:border-kral-yellow transition-colors placeholder:text-kral-border"
                      placeholder="+420 XXX XXX XXX"
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-xs mt-1 block">
                        Povinné pole
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-kral-muted uppercase tracking-wider mb-2">
                    E-mail
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-kral-black border border-kral-border text-kral-text px-4 py-3 focus:outline-none focus:border-kral-yellow transition-colors placeholder:text-kral-border"
                    placeholder="jan@email.cz"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-kral-muted uppercase tracking-wider mb-2">
                    Popis práce *
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={5}
                    className="w-full bg-kral-black border border-kral-border text-kral-text px-4 py-3 focus:outline-none focus:border-kral-yellow transition-colors resize-none placeholder:text-kral-border"
                    placeholder="Popište stručně co potřebujete — co, kde a přibližně kdy..."
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1 block">
                      Povinné pole
                    </span>
                  )}
                </div>

                {error && (
                  <div className="text-red-400 text-sm border border-red-400/30 bg-red-400/5 px-4 py-3">
                    Nastala chyba při odesílání. Zkuste to znovu nebo zavolejte.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-kral-yellow text-kral-black font-bold py-4 text-base hover:bg-kral-yellow-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Odesílám...' : 'Odeslat poptávku'}
                </button>

                <p className="text-kral-muted text-xs text-center">
                  Odesláním souhlasíte se zpracováním osobních údajů za účelem
                  odpovědi na váš dotaz.
                </p>
              </form>
            )}
          </div>

          {/* Contact info panel */}
          <div className="border border-kral-border border-l-0 p-8 lg:p-10 bg-kral-surface-2">
            <h3 className="text-sm font-bold text-kral-text uppercase tracking-wider mb-8">
              Kontaktní údaje
            </h3>

            <div className="space-y-7">
              <a
                href="tel:+420774043535"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-kral-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-kral-yellow/20 transition-colors mt-0.5">
                  <Phone className="w-4.5 h-4.5 text-kral-yellow" />
                </div>
                <div>
                  <div className="text-[10px] text-kral-muted uppercase tracking-wider mb-1">
                    Telefon
                  </div>
                  <div className="text-kral-text font-semibold group-hover:text-kral-yellow transition-colors">
                    +420 774 043 535
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@kral-elektroinstalace.cz"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-kral-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-kral-yellow/20 transition-colors mt-0.5">
                  <Mail className="w-4.5 h-4.5 text-kral-yellow" />
                </div>
                <div>
                  <div className="text-[10px] text-kral-muted uppercase tracking-wider mb-1">
                    E-mail
                  </div>
                  <div className="text-kral-text font-semibold group-hover:text-kral-yellow transition-colors break-all">
                    info@kral-elektroinstalace.cz
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kral-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5 text-kral-yellow" />
                </div>
                <div>
                  <div className="text-[10px] text-kral-muted uppercase tracking-wider mb-1">
                    Sídlo
                  </div>
                  <div className="text-kral-text font-semibold">
                    Bohunice 83
                    <br />
                    Všemyslice, 375 01
                  </div>
                  <div className="text-kral-muted text-xs mt-1">
                    Oblast: Jižní Čechy
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kral-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4.5 h-4.5 text-kral-yellow" />
                </div>
                <div>
                  <div className="text-[10px] text-kral-muted uppercase tracking-wider mb-1">
                    Pracovní doba
                  </div>
                  <div className="text-kral-text font-semibold">
                    Po–Pá: 8:00–17:00
                  </div>
                  <div className="text-kral-muted text-xs mt-1">
                    So–Ne: Zavřeno
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
