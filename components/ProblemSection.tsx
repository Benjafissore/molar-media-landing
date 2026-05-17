"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "📉",
    title: "Empty appointment slots eating into your revenue",
    desc: "Every unfilled chair is lost revenue. And the longer a patient stays inactive, the harder it is to win them back.",
  },
  {
    icon: "💸",
    title: "Ad costs rising with uncertain returns",
    desc: "New patient acquisition is expensive and unpredictable. You keep spending more to get less.",
  },
  {
    icon: "👤",
    title: "Patients who visited once and never came back",
    desc: "They already know your clinic. They already trust you. But they've quietly drifted — and you've never reached out.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function ProblemSection() {
  return (
    <section className="bg-[#F5F8FC] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#061A35] leading-tight">
            Your best patients already trust you.
            <br />
            <span className="text-[#007BFF]">They've just gone quiet.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="text-base font-bold text-[#061A35] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-[#061A35]/55 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[#007BFF] font-semibold text-lg mt-12"
        >
          Database Reactivation changes that.
        </motion.p>
      </div>
    </section>
  );
}
