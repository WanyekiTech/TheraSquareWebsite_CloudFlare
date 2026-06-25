import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const Badge = ({ children, variant = "primary", className = "" }: BadgeProps) => {
  const baseStyles = "inline-flex items-center px-3.py-1 text-xs font-semibold uppercase tracking-wider rounded-full";
  
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-brand/10 text-brand-light border border-brand/20";
  } else if (variant === "secondary") {
    variantStyles = "bg-surface text-text-muted border border-brand/20";
  } else if (variant === "accent") {
    // Glowing medical/technical indicator (accent)
    variantStyles = "bg-accent/10 text-accent border border-accent/20";
  }

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
