import { ReactNode } from "react";
import { motion } from "motion/react";

interface LogoItem {
  name: string;
  icon: ReactNode;
}

const practiceTypes: LogoItem[] = [
  {
    name: "Solo practices",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L9 22h6L12 2z" />
        <path d="M12 6v4" />
        <circle cx="12" cy="8" r="1.5" />
      </svg>
    )
  },
  {
    name: "Group practices",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20L12 4l9 16H3z" />
        <path d="M12 8v12" />
      </svg>
    )
  },
  {
    name: "Private clinics",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    )
  },
  {
    name: "Counseling centers",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    )
  },
  {
    name: "Enterprise clinics",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M12 12l4-4M8 16l4-4" />
      </svg>
    )
  },
  {
    name: "NGOs & public services",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 6h4a5 5 0 0 1 5 5v4" />
      </svg>
    )
  }
];

export const TrustedBy = () => {
  // Triple the array to provide a completely continuous horizontal span before transitioning
  const triplePractices = [...practiceTypes, ...practiceTypes, ...practiceTypes];

  return (
    <section className="relative overflow-hidden w-full py-8 bg-[#06040D] border-b border-[#1C1739]/30 select-none">
      {/* Container to enforce exact desktop-first precision and limits */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Subtle non-intrusive label */}
        <p className="text-xs tracking-wider uppercase font-semibold text-zinc-500 mb-6 text-center select-none antialiased">
          Trusted by Mental Health Professionals
        </p>

        {/* Theme-aware responsive side-fades created via transparent gradient masks */}
        <div className="absolute left-0 top-12 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#06040D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-12 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#06040D] to-transparent z-10 pointer-events-none" />

        {/* Responsive, horizontally scrollable linear alignment */}
        <div className="w-full overflow-hidden py-2">
          <motion.div
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-max"
            animate={{ x: ["0%", "-33.3333%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {triplePractices.map((practice, index) => (
              <div 
                key={`${practice.name}-${index}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors duration-300 group cursor-default"
              >
                <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-purple-400">
                  {practice.icon}
                </div>
                <span className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {practice.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
