import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "254722446138";
  const message = "Hi TheraSquare team! I'm interested in learning more about your platform.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    // Basic analytics tracking placeholder
    console.log("WhatsApp Button Clicked");
    // In the future, hook this up to PostHog, Google Analytics, or similar:
    // if (window.posthog) posthog.capture('whatsapp_click');
  };

  return (
    <motion.div
      className="fixed bottom-8 md:bottom-6 right-6 z-50 flex items-center justify-end"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1.5 // Delay slightly so it doesn't interrupt initial page load
      }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 bg-surface/80 backdrop-blur-xl border border-brand/20 p-2 pr-3 rounded-full shadow-[0_8px_30px_rgba(29,107,110,0.2)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.3)] hover:border-[#25D366]/40 transition-all duration-500 z-10 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us on WhatsApp"
      >
        {/* The Icon Container */}
        <div className="relative flex items-center justify-center w-12 h-12 bg-white/5 rounded-full group-hover:bg-[#25D366]/10 transition-colors duration-500 shrink-0">
          {/* Subtle initial pulse on load, stops after a few iterations */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]/20 -z-10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: 2, // Only pulse a few times to avoid annoyance
              ease: "easeInOut",
            }}
          />
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6 text-[#25D366] transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M12.031 2C6.48 2 2 6.476 2 12.02c0 1.77.464 3.498 1.344 5.018L2 22l5.12-1.343a10.021 10.021 0 0 0 4.911 1.282h.004c5.548 0 10.027-4.476 10.027-10.025C22.062 6.48 17.585 2 12.031 2zm0 18.257c-1.503 0-2.977-.404-4.27-1.168l-.307-.183-3.17.832.846-3.088-.2-.317A8.347 8.347 0 0 1 3.682 12.02C3.682 7.414 7.425 3.67 12.034 3.67c4.604 0 8.354 3.743 8.354 8.35 0 4.61-3.744 8.357-8.357 8.357zm4.587-6.262c-.25-.126-1.488-.735-1.718-.82-.23-.083-.398-.124-.565.126-.168.252-.647.818-.795.986-.146.168-.295.188-.545.063-1.026-.514-1.92-1.077-2.658-2.316-.19-.318-.02-.49.105-.615.112-.113.25-.292.375-.438.125-.147.168-.252.252-.42.083-.168.042-.315-.02-.442-.064-.125-.566-1.365-.776-1.87-.202-.49-.408-.423-.566-.43-.146-.007-.314-.007-.482-.007s-.44.063-.67.315c-.23.25-.88 .86-.88 2.096s.9 2.43.1026 2.597c.125.168 1.77 2.705 4.286 3.79.6.26 1.066.415 1.432.532.6.19 1.147.162 1.576.098.482-.07 1.488-.607 1.698-1.194.21-.587.21-1.09.147-1.194-.063-.105-.23-.168-.48-.294z"/>
          </svg>
        </div>

        {/* Expanding Tooltip Text */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0, paddingRight: 0 }}
              animate={{ width: "auto", opacity: 1, paddingRight: 8 }}
              exit={{ width: 0, opacity: 0, paddingRight: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-sm font-semibold text-white tracking-wide">
                Chat with us
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
