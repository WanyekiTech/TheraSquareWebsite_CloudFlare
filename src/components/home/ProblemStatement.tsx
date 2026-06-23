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
    <section className="py-24 relative overflow-hidden bg-[#070512] flex flex-col justify-center items-center">
      
      {/* Subtle Crimson Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,27,27,0.1)_0%,rgba(7,5,18,0)_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-uppercase-alert mb-3 block">
            THE CHALLENGE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Running a therapy practice shouldn’t feel like <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">administration work</span>
          </h2>
          <p className="body-muted max-w-lg mx-auto">
            Most mental health professionals lose valuable time managing operations instead of focusing on clients.
          </p>
        </div>

        {/* Premium Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {PROBLEM_STATEMENTS.map((prob) => (
            <motion.div 
              key={prob.id}
              variants={itemVariants}
              className="bg-[#120F22] border border-red-900/20 rounded-2xl p-6 shadow-[0_4px_24px_rgba(153,27,27,0.05)] hover:border-red-900/40 transition-colors flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-900/30 flex items-center justify-center shrink-0">
                <prob.icon className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                {prob.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Emotional Close */}
        <div className="text-center pt-8 border-t border-red-950/30">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(248,113,113,0.3)]">
            Your time should be spent in sessions — <span className="text-red-400">not systems.</span>
          </h3>
        </div>

      </div>
    </section>
  );
};
