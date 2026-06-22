import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@components/ui";
import { ShieldCheck, User, Mail, Lock, Sparkles } from "lucide-react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please verify.");
      return;
    }

    setIsSigningUp(true);
    setErrorMsg("");

    // Simulate signup
    setTimeout(() => {
      setIsSigningUp(false);
      // Let's redirect to Home for demo
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden text-left">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[var(--primary)] blur-[120px] opacity-15 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-md relative z-10">
        <div className="bg-[#120F22] border border-purple-950/50 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-6">
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white font-black text-sm">T</span>
              </div>
              <span className="font-bold text-base text-white">
                Thera<span className="text-[var(--primary-light)]">Square</span>
              </span>
            </Link>
            <h2 className="text-xl font-bold text-white mb-2">Initialize Workspace</h2>
            <p className="text-xs text-gray-400 font-light leading-normal">
              Get clinical access and set up your 14-day free trial.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Owner clinicians Name */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" /> Full Clinician Name
              </label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Mary Wanjiku"
                className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" /> Professional Email
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mary@clinic.ke"
                className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-purple-400" /> Secure Password
              </label>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-purple-400" /> Confirm Security Password
              </label>
              <input 
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            {/* Submit Block */}
            <Button
              variant="primary"
              size="md"
              disabled={isSigningUp}
              className="w-full flex items-center justify-center gap-2 mt-2 font-bold uppercase text-xs tracking-wider py-4 cursor-pointer"
            >
              {isSigningUp ? "Deploying HIPAA vault..." : "Initiate Workspace"}
              <ShieldCheck className="w-4 h-4 text-white" />
            </Button>

            {/* Link out to login */}
            <div className="text-center pt-4 border-t border-purple-950/40 text-[11px] text-gray-400">
              Already have a practice?{" "}
              <Link to="/login" className="text-[var(--primary-light)] hover:text-white font-bold transition-colors">
                Secure Login
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Signup;
