"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do we need to run ads?",
    a: "No. The service focuses entirely on your existing patient database. The outreach goes to people who already know the clinic — no ad campaigns required.",
  },
  {
    q: "What information do you need from us?",
    a: "For the first campaign, we only need basic contact information: first name, last name, email address, and phone number. A standard export from your practice management system is usually all we need.",
  },
  {
    q: "Is this for new patients or past patients?",
    a: "The core service is designed to reconnect with people who already know the clinic — patients who have visited at least once but have not been back in a while. It is not a cold outreach or advertising service.",
  },
  {
    q: "How fast can we launch?",
    a: "Once we have the contact list and have agreed on the campaign direction, preparation is typically straightforward. The timeline depends on the size of the list and the level of personalisation involved.",
  },
  {
    q: "Do you write the messages?",
    a: "Yes. Molar Media handles the campaign messaging, structure, and setup. We work with you to make sure the tone fits the clinic before anything is sent.",
  },
  {
    q: "What happens when someone is interested?",
    a: "Patients who respond, click through, or show engagement are surfaced so your team can follow up and work toward booking the appointment. We can discuss the exact handoff process on the call.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 md:py-32 px-6 border-t border-[#E6E8EC]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold text-[#007BFF] uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#050505] mt-3">
            Common questions
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border-b border-[#E6E8EC]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className="text-sm font-semibold text-[#050505] leading-snug group-hover:text-[#007BFF] transition-colors duration-200">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#5F6670] text-lg leading-none flex-shrink-0 mt-0.5"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[#5F6670] leading-relaxed pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
