import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";
import { 
  FileText, Mic, ClipboardCheck, History, 
  Calendar, MessageSquareCode, Clock, BellRing, 
  Coins, CreditCard, Receipt, TrendingUp, 
  ShieldCheck, Fingerprint, RefreshCcw, Landmark,
  Sliders
} from "lucide-react";

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  key?: any;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div
    whileHover={{ y: -5, borderColor: "var(--primary)" }}
    transition={{ duration: 0.2 }}
    className="bg-[#120F22] border border-purple-950/40 p-6 rounded-2xl text-left flex flex-col items-start hover:shadow-[var(--shadow-glow)] group"
  >
    <div className="w-10 h-10 rounded-lg bg-[#1E1938] flex items-center justify-center text-purple-400 group-hover:text-white transition-colors mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-base font-bold text-white mb-2">{title}</h3>
    <p className="text-xs text-gray-400 font-light leading-relaxed">{description}</p>
  </motion.div>
);

export const Features = () => {
  const categories = [
    {
      title: "Clinical Records & EMR",
      description: "Secure, structured health recordings built for mental health protocols.",
      items: [
        {
          icon: FileText,
          title: "Structured SOAP Notes",
          description: "Clean medical fields with preset psychological protocols & templates."
        },
        {
          icon: Mic,
          title: "Voice-To-Note Dictation",
          description: "Record session summaries via voice with 99.2% accuracy clinical transcribing."
        },
        {
          icon: ClipboardCheck,
          title: "Intake Assessment Tool",
          description: "Smart digital intake forms that sync with client records prior to session one."
        },
        {
          icon: History,
          title: "Unified Treatment History",
          description: "A secure timeline of all previous sessions, notes, behaviors, and progress charts."
        }
      ]
    },
    {
      title: "Smart Scheduling",
      description: "Ditch manual slots and booking phone calls with self-service schedule workflows.",
      items: [
        {
          icon: Sliders,
          title: "Availability & Buffer Controls",
          description: "Set clinician hours, days off, and buffer time between appointments so only true open slots are ever bookable."
        },
        {
          icon: Calendar,
          title: "24/7 Client Booking Portal",
          description: "Interactive calendars that let clients self-book only during approved times."
        },
        {
          icon: Clock,
          title: "Conflict Detection Checks",
          description: "Automated verification logic to detect and prevent scheduling overlaps within the clinic."
        },
        {
          icon: BellRing,
          title: "Reminder & Notifications",
          description: "Automated client notifications and reminders to reduce no-shows and cancellations."
        }
      ]
    },
    {
      title: "Billing & Multi Payment Gateways",
      description: "Automate accounting with real-time M-Pesa and local/international card integrations.",
      items: [
        {
          icon: Coins,
          title: "Direct M-Pesa Checkout",
          description: "Push STK-pin requests instantly to client telephones for swift bookings."
        },
        {
          icon: CreditCard,
          title: "International Cards",
          description: "Seamless processing of Visa, MasterCard, Amex, and electronic payments locally/internationally."
        },
        {
          icon: Receipt,
          title: "Instant Invoicing",
          description: "Fires beautiful clinical receipts with professional diagnosis details directly to client emails."
        },
        {
          icon: TrendingUp,
          title: "Clinical Accounting Sheets",
          description: "Analyze monthly clinic revenue, top therapies, and therapist payout reports."
        }
      ]
    },
    {
      title: "Secure Enterprise Architecture",
      description: "Clinical security mechanisms optimized for patient assurance and data law compliance.",
      items: [
        {
          icon: ShieldCheck,
          title: "Encrypted Backups",
          description: "End-to-end client record isolation with scheduled triple data redundancy backups."
        },
        {
          icon: Fingerprint,
          title: "Two-Factor Auth (2FA)",
          description: "Lock out unauthorized logons on clinician and administrative accounts."
        },
        {
          icon: RefreshCcw,
          title: "Clear Audit Logs",
          description: "Record logs tracking who requested, edited, or deleted clinical records."
        },
        {
          icon: Landmark,
          title: "Compliance standards",
          description: "Architecture strictly modeled on medical information privacy legislations."
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--primary)] blur-[130px] opacity-15 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500 blur-[120px] opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-uppercase mb-3 block">Complete Feature Suite</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Complete EMR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">Operating System</span>
          </h1>
          <p className="body-muted max-w-xl mx-auto text-sm md:text-base">
            Configure every detail of your therapy workspace. TheraSquare supports scheduling, payments, transcription, and client journals in a single high-security dashboard.
          </p>
        </div>

        {/* Feature Categories Wrapper */}
        <div className="space-y-20">
          {categories.map((category, catIdx) => (
            <AnimatedSection key={catIdx} delay={0.05 * catIdx}>
              <div className="text-left mb-8 pb-4 border-b border-purple-950/20">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {category.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-light">
                  {category.description}
                </p>
              </div>

              {/* Grid map */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIdx) => (
                  <FeatureCard 
                    key={itemIdx}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Features;
