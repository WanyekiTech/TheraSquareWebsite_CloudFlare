import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@components/ui";
import { LogIn, Key, Mail, ShieldAlert } from "lucide-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoggingIn(true);
    setErrorMsg("");

    // Simulate login
    setTimeout(() => {
      setIsLoggingIn(false);
      // Let's redirect to Home for demo
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden text-left">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--primary)] blur-[120px] opacity-15 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-md relative z-10">
        <div className="bg-[#120F22] border border-purple-950/50 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* header text */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white font-black text-sm">T</span>
              </div>
              <span className="font-bold text-base text-white">
                Thera<span className="text-[var(--primary-light)]">Square</span>
              </span>
            </Link>
            <h2 className="text-xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-xs text-gray-400 font-light leading-normal">
              Sign in to secure your mental health practice database.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" /> Professional Email
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@clinic.ke"
                className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col text-left">
              <div className="flex items-center justify-between mb-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-purple-400" /> Password
                </label>
                <a href="#" className="text-[10px] font-semibold text-purple-400 hover:text-white transition-colors">
                  Forgot Password?
                </a>
              </div>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#0b0818] border border-purple-950/70 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            {/* Submit Block */}
            <Button
              variant="primary"
              size="md"
              disabled={isLoggingIn}
              className="w-full flex items-center justify-center gap-2 mt-2 font-bold uppercase text-xs tracking-wider py-4 cursor-pointer"
            >
              {isLoggingIn ? "Authorizing Security..." : "Secure Login"}
              <LogIn className="w-4 h-4 text-white" />
            </Button>

            {/* Link out to signups */}
            <div className="text-center pt-4 border-t border-purple-950/40 text-[11px] text-gray-400">
              Need to secure your practice?{" "}
              <Link to="/signup" className="text-[var(--primary-light)] hover:text-white font-bold transition-colors">
                Create an Account
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
