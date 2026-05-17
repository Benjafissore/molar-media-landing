"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const processSteps = [
  {
    num: "01",
    title: "Patient list received",
    note: "Name · Email · Phone",
    state: "done" as const,
  },
  {
    num: "02",
    title: "List cleaned & prepared",
    note: "Ready for outreach",
    state: "done" as const,
  },
  {
    num: "03",
    title: "Email + SMS launched",
    note: "Human messaging sent",
    state: "active" as const,
  },
  {
    num: "04",
    title: "Interest surfaced",
    note: "Appointment opportunities",
    state: "pending" as const,
  },
];

export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-1 h-1 rounded-full bg-[#007BFF]" />
              <span className="text-xs font-semibold text-[#5F6670] uppercase tracking-widest">
                Dental Database Reactivation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] text-[#050505] mb-7"
            >
              Turn old patient lists into{" "}
              <span className="text-[#007BFF]">
                new appointment opportunities.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-lg text-[#5F6670] leading-relaxed max-w-xl mb-10"
            >
              Molar Media helps dental clinics reconnect with past patients
              through targeted Email + SMS follow-up — without depending only on
              new ads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center bg-[#050505] hover:bg-[#222] text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100"
              >
                Book a Free Call
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center border border-[#E6E8EC] hover:border-[#050505] text-[#050505] font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.34 }}
              className="text-xs text-[#5F6670] flex items-center gap-1.5"
            >
              <span className="w-3.5 h-px bg-[#E6E8EC] inline-block" />
              No ad spend required. No clinical data needed. Just name, email,
              and phone.
            </motion.p>
          </div>

          {/* Right column — process card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Background shadow card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#F7F8FA] rounded-2xl border border-[#E6E8EC]" />

            {/* Main card */}
            <div className="relative bg-white rounded-2xl border border-[#E6E8EC] shadow-xl shadow-black/[0.04]">
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6E8EC]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#12C8FF]" />
                  <span className="text-xs font-semibold text-[#050505]">
                    Reactivation Campaign
                  </span>
                </div>
                <span className="text-[10px] text-[#5F6670] uppercase tracking-wider">
                  Active
                </span>
              </div>

              {/* Steps */}
              <div className="px-6 py-5">
                {processSteps.map((step, i, arr) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                          step.state === "done"
                            ? "bg-[#050505] text-white"
                            : step.state === "active"
                            ? "bg-[#007BFF] text-white"
                            : "border border-[#E6E8EC] text-[#C0C5CD]"
                        }`}
                      >
                        {step.state === "done" ? "✓" : step.num}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-px bg-[#E6E8EC] my-1 h-6" />
                      )}
                    </div>
                    <div className="pb-5 last:pb-0 pt-0.5">
                      <div
                        className={`text-sm font-medium leading-snug ${
                          step.state === "pending"
                            ? "text-[#C0C5CD]"
                            : "text-[#050505]"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-[#5F6670] mt-0.5">
                        {step.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="mx-6 mb-5 px-4 py-3 bg-[#F7F8FA] rounded-xl flex items-center justify-between">
                <span className="text-xs text-[#5F6670]">
                  Contacts in pipeline
                </span>
                <span className="text-xs font-semibold text-[#050505]">
                  Ready to activate
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
