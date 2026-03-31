import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  reisen: [
    { href: "#bestseller", label: "Bestseller" },
    { href: "#reisen", label: "Unsere Reisen" },
    { href: "#reiseziele", label: "Reiseziele" },
  ],
  unternehmen: [
    { href: "#vorteile", label: "Japaventura Vorteile" },
    { href: "#inspiration", label: "Inspiration" },
    { href: "#team", label: "Über uns" },
  ],
  support: [
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontaktiere uns" },
    { href: "#agb", label: "AGB" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E4E7EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#D55753" }}
              >
                Japaventura
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#344054] max-w-sm">
              Japaventura ist auf authentische und nachhaltige Rundreisen in
              kleinen Gruppen spezialisiert. Erlebe Japan hautnah und
              unvergesslich.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@japaventura.com"
                className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#344054] transition-colors"
              >
                <Mail className="h-4 w-4" style={{ color: "#005470" }} />
                info@japaventura.com
              </a>
              <a
                href="tel:+491234567890"
                className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#344054] transition-colors"
              >
                <Phone className="h-4 w-4" style={{ color: "#005470" }} />
                +49 123 456 7890
              </a>
              <div className="flex items-start gap-2 text-sm text-[#667085]">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#005470" }} />
                <span>Musterstraße 123<br />10115 Berlin, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-[#344054] uppercase tracking-wider">
              Reisen
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.reisen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#667085] hover:text-[#344054] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#344054] uppercase tracking-wider">
              Unternehmen
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#667085] hover:text-[#344054] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#344054] uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#667085] hover:text-[#344054] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#E4E7EC]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[#667085]">
              © {new Date().getFullYear()} Japaventura. Alle Rechte vorbehalten.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-[#667085]">
              <Link href="#datenschutz" className="hover:text-[#344054] transition-colors">
                Datenschutz
              </Link>
              <Link href="#impressum" className="hover:text-[#344054] transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
