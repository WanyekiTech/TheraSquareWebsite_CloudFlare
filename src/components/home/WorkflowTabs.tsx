import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, Mic, Users, Clipboard, LineChart, History, 
  Calendar, CreditCard, Heart, BookOpen, MessageSquare, ShieldCheck, 
  Building2, Globe, Fingerprint, Coins, UserCog, FileBarChart2 
} from "lucide-react";

type RoleType = "For Clients" | "For Therapists" | "For Admins";

interface FeatureItem {
  icon: any;
  title: string;
  description: string;
}

export const WorkflowTabs = () => {
  const [activeTab, setActiveTab] = useState<RoleType>("For Therapists");

  const tabContent: Record<RoleType, FeatureItem[]> = {
    "For Clients": [
      {
        icon: Calendar,
        title: "24/7 Session Booking",
        description: "Clients book therapy sessions anytime, anywhere with real-time availability."
      },
      {
        icon: CreditCard,
        title: "M-Pesa & Card Payments",
        description: "Seamless payments via M-Pesa, Airtel Money, Visa, Mastercard, and Amex, with instant, automatic receipt generation."
      },
      {
        icon: Heart,
        title: "Emotion Tracker",
        description: "Log daily moods and emotions with visual insights over time."
      },
      {
        icon: BookOpen,
        title: "Therapy Journal",
        description: "Private, encrypted journal for reflections between sessions."
      },
      {
        icon: MessageSquare,
        title: "In-App Chat",
        description: "Secure messaging with therapists for quick check-ins."
      },
      {
        icon: ShieldCheck,
        title: "Minor Accounts",
        description: "Parent-managed accounts for underage clients with guardian oversight."
      }
    ],
    "For Therapists": [
      {
        icon: Clock,
        title: "Smart Calendar",
        description: "Intelligent scheduling with conflict detection and automated reminders."
      },
      {
        icon: Mic,
        title: "Voice Dictation Notes",
        description: "Record session notes by voice — automatically transcribed and saved."
      },
      {
        icon: Users,
        title: "Client Management",
        description: "Complete client profiles with history, notes, and treatment plans."
      },
      {
        icon: Clipboard,
        title: "Treatment Records",
        description: "Structured treatment plans with progress tracking and outcomes."
      },
      {
        icon: LineChart,
        title: "Analytics Dashboard",
        description: "Track monthly income, hours worked, and practice growth metrics."
      },
      {
        icon: History,
        title: "Complete Client History",
        description: "Full timeline of every session, note, payment, and interaction."
      }
    ],
    "For Admins": [
      {
        icon: Building2,
        title: "Unified Clinic Dashboard",
        description: "Manage your entire practice from a central admin dashboard."
      },
      {
        icon: UserCog,
        title: "User & Role Management",
        description: "Create and manage roles such as Admin, Front Office, Therapist, and Client with granular permissions."
      },
      {
        icon: Globe,
        title: "Secure Subdomains",
        description: "Dedicated clinic subdomains like clinic.therapy.ke with isolated data."
      },
      {
        icon: Fingerprint,
        title: "Two-Factor Authentication",
        description: "Enhanced security with 2FA for all staff accounts."
      },
      {
        icon: Coins,
        title: "Payment Management",
        description: "Oversee transactions, reconciliation, and revenue reporting in one place."
      },
      {
        icon: FileBarChart2,
        title: "Reports & Insights",
        description: "Generate detailed practice reports and performance analytics."
      }
    ]
  };

  const tabs: RoleType[] = ["For Clients", "For Therapists", "For Admins"];

  const tabSubheadings: Record<RoleType, string> = {
    "For Clients": "Empower your clients with self-service tools.",
    "For Therapists": "Everything you need to run your practice efficiently.",
    "For Admins": "Full control across clinics with enterprise-grade tools."
  };

  return (
    <section className="pt-12 md:pt-14 lg:pt-16 pb-16 md:pb-20 lg:pb-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-uppercase mb-3 block">
            FOR YOUR WORKFLOW
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Built for Every Role in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">Your Practice</span>
          </h2>

          {/* Tab Selection Capsule - directly beneath the title */}
          <div className="flex justify-center mb-6">
            <div className="bg-surface p-1.5 rounded-2xl md:rounded-full border border-brand/20 flex flex-wrap md:inline-flex justify-center items-center gap-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive ? "text-white" : "text-text-muted hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeRoleTab"
                        className="absolute inset-0 bg-brand rounded-full -z-10 shadow-md"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Subheading directly below the tab title/buttons */}
          <div className="min-h-[24px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
                className="body-muted max-w-lg mx-auto text-text-muted"
              >
                {tabSubheadings[activeTab]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Tab Panel */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {tabContent[activeTab].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-surface border border-brand/20 p-6 rounded-[var(--radius-card)] hover:-translate-y-1 hover:border-brand-light hover:shadow-[var(--shadow-glow)] transition-all duration-300 ease-out group pr-6"
                  >
                    <div className="bg-brand/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-brand-light" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default WorkflowTabs;
