import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — Molar Media",
  description:
    "The Terms & Conditions governing access to and use of the Molar Media LLC website.",
};

const LAST_UPDATED = "August 23, 2026";

type Block =
  | { kind: "p"; content: React.ReactNode }
  | { kind: "list"; items: string[] };

type Section = {
  title: string;
  blocks: Block[];
};

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-[#050505]">{children}</strong>;
}

const sections: Section[] = [
  {
    title: "Introduction",
    blocks: [
      { kind: "p", content: "Welcome to Molar Media." },
      {
        kind: "p",
        content:
          "These Terms & Conditions (“Terms”) govern your access to and use of the Molar Media website and any content, features, forms, or information made available through it.",
      },
      {
        kind: "p",
        content: (
          <>
            The website is operated by <Strong>Molar Media LLC</Strong>, a
            Florida limited liability company (“Molar Media,” “we,” “us,” or
            “our”).
          </>
        ),
      },
      {
        kind: "p",
        content:
          "By accessing or using this website, you agree to these Terms. If you do not agree with these Terms, please discontinue use of the website.",
      },
    ],
  },
  {
    title: "About Molar Media",
    blocks: [
      {
        kind: "p",
        content:
          "Molar Media LLC is a marketing agency that provides marketing-related services primarily to dental practices and other healthcare businesses.",
      },
      {
        kind: "p",
        content: "Services may include, but are not limited to:",
      },
      {
        kind: "list",
        items: [
          "Email marketing",
          "SMS marketing",
          "Database reactivation",
          "Social media content",
          "Marketing strategy",
          "Lead generation support",
          "Marketing automation",
          "Campaign development",
          "Digital marketing consulting",
        ],
      },
      {
        kind: "p",
        content:
          "Information presented on this website is intended to describe our services generally and does not constitute a guarantee of specific services, pricing, availability, or results.",
      },
    ],
  },
  {
    title: "Use of the Website",
    blocks: [
      {
        kind: "p",
        content: "You may use this website only for lawful purposes.",
      },
      { kind: "p", content: "You agree not to:" },
      {
        kind: "list",
        items: [
          "Use the website in violation of any applicable law or regulation.",
          "Attempt to gain unauthorized access to the website, servers, accounts, systems, or networks.",
          "Interfere with or disrupt the functionality or security of the website.",
          "Use automated systems, bots, scraping tools, or similar technologies to extract website content without authorization.",
          "Submit fraudulent, misleading, abusive, or malicious information through forms.",
          "Copy, reproduce, distribute, modify, or commercially exploit website content without permission.",
          "Impersonate another individual, business, or organization.",
        ],
      },
      {
        kind: "p",
        content:
          "We reserve the right to restrict or terminate access to the website if we believe these Terms have been violated.",
      },
    ],
  },
  {
    title: "Marketing Services Information",
    blocks: [
      {
        kind: "p",
        content:
          "Descriptions of marketing services on this website are provided for general informational purposes.",
      },
      {
        kind: "p",
        content:
          "Specific services, deliverables, pricing, timelines, payment terms, responsibilities, and other commercial terms are established separately between Molar Media and its clients.",
      },
      {
        kind: "p",
        content:
          "Nothing on this website creates a client relationship, partnership, employment relationship, joint venture, or other business relationship unless confirmed through a separate written agreement.",
      },
    ],
  },
  {
    title: "No Guarantee of Marketing Results",
    blocks: [
      {
        kind: "p",
        content: "Marketing results vary significantly between businesses.",
      },
      {
        kind: "p",
        content: "Molar Media does not guarantee any specific number of:",
      },
      {
        kind: "list",
        items: [
          "Leads",
          "Patients",
          "Appointments",
          "Sales",
          "Revenue",
          "Email opens",
          "Email clicks",
          "Responses",
          "Conversions",
          "Social media engagement",
          "Website traffic",
          "Return on investment",
        ],
      },
      {
        kind: "p",
        content:
          "Results may depend on factors outside Molar Media’s control, including market conditions, audience quality, offer quality, competition, pricing, client responsiveness, reputation, contact database quality, advertising platforms, email service providers, telecommunications providers, and third-party technology.",
      },
      {
        kind: "p",
        content:
          "Any examples, case studies, testimonials, metrics, or previous results displayed by Molar Media are illustrative only and should not be interpreted as a promise or guarantee of future performance.",
      },
    ],
  },
  {
    title: "Client Data and Contact Lists",
    blocks: [
      {
        kind: "p",
        content:
          "Businesses that provide contact information, customer lists, patient lists, subscriber databases, phone numbers, email addresses, or other data to Molar Media are responsible for ensuring that they have the lawful right and appropriate authorization to collect, use, disclose, and market to that information.",
      },
      {
        kind: "p",
        content:
          "Clients are responsible for complying with applicable privacy, telecommunications, marketing, healthcare, and consumer protection laws.",
      },
      {
        kind: "p",
        content:
          "Molar Media does not represent that a contact list supplied by a client was legally obtained or that every person contained within a database has provided all consent required for a specific marketing communication.",
      },
      {
        kind: "p",
        content:
          "Clients should obtain independent legal advice regarding their own regulatory obligations where appropriate.",
      },
    ],
  },
  {
    title: "Healthcare and Patient Information",
    blocks: [
      {
        kind: "p",
        content:
          "Molar Media provides marketing services and is not a healthcare provider.",
      },
      {
        kind: "p",
        content:
          "Nothing contained on this website constitutes medical advice, diagnosis, treatment, or healthcare guidance.",
      },
      {
        kind: "p",
        content:
          "Healthcare businesses are solely responsible for determining their own obligations regarding patient information, privacy, confidentiality, consent, and applicable healthcare regulations.",
      },
      {
        kind: "p",
        content:
          "No confidential patient or medical information should be submitted through general website contact forms unless Molar Media has specifically provided an authorized and appropriate method for doing so.",
      },
    ],
  },
  {
    title: "Email and SMS Communications",
    blocks: [
      {
        kind: "p",
        content:
          "If you voluntarily provide your email address or telephone number through the website, you authorize Molar Media to contact you in connection with your inquiry, subject to applicable law and the consent presented at the time your information is submitted.",
      },
      {
        kind: "p",
        content:
          "Where marketing communications are offered, additional consent language may apply.",
      },
      { kind: "p", content: "Message frequency may vary." },
      {
        kind: "p",
        content: "Message and data rates may apply for SMS communications.",
      },
      {
        kind: "p",
        content:
          "Where applicable, recipients may reply STOP to opt out of SMS communications or HELP for assistance.",
      },
      {
        kind: "p",
        content:
          "Consent to receive marketing communications is not a condition of purchasing services unless explicitly stated otherwise.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    blocks: [
      {
        kind: "p",
        content:
          "Unless otherwise stated, all content on this website is owned by or licensed to Molar Media LLC.",
      },
      { kind: "p", content: "This includes, without limitation:" },
      {
        kind: "list",
        items: [
          "The Molar Media name and branding",
          "Logos",
          "Website design",
          "Website copy",
          "Graphics",
          "Images created by Molar Media",
          "Marketing materials",
          "Campaign concepts",
          "Templates",
          "Software-related elements",
          "Visual layouts",
          "Written resources",
        ],
      },
      {
        kind: "p",
        content:
          "You may not reproduce, distribute, republish, modify, sell, license, or commercially exploit our intellectual property without prior written authorization.",
      },
      {
        kind: "p",
        content:
          "Nothing on this website grants you ownership of or a license to Molar Media intellectual property except as expressly stated.",
      },
    ],
  },
  {
    title: "User Submissions",
    blocks: [
      {
        kind: "p",
        content:
          "When you submit information through a website form, you represent that the information you provide is accurate to the best of your knowledge and that you are authorized to provide it.",
      },
      { kind: "p", content: "You agree not to submit content that:" },
      {
        kind: "list",
        items: [
          "Violates applicable law.",
          "Infringes another party’s rights.",
          "Contains malware or malicious code.",
          "Is fraudulent or intentionally misleading.",
          "Contains confidential information that you do not have permission to disclose.",
        ],
      },
      {
        kind: "p",
        content:
          "Submission of an inquiry does not obligate Molar Media to provide services or respond within a specific timeframe.",
      },
    ],
  },
  {
    title: "Third-Party Platforms and Services",
    blocks: [
      {
        kind: "p",
        content:
          "Molar Media may rely on third-party software, infrastructure, hosting services, communications providers, analytics services, payment processors, marketing platforms, or other technology.",
      },
      {
        kind: "p",
        content: "These providers may include platforms used for:",
      },
      {
        kind: "list",
        items: [
          "Website hosting",
          "Email delivery",
          "SMS delivery",
          "Customer relationship management",
          "Marketing automation",
          "Analytics",
          "Payment processing",
          "Social media management",
        ],
      },
      {
        kind: "p",
        content:
          "Third-party products and services operate independently from Molar Media and may experience outages, restrictions, policy changes, service interruptions, account suspensions, security incidents, or other issues outside our control.",
      },
      {
        kind: "p",
        content:
          "Molar Media is not responsible for the availability, performance, security, policies, or actions of independent third-party providers.",
      },
    ],
  },
  {
    title: "Third-Party Links",
    blocks: [
      {
        kind: "p",
        content: "Our website may contain links to third-party websites.",
      },
      { kind: "p", content: "These links are provided for convenience only." },
      {
        kind: "p",
        content:
          "Molar Media does not control and is not responsible for the content, privacy practices, security, availability, accuracy, or policies of third-party websites.",
      },
      {
        kind: "p",
        content: "Visiting third-party websites is at your own risk.",
      },
    ],
  },
  {
    title: "Website Availability",
    blocks: [
      {
        kind: "p",
        content:
          "We attempt to maintain the website in a reliable and secure manner, but we do not guarantee uninterrupted or error-free availability.",
      },
      {
        kind: "p",
        content: "The website may occasionally be unavailable due to:",
      },
      {
        kind: "list",
        items: [
          "Maintenance",
          "Updates",
          "Hosting issues",
          "Software errors",
          "Security events",
          "Internet outages",
          "Third-party platform failures",
          "Circumstances outside our control",
        ],
      },
      {
        kind: "p",
        content:
          "We reserve the right to modify, suspend, replace, or discontinue any part of the website at any time.",
      },
    ],
  },
  {
    title: "Disclaimer",
    blocks: [
      {
        kind: "p",
        content:
          "The website and its content are provided on an “as is” and “as available” basis.",
      },
      {
        kind: "p",
        content:
          "To the fullest extent permitted by law, Molar Media disclaims warranties of any kind, whether express or implied, regarding the website or its content, including warranties of accuracy, reliability, merchantability, fitness for a particular purpose, or non-infringement.",
      },
      {
        kind: "p",
        content:
          "We do not guarantee that website content will always be complete, current, accurate, secure, or error-free.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    blocks: [
      {
        kind: "p",
        content:
          "To the fullest extent permitted by applicable law, Molar Media LLC and its owners, managers, employees, contractors, affiliates, and representatives shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to use of the website.",
      },
      {
        kind: "p",
        content: "This includes, without limitation, losses involving:",
      },
      {
        kind: "list",
        items: [
          "Revenue",
          "Profits",
          "Business opportunities",
          "Data",
          "Reputation",
          "Marketing performance",
          "Service interruptions",
          "Third-party platform failures",
        ],
      },
      {
        kind: "p",
        content:
          "Where applicable law does not permit certain limitations of liability, liability will be limited to the maximum extent permitted by law.",
      },
    ],
  },
  {
    title: "Indemnification",
    blocks: [
      {
        kind: "p",
        content:
          "You agree to indemnify, defend, and hold harmless Molar Media LLC and its owners, officers, employees, contractors, affiliates, and representatives from claims, liabilities, damages, losses, costs, and expenses arising from:",
      },
      {
        kind: "list",
        items: [
          "Your misuse of the website.",
          "Your violation of these Terms.",
          "Your violation of applicable law.",
          "Your infringement of another party’s rights.",
          "Information or data that you provide without lawful authorization.",
        ],
      },
    ],
  },
  {
    title: "Privacy",
    blocks: [
      {
        kind: "p",
        content:
          "Your use of the website is also subject to our Privacy Policy.",
      },
      {
        kind: "p",
        content:
          "The Privacy Policy explains how Molar Media may collect, use, store, and disclose personal information.",
      },
      {
        kind: "p",
        content:
          "A separate Privacy Policy page should be linked from the website footer.",
      },
    ],
  },
  {
    title: "Changes to These Terms",
    blocks: [
      {
        kind: "p",
        content: "Molar Media may revise these Terms from time to time.",
      },
      {
        kind: "p",
        content:
          "When changes are made, the “Last Updated” date at the top of this page may be updated.",
      },
      {
        kind: "p",
        content:
          "Continued use of the website after revised Terms become effective constitutes acceptance of the updated Terms.",
      },
    ],
  },
  {
    title: "Governing Law",
    blocks: [
      {
        kind: "p",
        content:
          "These Terms are governed by and interpreted in accordance with the laws of the State of Florida, United States, without regard to conflict-of-law principles.",
      },
      {
        kind: "p",
        content:
          "Any dispute arising from the use of this website shall be subject to applicable federal and Florida law.",
      },
    ],
  },
  {
    title: "Severability",
    blocks: [
      {
        kind: "p",
        content:
          "If any provision of these Terms is found to be invalid, unlawful, or unenforceable, the remaining provisions shall remain in full force and effect.",
      },
    ],
  },
  {
    title: "Entire Agreement",
    blocks: [
      {
        kind: "p",
        content:
          "These Terms, together with the Privacy Policy and any other policies specifically referenced on this website, constitute the agreement governing use of the Molar Media website.",
      },
      {
        kind: "p",
        content:
          "Separate client service agreements supersede these website Terms with respect to specific paid services where the documents address the same subject matter.",
      },
    ],
  },
  {
    title: "Contact",
    blocks: [
      {
        kind: "p",
        content:
          "If you have questions regarding these Terms & Conditions, please contact:",
      },
      { kind: "p", content: <Strong>Molar Media LLC</Strong> },
      {
        kind: "p",
        content: (
          <>
            Email:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-[#007BFF] transition-colors duration-200 hover:text-[#050505]"
            >
              {SITE.email}
            </a>
          </>
        ),
      },
      {
        kind: "p",
        content: (
          <>
            Website:{" "}
            <a
              href="https://www.molar-media.com/"
              className="font-semibold text-[#007BFF] transition-colors duration-200 hover:text-[#050505]"
            >
              https://www.molar-media.com/
            </a>
          </>
        ),
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-white px-6 pt-32 pb-24 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-3xl">
          {/* Page header */}
          <span className="block text-xs font-semibold uppercase tracking-widest text-[#007BFF]">
            Legal
          </span>
          <h1 className="mt-3 text-4xl font-black leading-[1.02] tracking-tight text-[#050505] md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-sm text-[#5F6670]">
            <span className="font-semibold text-[#050505]">Last Updated:</span>{" "}
            {LAST_UPDATED}
          </p>

          <div className="mt-10 h-px bg-[#E6E8EC]" />

          {/* Sections */}
          <div className="mt-14 space-y-14 md:mt-16 md:space-y-16">
            {sections.map((section, i) => (
              <section key={section.title}>
                <h2 className="flex gap-3 text-xl font-bold leading-snug tracking-tight text-[#050505] md:gap-4 md:text-2xl">
                  <span className="pt-1 text-sm font-semibold tabular-nums text-[#007BFF] md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </h2>

                <div className="mt-5 space-y-4">
                  {section.blocks.map((block, j) =>
                    block.kind === "p" ? (
                      <p
                        key={j}
                        className="text-[15px] leading-relaxed text-[#5F6670] md:text-base"
                      >
                        {block.content}
                      </p>
                    ) : (
                      <ul key={j} className="space-y-2.5">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[15px] leading-relaxed text-[#5F6670] md:text-base"
                          >
                            <span className="mt-[0.65em] h-1 w-1 flex-shrink-0 rounded-full bg-[#C0C5CD]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
