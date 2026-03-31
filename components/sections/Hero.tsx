"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/constants";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const words = HERO.headline.split(" ");

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Moderní dům"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 lg:py-48">
        <div className="max-w-2xl">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="eyebrow mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-accent animate-pulse" />
            <span>Certifikovaný Loxone partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-text-primary leading-[1.05] tracking-tight mb-8"
          >
            {words.map((word, index) => (
              <span key={index} className="inline-block">
                {word === "moderní" ? (
                  <span className="relative inline-block">
                    <span className="relative z-10">{word}</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 1, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute bottom-[0.15em] left-0 right-0 h-[0.12em] bg-yellow-primary/50 -z-0 origin-left rounded-full"
                    />
                  </span>
                ) : (
                  word
                )}
                {index < words.length - 1 ? " " : ""}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-lg sm:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button
              size="lg"
              onClick={() => handleScroll("#kontakt")}
              withArrow
            >
              {HERO.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScroll("#sluzby")}
            >
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="mt-16 flex flex-wrap items-center gap-8 text-text-muted"
          >
            {[
              { value: "15+", label: "let praxe" },
              { value: "500+", label: "realizací" },
              { value: "24h", label: "servis" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + index * 0.1,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl font-semibold text-text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => handleScroll("#sluzby")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-500"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </section>
  );
}
