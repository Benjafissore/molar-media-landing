"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "How It Works", href: "/#process" },
  { label: "Why It Works", href: "/#why" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[#020817]/10 bg-white/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo + links together on the left */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="/molar-media-logo-transparent-original.png"
              alt="Molar Media"
              width={160}
              height={44}
              className="h-14 w-auto flex-shrink-0 object-contain"
              preload={true}
            />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#5F6670] transition-colors duration-200 hover:text-[#050505]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA on the right */}
        <a
          href={`mailto:${SITE.email}`}
          className="hidden flex-shrink-0 items-center rounded-full bg-[#050505] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#222] md:inline-flex"
        >
          Book a Free Call
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 origin-center bg-[#050505] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#050505] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 origin-center bg-[#050505] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[#E6E8EC] bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm text-[#5F6670] transition-colors duration-200 hover:text-[#050505]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="mt-1 inline-flex items-center justify-center rounded-full bg-[#050505] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
