import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Check, Info, Sparkles } from "lucide-react";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      tagline: "Best for solo therapists & small practices",
      priceMonthly: 2000,
      priceAnnual: 1600, // 20% savings
      features: [
        "Up to 500 clients",
        "1 therapist account",
        "50 AI notes/month",
        "Session booking & calendar",
        "M-Pesa & card payments",
        "2FA security",
        "Custom subdomain"
      ],
      cta: "Start Subscription",
      recommended: false
    },
    {
      name: "Professional",
      tagline: "Best for growing clinics & group practices",
      priceMonthly: 3000,
      priceAnnual: 2400,
      features: [
        "Unlimited clients",
        "3+ Therapist accounts",
        "2 Front office users",
        "200+ AI notes/month",
        "Session booking & calendar",
        "All core features included",
        "Custom subdomain",
        "Priority support"
      ],
      cta: "Start Subscription",
      recommended: true
    },
    {
      name: "Enterprise",
      tagline: "Best for medical centers & clinics",
      priceMonthly: 8000,
      priceAnnual: 6400,
      features: [
        "Unlimited clients",
        "10+ Therapist accounts",
        "3+ Front office users",
        "500+ AI notes/month",
        "Session booking & calendar",
        "Everything in professional",
        "Custom domain/subdomain setup",
        "Dedicated account manager",
        "Custom scaling & usage",
        "Compliance support"
      ],
      cta: "Contact Sales",
      recommended: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#090712] border-t border-purple-950/20 z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-uppercase mb-3 block">Plans & Pricing</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">Pricing</span>
          </h2>
          <p className="body-muted max-w-lg mx-auto">
            First month free with subscription. No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16 select-none">
          <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-purple-950 p-1 flex items-center border border-purple-800/20 relative cursor-pointer"
          >
            <motion.div
              layout
              className="w-4 h-4 rounded-full bg-[var(--primary)]"
              animate={{ x: isAnnual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? "text-[var(--primary-light)]" : "text-gray-400"}`}>
            Annual
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            
            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-[var(--radius-card)] p-8 text-left flex flex-col justify-between ${
                  plan.recommended
                    ? "bg-[#120F24] border-2 border-[var(--primary)] md:scale-104 shadow-[var(--shadow-glow)] z-20"
                    : "bg-[#110e21]/75 border border-purple-950/40 z-10"
                }`}
              >
                {/* Center plan decoration */}
                {plan.recommended && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--primary)] text-white text-[10px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Title and tagline */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-gray-400 min-h-[32px] font-light leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-purple-950/40">
                    <span className="text-xs font-mono text-gray-500 font-semibold">KES</span>
                    <span className="text-4xl font-extrabold text-white">
                      {price.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-gray-500 font-semibold">/mo</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs leading-normal">
                        <span className="bg-emerald-500/10 p-0.5 rounded text-emerald-400 border border-emerald-500/20 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-gray-300 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className="w-full mt-4 block"
                >
                  <Button
                    variant={plan.recommended ? "primary" : "secondary"}
                    size="md"
                    className="w-full text-xs py-3"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
