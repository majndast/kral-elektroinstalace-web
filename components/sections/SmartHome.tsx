"use client";

import { Lightbulb, Thermometer, Sun, Shield, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { SavingsChart } from "@/components/animations/SavingsChart";
import { Button } from "@/components/ui/Button";
import { SMART_HOME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  Lightbulb,
  Thermometer,
  Blinds: Sun,
  Shield,
  Zap,
};

const colorMap = {
  yellow: {
    bg: "bg-yellow-light",
    text: "text-yellow-primary",
    border: "border-yellow-primary/20",
  },
  red: {
    bg: "bg-red-light",
    text: "text-red-accent",
    border: "border-red-accent/20",
  },
  blue: {
    bg: "bg-blue-light",
    text: "text-blue-accent",
    border: "border-blue-accent/20",
  },
  green: {
    bg: "bg-green-light",
    text: "text-green-accent",
    border: "border-green-accent/20",
  },
};

export function SmartHome() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="chytra-domacnost" className="py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <div className="eyebrow mb-6" style={{ background: "rgba(96, 165, 250, 0.08)" }}>
            <span className="text-blue-accent">Nová služba</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-text-primary tracking-tight mb-5">
            {SMART_HOME.headline}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg leading-relaxed">
            {SMART_HOME.subheadline}
          </p>
        </FadeIn>

        {/* Main visual - House with features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* House Image with Feature Points */}
          <FadeIn direction="left" className="relative">
            {/* Double Bezel Frame */}
            <div className="p-2 rounded-[2.5rem] bg-black/[0.02] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <Image
                  src="/images/smart-home.webp"
                  alt="Chytrá domácnost"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover"
                />

                {/* Feature hotspots */}
                <div className="absolute inset-0">
                  {/* Světla */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute top-[20%] left-[25%]"
                  >
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-yellow-primary/40" />
                      <div className="relative w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-yellow-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Topení */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute top-[55%] left-[15%]"
                  >
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-red-accent/40" style={{ animationDelay: "0.5s" }} />
                      <div className="relative w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Thermometer className="w-5 h-5 text-red-accent" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Žaluzie */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute top-[30%] right-[20%]"
                  >
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-blue-accent/40" style={{ animationDelay: "1s" }} />
                      <div className="relative w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Sun className="w-5 h-5 text-blue-accent" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Zabezpečení */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute bottom-[25%] right-[25%]"
                  >
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-green-accent/40" style={{ animationDelay: "1.5s" }} />
                      <div className="relative w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-accent" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Description + Features */}
          <FadeIn direction="right">
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              {SMART_HOME.description}
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {SMART_HOME.features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                const colors = colorMap[feature.color as keyof typeof colorMap];

                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-2xl",
                      "bg-bg-warm border border-transparent",
                      "transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                      "hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
                      `hover:${colors.border}`
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]",
                      colors.bg
                    )}>
                      <Icon className={cn("w-5 h-5", colors.text)} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary tracking-tight">{feature.title}</h4>
                      <p className="text-sm text-text-secondary mt-0.5">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Loxone badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-light border border-green-accent/10">
              <div className="w-8 h-8 rounded-lg bg-green-accent/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-accent" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-text-primary">
                Certifikovaný Loxone partner
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Benefits + Savings Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Savings Chart */}
          <FadeIn direction="left">
            {/* Double Bezel */}
            <div className="p-1.5 rounded-[2rem] bg-black/[0.02] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-8 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <h3 className="text-2xl font-semibold text-text-primary tracking-tight mb-2 text-center">
                  Kolik ušetříte?
                </h3>
                <SavingsChart />
              </div>
            </div>
          </FadeIn>

          {/* Benefits */}
          <FadeIn direction="right">
            <div className="space-y-5">
              {SMART_HOME.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className={cn(
                    "flex items-center gap-6 p-6 rounded-2xl",
                    "bg-bg-warm border border-transparent",
                    "transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                    "hover:bg-white hover:border-yellow-primary/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                  )}
                >
                  <div className="text-4xl font-bold text-yellow-primary tracking-tight">
                    {benefit.value}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-lg tracking-tight">
                      {benefit.label}
                    </h4>
                    <p className="text-text-secondary">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}

              <Button
                size="lg"
                onClick={() => handleScroll("#kontakt")}
                withArrow
                className="mt-4"
              >
                Chci chytrou domácnost
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
