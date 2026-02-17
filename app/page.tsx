import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Král Elektroinstalace',
  description:
    'Profesionální elektroinstalace v Jižních Čechách — silnoproud, slaboproud, chytrá domácnost, revize.',
  url: 'https://kral-elektroinstalace.cz',
  telephone: '+420774043535',
  email: 'info@kral-elektroinstalace.cz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bohunice 83',
    addressLocality: 'Všemyslice',
    postalCode: '37501',
    addressCountry: 'CZ',
  },
  areaServed: [
    { '@type': 'City', name: 'České Budějovice' },
    { '@type': 'City', name: 'Písek' },
    { '@type': 'City', name: 'Tábor' },
    { '@type': 'City', name: 'Jindřichův Hradec' },
    { '@type': 'City', name: 'Strakonice' },
    { '@type': 'City', name: 'Český Krumlov' },
    { '@type': 'AdministrativeArea', name: 'Jihočeský kraj' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  priceRange: '$$',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
