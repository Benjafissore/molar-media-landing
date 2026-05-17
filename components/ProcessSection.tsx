"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Clean the list",
    desc: "We review the patient database and prepare the contacts for outreach — removing duplicates, formatting fields, and getting it campaign-ready.",
  },
  {
    num: "02",
    title: "Launch Email + SMS",
    desc: "We create clear, human follow-up campaigns designed to restart conversations with people who already know the clinic.",
  },
  {
    num: "03",
    title: "Identify interest",
    desc: "Patients who respond, click, or show engagement are surfaced so they can be followed up promptly.",
  },
  {
    num: "04",
    title: "Book more opportunities",
    desc: "Your team gets warmer conversations with people who already know the clinic — making every interaction easier to convert.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-[#007BFF] uppercase tracking-widest">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#050505] mt-3">
            A simple follow-up system,
            <br className="hidden md:block" /> built for dental clinics.
          </h2>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[22px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-[#E6E8EC]" />

          <div className="grid grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-6"
              >
                {/* Step indicator */}
                <div className="relative z-10 mb-6">
                  <div className="w-11 h-11 rounded-full border-2 border-[#E6E8EC] bg-white flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#007BFF]" />
                  </div>
                </div>

                {/* Big background number */}
                <div className="relative">
                  <span className="absolute -top-1 -left-1 text-7xl font-black text-[#F7F8FA] leading-none select-none pointer-events-none">
                    {step.num}
                  </span>
                  <div className="relative z-10 pt-6">
                    <h3 className="font-bold text-[#050505] text-base mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5F6670] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-9 h-9 rounded-full border-2 border-[#E6E8EC] bg-white flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#007BFF]" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#E6E8EC] mt-2" />
                )}
              </div>
              <div className="pb-4">
                <div className="text-xs font-bold text-[#007BFF] mb-1">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#050505] text-base mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5F6670] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
