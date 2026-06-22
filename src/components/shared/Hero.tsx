import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/ui";
import { Calendar, Users, Activity, Play, ArrowRight, Shield, Award, Sparkles, Clock, TrendingUp, Video, List, User, Settings, LogOut, Bell, CreditCard } from "lucide-react";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  triggerReset?: number;
  delay?: number;
}

const CountUp = ({ value, duration = 1.8, suffix = "", triggerReset = 0, delay = 0 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let animationFrameId: number;
    let timeoutId: number;

    const startAnimation = () => {
      const end = value;
      const durationMs = duration * 1000;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        
        // Elegant ease-out quad transition matching premium guidelines
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(easeProgress * end);
        
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);
    };

    if (delay > 0) {
      timeoutId = window.setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [isInView, value, duration, triggerReset, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const chartContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  },
  hover: {
    transition: {
      staggerChildren: 0.04
    }
  }
};

const getBarVariants = (height: number) => ({
  hidden: { height: 0, opacity: 0.55 },
  visible: { 
    height, 
    opacity: 0.85, 
    transition: { duration: 1.2, ease: "easeOut" } 
  },
  hover: { 
    height: [0, height * 1.12, height], 
    opacity: [0.6, 1, 0.95],
    transition: { duration: 1.1, ease: "easeOut" } 
  }
});

const pieContainerVariants = {
  hidden: {},
  visible: {},
  hover: {}
};

const donutSlice1Variants = {
  hidden: { strokeDashoffset: 81, strokeWidth: 3 },
  visible: { 
    strokeDashoffset: 7,
    strokeWidth: 3,
    transition: { duration: 1.8, ease: "easeOut" }
  },
  hover: {
    strokeDashoffset: [81, 7],
    strokeWidth: 4.2,
    transition: { 
      strokeDashoffset: { duration: 1.8, ease: "easeOut" },
      strokeWidth: { duration: 0.3 }
    }
  }
};

const donutSlice2Variants = {
  hidden: { strokeDashoffset: 81, strokeWidth: 3 },
  visible: { 
    strokeDashoffset: 75,
    strokeWidth: 3,
    transition: { duration: 1.8, ease: "easeOut" }
  },
  hover: {
    strokeDashoffset: [81, 75],
    strokeWidth: 4.2,
    transition: { 
      strokeDashoffset: { duration: 1.8, ease: "easeOut" },
      strokeWidth: { duration: 0.3 }
    }
  }
};

const pieSlice1Variants = {
  hidden: { strokeDashoffset: 81, strokeWidth: 3 },
  visible: { 
    strokeDashoffset: 18,
    strokeWidth: 3,
    transition: { duration: 1.8, ease: "easeOut" }
  },
  hover: {
    strokeDashoffset: [81, 18],
    strokeWidth: 4.2,
    transition: { 
      strokeDashoffset: { duration: 1.8, ease: "easeOut" },
      strokeWidth: { duration: 0.3 }
    }
  }
};

const pieSlice2Variants = {
  hidden: { strokeDashoffset: 81, strokeWidth: 3 },
  visible: { 
    strokeDashoffset: 63,
    strokeWidth: 3,
    transition: { duration: 1.8, ease: "easeOut" }
  },
  hover: {
    strokeDashoffset: [81, 63],
    strokeWidth: 4.2,
    transition: { 
      strokeDashoffset: { duration: 1.8, ease: "easeOut" },
      strokeWidth: { duration: 0.3 }
    }
  }
};

export const HeroSection = () => {
  const [hover1, setHover1] = useState(0);
  const [hover2, setHover2] = useState(0);
  const [hover3, setHover3] = useState(0);
  const [hover4, setHover4] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient blobs (position: absolute, z-index: 0) */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 bg-[var(--primary)] pointer-events-none z-0"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 bg-purple-500 pointer-events-none z-0"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: text content */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="flex flex-col text-left"
          >
            {/* eyebrow */}
            <motion.span 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[var(--primary-light)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 w-fit mb-6 uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--primary-light)]" />
              Built for Mental Health Practices
            </motion.span>

            {/* headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 lg:mb-6"
            >
              The Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">EMR</span> for Mental Health Practices
            </motion.h1>

            {/* subheadline */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-gray-400 font-light mb-8 max-w-xl leading-relaxed"
            >
              A secure Electronic Medical Record (EMR) platform that helps you automate your workflows so you can fully focus on your clients.
            </motion.p>

            {/* buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center"
            >
              <Link to="/signup">
                <Button variant="primary" size="lg" className="w-full group">
                  Start Free Month
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full hover:border-[var(--primary)]">
                  Book a Demo
                </Button>
              </Link>
            </motion.div>

            {/* Quality badges */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-purple-950/40 text-xs text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>HIPAA-Inspired Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[var(--primary-light)]" />
                <span>M-Pesa Supported</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: slide in + perpetual float */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center relative w-full px-4 sm:px-0"
          >
            {/* High fidelity interactive mockup representation */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[576px] max-w-none origin-top scale-[0.55] sm:scale-[0.8] lg:scale-100 -mb-[200px] sm:-mb-[90px] lg:mb-0 mx-auto relative bg-[#0b0818]/90 border border-purple-800/30 rounded-2xl shadow-[var(--shadow-glow)] overflow-visible"
            >
              {/* EMR Mockup Header */}
              <div className="bg-[#120d22] rounded-t-2xl border-b border-purple-950/50 pt-[10px] pb-[10px] pl-[15px] pr-[15px] flex items-center justify-between relative">
                <div className="flex items-center gap-2">
                  <div className="w-[12px] h-[12px] rounded-full bg-red-500/80" />
                  <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/80" />
                  <div className="w-[12px] h-[12px] rounded-full bg-green-500/80" />
                  <span className="text-[9px] leading-[14.5px] font-mono text-purple-400 ml-2 hidden min-[440px]:inline">happyclinic.therapy.ke</span>
                </div>
                
                {/* AI-Powered Notes in the Middle of Top Bar */}
                <div className="absolute left-[54%] -top-3 sm:-top-4 -translate-x-1/2 bg-[#0c1d17]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.15)] shadow-emerald-500/15 border border-emerald-500/30 text-left scale-[0.8] sm:scale-100 z-10 whitespace-nowrap origin-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-emerald-950/50 p-1 rounded animate-pulse">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[8px] text-emerald-400/70 block leading-none font-extrabold uppercase tracking-widest">AI-POWERED NOTES</span>
                      <span className="text-[11px] font-bold text-white block mt-0.5">SOAP note generated</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Stacked Date and System Status as shown in image */}
                  <div className="text-left flex flex-col justify-center leading-none">
                    <span className="text-[9px] font-black text-white leading-[9px]">16/06/2026</span>
                    <span className="text-[8px] text-purple-300/80 font-medium mt-1 hidden min-[400px]:flex items-center gap-1 leading-[8px]">
                      System Status: <span className="text-emerald-400 font-semibold">Online</span>
                    </span>
                  </div>
                  
                  {/* Vertical Divider line */}
                  <div className="h-6 w-[1px] bg-purple-950/60" />

                  {/* Notification Icon with 9+ badge */}
                  <div className="relative cursor-pointer hover:opacity-80 transition-opacity p-1">
                    <Bell className="w-4 h-4 text-purple-300" />
                    <span className="absolute -top-0.5 -right-0.5 bg-[#f43f5e] text-white text-[7.5px] font-black w-3.5 h-3.5 rounded-full border border-[#120d22] flex items-center justify-center shadow-sm">
                      9+
                    </span>
                  </div>
                </div>
              </div>

              {/* Mockup Dashboard inner content */}
              <div className="grid grid-cols-12 text-left">
                {/* Mockup Sidenav */}
                <div className="col-span-3 border-r border-purple-950/50 p-2.5 bg-[#0d091e] flex flex-col justify-between text-[11px]">
                  <div>
                    {/* Header with circular logo / branding */}
                    <div className="flex items-center gap-1.5 mb-4 px-1 py-1">
                      <div className="w-4.5 h-4.5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[7px] font-black text-amber-300 shadow-xs shrink-0">
                        HC
                      </div>
                      <span className="text-[9px] font-extrabold text-white tracking-snug">Happy Clinic</span>
                    </div>

                    {/* Selected "Overview" */}
                    <div className="bg-purple-600/15 text-purple-300 border border-purple-500/15 rounded-md px-2 py-1.2 flex items-center gap-1.5 mb-3.5 font-bold cursor-pointer transition-all">
                      <Activity className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="text-[8.2px]">Overview</span>
                    </div>

                    {/* Section 1: CARE DELIVERY */}
                    <div className="text-[6.8px] font-black text-purple-400/60 uppercase tracking-widest pl-1.5 mb-1.5">
                      Care Delivery
                    </div>
                    <ul className="space-y-0.8 text-gray-400 font-bold mb-4">
                      <li className="px-1.5 py-1 hover:bg-white/5 hover:text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer text-[8.2px]">
                        <Calendar className="w-4 h-4 text-purple-400/80 shrink-0" />
                        <span>My Calendar</span>
                      </li>
                      <li className="px-1.5 py-1 hover:bg-white/5 hover:text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer text-[8.2px]">
                        <List className="w-4 h-4 text-purple-400/80 shrink-0" />
                        <span>All Bookings</span>
                      </li>
                      <li className="px-1.5 py-1 hover:bg-white/5 hover:text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer text-[8.2px]">
                        <Users className="w-4 h-4 text-purple-400/80 shrink-0" />
                        <span>Client Management</span>
                      </li>
                    </ul>

                    {/* Section 2: PRACTICE SETTINGS */}
                    <div className="text-[6.8px] font-black text-purple-400/60 uppercase tracking-widest pl-1.5 mb-1.5">
                      Practice Settings
                    </div>
                    <ul className="space-y-0.8 text-gray-400 font-bold">
                      <li className="px-1.5 py-1 hover:bg-white/5 hover:text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer text-[8.2px]">
                        <User className="w-4 h-4 text-purple-400/80 shrink-0" />
                        <span>My Profile</span>
                      </li>
                      <li className="px-1.5 py-1 hover:bg-white/5 hover:text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer text-[8.2px]">
                        <Clock className="w-4 h-4 text-purple-400/80 shrink-0" />
                        <span>Availability</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sidenav Footer items */}
                  <div className="border-t border-purple-950/40 pt-2 shrink-0 mt-4">
                    {/* Settings Option from the uploaded view */}
                    <div className="px-1.5 py-1 hover:bg-white/5 hover:text-white rounded-md flex items-center gap-1.5 transition-colors cursor-pointer text-[8.2px] text-gray-400 font-bold mb-2">
                      <Settings className="w-4 h-4 text-purple-400/80 shrink-0" />
                      <span>Settings</span>
                    </div>

                    {/* Therapist Profile Badge */}
                    <div className="flex items-center gap-1.5 p-1 rounded-lg bg-purple-950/20 border border-purple-900/15 mb-2 shrink-0">
                      <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=48" alt="Dr. Mary Jane" className="w-[14px] h-[14px] rounded-full object-cover border border-purple-500/20" referrerPolicy="no-referrer" />
                      <div className="leading-none text-[6.5px]">
                        <span className="font-extrabold text-white block text-[8.5px] leading-[8.5px]">Dr. Mary Jane</span>
                        <span className="text-gray-500 block text-[7.5px] leading-[7.5px] mt-0.5 font-medium">Therapist - HC26TH-001</span>
                      </div>
                    </div>

                    {/* Sign Out Button */}
                    <div className="px-1.5 py-1 bg-purple-950/30 border border-purple-900/40 rounded-lg flex items-center justify-center gap-1 text-center text-gray-300 font-bold hover:text-white cursor-pointer hover:bg-purple-950/50 transition-all text-[7.5px]">
                      <LogOut className="w-2.5 h-2.5 text-purple-400 shrink-0" />
                      <span>Sign Out</span>
                    </div>
                  </div>
                </div>

                {/* Mockup Main Panel */}
                <div className="col-span-9 p-4 text-gray-200 bg-[#0d091e]/45 flex flex-col gap-3.5 min-h-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white tracking-tight leading-none">Dashboard</h4>
                    </div>
                    {/* Controls precisely matches uploaded screenshot buttons but designed for darkmode integration */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="px-1.5 py-0.5 rounded text-[6.5px] font-black bg-purple-600 text-white shadow-xs">This Month</button>
                      <button className="px-1.5 py-0.5 rounded text-[6.5px] font-semibold border border-purple-950/60 bg-purple-950/30 text-purple-300 hover:text-white transition-all">This Year</button>
                      <button className="px-1.5 py-0.5 rounded text-[6.5px] font-semibold border border-purple-950/60 bg-purple-950/30 text-purple-300 hover:text-white transition-all">Custom Range</button>
                    </div>
                  </div>

                  {/* 4 Stats Cards matched with uploaded photo */}
                  <div className="grid grid-cols-4 gap-2">
                    {/* Card 1: Total Appointments */}
                    <div 
                      onMouseEnter={() => setHover1(prev => prev + 1)}
                      className="bg-[#141029]/85 border border-purple-950/40 rounded-lg p-2 flex items-center justify-between hover:border-purple-800/40 transition-all cursor-default select-none group"
                    >
                      <div className="text-left">
                        <span className="text-[6.5px] font-bold text-gray-400 block tracking-wide">Total Appointments</span>
                        <span className="text-sm font-black text-white mt-0.5 block leading-none">
                          <CountUp value={40} duration={1.6} delay={0.0} triggerReset={hover1} />
                        </span>
                        <span className="text-[6px] text-emerald-400 font-extrabold block mt-0.8 leading-none">in this month</span>
                      </div>
                      <div className="w-5 h-5 rounded-md bg-purple-950/40 border border-purple-900/35 flex items-center justify-center shrink-0 ml-1 group-hover:border-purple-700/60 transition-colors">
                        <Calendar className="w-2.8 h-2.8 text-purple-400" />
                      </div>
                    </div>

                    {/* Card 2: Active Clients */}
                    <div 
                      onMouseEnter={() => setHover2(prev => prev + 1)}
                      className="bg-[#141029]/85 border border-purple-950/40 rounded-lg p-2 flex items-center justify-between hover:border-purple-800/40 transition-all cursor-default select-none group"
                    >
                      <div className="text-left">
                        <span className="text-[6.5px] font-bold text-gray-400 block tracking-wide">Active Clients</span>
                        <span className="text-sm font-black text-white mt-0.5 block leading-none">
                          <CountUp value={550} duration={1.9} delay={0.1} triggerReset={hover2} />
                        </span>
                        <span className="text-[6px] text-emerald-400 font-extrabold block mt-0.8 leading-none">Total Caseload</span>
                      </div>
                      <div className="w-5 h-5 rounded-md bg-purple-950/40 border border-purple-900/35 flex items-center justify-center shrink-0 ml-1 group-hover:border-purple-700/60 transition-colors">
                        <Users className="w-2.8 h-2.8 text-purple-400" />
                      </div>
                    </div>

                    {/* Card 3: Therapy Hours */}
                    <div 
                      onMouseEnter={() => setHover3(prev => prev + 1)}
                      className="bg-[#141029]/85 border border-purple-950/40 rounded-lg p-2 flex items-center justify-between hover:border-purple-800/40 transition-all cursor-default select-none group"
                    >
                      <div className="text-left">
                        <span className="text-[6.5px] font-bold text-gray-400 block tracking-wide">Therapy Hours</span>
                        <span className="text-sm font-black text-emerald-400 mt-0.5 block leading-none">
                          <CountUp value={45} duration={2.2} delay={0.2} triggerReset={hover3} />
                        </span>
                        <span className="text-[6px] text-emerald-400 font-extrabold block mt-0.8 leading-none">Hours in range</span>
                      </div>
                      <div className="w-5 h-5 rounded-md bg-purple-950/40 border border-purple-900/35 flex items-center justify-center shrink-0 ml-1 group-hover:border-emerald-700/60 transition-colors">
                        <Clock className="w-2.8 h-2.8 text-emerald-400" />
                      </div>
                    </div>

                    {/* Card 4: Completion Rate */}
                    <div 
                      onMouseEnter={() => setHover4(prev => prev + 1)}
                      className="bg-[#141029]/85 border border-purple-950/40 rounded-lg p-2 flex items-center justify-between hover:border-purple-800/40 transition-all cursor-default select-none group"
                    >
                      <div className="text-left">
                        <span className="text-[6.5px] font-bold text-gray-400 block tracking-wide">Completion Rate</span>
                        <span className="text-sm font-black text-white mt-0.5 block leading-none">
                          <CountUp value={95} duration={2.5} suffix="%" delay={0.3} triggerReset={hover4} />
                        </span>
                        <span className="text-[6px] text-emerald-400 font-extrabold block mt-0.8 leading-none">for selected period</span>
                      </div>
                      <div className="w-5 h-5 rounded-md bg-purple-950/40 border border-purple-900/35 flex items-center justify-center shrink-0 ml-1 group-hover:border-purple-700/60 transition-colors">
                        <Activity className="w-2.8 h-2.8 text-purple-400" />
                      </div>
                    </div>
                  </div>

                  {/* 3 Analytics Charts / Visual Representation Row from the image */}
                  <div className="grid grid-cols-3 gap-2.5">
                    
                    {/* Widget 1: Weekly Activity Bar Chart */}
                    <motion.div 
                      variants={chartContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: false }}
                      className="bg-[#141029]/70 border border-purple-950/40 rounded-xl p-2.5 text-left select-none cursor-default group"
                    >
                      <span className="text-[7.5px] font-extrabold text-white block uppercase tracking-wider">Weekly Activity</span>
                      <span className="text-[6px] text-purple-300 block mt-0.2 mb-2 font-medium">Sessions per day of week</span>
                      
                      {/* Bar columns */}
                      <div className="flex items-end justify-between h-[34px] pt-1 px-0.5 border-b border-purple-950/60 pb-1 relative">
                        {[
                          { day: "Sun", height: 1, bg: "bg-transparent", transparent: true },
                          { day: "Mon", height: 12, bg: "bg-purple-500", transparent: false },
                          { day: "Tue", height: 1, bg: "bg-transparent", transparent: true },
                          { day: "Wed", height: 19, bg: "bg-purple-500", transparent: false },
                          { day: "Thu", height: 25, bg: "bg-teal-400", transparent: false },
                          { day: "Fri", height: 9, bg: "bg-purple-300", transparent: false },
                          { day: "Sat", height: 1, bg: "bg-transparent", transparent: true },
                        ].map((bar) => (
                          <div key={bar.day} className="flex flex-col items-center flex-1">
                            {bar.transparent ? (
                              <div className="w-2 bg-transparent h-[1px]" />
                            ) : (
                              <motion.div
                                variants={getBarVariants(bar.height)}
                                style={{ originY: 1 }}
                                className={`w-2 ${bar.bg} rounded-t-[1px]`}
                              />
                            )}
                            <span className="text-[5px] font-bold text-gray-400 mt-1 leading-none">{bar.day}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Widget 2: Session Outcomes Donut Chart */}
                    <motion.div 
                      variants={pieContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: false }}
                      className="bg-[#141029]/70 border border-purple-950/40 rounded-xl p-2.5 text-left flex flex-col justify-between select-none cursor-default"
                    >
                      <div>
                        <span className="text-[7.5px] font-extrabold text-white block uppercase tracking-wider">Session Outcomes</span>
                        <span className="text-[6px] text-purple-300 block mt-0.2 font-medium">Status distribution</span>
                      </div>
                      
                      <div className="flex items-center justify-center p-1.5 relative my-1">
                        <svg className="w-8 h-8 transform -rotate-90 overflow-visible">
                          <circle cx="16" cy="16" r="13" stroke="rgba(124, 58, 237, 0.1)" strokeWidth="3" fill="transparent" />
                          <motion.circle 
                            cx="16" 
                            cy="16" 
                            r="13" 
                            stroke="#3b82f6" 
                            fill="transparent" 
                            strokeDasharray="81" 
                            variants={donutSlice1Variants}
                            className="origin-center"
                            style={{ transformOrigin: "center" }}
                          />
                          <motion.circle 
                            cx="16" 
                            cy="16" 
                            r="13" 
                            stroke="#10b981" 
                            fill="transparent" 
                            strokeDasharray="81" 
                            variants={donutSlice2Variants}
                            className="origin-center"
                            style={{ transformOrigin: "center" }}
                          />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-[7px] font-black text-white block leading-none">14</span>
                          <span className="text-[4px] font-bold text-purple-300 uppercase block leading-none mt-0.2">Total</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 shrink-0 text-[4.8px] font-bold text-gray-400">
                        <span className="flex items-center gap-0.5">
                          <span className="w-0.8 h-0.8 rounded-full bg-emerald-500" /> Completed
                        </span>
                        <span className="flex items-center gap-0.5">
                          <span className="w-0.8 h-0.8 rounded-full bg-blue-500" /> Scheduled
                        </span>
                      </div>
                    </motion.div>

                    {/* Widget 3: Session Modality Pie Chart */}
                    <motion.div 
                      variants={pieContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: false }}
                      className="bg-[#141029]/70 border border-purple-950/40 rounded-xl p-2.5 text-left flex flex-col justify-between select-none cursor-default"
                    >
                      <div>
                        <span className="text-[7.5px] font-extrabold text-white block uppercase tracking-wider">Session Modality</span>
                        <span className="text-[6px] text-purple-300 block mt-0.2 font-medium">Virtual vs in-Person</span>
                      </div>

                      <div className="flex items-center justify-center p-1.5 relative my-1">
                        <svg className="w-8 h-8 transform -rotate-45 overflow-visible">
                          <motion.circle 
                            cx="16" 
                            cy="16" 
                            r="13" 
                            stroke="#7c3aed" 
                            fill="transparent" 
                            strokeDasharray="81" 
                            variants={pieSlice1Variants}
                            className="origin-center"
                            style={{ transformOrigin: "center" }}
                          />
                          <motion.circle 
                            cx="16" 
                            cy="16" 
                            r="13" 
                            stroke="#14b8a6" 
                            fill="transparent" 
                            strokeDasharray="81" 
                            variants={pieSlice2Variants}
                            className="origin-center"
                            style={{ transformOrigin: "center" }}
                          />
                        </svg>
                        <div className="absolute text-center text-[5.5px]">
                          💻
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 shrink-0 text-[4.8px] font-bold text-gray-400">
                        <span className="flex items-center gap-0.5">
                          <span className="w-0.8 h-0.8 rounded-full bg-teal-400" /> In-Person
                        </span>
                        <span className="flex items-center gap-0.5">
                          <span className="w-0.8 h-0.8 rounded-full bg-purple-500" /> Virtual
                        </span>
                      </div>
                    </motion.div>

                  </div>

                  {/* Row of lists matching Bottom Section of Image */}
                  <div className="grid grid-cols-2 gap-2.5">
                    
                    {/* List 1: Today's Schedule */}
                    <div className="bg-[#141029]/70 border border-purple-950/40 rounded-xl p-2 text-left">
                      <div className="flex justify-between items-center mb-1.5 pb-0.8 border-b border-purple-950/40">
                        <span className="text-[7.5px] font-black text-white">Today's Schedule</span>
                        <span className="text-[6.5px] font-bold text-purple-400 font-mono">6/16/2026</span>
                      </div>
                      <div className="space-y-1">
                        {/* 12:00 Jane Doe */}
                        <div className="flex items-center justify-between p-1 bg-purple-950/15 border border-purple-900/15 rounded">
                          <div className="flex items-center gap-1.2">
                            <span className="text-[6.5px] font-bold font-mono text-purple-300 bg-purple-950/30 px-0.8 py-0.1 rounded border border-purple-800/10 shrink-0">12:00</span>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=48" alt="Jane" className="w-[10px] h-[10px] rounded-full object-cover border-[0.5px] border-purple-500/20" referrerPolicy="no-referrer" />
                            <div className="leading-none">
                              <span className="text-[7px] font-extrabold text-white block">Jane Doe</span>
                              <span className="text-[5.5px] text-gray-500 block">Appointment time</span>
                            </div>
                          </div>
                        </div>
                        {/* 13:00 John Smith */}
                        <div className="flex items-center justify-between p-1 bg-purple-950/15 border border-purple-900/15 rounded">
                          <div className="flex items-center gap-1.2">
                            <span className="text-[6.5px] font-bold font-mono text-purple-300 bg-purple-950/30 px-0.8 py-0.1 rounded border border-purple-800/10 shrink-0">13:00</span>
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=48" alt="John" className="w-[10px] h-[10px] rounded-full object-cover border-[0.5px] border-purple-500/20" referrerPolicy="no-referrer" />
                            <div className="leading-none">
                              <span className="text-[7px] font-extrabold text-white block">John Smith</span>
                              <span className="text-[5.5px] text-gray-500 block">Appointment time</span>
                            </div>
                          </div>
                        </div>
                        {/* 14:00 Sarah Johnson */}
                        <div className="flex items-center justify-between p-1 bg-purple-950/15 border border-purple-900/15 rounded">
                          <div className="flex items-center gap-1.2">
                            <span className="text-[6.5px] font-bold font-mono text-purple-300 bg-purple-950/30 px-0.8 py-0.1 rounded border border-purple-800/10 shrink-0">14:00</span>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=48" alt="Sarah" className="w-[10px] h-[10px] rounded-full object-cover border-[0.5px] border-purple-500/20" referrerPolicy="no-referrer" />
                            <div className="leading-none">
                              <span className="text-[7px] font-extrabold text-white block">Sarah Johnson</span>
                              <span className="text-[5.5px] text-gray-500 block">Appointment time</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* List 2: Recent Bookings */}
                    <div className="bg-[#141029]/70 border border-purple-950/40 rounded-xl p-2 text-left">
                      <div className="flex justify-between items-center mb-1.5 pb-0.8 border-b border-purple-950/40">
                        <span className="text-[7.5px] font-black text-white">Recent Bookings</span>
                        <span className="text-[5.8px] font-bold text-emerald-400 font-mono tracking-wider uppercase shrink-0">Upcoming</span>
                      </div>
                      <div className="space-y-1">
                        {/* Jane Doe Booking */}
                        <div className="flex items-center justify-between p-1 bg-purple-950/10 border border-purple-900/10 rounded">
                          <div className="flex items-center gap-1.2">
                            <span className="w-4 h-4 rounded-full bg-purple-950 border border-purple-900/30 text-purple-300 flex items-center justify-center text-[6px] font-black shrink-0">JS</span>
                            <div className="leading-none">
                              <span className="text-[7px] font-extrabold text-white block">Jane Doe</span>
                              <span className="text-[5.5px] text-gray-400 block">Completed booking</span>
                            </div>
                          </div>
                          <span className="text-[5.5px] font-mono text-purple-400">completed booking</span>
                        </div>
                        {/* John Smith Booking */}
                        <div className="flex items-center justify-between p-1 bg-purple-950/10 border border-purple-900/10 rounded">
                          <div className="flex items-center gap-1.2">
                            <span className="w-4 h-4 rounded-full bg-purple-950 border border-purple-900/30 text-purple-300 flex items-center justify-center text-[6px] font-black shrink-0">JS</span>
                            <div className="leading-none">
                              <span className="text-[7px] font-extrabold text-white block">John Smith</span>
                              <span className="text-[5.5px] text-gray-400 block">Completed booking</span>
                            </div>
                          </div>
                          <span className="text-[5.5px] font-mono text-purple-400">completed booking</span>
                        </div>
                        {/* Michael Lee Booking */}
                        <div className="flex items-center justify-between p-1 bg-purple-950/10 border border-purple-900/10 rounded">
                          <div className="flex items-center gap-1.2">
                            <span className="w-4 h-4 rounded-full bg-purple-950 border border-purple-900/30 text-purple-300 flex items-center justify-center text-[6px] font-black shrink-0">MC</span>
                            <div className="leading-none">
                              <span className="text-[7px] font-extrabold text-white block">Michael Lee</span>
                              <span className="text-[5.5px] text-gray-400 block">Completed booking</span>
                            </div>
                          </div>
                          <span className="text-[5.5px] font-mono text-purple-400">completed booking</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
              {/* Overlapping Floating Element */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-[#0c1d17]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.15)] shadow-emerald-500/15 border border-emerald-500/30 text-left z-10 origin-bottom-right">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-950/50 p-1 rounded animate-pulse">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-emerald-400/70 block leading-none">RECENT TRANSACTION</span>
                    <span className="text-[11px] font-bold text-white">KES 2,000 received</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
