import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeftRight, ClipboardSignature, UserPlus, CreditCard, Award, Check } from "lucide-react";

export const HowItWorksSteps = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const steps = [
    {
      num: "01",
      title: "Register Your Clinic",
      description: "Set up your clinic profile in minutes. Configure your services, therapist schedules, and payment methods — all from one dashboard.",
      icon: ClipboardSignature
    },
    {
      num: "02",
      title: "Onboard Your Team",
      description: "Invite therapists, front office staff, and assistants. Each gets a tailored environment with multi-role access privileges.",
      icon: UserPlus
    },
    {
      num: "03",
      title: "Easy Client Bookings With M-Pesa or Card",
      description: "Clients select slots online. TheraSquare processes payments instantly and blocks the calendar without manual entry.",
      icon: CreditCard
    },
    {
      num: "04",
      title: "Dictate & Automated Sync",
      description: "Therapists dictate notes; the system converts into preset formats (e.g., SOAP) and updates records in real time.",
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-background border-t border-brand/20 z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-uppercase mb-3 block">Simple Setup</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">Works</span>
          </h2>
          <p className="body-muted max-w-lg mx-auto">
            Get your practice running on TheraSquare in four simple steps and transform your clinical workflow.
          </p>
        </div>

        {/* Steps Grid - horizontal on desktop, vertical on mobile */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Desktop Horizontal Connector Line with looping flow glow */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] pointer-events-none z-0 overflow-hidden">
            {/* Base Line structure: ~2px on desktop with beautiful low-opacity structure */}
            <div className="absolute inset-0 bg-[#8B5CF6]/25 rounded-full" />
            
            {/* Dynamic Thick Glow Layer */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[8px] w-[20%] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent blur-[4px] opacity-80"
              animate={{
                left: ["-20%", "120%"]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Sharp Cyan Core Accent for workflow kinetic energy */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] w-[15%] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-95"
              animate={{
                left: ["-20%", "120%"]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.num}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative z-10 bg-surface border border-brand/20 p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:border-brand-light/40 hover:shadow-[var(--shadow-glow)] transition-all duration-300 ease-out group text-left flex flex-col items-start"
              >
                {/* Subtle glowing border tracing around the card edges on hover */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl z-20 overflow-visible">
                  <motion.svg 
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id={`glow-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    {/* Soft ambient glow tracking path */}
                    <motion.rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="16"
                      ry="16"
                      fill="none"
                      stroke={`url(#glow-grad-${idx})`}
                      strokeWidth="3.5"
                      className="blur-[5px]"
                      strokeDasharray="180 380"
                      animate={{ strokeDashoffset: [0, -560] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Sharp core tracing path */}
                    <motion.rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="16"
                      ry="16"
                      fill="none"
                      stroke={`url(#glow-grad-${idx})`}
                      strokeWidth="1.25"
                      strokeDasharray="180 380"
                      animate={{ strokeDashoffset: [0, -560] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.svg>
                </div>
                {/* Step number badge */}
                <div className="flex items-center justify-between w-full mb-6 z-10">
                  <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-brand-light font-mono text-sm font-extrabold shadow-sm">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-brand/20 text-brand-light group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-brand-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSteps;
