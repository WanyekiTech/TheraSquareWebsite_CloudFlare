import { motion } from "motion/react";

export const MetricsBar = () => {
  const stats = [
    { number: "AI-Powered", label: "Notes" },
    { number: "30-Day", label: "Free Access" },
    { number: "KES 2,000/mo", label: "Starting at" },
    { number: "Enterprise-Grade", label: "Security" },
    { number: "Built for", label: "Africa" }
  ];

  return (
    <section className="bg-background/80 py-4 border-y border-brand/20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5 md:gap-x-7 text-center select-none">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-5 md:gap-7"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-1.5 md:gap-2 text-[13px] md:text-sm">
                <span className="font-bold text-white tracking-tight">
                  {stat.number}
                </span>
                <span className="text-text-muted font-normal">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span className="text-brand/50 font-light text-sm md:text-base select-none leading-none" aria-hidden="true">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
