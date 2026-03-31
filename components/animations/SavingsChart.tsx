"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  value: number;
  max: number;
  label: string;
  consumption: string;
  color: string;
  bgColor: string;
  delay: number;
}

function CircularProgress({ value, max, label, consumption, color, bgColor, delay }: CircularProgressProps) {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-gray-100"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className={color}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay,
              ease: [0.32, 0.72, 0, 1],
            }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            className="text-2xl font-bold text-text-primary"
          >
            {consumption}
          </motion.span>
          <span className="text-xs text-text-muted">MWh/rok</span>
        </div>
      </div>
      <div className={cn("mt-4 px-4 py-2 rounded-full text-sm font-medium", bgColor)}>
        {label}
      </div>
    </div>
  );
}

interface SavingsChartProps {
  className?: string;
}

export function SavingsChart({ className }: SavingsChartProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Title */}
      <p className="text-center text-text-secondary mb-8">
        Průměrná roční spotřeba energie rodinného domu
      </p>

      {/* Circular charts */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
        <CircularProgress
          value={15}
          max={20}
          label="Běžný dům"
          consumption="15"
          color="text-red-accent"
          bgColor="bg-red-light text-red-accent"
          delay={0.2}
        />
        <CircularProgress
          value={10.5}
          max={20}
          label="Chytrý dům"
          consumption="10.5"
          color="text-green-accent"
          bgColor="bg-green-light text-green-accent"
          delay={0.4}
        />
      </div>

      {/* Savings highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-10 p-5 bg-gradient-to-r from-green-light to-green-accent/10 rounded-2xl border border-green-accent/20"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-green-accent/20 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-7 h-7 text-green-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-accent mb-1">
              Úspora 4.5 MWh ročně
            </p>
            <p className="text-text-secondary">
              To je přibližně <span className="font-semibold text-text-primary">30% úspora</span> na energiích,
              což znamená <span className="font-semibold text-text-primary">~18 000 Kč</span> méně za elektřinu
            </p>
          </div>
        </div>
      </motion.div>

      {/* Additional info */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-6 text-center text-sm text-text-muted"
      >
        * Průměrné hodnoty pro rodinný dům 150 m² při ceně 4 Kč/kWh
      </motion.p>
    </div>
  );
}
