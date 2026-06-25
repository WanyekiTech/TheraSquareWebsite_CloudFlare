import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "@components/wrappers";
import { Button } from "@components/ui";
import { Phone, Mail, MapPin, Send, MessageSquareHeart, CheckCircle2, ShieldAlert } from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMsg("");
    
    // Helper function to encode form fields as x-www-form-urlencoded
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    // Netlify Forms requires standard POST requests to the home directory with properly serialized body
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact", 
        "bot-field": botField,
        name, 
        email, 
        message 
      })
    })
      .then((res) => {
        if (res.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          throw new Error("Form submission returned a non-ok response status");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Netlify Form Submission Error:", error);
        setErrorMsg("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 overflow-hidden text-left relative">
      {/* Background Blobs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand blur-[120px] opacity-15 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="label-uppercase mb-3 block">Get InTouch</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Let's Modernize <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-accent">Your Clinic</span>
              </h1>
              <p className="body-muted max-w-md text-sm leading-relaxed font-light">
                Have questions about custom migrations, HIPAA compliance, or pricing tiers? Our Nairobi-based support team is here to help you step-by-step.
              </p>
            </div>

            {/* Direct Contact indicators */}
            <div className="space-y-6 pt-4 font-light text-sm text-text-muted">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/20 flex items-center justify-center text-brand-light shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Direct Call Support</h4>
                  <a href="tel:+254722446138" className="hover:text-white transition-colors block text-text-muted font-mono">+254 722 446 138</a>
                  <p className="text-[10px] text-text-muted mt-0.5">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/20 flex items-center justify-center text-brand-light shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Email Inquiries</h4>
                  <a href="mailto:info@therapy.ke" className="hover:text-white transition-colors block text-text-muted font-mono">info@therapy.ke</a>
                  <p className="text-[10px] text-text-muted mt-0.5">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/20 flex items-center justify-center text-brand-light shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">Headquarters</h4>
                  <p className="text-text-muted block font-sans">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="bg-surface border border-brand/20 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="contactForm"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <MessageSquareHeart className="w-5 h-5 text-brand-light" />
                        Send an Inquiry Message
                      </h2>

                      {errorMsg && (
                        <div className="bg-destructive/10 border border-destructive/20 text-destructive p-3 rounded-xl text-xs flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-destructive shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      {/* Hidden form name identifier for Netlify parser */}
                      <input type="hidden" name="form-name" value="contact" />

                      {/* Hidden honeypot field for bot protection */}
                      <div className="hidden" aria-hidden="true">
                        <label>
                          Don't fill this out if you're human:{" "}
                          <input name="bot-field" tabIndex={-1} onChange={(e) => setBotField(e.target.value)} value={botField} />
                        </label>
                      </div>

                      {/* Name */}
                      <div className="text-left flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                          Your Full Name
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Dr. Jane Doe / Clinic Name"
                          className="bg-surface border border-brand/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="text-left flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@clinic.ke"
                          className="bg-surface border border-brand/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div className="text-left flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                          Inquiry Details & Clinic Requirements
                        </label>
                        <textarea 
                          rows={4}
                          name="message"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your practice, size, and which features you want to migrate or trial..."
                          className="bg-surface border border-brand/30 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors resize-none leading-relaxed"
                        />
                      </div>

                      {/* Submit */}
                      <Button 
                        type="submit"
                        variant="primary" 
                        size="md" 
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 mt-4 font-bold uppercase tracking-wider text-xs py-4"
                      >
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                        <Send className="w-3.5 h-3.5" />
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
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Inquiry Sent Successfully</h3>
                      <p className="text-xs text-text-muted leading-relaxed max-w-sm font-light mb-8">
                        Thank you for reaching out to TheraSquare! We have flagged your request and our clinical onboarding specialists will email you back within 2 hours.
                      </p>
                      
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => setIsSubmitted(false)}
                        className="py-3 px-8 text-xs font-semibold uppercase tracking-wider"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
