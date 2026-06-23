import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is TheraSquare EMR?",
      answer: "TheraSquare is an Electronic Medical Records (EMR) and practice management system built specifically for therapists, counsellors, and mental health clinics across Africa. It unifies bookings, clinical notes, payments, and client records into one secure dashboard."
    },
    {
      question: "Who is TheraSquare designed for?",
      answer: "Our software is built for all mental health professionals—clinical psychologists, psychiatrists, therapists, marriage and family therapists, counsellors, social workers, and mental health clinics—who want to reduce administrative overhead and automate their practice."
    },
    {
      question: "How do clients book sessions?",
      answer: "Clients book sessions through a dedicated portal or custom link, choose appointment types, view real-time availability, and secure a slot in under one minute. Instant confirmations are sent, with automated reminders scheduled."
    },
    {
      question: "What payment methods are supported?",
      answer: "TheraSquare is integrated with Safaricom M-Pesa for instant mobile money payments and supports local and international credit and debit cards (Visa, Mastercard, Amex). All transactions are automatically recorded and matched to client records in real time."
    },
    {
      question: "Is the platform secure and HIPAA-inspired?",
      answer: "Absolutely. Clinical records require healthcare-grade security. TheraSquare uses advanced encryption, secure access controls, two-factor authentication (2FA), and automatic session timeouts, following security principles inspired by HIPAA and aligned with both local and global healthcare data protection best practices."
    },
    {
      question: "Do you support minor clients?",
      answer: "Yes. TheraSquare supports minor clients through parent- or guardian-managed accounts. Guardians can book sessions, complete intake forms, and handle payments, while clinical notes and records remain securely restricted to clinicians to protect the minor’s confidentiality."
    }
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#06040D] border-t border-purple-950/20 z-10 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-uppercase mb-3 block">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">Questions</span>
          </h2>
          <p className="body-muted max-w-lg mx-auto">
            Everything you need to know about the TheraSquare onboarding, billing, security, and clinical features.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#120F22] border border-purple-950/45 rounded-xl overflow-hidden transition-colors duration-150"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-gray-200 hover:text-white transition-colors cursor-pointer select-none"
                >
                  <span className="text-sm md:text-base pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-purple-400 shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Animated Accordion Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#0d091e]/50 border-t border-purple-950/20"
                    >
                      <div className="px-6 py-5 text-sm font-light text-gray-400 leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
