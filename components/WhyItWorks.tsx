"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Built on existing trust",
    desc: "The easiest conversation is often with someone who already knows the clinic. Past patients have taken the first step — they just need a reason to return.",
  },
  {
    title: "Lower friction than cold traffic",
    desc: "A warm outreach to an existing contact costs significantly less in time and money than acquiring a brand-new patient from scratch.",
  },
  {
    title: "No ad spend required",
    desc: "The entire process runs on your existing patient database. No campaigns to manage, no ad budget to allocate, no CAC to worry about.",
  },
  {
    title: "Clear reporting and visibility",
    desc: "Every campaign comes with clear reporting. You see who responded, what worked, and what the activity looks like — no guesswork.",
  },
];

export default function WhyItWorks() {
  return (
    <section id="why" className="bg-[#020A18] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-[#12C8FF] uppercase tracking-widest">
            Why It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 mb-4">
            New leads are not the only path to growth.
          </h2>
          <p className="text-white/45 text-lg max-w-xl leading-relaxed">
            The easiest conversation is often with someone who already knows
            your clinic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-[#020A18] p-8 md:p-10 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="w-8 h-px bg-[#12C8FF] mb-7" />
              <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
