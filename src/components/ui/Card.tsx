import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card = ({ children, className = "", hoverEffect = true, glow = false }: CardProps) => {
  const hoverProps = hoverEffect
    ? {
        whileHover: { y: -6, boxShadow: glow ? "var(--shadow-glow)" : "0 8px 32px rgba(29,107,110,0.15)" },
        transition: { duration: 0.25 }
      }
    : {};

  return (
    <motion.div
      {...hoverProps}
      className={`bg-surface border border-brand/20 rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
