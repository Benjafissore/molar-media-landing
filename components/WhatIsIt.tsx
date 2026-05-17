"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "📋",
    step: "01",
    title: "We analyze your patient database",
    desc: "We dig into your existing records to identify who hasn't been back in 6–24 months — your highest-potential reactivation candidates.",
  },
  {
    icon: "✉️",
    step: "02",
    title: "We send personalized reactivation messages",
    desc: "Tailored outreach via text or email, crafted to feel personal and relevant — not like a mass blast.",
  },
  {
    icon: "📅",
    step: "03",
    title: "Patients book. You treat. You grow.",
    desc: "Your front desk receives booked appointments. You treat patients. We track results and optimize for what's working.",
  },
];

export default function WhatIsIt() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#007BFF] font-semibold text-sm uppercase tracking-widest">
            Database Reactivation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#061A35] mt-3 leading-tight">
            Turn your existing patient list
            <br />
            into booked appointments.
          </h2>
          <p className="text-[#061A35]/55 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            No new ad spend. No cold outreach. Just intelligent, strategic
            communication with people who already know and trust your clinic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#12C8FF]/25 to-transparent pointer-events-none" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.14 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-[#F5F8FC] rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl relative z-10">
                {s.icon}
              </div>
              <div className="text-[#12C8FF] font-bold text-xs mb-2 tracking-widest">
                {s.step}
              </div>
              <h3 className="text-base font-bold text-[#061A35] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-[#061A35]/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
