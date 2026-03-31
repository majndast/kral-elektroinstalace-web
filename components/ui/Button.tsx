"use client";

import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {
    const baseStyles = cn(
      "group relative inline-flex items-center justify-center font-semibold",
      "rounded-full transition-all duration-500",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-primary focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "transform-gpu will-change-transform",
      // Premium spring transition
      "[transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
      // Magnetic hover & press
      "hover:-translate-y-0.5 active:scale-[0.98]"
    );

    const variants = {
      primary: cn(
        "bg-yellow-primary text-text-primary",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(255,214,10,0.15)]",
        "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(255,214,10,0.25)]",
        "hover:bg-yellow-hover"
      ),
      secondary: cn(
        "bg-bg-dark text-white",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.12)]",
        "hover:bg-neutral-800"
      ),
      outline: cn(
        "bg-transparent text-text-primary",
        "shadow-[inset_0_0_0_1.5px_rgba(0,0,0,0.1)]",
        "hover:shadow-[inset_0_0_0_1.5px_rgba(0,0,0,0.2)]",
        "hover:bg-black/[0.02]"
      ),
      ghost: cn(
        "bg-transparent text-text-primary",
        "hover:bg-black/[0.03]"
      ),
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm gap-2",
      md: "px-6 py-3 text-[0.9375rem] gap-2.5",
      lg: "px-7 py-3.5 text-base gap-3",
    };

    const iconSizes = {
      sm: "w-6 h-6",
      md: "w-7 h-7",
      lg: "w-8 h-8",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>

        {withArrow && (
          <span
            className={cn(
              "flex items-center justify-center rounded-full",
              "transition-all duration-400 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
              "group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105",
              iconSizes[size],
              variant === "primary" && "bg-black/[0.08]",
              variant === "secondary" && "bg-white/[0.12]",
              variant === "outline" && "bg-black/[0.05]",
              variant === "ghost" && "bg-black/[0.05]"
            )}
          >
            <ArrowUpRight
              className={cn(
                "transition-transform duration-300",
                size === "sm" && "w-3.5 h-3.5",
                size === "md" && "w-4 h-4",
                size === "lg" && "w-4.5 h-4.5"
              )}
              strokeWidth={2}
            />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
