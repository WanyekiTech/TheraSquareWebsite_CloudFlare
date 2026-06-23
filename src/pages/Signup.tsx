import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { PRICING_PLANS, PlanType, BillingCycle } from "../config/pricingData";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@components/ui";
import { ShieldCheck, User, Mail, Building2, Phone, Globe, Fingerprint, CheckCircle2, ShieldAlert, Home, CreditCard, CalendarDays, Sparkles } from "lucide-react";

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
    planType: (urlPlan && ["Starter", "Professional", "Enterprise"].includes(urlPlan) ? urlPlan : "Starter") as PlanType,
    billingCycle: (urlBilling && ["Monthly", "Annual"].includes(urlBilling) ? urlBilling : "Monthly") as BillingCycle,
    botField: "",
  });

  // Calculate dynamic pricing
  const currentPlanConfig = PRICING_PLANS.find(p => p.name === formData.planType) || PRICING_PLANS[0];
  const calculatedAmount = formData.billingCycle === "Annual" ? currentPlanConfig.priceAnnual : currentPlanConfig.priceMonthly;
  const displayAmount = `KES ${calculatedAmount.toLocaleString()} /mo ${formData.billingCycle === "Annual" ? "(Billed Annually)" : ""}`;
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: FormEvent) => {
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

    setIsSubmitting(true);
    setErrorMsg("");

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "signup",
        "bot-field": formData.botField,
        ...formData,
        fullSubdomain: `${formData.subdomain}.therapy.ke`,
        subscriptionDetails: hiddenPayload,
        expiryDate: formattedExpiry
      })
    })
      .then((res) => {
        if (res.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Submission Error:", error);
        setErrorMsg("Failed to initialize workspace. Please try again or contact support.");
      });
  };

  return (
    <div className="min-h-screen py-12 flex items-center justify-center relative overflow-hidden text-left">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--primary)] blur-[120px] opacity-15 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <div className="bg-[#120F22] border border-purple-950/50 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">T</span>
              </div>
              <span className="font-bold text-lg text-white">
                Thera<span className="text-[var(--primary-light)]">Square</span>
              </span>
            </Link>
            {!isSubmitted && (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-2">Initialize Workspace</h2>
                <p className="text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed">
                  Complete the onboarding form below to provision your dedicated clinic environment.
                </p>
              </>
            )}
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="workspace-form"
                name="signup"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="signup" />
                <div className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} onChange={(e) => setFormData(p => ({...p, botField: e.target.value}))} value={formData.botField} />
                  </label>
                </div>

                <div className="space-y-4">
                  {/* Grid for Contact Person & Clinic Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-purple-400" /> Contact Person
                      </label>
                      <input 
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Dr. Mary Wanjiku"
                        className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors w-full"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-purple-400" /> Clinic / Practice Name
                      </label>
                      <input 
                        type="text"
                        name="clinicName"
                        required
                        value={formData.clinicName}
                        onChange={handleInputChange}
                        placeholder="Harmony Clinic"
                        className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors w-full"
                      />
                    </div>
                  </div>

                  {/* Grid for Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-purple-400" /> Professional Email
                      </label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="mary@clinic.ke"
                        className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors w-full"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-purple-400" /> Phone Number
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+254 700 000000"
                        className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors w-full"
                      />
                    </div>
                  </div>

                  {/* Grid for Subdomain & Initials */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-purple-400" /> Preferred Subdomain
                      </label>
                      <div className="flex items-stretch rounded-xl border border-purple-950/70 bg-[#0b0818] overflow-hidden focus-within:border-[var(--primary)] transition-colors">
                        <input 
                          type="text"
                          name="subdomain"
                          required
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          placeholder="yourname"
                          className="bg-transparent px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none w-full"
                        />
                        <div className="bg-purple-950/30 px-4 py-3 text-xs text-gray-400 border-l border-purple-950/70 flex items-center shrink-0 select-none">
                          .therapy.ke
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                        <Fingerprint className="w-3.5 h-3.5 text-purple-400" /> User ID (Initials)
                      </label>
                      <input 
                        type="text"
                        name="initials"
                        required
                        value={formData.initials}
                        onChange={handleInputChange}
                        placeholder="HAP"
                        maxLength={3}
                        className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors w-full uppercase font-mono tracking-widest text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Subscription Section */}
                <div className="bg-[#0b0818] border border-[var(--primary-light)]/20 rounded-2xl p-5 relative overflow-hidden mt-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                  
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--primary-light)]" />
                    Subscription Summary
                    <span className="ml-auto bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold">Includes 30 Days Free!</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block mb-1">Plan Type</span>
                      <div className="relative">
                        <select
                          name="planType"
                          value={formData.planType}
                          onChange={handleInputChange}
                          className="bg-[#120F22] border border-purple-950/70 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--primary)] transition-colors w-full appearance-none cursor-pointer"
                        >
                          {PRICING_PLANS.map(plan => (
                            <option key={plan.name} value={plan.name}>{plan.name}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Amount</span>
                        <div className="flex bg-[#120F22] rounded overflow-hidden border border-purple-950/50">
                          <button type="button" onClick={() => setFormData(p => ({...p, billingCycle: 'Monthly'}))} className={`px-2 py-0.5 text-[9px] font-bold transition-colors ${formData.billingCycle === 'Monthly' ? 'bg-[var(--primary)] text-white' : 'text-gray-500 hover:text-gray-300'}`}>MO</button>
                          <button type="button" onClick={() => setFormData(p => ({...p, billingCycle: 'Annual'}))} className={`px-2 py-0.5 text-[9px] font-bold transition-colors ${formData.billingCycle === 'Annual' ? 'bg-[var(--primary)] text-white' : 'text-gray-500 hover:text-gray-300'}`}>YR</button>
                        </div>
                      </div>
                      <span className="text-xs text-white font-mono flex items-center gap-1.5 h-8">
                        <CreditCard className="w-3 h-3 text-[var(--primary-light)]" />
                        {displayAmount}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block mb-1 h-[18px] md:h-auto md:mb-1">Plan Expiry</span>
                      <span className="text-xs text-white font-mono flex items-center gap-1.5 h-8">
                        <CalendarDays className="w-3 h-3 text-[var(--primary-light)]" />
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
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 mt-4 font-bold uppercase text-xs tracking-wider py-4 shadow-lg shadow-[var(--primary)]/20 cursor-pointer"
                >
                  {isSubmitting ? "Provisioning..." : "Request Workspace Setup"}
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
                <p className="text-sm text-gray-300 leading-relaxed max-w-sm font-light mb-8">
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
      </div>
    </div>
  );
};

export default Signup;
