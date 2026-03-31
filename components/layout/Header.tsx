"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Nav Pill */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50",
          "flex items-center gap-2",
          "pl-5 pr-2 py-2 rounded-full",
          "transition-all duration-700 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.08)]"
            : "bg-white/70 backdrop-blur-lg shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.04)]"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 mr-4"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 bg-yellow-primary rounded-xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
            <Zap className="w-4 h-4 text-text-primary" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-text-primary tracking-tight hidden sm:inline">
            KRÁL
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                "text-text-secondary hover:text-text-primary",
                "transition-all duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                "hover:bg-black/[0.03]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block ml-2">
          <Button
            onClick={() => handleNavClick("#kontakt")}
            size="sm"
            withArrow
          >
            Poptávka
          </Button>
        </div>

        {/* Mobile Menu Toggle - Animated Hamburger */}
        <button
          className={cn(
            "lg:hidden flex flex-col items-center justify-center gap-1 w-10 h-10 rounded-full",
            "transition-colors duration-300",
            "hover:bg-black/[0.03]",
            isMobileMenuOpen && "hamburger-open"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/80 backdrop-blur-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              <nav className="flex flex-col items-center gap-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      "text-3xl font-semibold text-text-primary tracking-tight",
                      "py-3 px-6 rounded-2xl",
                      "transition-all duration-300",
                      "hover:bg-yellow-light hover:text-yellow-hover"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: NAV_LINKS.length * 0.08 + 0.1,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-10"
              >
                <Button
                  onClick={() => handleNavClick("#kontakt")}
                  size="lg"
                  withArrow
                >
                  Nezávazná poptávka
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
