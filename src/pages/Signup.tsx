import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { PRICING_PLANS, PlanType, BillingCycle } from "../config/pricingData";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button, Logo, BillingToggle, Select } from "@components/ui";
import { ShieldCheck, User, Mail, Building2, Phone, Globe, Fingerprint, CheckCircle2, ShieldAlert, Home, CreditCard, CalendarDays, Sparkles } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL Params parsing
  const urlPlan = searchParams.get("plan") as PlanType | null;
  const urlBilling = searchParams.get("billing") as BillingCycle | null;

  // Form State
  const [formData, setFormData] = useState({
    contactPerson: "",
    clinicName: "",
    email: "",
    phone: "",
    subdomain: "",
    initials: "",
    planType: (urlPlan && ["Solo", "Professional", "Enterprise"].includes(urlPlan) ? urlPlan : "Solo") as PlanType,
    billingCycle: (urlBilling && ["Monthly", "Annual"].includes(urlBilling) ? urlBilling : "Monthly") as BillingCycle,
    botField: "",
  });

  // Calculate dynamic pricing
  const currentPlanConfig = PRICING_PLANS.find(p => p.name === formData.planType) || PRICING_PLANS[0];
  const calculatedAmount = formData.billingCycle === "Annual" ? currentPlanConfig.priceAnnual : currentPlanConfig.priceMonthly;
  const hiddenPayload = `${formData.planType} Plan - ${formData.billingCycle} Billing - KES ${calculatedAmount.toLocaleString()}/mo (Total: KES ${(formData.billingCycle === "Annual" ? calculatedAmount * 12 : calculatedAmount).toLocaleString()}/${formData.billingCycle === "Annual" ? 'yr' : 'mo'})`;

  // Calculate plan expiry dynamically based on billing cycle + 1 month grace
  const expiryDate = new Date();
  if (formData.billingCycle === "Annual") {
    expiryDate.setMonth(expiryDate.getMonth() + 13);
  } else {
    expiryDate.setMonth(expiryDate.getMonth() + 2);
  }
  const formattedExpiry = expiryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const [initialsManuallyEdited, setInitialsManuallyEdited] = useState(false);
  
  const [errorMsg, setErrorMsg] = useState("");
  const [state, submitToFormspree] = useForm(import.meta.env.VITE_FORMSPREE_SIGNUP);

  // Auto-generate initials
  useEffect(() => {
    if (initialsManuallyEdited) return;

    const sourceText = formData.clinicName.trim() || formData.contactPerson.trim();
    if (sourceText) {
      const generated = sourceText
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase())
        .join("")
        .substring(0, 3);
      
      setFormData(prev => ({ ...prev, initials: generated }));
    } else {
      setFormData(prev => ({ ...prev, initials: "" }));
    }
  }, [formData.clinicName, formData.contactPerson, initialsManuallyEdited]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "subdomain") {
      // Real-time sanitization: lowercase, replace spaces with hyphens, remove non-alphanumeric/hyphen
      const sanitized = value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      setFormData(prev => ({ ...prev, subdomain: sanitized }));
    } else if (name === "initials") {
      setInitialsManuallyEdited(true);
      setFormData(prev => ({ ...prev, initials: value.toUpperCase().substring(0, 3) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic pre-submission validation
    if (!formData.subdomain) {
      setErrorMsg("Please provide a preferred subdomain.");
      return;
    }
    
    // Check for digits only in phone (basic check)
    const phoneDigits = formData.phone.replace(/[^0-9+]/g, '');
    if (phoneDigits.length < 9) {
      setErrorMsg("Please provide a valid phone number.");
      return;
    }

    setErrorMsg("");
    
    // Let Formspree handle the actual submission 
    submitToFormspree(e);
  };

  return (
    <div className="min-h-screen py-12 flex items-center justify-center relative overflow-hidden text-left">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand blur-[120px] opacity-15 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <div className="bg-surface border border-brand/20 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 mb-4 group hover:drop-shadow-[0_0_12px_rgba(99,216,245,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 focus:ring-offset-background rounded-lg active:scale-95 transition-all duration-300 p-1"
            >
              <Logo className="w-10 h-10 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <span className="font-bold text-lg text-white group-hover:text-accent transition-colors duration-300">
                Thera<span className="text-brand-light">Square</span>
              </span>
            </Link>
            {!state.succeeded && (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-2">Initialize Workspace</h2>
                <p className="text-sm text-text-muted font-light max-w-md mx-auto leading-relaxed">
                  Complete the onboarding form below to provision your dedicated clinic environment.
                </p>
              </>
            )}
          </div>

          <AnimatePresence mode="wait">
            {!state.succeeded ? (
              <motion.form 
                key="workspace-form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {errorMsg && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive p-3.5 rounded-xl text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                {state.errors && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive p-3.5 rounded-xl text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Failed to initialize workspace. Please check the fields and try again.</span>
                  </div>
                )}

                {/* Hidden computed fields for Formspree serialization */}
                <input type="hidden" name="fullSubdomain" value={`${formData.subdomain}.therapy.ke`} />
                <input type="hidden" name="subscriptionDetails" value={hiddenPayload} />
                <input type="hidden" name="expiryDate" value={formattedExpiry} />
                <input type="hidden" name="billingCycle" value={formData.billingCycle} />

                <div className="space-y-4">
                  {/* Grid for Contact Person & Clinic Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="contactPerson" className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-light" /> Contact Person
                      </label>
                      <input 
                        id="contactPerson"
                        type="text"
                        name="contactPerson"
                        autoComplete="name"
                        required
                        disabled={state.submitting}
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Dr. Mary Wanjiku"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white/10 hover:border-white/20 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <ValidationError prefix="Contact Person" field="contactPerson" errors={state.errors} className="text-xs text-destructive mt-1" />
                    </div>
                    
                    <div className="flex flex-col">
                      <label htmlFor="clinicName" className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-brand-light" /> Clinic / Practice Name
                      </label>
                      <input 
                        id="clinicName"
                        type="text"
                        name="clinicName"
                        required
                        disabled={state.submitting}
                        value={formData.clinicName}
                        onChange={handleInputChange}
                        placeholder="Harmony Clinic"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white/10 hover:border-white/20 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <ValidationError prefix="Clinic Name" field="clinicName" errors={state.errors} className="text-xs text-destructive mt-1" />
                    </div>
                  </div>

                  {/* Grid for Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-light" /> Professional Email
                      </label>
                      <input 
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        disabled={state.submitting}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="mary@clinic.ke"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white/10 hover:border-white/20 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive mt-1" />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-light" /> Phone Number
                      </label>
                      <input 
                        id="phone"
                        type="tel"
                        name="phone"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        disabled={state.submitting}
                        pattern="^\+?[0-9\s]{9,15}$"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+254 700 000000"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white/10 hover:border-white/20 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-destructive mt-1" />
                    </div>
                  </div>

                  {/* Grid for Subdomain & Initials */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col md:col-span-2">
                      <label htmlFor="subdomain" className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-brand-light" /> Preferred Subdomain
                      </label>
                      <div className={`flex items-stretch rounded-xl border border-white/10 bg-white/5 overflow-hidden focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20 focus-within:bg-white/10 hover:border-white/20 transition-all duration-300 ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <input 
                          id="subdomain"
                          type="text"
                          name="subdomain"
                          required
                          disabled={state.submitting}
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          placeholder="yourname"
                          className="bg-transparent px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none w-full disabled:cursor-not-allowed"
                        />
                        <div className="bg-white/5 px-4 py-3 text-xs text-text-muted border-l border-white/10 flex items-center shrink-0 select-none">
                          .therapy.ke
                        </div>
                      </div>
                      <ValidationError prefix="Subdomain" field="subdomain" errors={state.errors} className="text-xs text-destructive mt-1" />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="initials" className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5 flex items-center gap-1.5">
                        <Fingerprint className="w-3.5 h-3.5 text-brand-light" /> User ID (Initials)
                      </label>
                      <input 
                        id="initials"
                        type="text"
                        name="initials"
                        required
                        disabled={state.submitting}
                        value={formData.initials}
                        onChange={handleInputChange}
                        placeholder="HAP"
                        maxLength={3}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white/10 hover:border-white/20 transition-all duration-300 w-full uppercase font-mono tracking-widest text-center disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <ValidationError prefix="Initials" field="initials" errors={state.errors} className="text-xs text-destructive mt-1" />
                    </div>
                  </div>
                </div>

                {/* Interactive Subscription Section */}
                <div className="bg-surface border border-brand-light/20 rounded-2xl p-5 relative mt-6">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                  </div>
                  
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-light" />
                    Subscription Summary
                    <span className="ml-auto bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold">Includes 30 Days Free!</span>
                  </h3>

                  <BillingToggle 
                    cycle={formData.billingCycle} 
                    onChange={(cycle) => setFormData(p => ({...p, billingCycle: cycle}))} 
                    className="mb-6"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="planType" className="text-[10px] text-text-muted uppercase tracking-wider font-semibold block mb-1">Plan Type</label>
                        <Select
                          id="planType"
                          name="planType"
                          options={PRICING_PLANS.map(plan => ({ label: plan.name, value: plan.name }))}
                          value={formData.planType}
                          onChange={(val) => setFormData(p => ({ ...p, planType: val as PlanType }))}
                          disabled={state.submitting}
                        />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Amount ({formData.billingCycle})</span>
                      </div>
                      <div className="flex items-start gap-1.5 min-h-[32px] pt-0.5">
                        <CreditCard className="w-3 h-3 text-brand-light shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="text-xs text-white font-mono leading-none">
                            KES {calculatedAmount.toLocaleString()} /mo
                          </span>
                          {formData.billingCycle === "Annual" && (
                            <span className="text-[10px] text-text-muted mt-1 font-light opacity-70">
                              (KES {(calculatedAmount * 12).toLocaleString()} payable annually)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold block mb-1 h-[18px] md:h-auto md:mb-1">Plan Expiry</span>
                      <span className="text-xs text-white font-mono flex items-center gap-1.5 h-8">
                        <CalendarDays className="w-3 h-3 text-brand-light" />
                        {formattedExpiry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Block */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-2 mt-4 font-bold uppercase text-xs tracking-wider py-4 shadow-lg shadow-[var(--primary)]/20 cursor-pointer"
                >
                  {state.submitting ? "Provisioning..." : "Request Workspace Setup"}
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </Button>
              </motion.form>
            ) : (
              <motion.div 
                key="successMessage"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-500/5 relative">
                  <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-20 rounded-full animate-pulse" />
                  <CheckCircle2 className="w-10 h-10 relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Workspace Requested!</h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-sm font-light mb-8">
                  Your workspace setup has started. We're provisioning your clinic, subdomain, and subscription. You'll be notified once everything is ready.
                </p>
                
                <Button 
                  variant="secondary" 
                  size="md" 
                  onClick={() => navigate("/")}
                  className="py-3 px-8 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <Home className="w-4 h-4" />
                  Return to Homepage
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-[10px] text-text-muted/60 font-light tracking-widest uppercase">
          &copy; 2026 TheraSquare. All rights reserved &bull;{" "}
          <Link to="/privacy" className="hover:text-brand-light transition-colors duration-200">Privacy</Link>
          {" "}&bull;{" "}
          <Link to="/terms" className="hover:text-brand-light transition-colors duration-200">Terms</Link>
        </div>

      </div>
    </div>
  );
};

export default Signup;
