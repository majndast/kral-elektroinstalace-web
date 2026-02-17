import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Tomáš Král – Elektroinstalace Jižní Čechy',
  description:
    'Profesionální elektroinstalace v Jižních Čechách. Silnoproud, slaboproud, chytrá domácnost a revize. Rychlá a spolehlivá práce s zárukou. Kontaktujte Tomáše Krále.',
  keywords:
    'elektroinstalace, elektrikář, Jižní Čechy, České Budějovice, Písek, Tábor, revize elektroinstalací, silnoproud, slaboproud, chytrá domácnost',
  authors: [{ name: 'Tomáš Král' }],
  openGraph: {
    title: 'Tomáš Král – Elektroinstalace Jižní Čechy',
    description:
      'Profesionální elektroinstalace v Jižních Čechách. Rychlá a spolehlivá práce s zárukou.',
    locale: 'cs_CZ',
    type: 'website',
    siteName: 'Král Elektroinstalace',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
