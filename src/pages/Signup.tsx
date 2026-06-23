import { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@components/ui";
import { ShieldCheck, User, Mail, Building2, Phone, Globe, Fingerprint, CheckCircle2, ShieldAlert, Home, CreditCard, CalendarDays, Sparkles } from "lucide-react";

export const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL Params parsing
  const urlPlan = searchParams.get("plan");
  const urlBilling = searchParams.get("billing");
  const urlPrice = searchParams.get("price");

  const defaultPlanName = urlPlan ? `1 ${urlBilling === 'Annual' ? 'Year' : 'Month'} ${urlPlan} Subscription` : "1 Month Starter Subscription";
  const defaultAmount = urlPrice ? `KES ${Number(urlPrice).toLocaleString()}` : "KES 2,000";

  // Calculate 60 days expiry
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 60);
  const formattedExpiry = expiryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Form State
  const [formData, setFormData] = useState({
    contactPerson: "",
    clinicName: "",
    email: "",
    phone: "",
    subdomain: "",
    initials: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        "form-name": "initialize-workspace",
        ...formData,
        fullSubdomain: `${formData.subdomain}.therapy.ke`,
        planType: defaultPlanName,
        planAmount: defaultAmount,
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
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden text-left">
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
                name="initialize-workspace"
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
                <input type="hidden" name="form-name" value="initialize-workspace" />
                <div className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} />
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

                {/* Read-Only Subscription Section */}
                <div className="bg-[#0b0818] border border-[var(--primary-light)]/20 rounded-2xl p-5 relative overflow-hidden mt-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                  
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--primary-light)]" />
                    Subscription Summary
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block mb-1">Plan Type</span>
                      <span className="text-xs text-white font-medium flex items-center gap-1.5">
                        {defaultPlanName}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block mb-1">Amount</span>
                      <span className="text-xs text-white font-mono flex items-center gap-1.5">
                        <CreditCard className="w-3 h-3 text-gray-400" />
                        {defaultAmount}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block mb-1">Trial Expiry</span>
                      <span className="text-xs text-white font-mono flex items-center gap-1.5">
                        <CalendarDays className="w-3 h-3 text-gray-400" />
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
