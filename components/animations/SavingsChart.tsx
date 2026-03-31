"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SavingsChartProps {
  className?: string;
}

export function SavingsChart({ className }: SavingsChartProps) {
  const bars = [
    {
      label: "Běžný dům",
      value: 100,
      color: "bg-red-accent",
      delay: 0.2,
    },
    {
      label: "Chytrý dům",
      value: 70,
      color: "bg-green-accent",
      delay: 0.4,
    },
  ];

  return (
    <div className={cn("w-full max-w-md", className)}>
      <div className="space-y-6">
        {bars.map((bar) => (
          <div key={bar.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">{bar.label}</span>
              <span className="text-sm font-semibold text-text-primary">{bar.value}%</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.value}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: bar.delay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={cn("h-full rounded-full", bar.color)}
              />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 p-4 bg-green-light rounded-xl border border-green-accent/20"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-accent/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-accent">-30%</p>
            <p className="text-sm text-text-secondary">Úspora energie ročně</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
