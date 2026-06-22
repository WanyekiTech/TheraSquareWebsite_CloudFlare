import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const Badge = ({ children, variant = "primary", className = "" }: BadgeProps) => {
  let baseStyles = "inline-flex items-center px-3.py-1 text-xs font-semibold uppercase tracking-wider rounded-full";
  
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-[var(--primary)]/10 text-[var(--primary-light)] border border-[var(--primary)]/20";
  } else if (variant === "secondary") {
    variantStyles = "bg-white/5 text-gray-300 border border-white/10";
  } else if (variant === "accent") {
    // Glowing medical/technical indicator (teal)
    variantStyles = "bg-teal-500/10 text-teal-300 border border-teal-500/20";
  }

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
