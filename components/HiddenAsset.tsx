"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Old patient lists go untouched",
    copy: "Most clinics have hundreds or thousands of contacts sitting inside their systems with no consistent follow-up strategy.",
  },
  {
    title: "Ad costs keep rising",
    copy: "New patient acquisition can work, but it gets expensive when it becomes the only growth channel a clinic relies on.",
  },
  {
    title: "Patients drift quietly",
    copy: "Many patients do not leave because they dislike the clinic. They simply stop hearing from it — and eventually book elsewhere.",
  },
];

export default function HiddenAsset() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#050505] leading-tight mb-4">
            Your clinic already has a growth asset most teams forget.
          </h2>
          <p className="text-[#5F6670] text-lg leading-relaxed">
            Past patients know your name, trust your clinic, and have already
            taken the hardest first step. The problem is usually not interest
            — it&apos;s silence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              className="bg-white border border-[#E6E8EC] rounded-xl p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-0.5 bg-[#007BFF] mb-6" />
              <h3 className="text-sm font-semibold text-[#050505] mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-[#5F6670] leading-relaxed">{card.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
