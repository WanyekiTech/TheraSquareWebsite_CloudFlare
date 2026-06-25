import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 focus:ring-offset-background";
    
    let variantStyles = "";
    if (variant === "primary") {
      variantStyles = "bg-accent hover:brightness-110 text-background shadow-[0_4px_16px_rgba(99,216,245,0.2)] border border-transparent";
    } else if (variant === "secondary") {
      variantStyles = "bg-surface hover:bg-brand/10 text-brand border border-brand/30";
    } else if (variant === "ghost") {
      variantStyles = "bg-transparent text-text-muted hover:text-text-primary hover:bg-white/5 border border-transparent";
    } else if (variant === "accent") {
      // Premium gradient highlighter
      variantStyles = "bg-premium-gradient text-background font-semibold shadow-[0_4px_16px_rgba(29,107,110,0.3)] hover:brightness-110 border border-transparent";
    }

    let sizeStyles = "";
    if (size === "sm") {
      sizeStyles = "px-4 py-2 text-xs";
    } else if (size === "md") {
      sizeStyles = "px-6 py-3 text-sm";
    } else if (size === "lg") {
      sizeStyles = "px-8 py-4 text-base";
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
