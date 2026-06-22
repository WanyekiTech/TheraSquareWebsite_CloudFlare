import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "@components/wrappers";
import { PricingSection } from "@components/shared";
import { Button } from "@components/ui";
import { Check, Minus, Plus, Sparkles, HelpCircle } from "lucide-react";

export const Pricing = () => {
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setCollapsedCategories(prev => {
      const idx = comparisonData.findIndex(item => item.category === category);
      const isCurrentlyCollapsed = prev[category] ?? idx > 0;
      return {
        ...prev,
        [category]: !isCurrentlyCollapsed
      };
    });
  };

  const comparisonData = [
    {
      category: "Practice Administration & Scale",
      features: [
        { name: "Active Client Caseload", starter: "Up to 500", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "Active Therapist Accounts", starter: "1 User", professional: "3+ Users", enterprise: "10+ Users" },
        { name: "Administrative Staff Accounts", starter: "1 User", professional: "2+ Users", enterprise: "3+ Users" }
      ]
    },
    {
      category: "Practice Operations",
      features: [
        { name: "Online Appointment Booking", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Therapist Calendar Management", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Reminder Alerts (SMS, Email & In-App Notifications)", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Reports & Analytics", starter: "Advanced", professional: "Advanced", enterprise: "Advanced + Custom Reports" }
      ]
    },
    {
      category: "Clinical Documentation & Patient Care",
      features: [
        { name: "Digital Forms & Compliance (Consent, Intake & Terms)", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Structured Note Templates (SOAP, BIRP, DAP...)", starter: "Unlimited", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "AI Voice-to-Clinical Notes", starter: "50 Notes / Month", professional: "200+ Notes / Month", enterprise: "500+ Notes / Month" },
        { name: "Psychometric Assessment Tools", starter: "Unlimited", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "Private Journal", starter: "Full Access", professional: "Full Access", enterprise: "Full Access" },
        { name: "Secure In-App Chat", starter: "Full Access", professional: "Full Access", enterprise: "Full Access" },
        { name: "Daily Mood Tracker", starter: "Full Access", professional: "Full Access", enterprise: "Full Access" },
        { name: "Underage Client Profiles", starter: "Included", professional: "Included", enterprise: "Included" }
      ]
    },
    {
      category: "Payments & Billing",
      features: [
        { name: "Invoicing & Receipting", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Mobile Money Payments (M-Pesa, Airtel Money)", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Card Payments (Visa, Mastercard, Amex)", starter: "Included", professional: "Included", enterprise: "Included" }
      ]
    },
    {
      category: "Platform & Branding",
      features: [
        { name: "Branding", starter: "Basic", professional: "Basic", enterprise: "White-label" },
        { name: "Clinic portal", starter: "yourclinic.therapy.ke", professional: "yourclinic.therapy.ke", enterprise: "www.yourclinic.com" },
        { name: "Landing Page (clinic profile / public page)", starter: "Customizable page", professional: "Customizable page", enterprise: "fully branded / SEO optimized" }
      ]
    },
    {
      category: "Integrations",
      features: [
        { name: "Messaging (Email, WhatsApp, SMS)", starter: "Basic", professional: "Basic", enterprise: "Full + automation" },
        { name: "Calendar Sync", starter: "—", professional: "—", enterprise: "Multi-provider" },
        { name: "Video Conferencing", starter: "Google Meet", professional: "Google Meet", enterprise: "Multi-provider" }
      ]
    },
    {
      category: "Security & Governance",
      features: [
        { name: "End-to-end encryption", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Encrypted client records & credentials", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Dedicated clinic data isolation", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Two-Factor Authentication (2FA)", starter: "Included", professional: "Included", enterprise: "Included" },
        { name: "Success & Support", starter: "Standard Support", professional: "Priority Support", enterprise: "Dedicated Success Manager + Training" }
      ]
    }
  ];

  return (
    <div className="pt-12 pb-20">
      {/* Same pricing cards + toggle Monthly/Annual is embedded here */}
      <PricingSection />

      {/* Feature Comparison Table Section */}
      <section className="py-12 bg-transparent relative z-10 text-left">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Detailed Plan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-purple-400">Comparison</span>
            </h2>
            <p className="body-muted max-w-lg mx-auto text-xs md:text-sm">
              Review fine-grained details to decide which operating tier matches your mental health practice requirements.
            </p>
          </div>

          {/* Table container wrapping */}
          <AnimatedSection>
            <div className="bg-[#120F22] border border-purple-950/40 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-purple-950/40 bg-[#0c0919] text-xs font-bold uppercase tracking-wider text-purple-300">
                      <th className="p-6 w-[40%]">PLAN FEATURES</th>
                      <th className="p-6 text-center w-[20%]">STARTER</th>
                      <th className="p-6 text-center text-[var(--primary-light)] w-[20%]">PROFESSIONAL</th>
                      <th className="p-6 text-center w-[20%]">ENTERPRISE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-950/20 text-xs sm:text-sm">
                    {comparisonData.map((group, groupIdx) => {
                      const isCollapsed = collapsedCategories[group.category] ?? groupIdx > 0;
                      return (
                        <React.Fragment key={groupIdx}>
                          {/* Category Row header divider */}
                          <tr 
                            onClick={() => toggleCategory(group.category)}
                            className="bg-purple-950/15 cursor-pointer hover:bg-purple-950/25 transition-colors select-none"
                          >
                            <td colSpan={4} className="p-4">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-white uppercase text-[10px] tracking-widest text-[#A78BFA]">
                                  {group.category}
                                </span>
                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-950/30 border border-purple-500/10 text-[#A78BFA]">
                                  {isCollapsed ? (
                                    <Plus className="w-3 h-3" />
                                  ) : (
                                    <Minus className="w-3 h-3" />
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                          {group.features.map((feature, idx) => (
                            <motion.tr
                              key={idx}
                              initial={false}
                              animate={isCollapsed ? { 
                                height: 0, 
                                opacity: 0
                              } : { 
                                height: "auto", 
                                opacity: 1
                              }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className={`hover:bg-purple-950/10 border-b border-purple-950/20 overflow-hidden transition-all duration-300 ${isCollapsed ? 'border-none' : ''}`}
                            >
                              <td className="p-0 font-normal text-gray-200">
                                <motion.div
                                  initial={false}
                                  animate={isCollapsed ? { height: 0, opacity: 0, paddingBottom: 0, paddingTop: 0 } : { height: "auto", opacity: 1, paddingBottom: 20, paddingTop: 20 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="px-5 overflow-hidden"
                                >
                                  {feature.name}
                                </motion.div>
                              </td>
                              <td className="p-0 text-center text-gray-400 font-light">
                                <motion.div
                                  initial={false}
                                  animate={isCollapsed ? { height: 0, opacity: 0, paddingBottom: 0, paddingTop: 0 } : { height: "auto", opacity: 1, paddingBottom: 20, paddingTop: 20 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="px-5 overflow-hidden flex items-center justify-center"
                                >
                                  {feature.starter === "Included" ? (
                                    <span className="inline-block bg-purple-500/10 p-1 rounded text-purple-400 border border-purple-500/15"><Check className="w-3.5 h-3.5 mx-auto" /></span>
                                  ) : feature.starter === "—" ? (
                                    <Minus className="w-4 h-4 mx-auto text-gray-700" />
                                  ) : (
                                    feature.starter
                                  )}
                                </motion.div>
                              </td>
                              <td className="p-0 text-center text-[var(--primary-light)] font-medium bg-purple-950/5">
                                <motion.div
                                  initial={false}
                                  animate={isCollapsed ? { height: 0, opacity: 0, paddingBottom: 0, paddingTop: 0 } : { height: "auto", opacity: 1, paddingBottom: 20, paddingTop: 20 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="px-5 overflow-hidden flex items-center justify-center"
                                >
                                  {feature.professional === "Included" ? (
                                    <span className="inline-block bg-purple-500/10 p-1 rounded text-purple-400 border border-purple-500/15"><Check className="w-3.5 h-3.5 mx-auto" /></span>
                                  ) : (
                                    feature.professional
                                  )}
                                </motion.div>
                              </td>
                              <td className="p-0 text-center text-gray-400 font-light">
                                <motion.div
                                  initial={false}
                                  animate={isCollapsed ? { height: 0, opacity: 0, paddingBottom: 0, paddingTop: 0 } : { height: "auto", opacity: 1, paddingBottom: 20, paddingTop: 20 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="px-5 overflow-hidden flex items-center justify-center"
                                >
                                  {feature.enterprise === "Included" ? (
                                    <span className="inline-block bg-purple-500/10 p-1 rounded text-purple-400 border border-purple-500/15"><Check className="w-3.5 h-3.5 mx-auto" /></span>
                                  ) : (
                                    feature.enterprise
                                  )}
                                </motion.div>
                              </td>
                            </motion.tr>
                          ))}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 bg-gradient-to-br from-[#16122d] to-[#110e21] border border-purple-950/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.03),transparent_60%)] pointer-events-none"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-[10px] md:text-xs font-semibold text-[var(--primary-light)] border border-purple-500/15 uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  GET 30-DAY FREE ACCESS
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Ready to transform your practice?
                </h3>
                
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-8 max-w-lg mx-auto">
                  Get full access to AI voice-to-clinical notes, custom templates, a secure client portal, and end-to-end practice automation. Request an account in less than a minute.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/signup" className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold">
                      Start Your Free Month
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto font-medium text-gray-300">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    No credit card required
                  </span>
                  <span className="text-gray-700 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Simple onboarding process
                  </span>
                  <span className="text-gray-700 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Cancel anytime
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
        </div>
      </section>
    </div>
  );
};


export default Pricing;
