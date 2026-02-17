const steps = [
  {
    num: '01',
    title: 'Zašlete poptávku',
    desc: 'Vyplňte formulář nebo zavolejte. Řeknete nám co potřebujete, kde a kdy — stačí pár vět.',
  },
  {
    num: '02',
    title: 'Domluvíme detaily',
    desc: 'Dojednáme termín, rozsah práce a cenu. Bez závazků, bez zálohy předem.',
  },
  {
    num: '03',
    title: 'Odvedeme práci',
    desc: 'Přijdeme v domluvený čas a práci provedeme pečlivě, čistě a podle platných norem.',
  },
  {
    num: '04',
    title: 'Předání s zárukou',
    desc: 'Předáme hotové dílo, vystavíme potřebné doklady a poskytneme záruční servis.',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="py-24 bg-kral-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-kral-yellow text-xs font-semibold tracking-widest uppercase mb-3">
            Postup
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-kral-text">
            Jak probíhá spolupráce
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="border border-kral-border p-8 relative hover:border-kral-yellow/40 transition-colors"
            >
              {/* Step number watermark */}
              <div className="text-7xl font-black text-kral-yellow/[0.07] leading-none mb-4 select-none">
                {step.num}
              </div>

              {/* Yellow accent bar */}
              <div className="w-8 h-[2px] bg-kral-yellow mb-5" />

              <h3 className="text-base font-bold text-kral-text mb-3">
                {step.title}
              </h3>
              <p className="text-kral-muted text-sm leading-relaxed">{step.desc}</p>

              {/* Connector arrow (desktop only, not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <div className="w-6 h-6 bg-kral-black flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-kral-yellow/40"
                    >
                      <path
                        d="M1 6h10M7 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
