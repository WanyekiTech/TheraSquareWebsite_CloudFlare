import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Fluid physics configuration
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setCursorVariant('hover');
      } else if (target.closest('input, textarea')) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: '1.5px solid rgba(99, 216, 245, 0.6)',
    },
    hover: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      backgroundColor: 'rgba(99, 216, 245, 0.15)',
      border: '1.5px solid rgba(99, 216, 245, 0.8)',
    },
    text: {
      width: 4,
      height: 32,
      borderRadius: '2px',
      backgroundColor: 'rgba(99, 216, 245, 0.8)',
      border: '0px solid transparent',
    }
  };

  const dotVariants = {
    default: { opacity: 1, scale: 1 },
    hover: { opacity: 0, scale: 0 },
    text: { opacity: 0, scale: 0 },
  };

  return (
    <>
      {/* Trailer Wrapper */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        {/* Trailer Element */}
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
        />
      </motion.div>

      {/* Dot Wrapper */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        {/* Dot Element */}
        <motion.div
          className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(99,216,245,0.8)]"
          style={{ backgroundColor: '#63D8F5' }}
          variants={dotVariants}
          animate={cursorVariant}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};
