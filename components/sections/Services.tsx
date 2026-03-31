"use client";

import { ClipboardCheck, Wrench, Home, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  ClipboardCheck,
  Wrench,
  Home,
};

export function Services() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sluzby" className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <div className="eyebrow mb-6">
            <span>Naše služby</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-text-primary tracking-tight mb-5">
            Co pro vás můžeme udělat
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg leading-relaxed">
            Od běžných oprav po kompletní smart home řešení. Vždy s důrazem na kvalitu a bezpečnost.
          </p>
        </FadeIn>

        {/* Service Cards - Double Bezel Architecture */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <StaggerItem key={service.id}>
                {/* Outer Shell */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={cn(
                    "group relative p-1.5 rounded-[2rem]",
                    "bg-black/[0.02]",
                    "shadow-[0_0_0_1px_rgba(0,0,0,0.04)]",
                    "transition-shadow duration-700 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                    "hover:shadow-[0_0_0_1px_rgba(255,214,10,0.2),0_12px_40px_rgba(0,0,0,0.08)]"
                  )}
                >
                  {/* Inner Core */}
                  <div className="relative rounded-[calc(2rem-0.375rem)] bg-white p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] h-full flex flex-col">
                    {/* Badge */}
                    {"badge" in service && service.badge && (
                      <div className="absolute top-6 right-6">
                        <span className="px-3 py-1.5 rounded-full bg-yellow-primary text-text-primary text-[10px] font-bold uppercase tracking-[0.1em]">
                          {service.badge}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                        "bg-yellow-light",
                        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]",
                        "transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                        "group-hover:bg-yellow-primary group-hover:shadow-[0_4px_16px_rgba(255,214,10,0.3)]"
                      )}
                    >
                      <Icon
                        className="w-6 h-6 text-yellow-primary group-hover:text-text-primary transition-colors duration-500"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-text-primary tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2.5 text-sm text-text-secondary"
                        >
                          <span className="w-1 h-1 rounded-full bg-yellow-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-black/[0.04]">
                      <span className="text-lg font-semibold text-text-primary tracking-tight">
                        {service.price}
                      </span>
                      <button
                        onClick={() => handleScroll("#kontakt")}
                        className={cn(
                          "flex items-center gap-2 text-sm font-medium",
                          "text-text-secondary hover:text-yellow-primary",
                          "transition-colors duration-300"
                        )}
                      >
                        Poptávka
                        <span className="w-6 h-6 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:bg-yellow-light transition-colors duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
