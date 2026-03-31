"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Thermometer, Blinds, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SMART_HOME } from "@/lib/constants";

type FeatureId = "svetla" | "topeni" | "zaluzie" | "zabezpeceni" | "energie";

const iconMap = {
  Lightbulb,
  Thermometer,
  Blinds,
  Shield,
  Zap,
};

const colorMap = {
  yellow: {
    bg: "bg-yellow-light",
    border: "border-yellow-primary",
    text: "text-yellow-primary",
    glow: "shadow-[0_0_20px_rgba(255,214,10,0.4)]",
  },
  red: {
    bg: "bg-red-light",
    border: "border-red-accent",
    text: "text-red-accent",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.4)]",
  },
  blue: {
    bg: "bg-blue-light",
    border: "border-blue-accent",
    text: "text-blue-accent",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
  },
  green: {
    bg: "bg-green-light",
    border: "border-green-accent",
    text: "text-green-accent",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.4)]",
  },
};

// Positions of feature dots on the house SVG (percentages)
const dotPositions: Record<FeatureId, { top: string; left: string }> = {
  svetla: { top: "25%", left: "30%" },
  topeni: { top: "60%", left: "25%" },
  zaluzie: { top: "35%", left: "70%" },
  zabezpeceni: { top: "75%", left: "70%" },
  energie: { top: "85%", left: "50%" },
};

interface InteractiveHouseProps {
  className?: string;
}

export function InteractiveHouse({ className }: InteractiveHouseProps) {
  const [activeFeature, setActiveFeature] = useState<FeatureId | null>(null);

  const features = SMART_HOME.features;

  return (
    <div className={cn("relative w-full max-w-lg mx-auto", className)}>
      {/* House SVG */}
      <div className="relative aspect-square">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House body */}
          <motion.rect
            x="40"
            y="80"
            width="120"
            height="100"
            rx="4"
            fill="#FAFAFA"
            stroke="#E5E7EB"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          {/* Roof */}
          <motion.path
            d="M30 85 L100 30 L170 85"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {/* Door */}
          <motion.rect
            x="85"
            y="130"
            width="30"
            height="50"
            rx="2"
            fill="#FFD60A"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ transformOrigin: "bottom" }}
          />
          {/* Windows */}
          <motion.rect
            x="55"
            y="95"
            width="25"
            height="25"
            rx="2"
            fill="#DBEAFE"
            stroke="#3B82F6"
            strokeWidth="1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
          <motion.rect
            x="120"
            y="95"
            width="25"
            height="25"
            rx="2"
            fill="#DBEAFE"
            stroke="#3B82F6"
            strokeWidth="1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </svg>

        {/* Interactive dots */}
        {features.map((feature) => {
          const position = dotPositions[feature.id as FeatureId];
          const colors = colorMap[feature.color as keyof typeof colorMap];
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          const isActive = activeFeature === feature.id;

          return (
            <motion.button
              key={feature.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 + features.indexOf(feature) * 0.1 }}
              style={{ top: position.top, left: position.left }}
              className={cn(
                "absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full",
                "flex items-center justify-center cursor-pointer transition-all duration-300",
                "border-2",
                colors.bg,
                colors.border,
                isActive && colors.glow
              )}
              onClick={() => setActiveFeature(isActive ? null : (feature.id as FeatureId))}
              onMouseEnter={() => setActiveFeature(feature.id as FeatureId)}
              onMouseLeave={() => setActiveFeature(null)}
              aria-label={feature.title}
            >
              <Icon className={cn("w-5 h-5", colors.text)} />

              {/* Pulse animation */}
              <motion.span
                className={cn(
                  "absolute inset-0 rounded-full",
                  colors.border,
                  "border-2"
                )}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Feature detail popup */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-4 w-full max-w-xs"
          >
            {features
              .filter((f) => f.id === activeFeature)
              .map((feature) => {
                const colors = colorMap[feature.color as keyof typeof colorMap];
                const Icon = iconMap[feature.icon as keyof typeof iconMap];

                return (
                  <div
                    key={feature.id}
                    className={cn(
                      "bg-white rounded-xl p-4 shadow-lg border",
                      colors.border
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colors.bg)}>
                        <Icon className={cn("w-5 h-5", colors.text)} />
                      </div>
                      <h4 className="font-semibold text-text-primary">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-text-secondary">{feature.description}</p>
                  </div>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
