import { motion } from "motion/react";
import { AnimatedSection } from "@components/wrappers";
import { Button } from "@components/ui";
import { Link } from "react-router-dom";
import { 
  HeartHandshake, Smile, Zap, 
  Sparkle, ShieldCheck, Check, Calendar, Plus, ChevronRight 
} from "lucide-react";

export const ForTherapists = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Eliminate Burnout",
      description: "Automate scheduling, intake routing, and text reminders so you gain up to 10 hours back every single week."
    },
    {
      icon: HeartHandshake,
      title: "Elevate Client Trust",
      description: "Provide clients with an elegant, private self-service portal to book, journal, and pay instantly via M-Pesa and Card."
    },
    {
      icon: ShieldCheck,
      title: "Strict Confidentiality",
      description: "Rest assured your diagnostic records are sealed safely using symmetric medical-grade standard encryption keys."
    }
  ];

  const workflowSteps = [
    {
      time: "08:30 AM",
      title: "Morning Overview",
      desc: "Review daily appointments on your dashboard. Out of three patients, two have checked out prior via M-Pesa."
    },
    {
      time: "11:00 AM",
      title: "In-Session & Transcription",
      desc: "Speak naturally to summarize details after a session. TheraSquare AI dictation auto-fills structured SOAP fields."
    },
    {
      time: "02:00 PM",
      title: "Parent Sync Alerts",
      desc: "For underage clients, the parent receives billing notices and general feedback, while clinical files stay locked and private."
    },
    {
      time: "05:00 PM",
      title: "End of Day Financial Analytics",
      desc: "Review practice revenues instantly reconciled against banks, with automated logs generated for accounting."
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden text-left relative">
      {/* Background Blobs */}
      <div className="absolute top-20 left-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--primary)] blur-[130px] opacity-15 pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-20">
          <span className="label-uppercase mb-3 block">Made for Clinicians</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Designed to Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">Therapists</span> Do What They Do Best
          </h1>
          <p className="body-muted max-w-xl text-sm md:text-base leading-relaxed">
            Practice management shouldn't feel like a second job. TheraSquare removes administration bottlenecks so you can dedicate your focus to healing.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/signup">
              <Button variant="primary">Register Your Account</Button>
            </Link>
          </div>
        </div>

        {/* Benefits Cards Section */}
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#120F22] border border-purple-950/40 p-6 rounded-2xl flex flex-col items-start hover:border-purple-800/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-900/35 flex items-center justify-center text-[var(--primary-light)] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Interactive Text-Image alternating rows */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-2">Unparalleled Simplicity</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Clinical Documentation in Seconds, Not Hours
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed text-sm md:text-base">
                Our templates have been built side-by-side with local psychologists to follow local and international mental health recording templates. Intake assessments, diagnostic questionnaires, and discharge charts adapt instantly to your specialty.
              </p>
              
              <div className="space-y-3 font-light text-xs text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="bg-emerald-500/10 p-0.5 rounded text-emerald-400 border border-emerald-500/20"><Check className="w-3.5 h-3.5" /></span>
                  <span>Fully customized for Psychiatry, Therapy, & Counseling</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-emerald-500/10 p-0.5 rounded text-emerald-400 border border-emerald-500/20"><Check className="w-3.5 h-3.5" /></span>
                  <span>Auto-saved state ensures you never lose a draft</span>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="lg:col-span-6 bg-[#0c0a15] p-6 rounded-2xl border border-purple-950/40">
              <div className="flex items-center justify-between border-b border-purple-950/40 pb-3 mb-4 text-xs font-bold text-white">
                <span>NEW SOAP RECORD SHEET</span>
                <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">Auto-Saving</span>
              </div>
              <div className="space-y-3 font-mono text-[11px] text-gray-400 text-left">
                <div>
                  <label className="text-purple-300 uppercase tracking-widest text-[9px] font-bold block mb-1">Subjective (Client feedback on symptoms)</label>
                  <p className="bg-[#120F22] p-2.5 rounded border border-purple-950/50">Client reports sleeping better (average 6 hours) but continues to experience intrusive worrying trends before meetings.</p>
                </div>
                <div>
                  <label className="text-purple-300 uppercase tracking-widest text-[9px] font-bold block mb-1">Objective (Behavior observed)</label>
                  <p className="bg-[#120F22] p-2.5 rounded border border-purple-950/50">Calm demeanor. Maintained steady eye contact. Paced breathing exercised during stress-point reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Workflow Timeline steps */}
        <AnimatedSection>
          <div className="bg-[#120F22] border border-purple-950/45 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-12">
              A Day in the Life on TheraSquare
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col text-left relative">
                  <div className="text-xs font-mono font-bold text-[var(--primary-light)] mb-2 px-2 py-1 rounded bg-purple-950/30 w-fit">
                    {step.time}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-normal font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default ForTherapists;
