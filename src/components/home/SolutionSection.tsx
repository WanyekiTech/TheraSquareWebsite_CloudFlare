import { motion } from "framer-motion";
import { SOLUTION_FEATURES } from "../../config/homeData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const SolutionSection = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-14 lg:pb-16 relative overflow-hidden bg-background flex flex-col justify-center items-center border-b border-brand/20">
      
      {/* Subtle Primary Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,107,110,0.15)_0%,rgba(7,5,18,0)_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
        {/* Main Grid Container (Offset Headings + 40/60 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 lg:gap-x-16 gap-y-6 lg:gap-y-8 items-center w-full">
          
          {/* ROW 1: Headings (Offset to left) */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 text-left"
          >
            <span className="label-uppercase mb-3 block">
              THE SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Everything you need to run your practice — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">in one place</span>
            </h2>
          </motion.div>

          {/* ROW 2: Image (Right 5/12) */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-5 lg:col-start-8 lg:row-start-2"
          >
            <img 
              src="/images/home/solution.jpg" 
              alt="Calm and organized therapist using TheraSquare dashboard"
              loading="lazy"
              className="w-full h-auto aspect-square object-cover rounded-2xl shadow-2xl border border-white/[0.05]"
            />
          </motion.div>

          {/* ROW 2: Paragraph + Cards (Left 7/12) */}
          <div className="col-span-1 lg:col-span-7 lg:col-start-1 lg:row-start-2 flex flex-col">
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="body-muted max-w-lg mb-8"
            >
              TheraSquare is a unified EMR platform built specifically for mental health professionals.
            </motion.p>

            {/* Premium List (Glassmorphic) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-3"
            >
              {SOLUTION_FEATURES.map((feature) => (
                <motion.div 
                  key={feature.id}
                  variants={itemVariants}
                  className="bg-white/[0.02] border border-white/[0.05] rounded-2xl py-3 px-4 shadow-lg backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-all flex flex-row items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand/20 border border-brand/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-brand-light" />
                  </div>
                  <p className="text-sm font-medium text-white/90 m-0 leading-relaxed">
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Positive Close */}
        <div className="text-center pt-8 mt-8 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(29,107,110,0.3)]">
            Get back to what you do best — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">healing your clients.</span>
          </h3>
        </div>

      </div>
    </section>
  );
};
