import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#06040D] border-t border-purple-950/25 z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Animated Background Pulse Blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[var(--primary)] blur-[120px] opacity-20 pointer-events-none -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content Box */}
        <div className="bg-gradient-to-b from-[#16122c] to-[#0e0b1c] border border-purple-800/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-[var(--shadow-glow)]">
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            
            {/* badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[var(--primary-light)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 uppercase mb-6">
              <Sparkles className="w-3 h-3 text-[var(--primary-light)]" />
              30-DAY FREE ACCESS OFFERED
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Ready to Modernize Your Practice?
            </h2>

            {/* Subtext */}
            <p className="body-muted max-w-lg mb-8 leading-relaxed font-light">
              Join therapists and clinics across Africa who trust TheraSquare EMR to run their practice—smarter, faster, and more securely.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Link to="/signup" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full group">
                  Start Free Month
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full border border-purple-900/40">
                  Book a Demo
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
