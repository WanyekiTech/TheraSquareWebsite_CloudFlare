import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | Therasquare Solutions";
  }, []);

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden text-left bg-[#06040D]">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--primary)] blur-[120px] opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="mb-12 border-b border-purple-950/40 pb-8 text-center md:text-left">
          <span className="label-uppercase mb-3 block text-[var(--primary-light)]">Legal Documentation</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Last Updated: June 23, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-gray-300 text-sm md:text-base leading-relaxed font-light space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Therasquare Solutions ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Therasquare clinical platform, website, and associated services (collectively, the "Service").
            </p>
            <p className="mt-2">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Account Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must provide accurate and complete registration information when initializing your workspace.</li>
              <li>You are entirely responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account or workspace.</li>
              <li>Therasquare Solutions reserves the right to suspend or terminate accounts that violate our security protocols.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Subscription and Billing</h2>
            <p>
              By selecting a premium or paid subscription plan, you agree to pay Therasquare Solutions the monthly or annual subscription fees indicated for that service. Payments will be charged on a pre-pay basis on the day you sign up for an upgrade and will cover the use of that service for a monthly or annual subscription period as indicated.
            </p>
            <p className="mt-2">
              Subscription fees are strictly non-refundable outside of explicit service-level agreement breaches.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. User Conduct & Compliance</h2>
            <p>
              As a clinical professional utilizing our platform, you are solely responsible for ensuring that your use of the Service complies with all applicable local, state, national, and international healthcare laws, including data privacy and patient confidentiality standards.
            </p>
            <p className="mt-2">
              You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without the express written permission of Therasquare Solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              In no event will Therasquare Solutions, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data.
            </p>
          </section>

          <section className="bg-[#120F22] border border-purple-950/50 p-6 md:p-8 rounded-2xl mt-12">
            <h2 className="text-lg font-bold text-white mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding these Terms of Service, please contact our legal and support team:
            </p>
            <div className="space-y-3 font-mono text-sm">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center border border-[var(--primary)]/30">
                  <Mail className="w-4 h-4 text-[var(--primary-light)]" />
                </span>
                <a href="mailto:info@therapy.ke" className="hover:text-white transition-colors">info@therapy.ke</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center border border-[var(--primary)]/30">
                  <Phone className="w-4 h-4 text-[var(--primary-light)]" />
                </span>
                <a href="tel:0722446138" className="hover:text-white transition-colors">0722446138</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center border border-[var(--primary)]/30">
                  <MapPin className="w-4 h-4 text-[var(--primary-light)]" />
                </span>
                <span>Therasquare Solutions</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
