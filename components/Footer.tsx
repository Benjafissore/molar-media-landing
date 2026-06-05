import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-[#020817] text-white">
      {/* Internal depth — left blue glow */}
      <div className="pointer-events-none absolute left-[8%] top-[-20%] h-56 w-56 rounded-full bg-[#0A84FF]/[0.13] blur-3xl" />
      {/* Internal depth — right cyan glow */}
      <div className="pointer-events-none absolute right-[18%] top-[-18%] h-64 w-64 rounded-full bg-[#18C8FF]/[0.08] blur-3xl" />
      {/* 1px gradient line — top edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-11">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr_0.85fr] md:items-center">

          {/* Column 1 — Brand */}
          <div className="flex items-center md:items-start">
            <Image
              src="/molar-media-logo-transparent-dark-bg.png"
              alt="Molar Media"
              width={220}
              height={88}
              className="h-20 w-auto object-contain md:h-28"
            />
          </div>

          {/* Column 2 — Contact */}
          <div>
            <p className="text-[11px] font-normal uppercase tracking-[0.22em] text-white/40">
              Contact
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-normal text-white/60 transition-colors duration-200 hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm font-normal text-white/60 transition-colors duration-200 hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p className="text-[11px] font-normal uppercase tracking-[0.22em] text-white/40">
              Company
            </p>
            <p className="mt-5 text-sm font-normal text-white/45">
              {SITE.copyright}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-sm text-white/36 md:flex-row md:items-center md:justify-between">
            <p>Built for dental clinics ready to reactivate their existing database.</p>
            <p>Molar Media · Email + SMS Reactivation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
