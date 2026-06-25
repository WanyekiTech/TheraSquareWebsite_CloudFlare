import { motion } from "framer-motion";
import { PROBLEM_STATEMENTS } from "../../config/homeData";

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const ProblemStatement = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-background flex flex-col justify-center items-center">
      
      {/* Subtle Crimson Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,74,86,0.1)_0%,rgba(7,5,18,0)_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
        {/* Main Grid Container (40/60 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column (Image - 5/12) */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-1 lg:col-span-5"
          >
            <img 
              src="/images/home/challenge.jpg" 
              alt="Therapist overwhelmed by administration work"
              loading="lazy"
              className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-2xl border border-destructive/20"
            />
          </motion.div>

          {/* Right Column (Content - 7/12) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col">
            
            {/* Header Block */}
            <div className="text-left mb-10">
              <span className="label-uppercase-alert mb-3 block">
                THE CHALLENGE
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Running a therapy practice shouldn’t feel like <span className="text-destructive">administration work</span>
              </h2>
              <p className="body-muted max-w-lg">
                Most mental health professionals lose valuable time managing operations instead of focusing on clients.
              </p>
            </div>

            {/* Premium List */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-3"
            >
              {PROBLEM_STATEMENTS.map((prob) => (
                <motion.div 
                  key={prob.id}
                  variants={itemVariants}
                  className="bg-surface border border-destructive/20 rounded-2xl py-3 px-4 shadow-[0_4px_24px_rgba(217,74,86,0.05)] hover:border-destructive/40 transition-colors flex flex-row items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center justify-center shrink-0">
                    <prob.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-sm text-text-muted/90 font-normal leading-relaxed m-0">
                    {prob.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Emotional Close */}
        <div className="text-center pt-12 mt-12 border-t border-destructive/30 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(217,74,86,0.3)]">
            Your time should be spent in sessions — <span className="text-destructive">not systems.</span>
          </h3>
        </div>

      </div>
    </section>
  );
};
