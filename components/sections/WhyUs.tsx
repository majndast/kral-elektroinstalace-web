"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
          alt="Elektrikář při práci"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-dark/90" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/95 to-bg-dark/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <FadeIn direction="left">
            <div className="eyebrow mb-6" style={{ background: "rgba(255, 214, 10, 0.15)" }}>
              <span className="text-yellow-primary">Proč právě my</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white tracking-tight mb-6 leading-tight">
              {WHY_US.headline}
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              {WHY_US.description}
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {WHY_US.certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10"
                >
                  <Award className="w-4 h-4 text-yellow-primary" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-white">{cert}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              {WHY_US.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-yellow-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Card */}
                  <div className="relative p-6 lg:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-yellow-primary/20">
                    <div className="text-4xl lg:text-5xl font-bold text-yellow-primary mb-2 tracking-tight">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="mt-20 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Osobní přístup ke každému projektu",
              "Transparentní cenová nabídka",
              "Záruka na všechny práce",
              "Pohotovostní servis 24/7",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-gray-300 text-[0.9375rem]">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
