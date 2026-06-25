import { Link } from "react-router-dom";
import { MessageSquare, MessageCircle, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Logo, Particles } from "@components/ui";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-20 pb-8 border-t border-brand/15 relative z-10 text-left overflow-hidden">
      {/* Animated Particles Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)' }}>
        <Particles 
          particleCount={250} 
          speed={0.05}
          className="opacity-100"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & details with Socials */}
          <div className="lg:col-span-5 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 group hover:drop-shadow-[0_0_12px_rgba(99,216,245,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 focus:ring-offset-background rounded-lg active:scale-95 transition-all duration-300 p-1 -ml-1"
            >
              <Logo className="w-8 h-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <span className="font-bold text-lg text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                Thera<span className="text-brand-light">Square</span>
              </span>
            </Link>
            
            <p className="text-sm font-light text-text-muted leading-normal max-w-sm">
              A modern Electronic Medical Records (EMR) platform designed for mental health professionals across Africa.
            </p>

            <p className="text-xs font-semibold text-brand-light/80 tracking-wide uppercase">
              Built by TheraSquare Solutions
            </p>

            {/* Social Icons row moved to far left */}
            <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
              <a href="https://www.linkedin.com/company/therasquare/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-surface/50 border border-brand/10 flex items-center justify-center text-text-muted hover:bg-brand/10 hover:text-text-primary hover:border-brand/30 active:scale-95 active:bg-brand/20 active:text-brand-light focus:bg-brand/20 focus:text-brand-light focus:border-brand/50 transition-all outline-none">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/therasquare_ke/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-surface/50 border border-brand/10 flex items-center justify-center text-text-muted hover:bg-brand/10 hover:text-text-primary hover:border-brand/30 active:scale-95 active:bg-brand/20 active:text-brand-light focus:bg-brand/20 focus:text-brand-light focus:border-brand/50 transition-all outline-none">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@therasquare" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-surface/50 border border-brand/10 flex items-center justify-center text-text-muted hover:bg-brand/10 hover:text-text-primary hover:border-brand/30 active:scale-95 active:bg-brand/20 active:text-brand-light focus:bg-brand/20 focus:text-brand-light focus:border-brand/50 transition-all outline-none">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@therasquare" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-surface/50 border border-brand/10 flex items-center justify-center text-text-muted hover:bg-brand/10 hover:text-text-primary hover:border-brand/30 active:scale-95 active:bg-brand/20 active:text-brand-light focus:bg-brand/20 focus:text-brand-light focus:border-brand/50 transition-all outline-none">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v8a4 4 0 1 1-4-4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform links */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-light mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-light text-text-muted">
              <li><Link to="/features" className="hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none">Features</Link></li>
              <li><Link to="/for-therapists" className="hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none">For Therapists</Link></li>
              <li><Link to="/pricing" className="hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact info far right */}
          <div className="lg:col-span-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-light mb-6">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm font-light text-text-muted flex flex-col items-center md:items-start">
              <a href="mailto:info@therapy.ke" className="flex items-center gap-2.5 hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none">
                <Mail className="w-4 h-4 text-brand-light shrink-0" />
                <span>info@therapy.ke</span>
              </a>
              <a href="tel:+254722446138" className="flex items-center gap-2.5 hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none">
                <Phone className="w-4 h-4 text-brand-light shrink-0" />
                <span>+254 722 446 138</span>
              </a>
              
              {/* WhatsApp Link inline with other column options */}
              <a 
                href="https://wa.me/254722446138" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-text-primary active:text-brand-light active:scale-95 focus:text-brand-light transition-all outline-none"
                id="footer-whatsapp-link"
              >
                <MessageCircle className="w-4 h-4 text-brand-light shrink-0" />
                <span>+254 722 446 138</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-light shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar: Divider and copyright block */}
        <div className="border-t border-brand/15 pt-8 mt-12 flex flex-col items-center justify-center gap-4 text-xs font-light text-text-muted text-center">
          <p>© {currentYear} TheraSquare. All rights reserved • <Link to="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link> • <Link to="/terms" className="hover:text-text-primary transition-colors">Terms</Link></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
