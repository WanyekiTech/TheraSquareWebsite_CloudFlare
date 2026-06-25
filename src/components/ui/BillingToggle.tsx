import { motion } from "motion/react";

export type BillingCycle = 'Monthly' | 'Annual';

export interface BillingToggleProps {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
  className?: string;
}

export const BillingToggle = ({ cycle, onChange, className = "mb-16" }: BillingToggleProps) => {
  return (
    <div className={`flex justify-center select-none ${className}`}>
      <div 
        role="radiogroup" 
        aria-label="Billing Cycle"
        className="bg-black/40 backdrop-blur-md border border-brand/20 p-1.5 rounded-full flex flex-wrap sm:flex-nowrap items-center shadow-inner relative"
      >
        <button
          type="button"
          role="radio"
          aria-checked={cycle === 'Monthly'}
          onClick={() => onChange('Monthly')}
          className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer w-full sm:w-auto ${
            cycle === 'Monthly' ? "text-white" : "text-text-muted hover:text-white hover:bg-white/5"
          }`}
        >
          {cycle === 'Monthly' && (
            <motion.div
              layoutId="billingTogglePill"
              className="absolute inset-0 bg-brand rounded-full -z-10 shadow-[var(--shadow-glow)]"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          Monthly
        </button>
        
        <button
          type="button"
          role="radio"
          aria-checked={cycle === 'Annual'}
          onClick={() => onChange('Annual')}
          className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto ${
            cycle === 'Annual' ? "text-white" : "text-text-muted hover:text-white hover:bg-white/5"
          }`}
        >
          {cycle === 'Annual' && (
            <motion.div
              layoutId="billingTogglePill"
              className="absolute inset-0 bg-brand rounded-full -z-10 shadow-[var(--shadow-glow)]"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          Annually
          <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border transition-colors ${
            cycle === 'Annual' 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
          }`}>
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
};
