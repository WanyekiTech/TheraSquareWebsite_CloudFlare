import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button, Particles } from "@components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="pt-12 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden bg-background z-10">
      {/* Animated Background Pulse Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand blur-[120px] opacity-20 pointer-events-none -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />



      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Content Box */}
        <div className="bg-gradient-to-b from-surface to-background/80 border border-brand/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-[var(--shadow-glow)] z-10">
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            
            {/* badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-light bg-brand/10 border border-brand/20 uppercase mb-6">
              <Sparkles className="w-3 h-3 text-brand-light" />
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
                <Button variant="secondary" size="lg" className="w-full border border-brand/20">
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
