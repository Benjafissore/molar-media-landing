"use client";

import { motion } from "framer-motion";

const fields = [
  "First name",
  "Last name",
  "Email address",
  "Phone number",
];

export default function DataNeeded() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 border-t border-[#E6E8EC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#050505] mb-5">
              We don&apos;t need clinical history.
            </h2>
            <p className="text-[#5F6670] text-lg leading-relaxed mb-6">
              For the first campaign, we only need the basic contact fields
              required to reach out. Nothing more.
            </p>
            <p className="text-sm text-[#5F6670] leading-relaxed max-w-md border-l-2 border-[#E6E8EC] pl-4">
              No treatment notes, medical history, or sensitive clinical
              information are needed for the initial outreach process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#F7F8FA] rounded-2xl border border-[#E6E8EC] p-7"
          >
            <div className="text-xs font-semibold text-[#5F6670] uppercase tracking-widest mb-5">
              Required fields
            </div>
            <div className="space-y-3">
              {fields.map((field, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-[#E6E8EC] rounded-lg px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#050505]">
                    {field}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-[#E6E8EC]">
              <p className="text-xs text-[#5F6670] leading-relaxed">
                A standard CSV or spreadsheet export from most practice
                management systems works perfectly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
