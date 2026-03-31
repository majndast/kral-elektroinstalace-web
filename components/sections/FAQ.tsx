"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ as FAQ_DATA } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-light text-yellow-hover text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {FAQ_DATA.headline}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {FAQ_DATA.subheadline}
          </p>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={0.2}>
          <Accordion items={FAQ_DATA.items} />
        </FadeIn>

        {/* Contact prompt */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-text-secondary">
            Nenašli jste odpověď na svou otázku?{" "}
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-yellow-primary hover:text-yellow-hover font-medium transition-colors"
            >
              Napište mi
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
