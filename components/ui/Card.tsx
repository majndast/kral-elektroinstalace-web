"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "elevated" | "glass";
}

/**
 * Double-Bezel Card Architecture
 * Outer shell + inner core for premium depth perception
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, variant = "default", children, ...props }, ref) => {
    const shellStyles = cn(
      // Outer shell - the "tray"
      "p-1.5 rounded-[2rem]",
      "bg-black/[0.02]",
      "shadow-[0_0_0_1px_rgba(0,0,0,0.04)]",
      hover && [
        "transition-all duration-700 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
        "hover:shadow-[0_0_0_1px_rgba(255,214,10,0.15),0_8px_32px_rgba(0,0,0,0.06)]",
        "hover:-translate-y-1",
      ]
    );

    const coreStyles = cn(
      // Inner core - the content plate
      "rounded-[calc(2rem-0.375rem)] p-8",
      "bg-white",
      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_0_0_1px_rgba(0,0,0,0.02)]",
      variant === "elevated" && "shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.04)]",
      variant === "glass" && "bg-white/80 backdrop-blur-xl"
    );

    return (
      <div className={cn(shellStyles, className)} {...props}>
        <div ref={ref} className={coreStyles}>
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold text-text-primary tracking-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-text-secondary text-[0.9375rem] mt-2 leading-relaxed", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mt-6 pt-6 border-t border-black/[0.04]",
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
