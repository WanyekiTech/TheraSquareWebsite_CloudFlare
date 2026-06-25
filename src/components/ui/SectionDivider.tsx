export interface SectionDividerProps {
  className?: string;
  colorClass?: string;
}

export const SectionDivider = ({ 
  className = "my-8 md:my-12", 
  colorClass = "via-brand/30" 
}: SectionDividerProps) => (
  <div className={`w-full h-[1px] bg-gradient-to-r from-transparent ${colorClass} to-transparent ${className}`} />
);
