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
    let baseStyles = "inline-flex items-center justify-center font-medium rounded-full cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--primary-light)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]";
    
    let variantStyles = "";
    if (variant === "primary") {
      variantStyles = "bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white shadow-[0_4px_16px_rgba(124,58,237,0.3)] border border-transparent";
    } else if (variant === "secondary") {
      variantStyles = "bg-[#1E1938] hover:bg-[#2A234B] text-[var(--primary-light)] border border-purple-900/40";
    } else if (variant === "ghost") {
      variantStyles = "bg-transparent text-gray-300 hover:text-white hover:bg-white/5 border border-transparent";
    } else if (variant === "accent") {
      // Teal gradient highlighter for EMR feel
      variantStyles = "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-semibold shadow-md";
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
