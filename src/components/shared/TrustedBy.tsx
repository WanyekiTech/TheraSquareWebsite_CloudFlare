import { ReactNode } from "react";
import { motion } from "motion/react";
import { Hospital } from "lucide-react";

interface LogoItem {
  name: string;
  icon: ReactNode;
}

const practiceTypes: LogoItem[] = [
  {
    name: "Solo practices",
    icon: <Hospital className="w-5 h-5" />
  },
  {
    name: "Group practices",
    icon: <Hospital className="w-5 h-5" />
  },
  {
    name: "Private clinics",
    icon: <Hospital className="w-5 h-5" />
  },
  {
    name: "Counseling centers",
    icon: <Hospital className="w-5 h-5" />
  },
  {
    name: "Enterprise clinics",
    icon: <Hospital className="w-5 h-5" />
  },
  {
    name: "NGOs & public services",
    icon: <Hospital className="w-5 h-5" />
  }
];

export const TrustedBy = () => {
  // Triple the array to provide a completely continuous horizontal span before transitioning
  const triplePractices = [...practiceTypes, ...practiceTypes, ...practiceTypes];

  return (
    <section className="relative overflow-hidden w-full py-8 bg-background select-none">
      {/* Container to enforce exact desktop-first precision and limits */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Subtle non-intrusive label */}
        <p className="text-xs tracking-wider uppercase font-semibold text-text-muted mb-6 text-center select-none antialiased">
          Trusted by mental health professionals
        </p>

        {/* Theme-aware responsive side-fades created via transparent gradient masks */}
        <div className="absolute left-0 top-12 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-12 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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
                className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors duration-300 group cursor-default"
              >
                <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-brand-light">
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
