"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Rodinný dům Praha",
    category: "Chytrá domácnost",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: 2,
    title: "Moderní byt Vinohrady",
    category: "Elektroinstalace",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    id: 3,
    title: "Kancelářské prostory",
    category: "Revize",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 4,
    title: "Novostavba Středočeský kraj",
    category: "Chytrá domácnost",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 5,
    title: "Rekonstrukce vily",
    category: "Elektroinstalace",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  },
  {
    id: 6,
    title: "Smart home řešení",
    category: "Chytrá domácnost",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export function Realizations() {
  return (
    <section id="reference" className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <div className="eyebrow mb-6">
            <span>Reference</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-text-primary tracking-tight mb-5">
            Naše realizace
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg leading-relaxed">
            Ukázky z dokončených projektů po celé České republice
          </p>
        </FadeIn>

        {/* Gallery Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="group relative"
              >
                {/* Double Bezel Frame */}
                <div className="p-1.5 rounded-[2rem] bg-black/[0.02] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-shadow duration-500 group-hover:shadow-[0_0_0_1px_rgba(255,214,10,0.2),0_12px_40px_rgba(0,0,0,0.1)]">
                  <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-yellow-primary text-text-primary text-[10px] font-bold uppercase tracking-[0.1em] mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Note */}
        <FadeIn className="mt-16 text-center">
          <p className="text-text-muted text-sm">
            Fotografie jsou ilustrační • Reálné fotky z realizací budou průběžně doplňovány
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
