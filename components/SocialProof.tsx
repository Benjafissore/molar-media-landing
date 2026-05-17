"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We hadn't tried reactivating old patients before, and honestly I was skeptical. Within three weeks we had 14 new appointments booked from patients who hadn't been in over a year. It more than paid for itself.",
    name: "Dr. Sarah Mitchell",
    role: "Owner, Bright Smiles Dental",
    initials: "SM",
  },
  {
    quote:
      "The ROI was immediate. We had over 200 patients on our inactive list we'd completely ignored. Molar Media turned that into real revenue without us lifting a finger.",
    name: "Dr. James Patel",
    role: "Principal Dentist, Riverside Family Dental",
    initials: "JP",
  },
  {
    quote:
      "What I appreciated most was how professional the messaging felt. Patients were responding positively, not annoyed. That matters a lot for patient relationships.",
    name: "Dr. Alicia Torres",
    role: "Owner, Lakewood Dental Studio",
    initials: "AT",
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

export default function SocialProof() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#061A35]">
            What clinics are experiencing
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-default"
            >
              <div className="text-[#12C8FF] text-5xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-[#061A35]/65 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#007BFF] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#061A35] text-sm">{t.name}</div>
                  <div className="text-[#061A35]/45 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#061A35]/35 text-xs mt-10">
          * Results may vary. Testimonials are representative of experiences
          shared by clients.
        </p>
      </div>
    </section>
  );
}
