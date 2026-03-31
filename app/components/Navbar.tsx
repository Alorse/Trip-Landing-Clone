"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { href: "#bestseller", label: "Bestseller", hasDropdown: true },
  { href: "#reisen", label: "Unsere Reisen", hasDropdown: true },
  { href: "#reiseziele", label: "Reiseziele", hasDropdown: true },
  { href: "#vorteile", label: "Japaventura Vorteile", hasDropdown: true },
  { href: "#inspiration", label: "Inspiration", hasDropdown: true },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFFFF] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://storage.googleapis.com/media_ventura_travel/426237d8-601a-4546-802d-b63ac279a141-japa_ventura_logo_1200px_full_color-1-.svg"
              alt="Japaventura"
              width={180}
              height={40}
              className="h-10"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-[#344054] hover:text-[#D55753] transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 justify-center rounded-md px-5 py-2.5 text-sm font-medium text-[#344054] border border-[#344054] bg-transparent transition-colors hover:text-[#D55753] hover:border-[#D55753]"
            >
              <Phone className="h-4 w-4" />
              Kontaktiere uns
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#344054] hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-[#344054] hover:text-[#D55753] hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="#kontakt"
                className="flex items-center justify-center gap-2 w-full rounded-md px-5 py-3 text-sm font-medium text-[#344054] border border-[#344054] bg-transparent transition-colors hover:text-[#D55753] hover:border-[#D55753]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Kontaktiere uns
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
