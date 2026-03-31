"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { CONTACT, CONTACT_SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Neplatný e-mail"),
  phone: z.string().min(9, "Neplatné telefonní číslo"),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputStyles = cn(
    "w-full px-5 py-4 rounded-2xl",
    "bg-bg-warm border-none",
    "text-text-primary placeholder:text-text-muted",
    "shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]",
    "transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
    "focus:outline-none focus:ring-2 focus:ring-yellow-primary/50 focus:bg-white",
    "focus:shadow-[0_0_0_4px_rgba(255,214,10,0.1)]"
  );

  return (
    <section id="kontakt" className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <div className="eyebrow mb-6">
            <span>Kontakt</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold text-text-primary tracking-tight mb-5">
            {CONTACT_SECTION.headline}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg leading-relaxed">
            {CONTACT_SECTION.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form - Double Bezel */}
          <FadeIn direction="left" className="lg:col-span-3">
            {/* Outer Shell */}
            <div className="p-1.5 rounded-[2.5rem] bg-black/[0.02] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
              {/* Inner Core */}
              <div className="rounded-[calc(2.5rem-0.375rem)] bg-white p-8 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2.5 tracking-tight">
                        Jméno
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        placeholder={CONTACT_SECTION.form.namePlaceholder}
                        className={cn(inputStyles, errors.name && "ring-2 ring-red-accent/50")}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-accent">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2.5 tracking-tight">
                        E-mail
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        placeholder={CONTACT_SECTION.form.emailPlaceholder}
                        className={cn(inputStyles, errors.email && "ring-2 ring-red-accent/50")}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-accent">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2.5 tracking-tight">
                      Telefon
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      id="phone"
                      placeholder={CONTACT_SECTION.form.phonePlaceholder}
                      className={cn(inputStyles, errors.phone && "ring-2 ring-red-accent/50")}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-accent">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2.5 tracking-tight">
                      Zpráva
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      placeholder={CONTACT_SECTION.form.messagePlaceholder}
                      className={cn(inputStyles, "resize-none", errors.message && "ring-2 ring-red-accent/50")}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-accent">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      withArrow={status !== "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Odesílám...
                        </>
                      ) : (
                        CONTACT_SECTION.form.submitButton
                      )}
                    </Button>

                    {/* Status messages */}
                    <AnimatePresence mode="wait">
                      {status === "success" && (
                        <motion.div
                          initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                          className="flex items-center gap-2.5 text-green-accent"
                        >
                          <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
                          <span className="text-sm font-medium">
                            {CONTACT_SECTION.form.successMessage}
                          </span>
                        </motion.div>
                      )}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                          className="flex items-center gap-2.5 text-red-accent"
                        >
                          <AlertCircle className="w-5 h-5" strokeWidth={1.5} />
                          <span className="text-sm font-medium">
                            {CONTACT_SECTION.form.errorMessage}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="space-y-5">
              {/* Contact cards */}
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: CONTACT.phone,
                  href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
                  color: "yellow",
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                  color: "blue",
                },
                {
                  icon: MapPin,
                  label: "Oblast působení",
                  value: CONTACT.address,
                  href: null,
                  color: "green",
                },
              ].map((item) => {
                const Icon = item.icon;
                const colorStyles = {
                  yellow: "bg-yellow-light text-yellow-primary",
                  blue: "bg-blue-light text-blue-accent",
                  green: "bg-green-light text-green-accent",
                };

                const content = (
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center",
                      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]",
                      colorStyles[item.color as keyof typeof colorStyles]
                    )}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-0.5">{item.label}</p>
                      <p className="font-semibold text-text-primary tracking-tight">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight className="w-4 h-4 text-text-muted ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" strokeWidth={1.5} />
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "group block p-5 rounded-2xl bg-white",
                      "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.02)]",
                      "transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
                      "hover:shadow-[0_0_0_1px_rgba(255,214,10,0.2),0_8px_24px_rgba(0,0,0,0.06)]",
                      "hover:-translate-y-0.5"
                    )}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="p-5 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    {content}
                  </div>
                );
              })}

              {/* Business info */}
              <div className="p-5 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.02)]">
                <h4 className="font-semibold text-text-primary tracking-tight mb-3">Fakturační údaje</h4>
                <div className="space-y-1.5 text-sm">
                  <p className="text-text-secondary">
                    {CONTACT.businessName}
                  </p>
                  <p className="text-text-secondary">
                    IČO: <span className="font-medium text-text-primary">{CONTACT.ico}</span>
                  </p>
                </div>
              </div>

              {/* Response time */}
              <div className="p-5 rounded-2xl bg-yellow-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-accent" />
                  </span>
                  <p className="text-sm font-medium text-text-primary">
                    Obvykle odpovídám do 24 hodin
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
