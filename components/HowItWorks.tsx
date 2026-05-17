"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Book a free discovery call",
    desc: "We get to know your clinic, your patient list size, and what you're looking to achieve.",
  },
  {
    title: "We audit your patient database",
    desc: "We identify the best candidates for reactivation — high-value, lapsed patients most likely to return.",
  },
  {
    title: "We craft and launch the campaign",
    desc: "Our team writes the copy, sets up the outreach, and launches — fully done-for-you.",
  },
  {
    title: "You receive booked appointments",
    desc: "Your front desk gets notified of new bookings. No changes to your existing workflow.",
  },
  {
    title: "We report results and optimize",
    desc: "You get a clear performance report. We refine the approach for even better results on future campaigns.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#007BFF] font-semibold text-sm uppercase tracking-widest">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#061A35] mt-3">
            Simple process. Real results.
          </h2>
        </motion.div>

        <div className="relative">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 relative"
            >
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[18px] top-9 bottom-0 w-px bg-[#F5F8FC]" />
              )}
              {/* Step circle */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#007BFF] text-white font-bold text-sm flex items-center justify-center z-10 mt-0.5">
                {i + 1}
              </div>
              {/* Content */}
              <div className="pb-10">
                <h3 className="font-bold text-[#061A35] text-base leading-snug mb-1">
                  {s.title}
                </h3>
                <p className="text-[#061A35]/55 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
