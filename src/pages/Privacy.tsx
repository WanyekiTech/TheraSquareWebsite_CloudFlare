import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, MapPin, Phone, Lock } from "lucide-react";

export const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Therasquare Solutions";
  }, []);

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden text-left bg-[#06040D]">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--primary)] blur-[120px] opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="mb-12 border-b border-purple-950/40 pb-8 text-center md:text-left">
          <span className="label-uppercase mb-3 block text-[var(--primary-light)]">Legal Documentation</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            Last Updated: June 23, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-gray-300 text-sm md:text-base leading-relaxed font-light space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Therasquare Solutions ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website, utilize our clinical workspace, or interact with our services.
            </p>
            <p className="mt-2">
              Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Service, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Personal Data:</strong> Name, postal address, e-mail address, telephone number, and billing information.</li>
              <li><strong>Clinical Data:</strong> As a B2B healthcare software provider, we process patient and clinical data on behalf of our client clinics strictly under data processing agreements and in compliance with healthcare data protection standards.</li>
              <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our Service, and usage details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>To present our Service and its contents to you securely.</li>
              <li>To provide you with notices about your account, including expiration and billing notices.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To ensure clinical compliance, HIPAA/Data Protection standards, and platform security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security & Retention</h2>
            <p>
              We have implemented robust encryption, access controls, and administrative measures designed to secure your personal and clinical information from accidental loss and from unauthorized access, use, alteration, and disclosure.
            </p>
            <p className="mt-2">
              We retain your information only for as long as is necessary for the purposes set out in this Privacy Policy, and to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. User Rights</h2>
            <p>
              Depending on your location and applicable data protection laws, you may have the right to request access to, correction of, or deletion of your personal data. You may also have the right to object to or restrict certain processing of your data. Please contact us using the details below to exercise these rights.
            </p>
          </section>

          <section className="bg-[#120F22] border border-purple-950/50 p-6 md:p-8 rounded-2xl mt-12">
            <h2 className="text-lg font-bold text-white mb-4">Contact Information</h2>
            <p className="mb-4">
              To ask questions or comment about this privacy policy and our privacy practices, please contact our Data Protection Officer:
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

export default Privacy;
