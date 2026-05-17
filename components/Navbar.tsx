"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/constants";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Why It Works", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "border-b border-[#E6E8EC]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <Image
          src="/logo.png.png"
          alt="Molar Media"
          width={140}
          height={36}
          className="h-8 w-auto flex-shrink-0"
          preload={true}
        />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#5F6670] hover:text-[#050505] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${SITE.email}`}
          className="hidden md:inline-flex bg-[#050505] hover:bg-[#222] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100 flex-shrink-0"
        >
          Book a Free Call
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] flex-shrink-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#050505] transition-transform duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#050505] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#050505] transition-transform duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E6E8EC] bg-white/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#5F6670] hover:text-[#050505] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="mt-1 inline-flex items-center justify-center bg-[#050505] hover:bg-[#222] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
