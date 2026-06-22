import { motion } from "motion/react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-10 h-10" }: LogoProps) => {
  return (
    <img 
      src="/therasquare-logo.png" 
      alt="TheraSquare Logo" 
      className={`${className} select-none object-contain`} 
    />
  );
};

export default Logo;
