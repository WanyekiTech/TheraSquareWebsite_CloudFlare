import { Link } from "react-router-dom";
import { MessageSquare, MessageCircle, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@components/ui";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040309] pt-20 pb-8 border-t border-purple-900/15 relative z-10 text-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & details with Socials */}
          <div className="lg:col-span-5 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-lg text-white tracking-tight">
                Thera<span className="text-[var(--primary-light)]">Square</span>
              </span>
            </Link>
            
            <p className="text-sm font-light text-gray-400 leading-normal max-w-sm">
              A modern Electronic Medical Records (EMR) platform designed for mental health professionals across Africa.
            </p>

            <p className="text-xs font-semibold text-purple-400/80 tracking-wide uppercase">
              Built by TheraSquare Solutions
            </p>

            {/* Social Icons row moved to far left */}
            <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
              <a href="https://www.linkedin.com/company/therasquare/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/therasquare_ke/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@therasquare" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@therasquare" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v8a4 4 0 1 1-4-4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform links */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/for-therapists" className="hover:text-white transition-colors">For Therapists</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact info far right */}
          <div className="lg:col-span-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] mb-6">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm font-light text-gray-400 flex flex-col items-center md:items-start">
              <a href="mailto:info@therapy.ke" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>info@therapy.ke</span>
              </a>
              <a href="tel:+254722446138" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+254 722 446 138</span>
              </a>
              
              {/* WhatsApp Link inline with other column options */}
              <a 
                href="https://wa.me/254722446138" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
                id="footer-whatsapp-link"
              >
                <MessageCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+254 722 446 138</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar: Divider and copyright block */}
        <div className="border-t border-purple-900/15 pt-8 mt-12 flex flex-col items-center justify-center gap-4 text-xs font-light text-gray-500 text-center">
          <p>© {currentYear} TheraSquare. All rights reserved • <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link> • <Link to="/terms" className="hover:text-white transition-colors">Terms</Link></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
