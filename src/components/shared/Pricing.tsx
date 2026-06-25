import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button, BillingToggle, BillingCycle } from "@components/ui";
import { Check, Info, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "../../config/pricingData";

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('Monthly');

  const plans = PRICING_PLANS;

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-background z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-uppercase mb-3 block">Plans & Pricing</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">Pricing</span>
          </h2>
          <p className="body-muted max-w-lg mx-auto">
            First month free with subscription. No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Billing Period Toggle */}
        <BillingToggle cycle={billingCycle} onChange={setBillingCycle} />

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-6">
          {plans.map((plan, index) => {
            const isAnnual = billingCycle === 'Annual';
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            
            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-[var(--radius-card)] p-8 text-left flex flex-col justify-between ${
                  plan.recommended
                    ? "md:scale-105 shadow-2xl z-20 border border-transparent [background:linear-gradient(var(--color-surface),var(--color-surface))_padding-box,linear-gradient(to_bottom_right,var(--color-brand),#10b981)_border-box]"
                    : "bg-surface/75 border border-brand/20 z-10"
                }`}
              >
                {/* Center plan decoration */}
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-[var(--shadow-glow)] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Title and tagline */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-text-muted min-h-[32px] font-light leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-brand/20">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-mono text-text-muted font-semibold">KES</span>
                      <span className="text-4xl font-extrabold text-white">
                        {price.toLocaleString()}
                      </span>
                      <span className="text-xs font-mono text-text-muted font-semibold">/mo</span>
                    </div>
                    {isAnnual ? (
                      <div className="text-[10px] text-text-muted mt-1 font-light opacity-70">
                        (KES {(price * 12).toLocaleString()} payable annually)
                      </div>
                    ) : (
                      <div className="h-4 mt-1" aria-hidden="true" />
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs leading-normal">
                        <span className="bg-emerald-500/10 p-0.5 rounded text-emerald-400 border border-emerald-500/20 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-text-muted font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/signup?plan=${encodeURIComponent(plan.name)}&billing=${isAnnual ? 'Annual' : 'Monthly'}&price=${price}`}
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
