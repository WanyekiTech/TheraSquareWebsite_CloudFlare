import { motion } from "motion/react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-10 h-10" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="logo-glow-white" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="logo-glow-purple" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Gradients */}
        <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" /> {/* lavender-400 */}
          <stop offset="100%" stopColor="#7C3AED" /> {/* purple-600 */}
        </linearGradient>

        <linearGradient id="purple-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>

        <linearGradient id="border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>

      {/* Dark background backing with solid deep space color matching the uploaded image */}
      <rect x="0" y="0" width="100" height="100" rx="14" fill="#070814" />
      
      {/* Hidden grid pattern layer to match the flat minimal styling of the uploaded image */}
      <g opacity="0">
        <line x1="20" y1="0" x2="20" y2="100" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="40" y1="0" x2="40" y2="100" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="60" y1="0" x2="60" y2="100" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="80" y1="0" x2="80" y2="100" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="0" y1="20" x2="100" y2="20" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="0" y1="40" x2="100" y2="40" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="0" y1="60" x2="100" y2="60" stroke="#7C3AED" strokeWidth="0.5" />
        <line x1="0" y1="80" x2="100" y2="80" stroke="#7C3AED" strokeWidth="0.5" />
      </g>

      {/* Hidden legacy outer glow area to keep visual style perfectly flat & sharp */}
      <rect x="7" y="7" width="86" height="86" rx="10" stroke="#9C8DFB" strokeWidth="8" opacity="0" />

      {/* Outer square frame with crisp solid light-purple border matching the image */}
      <rect x="10" y="10" width="80" height="80" rx="2" stroke="#9C8DFB" strokeWidth="8" fill="none" />
      
      {/* Hidden inner fine border stroke */}
      <rect x="13" y="13" width="74" height="74" rx="6" stroke="transparent" strokeWidth="0" opacity="0" />

      {/* Left Symmetrical Light Purple Pillars Group */}
      <g>
        <polygon
          points="21,38 39.5,38 39.5,46 32.5,46 32.5,69 39.5,69 39.5,78.5 32,78.5 21,46"
          fill="#9C8DFB"
        />
      </g>

      {/* Right Symmetrical Light Purple Pillars Group (Mirrored across X=50) */}
      <g>
        <polygon
          points="79,38 60.5,38 60.5,46 67.5,46 67.5,69 60.5,69 60.5,78.5 68,78.5 79,46"
          fill="#9C8DFB"
        />
      </g>

      {/* Main Crisp White Central 'T' Monogram */}
      <path
        d="M 21,21.5 L 79,21.5 L 79,34.5 L 70.5,34.5 L 70.5,29.5 L 55.5,29.5 L 55.5,78.5 L 44.5,78.5 L 44.5,29.5 L 29.5,29.5 L 29.5,34.5 L 21,34.5 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export default Logo;
