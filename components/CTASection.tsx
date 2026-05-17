"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#F7F8FA] border-t border-[#E6E8EC] py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-[#050505] leading-tight mb-5">
            Want to see what your patient list could be worth?
          </h2>
          <p className="text-[#5F6670] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free 20-minute call and we&apos;ll walk you through how the
            process would work for your clinic. No pressure. No complicated
            setup.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center bg-[#050505] hover:bg-[#222] text-white font-semibold px-10 py-5 rounded-full text-base transition-all duration-200 hover:scale-[1.02] active:scale-100"
          >
            Book a Free Call
          </a>
          <p className="mt-5 text-xs text-[#5F6670]">
            Built for dental clinics with existing patient databases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
