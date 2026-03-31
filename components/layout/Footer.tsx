"use client";

import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, FOOTER, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 mb-4"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-10 h-10 bg-yellow-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-text-primary" />
              </div>
              <span className="font-bold text-xl">KRÁL</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesionální elektroinstalace, revize a chytrá domácnost v Praze a okolí.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rychlé odkazy</h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-gray-400 hover:text-yellow-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Služby</h4>
            <nav className="space-y-2">
              <a
                href="#sluzby"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#sluzby");
                }}
                className="block text-gray-400 hover:text-yellow-primary transition-colors"
              >
                Revize elektroinstalací
              </a>
              <a
                href="#sluzby"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#sluzby");
                }}
                className="block text-gray-400 hover:text-yellow-primary transition-colors"
              >
                Opravy a servis
              </a>
              <a
                href="#chytra-domacnost"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#chytra-domacnost");
                }}
                className="block text-gray-400 hover:text-yellow-primary transition-colors"
              >
                Chytrá domácnost
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {FOOTER.copyright}
            </p>
            <p className="text-gray-500 text-sm">
              IČO: {CONTACT.ico}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
