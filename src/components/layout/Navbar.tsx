import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button, Logo } from "@components/ui";
import { Menu, X, BrainCircuit, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "For Therapists", path: "/for-therapists" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(6,18,20,0.8)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <Logo className="w-10 h-10 shadow-lg group-hover:rotate-6 transition-transform duration-300" />
            <div>
              <span className="font-extrabold text-base md:text-lg text-white font-display tracking-tight leading-none block">
                Thera<span className="text-brand-light">Square</span>
              </span>
              <span className="text-[9px] text-text-muted font-mono tracking-widest uppercase block mt-0.5">
                PRACTICE EMR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Link row */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-brand-light" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-0 right-0 bottom-[-6px] h-0.5 bg-brand-light rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons (Right-side column) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/signup">
              <Button variant="primary" size="sm" className="font-semibold uppercase tracking-wider text-xs px-5 py-2.5">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-muted hover:text-text-primary self-center transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Full Screen Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-brand/20 pt-24 pb-8 px-6 shadow-2xl lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-5 text-left mb-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 text-base font-semibold tracking-wide border-b border-brand/10 ${
                      isActive ? "text-brand-light" : "text-text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/signup" className="w-full">
                <Button variant="primary" className="w-full font-semibold uppercase tracking-wider text-sm py-3.5">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
