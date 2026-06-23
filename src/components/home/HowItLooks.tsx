import { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Users, 
  Settings, 
  Bell, 
  Clock, 
  Video, 
  CheckCircle2, 
  ChevronRight,
  Shield,
  LayoutDashboard,
  Check,
  ChevronLeft,
  ChevronRightSquare,
  LogOut,
  User,
  Activity,
  Home
} from "lucide-react";

export const HowItLooks = () => {
  const [selectedDay, setSelectedDay] = useState<number>(18);

  // Recreated dataset exactly matching the Happy Clinic mockup image
  const appointmentsData: Record<number, Array<{
    time: string;
    duration: string;
    patient: string;
    type: string;
    status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED";
    method: "Virtual • Individual" | "Virtual • Adolescence" | "In-Person • Consultation";
  }>> = {
    10: [
      {
        time: "12:00 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Adolescence Intake",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      }
    ],
    16: [
      {
        time: "10:00 AM",
        duration: "50m",
        patient: "Elena Rodriguez",
        type: "Cognitive Therapy",
        status: "SCHEDULED",
        method: "Virtual • Individual"
      }
    ],
    17: [
      {
        time: "09:00 AM",
        duration: "60m",
        patient: "Mark Peters",
        type: "ADHD Assessment",
        status: "SCHEDULED",
        method: "Virtual • Individual"
      }
    ],
    18: [
      {
        time: "09:00 AM",
        duration: "60m",
        patient: "Mark Peters",
        type: "Individual Intake",
        status: "SCHEDULED",
        method: "Virtual • Individual"
      },
      {
        time: "12:30 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Adolescent Therapy",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      },
      {
        time: "02:00 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Mental Re-assessment",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      },
      {
        time: "03:00 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Behavioral Follow-up",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      }
    ],
    19: [
      {
        time: "11:00 AM",
        duration: "60m",
        patient: "Jane Doe",
        type: "ADHD Assessment Followup",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      },
      {
        time: "02:00 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Cognitive Behavioral Therapy",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      }
    ],
    24: [
      {
        time: "11:00 AM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Weekly Check-in",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      },
      {
        time: "12:30 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Adolescent Therapy",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      }
    ],
    25: [
      {
        time: "02:00 PM",
        duration: "60m",
        patient: "Jane Doe",
        type: "Monthly Follow-up",
        status: "SCHEDULED",
        method: "Virtual • Adolescence"
      }
    ]
  };

  const activeDayAppointments = appointmentsData[selectedDay] || [];

  // MacBook Screen Replica containing Happy Clinic UI
  const RecreatedLaptopScreen = () => (
    <div className="w-full h-full bg-[#f8fafc] text-slate-800 flex flex-col justify-between overflow-hidden select-none text-[8.5px] font-sans">
      
      {/* Top Main Workspace Header (Logo, Search, Alerts) */}
      <div className="bg-white px-3.5 py-1.5 flex items-center justify-between border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2">
          {/* Mock Window Dots */}
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56] block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e] block" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] block" />
          </div>
          <div className="ml-1 bg-slate-50 px-2 py-0.5 rounded text-[7.5px] text-[#7c3aed] font-medium tracking-tight">
            ◆ happyclinic.therapy.ke
          </div>
        </div>
        
        {/* Date and Online Status */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[8.5px] font-bold text-slate-900 block leading-none">16/06/2026</span>
            <span className="text-[6.5px] text-slate-400 block mt-0.5">System Status: <span className="text-emerald-500 font-bold">Online</span></span>
          </div>
          {/* Notification Alert Bell exactly as in Mockup with Red red circle */}
          <div className="relative bg-slate-50 p-1 rounded-full border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors">
            <Bell size={10} className="text-slate-500" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white font-extrabold text-[6px] rounded-full flex items-center justify-center">9+</span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Split Panel */}
      <div className="flex-1 flex min-h-0 bg-[#f8fafc]">
        
        {/* Left Side Navigation (Therapist sidebar) */}
        <div className="flex w-24 md:w-34 bg-white border-r border-slate-100 flex-col justify-between p-2 shrink-0" style={{ lineHeight: '16.75px' }}>
          <div className="space-y-3.5">
            {/* Happy Clinic Header */}
            <div className="flex items-center gap-1.5 px-1.5 py-1">
              <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[7px] font-black text-amber-600 shadow-xs shrink-0">
                HC
              </div>
              <span className="text-[9.5px] font-black tracking-wide text-slate-900">Happy Clinic</span>
            </div>
            
            {/* CARE DELIVERY SECTION */}
            <div>
              <span className="text-[6px] font-black text-slate-400 tracking-widest block uppercase mb-1 px-1.5">CARE DELIVERY</span>
              <nav className="space-y-0.5">
                <button className="w-full flex items-center gap-2 px-1.5 py-1.2 rounded text-[8px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
                  <Activity size={10} className="text-slate-400" />
                  <span>Overview</span>
                </button>
                <button className="w-full flex items-center gap-2 px-1.5 py-1.2 rounded text-[8px] font-bold bg-[#f5efff] text-[#7c3aed] transition-all">
                  <CalendarIcon size={10} className="text-[#7c3aed]" />
                  <span>My Calendar</span>
                </button>
                <button className="w-full flex items-center gap-2 px-1.5 py-1.2 rounded text-[8px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50">
                  <ChevronRightSquare size={10} className="text-slate-400" />
                  <span>All Bookings</span>
                </button>
                <button className="w-full flex items-center gap-2 px-1.5 py-1.2 rounded text-[8px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50">
                  <Users size={10} className="text-slate-400" />
                  <span>Client Management</span>
                </button>
              </nav>
            </div>

            {/* PRACTICE SETTINGS SECTION */}
            <div>
              <span className="text-[6px] font-black text-slate-400 tracking-widest block uppercase mb-1 px-1.5">PRACTICE SETTINGS</span>
              <nav className="space-y-0.5">
                <button className="w-full flex items-center gap-2 px-1.5 py-1.2 rounded text-[8px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50">
                  <User size={10} className="text-slate-400" />
                  <span>My Profile</span>
                </button>
                <button className="w-full flex items-center gap-2 px-1.5 py-1.2 rounded text-[8px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50">
                  <Clock size={10} className="text-slate-400" />
                  <span>Availability</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Settings / Therapist Profile & Exit */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            <button className="w-full flex items-center gap-2 px-1.5 py-1 text-slate-500 hover:text-slate-800 text-[8px] font-semibold">
              <Settings size={10} className="text-slate-400" /> Settings
            </button>
            
            {/* Therapist User Block */}
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150" 
                alt="Dr. Mary Jane" 
                className="w-5 h-5 rounded-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="text-left leading-none">
                <span className="text-[7.5px] font-black text-slate-800 block">Dr. Mary Jane</span>
                <span className="text-[6px] text-slate-400 block mt-0.5">Therapist - HC26TH-001</span>
              </div>
            </div>

            <button className="w-full py-1 rounded border border-slate-200 hover:bg-slate-50 transition-colors text-slate-500 text-[7px] font-black flex items-center justify-center gap-1">
              <LogOut size={9} /> Sign Out
            </button>
          </div>
        </div>

        {/* Dashboard Operations Panel */}
        <div className="flex-grow pt-1 sm:pt-2 px-1.5 sm:px-3.5 pb-1.5 sm:pb-3.5 flex flex-col min-h-0 overflow-hidden pl-2 sm:pl-3.5">
          
          {/* Top Title */}
          <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-slate-100 shrink-0">
            <div className="text-[10px] sm:text-[13px] md:text-[16px] font-black text-slate-900 tracking-tight leading-normal">My Calendar</div>
          </div>

          {/* Split grid of interactive Calendar and right lists */}
          <div className="flex-grow grid grid-cols-12 gap-1.5 sm:gap-3.5 mt-1 sm:mt-2 min-h-0 overflow-hidden">
            
            {/* 1. Standard Interactive Calendar Grid Box (reproduced precisely from mockup) */}
            <div className="col-span-8 bg-white border border-slate-100 rounded-lg p-1.5 sm:p-2.5 flex flex-col min-h-0 shadow-2xs">
              
              {/* Month bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 shrink-0">
                <div className="flex items-center gap-1">
                  <span className="text-[#7c3aed] font-bold text-[9px] mr-1">📅</span>
                  <span className="font-extrabold text-slate-800 text-[9.5px]">Jun 2026</span>
                </div>
                
                {/* Back, Today, Forward controls */}
                <div className="flex items-center gap-1.5">
                  <button className="p-0.5 rounded border border-slate-200 hover:bg-slate-50 text-slate-600">
                    <ChevronLeft size={9} />
                  </button>
                  <button className="px-2.5 py-0.5 rounded border border-slate-200 hover:border-indigo-400 hover:bg-[#faf9ff] text-[#7c3aed] text-[7.5px] font-bold transition-all">
                    Today
                  </button>
                  <button className="p-0.5 rounded border border-slate-200 hover:bg-slate-50 text-slate-600">
                    <ChevronRight size={9} />
                  </button>
                </div>
              </div>

              {/* Weekly Header */}
              <div className="grid grid-cols-7 text-center text-[6px] font-bold text-slate-400 py-1 bg-slate-50 border-b border-slate-100/60 tracking-wider">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>

              {/* Days Grid - Jun 1 starts on Monday */}
              <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-[1px] bg-slate-100 p-[0.5px] rounded mt-1 min-h-0 overflow-y-auto">
                
                {/* Sunday 31st (previous month) */}
                <div className="bg-white p-1 text-slate-300 min-h-[30px]" />

                {/* Days 1 through 30 */}
                {Array.from({ length: 30 }, (_, index) => {
                  const day = index + 1;
                  const isCurrentSelected = selectedDay === day;
                  const hasAppts = appointmentsData[day]?.length > 0;
                  
                  return (
                    <div 
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`bg-white p-0.5 text-left flex flex-col justify-between cursor-pointer group transition-all relative ${
                        isCurrentSelected 
                          ? "ring-1 ring-[#7c3aed] z-10 bg-[#fbfaff]" 
                          : "hover:bg-slate-50"
                      }`}
                    >
                      {/* Day Number Label */}
                      <div className="flex items-center justify-between">
                        {day === 16 ? (
                          <span className="w-3.5 h-3.5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[7.5px] font-black">
                            16
                          </span>
                        ) : (
                          <span className={`text-[7.5px] font-bold ${isCurrentSelected ? "text-[#7c3aed]" : "text-slate-500"}`}>
                            {day}
                          </span>
                        )}
                        {hasAppts && !isCurrentSelected && (
                          <span className="w-1 h-1 rounded-full bg-indigo-500" />
                        )}
                      </div>

                      {/* Small Booking Chips reproduced from Mockup */}
                      <div className="mt-0.5 space-y-0.5 overflow-hidden">
                        {appointmentsData[day]?.slice(0, 3).map((appt, i) => (
                          <span 
                            key={i} 
                            className={`px-1 py-[0.5px] rounded-[1.5px] text-[5.5px] font-medium leading-none block truncate ${
                              appt.patient === "Mark Peters" 
                                ? "bg-amber-50 text-amber-600 border-l-[1px] border-amber-400" 
                                : "bg-purple-50 text-purple-600 border-l-[1px] border-purple-400"
                            }`}
                          >
                            {appt.time.split(" ")[0]} {appt.patient}
                          </span>
                        ))}
                        {appointmentsData[day]?.length > 3 && (
                          <span className="text-[5px] text-slate-400 block text-right font-bold">
                            +{appointmentsData[day].length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 2. Right schedule column details */}
            <div className="flex col-span-4 flex-col min-h-0">
              
              <div className="mb-2 shrink-0">
                <span className="text-[9.5px] font-black text-slate-800 block">
                  {selectedDay === 18 ? "Thursday, June 18" : `June ${selectedDay}, 2026`}
                </span>
                <span className="text-[7.5px] text-slate-400 block mt-0.5">
                  {activeDayAppointments.length} Appointments scheduled
                </span>
              </div>

              {/* Scrollable List of Appointment Cards */}
              <div className="flex-1 space-y-2 overflow-y-auto pr-1">
                {activeDayAppointments.length > 0 ? (
                  activeDayAppointments.map((appt, i) => (
                    <div 
                      key={i}
                      className="bg-white border border-slate-100 p-2 rounded-md shadow-2xs hover:shadow-xs transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-[8.5px] font-black font-mono text-slate-900">{appt.time.split(" ")[0]}</span>
                          <span className="text-[6.5px] text-slate-400 uppercase font-bold bg-slate-50 px-1 py-0.2 rounded">{appt.duration}</span>
                        </div>
                        <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.2 rounded text-[6.5px] font-black tracking-wide">
                          SCHEDULED
                        </span>
                      </div>
                      
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-[7px] font-bold text-slate-700 flex items-center justify-center">
                          {appt.patient.charAt(0)}
                        </div>
                        <div className="text-left">
                          <span className="text-[8.5px] font-bold text-slate-800 block">{appt.patient}</span>
                          <span className="text-[7.5px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                            <Video size={8} className="text-[#7c3aed]" />
                            {appt.method}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-28 border border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-center p-3">
                    <span className="text-slate-300 text-lg">🫙</span>
                    <span className="text-[8.2px] font-bold text-slate-400 mt-1">No Bookings</span>
                    <span className="text-[6.5px] text-slate-300">Click another day on the calendar</span>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

  // Companion Phone Screen in Light Theme for Unified Presentation
  const RecreatedPhoneScreen = () => {
    const activeDayAppts = appointmentsData[selectedDay] || [];

    return (
      <div className="w-full h-full bg-[#f5f7fa] text-slate-800 flex flex-col justify-between overflow-hidden select-none text-[8px] font-sans">
        
        {/* Native Android / iOS Style Purple Status Bar */}
        <div className="bg-[#612184] h-[18px] px-2.5 flex items-center justify-between shrink-0 text-white font-medium text-[7px]">
          <span className="font-semibold text-white/95">16:04</span>
          <div className="flex items-center gap-1.5 opacity-90">
            {/* Custom high-fidelity Wifi, Cellular Bars and Battery Level */}
            <div className="flex gap-[0.5px] items-end h-[6.5px]">
              <span className="w-[1px] h-[2px] bg-white rounded-t-[0.5px]" />
              <span className="w-[1px] h-[3.5px] bg-white rounded-t-[0.5px]" />
              <span className="w-[1px] h-[5px] bg-white rounded-t-[0.5px]" />
              <span className="w-[1px] h-[6.5px] bg-white rounded-t-[0.5px]" />
            </div>
            {/* Wifi symbol represented */}
            <svg viewBox="0 0 24 24" className="w-[7px] h-[7px] fill-current text-white">
              <path d="M12 21l-12-12c6.627-6.627 17.373-6.627 24 0l-12 12z" />
            </svg>
            {/* Battery indicator matching the uploaded image "40%" */}
            <div className="flex items-center gap-[1px]">
              <span className="text-[6px] font-semibold text-white/90">40</span>
              <div className="w-[10px] h-[6.5px] border border-white/60 rounded-[1.5px] p-[0.5px] flex items-center relative">
                <div className="h-full bg-white rounded-[0.5px] w-[40%]" />
                <span className="absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[0.8px] h-[2.2px] bg-white/60 rounded-r-[0.2px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Mockup Content */}
        <div className="flex-1 flex flex-col min-h-0 bg-[#f4f6f9]">
          
          {/* Header Bar precisely matching screenshot */}
          <div className="bg-white px-3.5 py-2.5 flex items-center justify-between border-b border-slate-100 shrink-0 shadow-3xs" style={{ fontSize: '8px', paddingTop: '5px', paddingBottom: '5px' }}>
            <div className="text-[11.5px] font-black text-slate-900 tracking-tight leading-none" style={{ fontSize: '12px', lineHeight: '18px' }}>My Calendar</div>
            
            {/* Notification alert bell */}
            <div className="relative cursor-pointer">
              <Bell size={11} className="text-slate-600 stroke-[2.2]" />
              <span className="absolute -top-[5px] -right-[5px] w-3.5 h-3.5 bg-[#ef4444] text-white font-extrabold text-[5.5px] rounded-full flex items-center justify-center border border-white">
                9+
              </span>
            </div>
          </div>

          {/* Main scrollable body area containing the calendar card and daily list */}
          <div className="flex-1 p-2.5 space-y-2.5 overflow-y-auto min-h-0">
            
            {/* 1. Calendar Widget Box */}
            <div className="bg-white border border-slate-100 rounded-xl p-2 shadow-3xs" style={{ marginBottom: '5px', paddingTop: '5px', paddingRight: '5px', paddingBottom: '5px', paddingLeft: '5px' }}>
              
              {/* Header month & controls inside Box */}
              <div className="flex items-center justify-between border-b border-slate-100/60 pb-1.5 shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7c3aed] text-[8.5px]">📅</span>
                  <span className="font-extrabold text-slate-800 text-[8.5px]">Jun 2026</span>
                </div>
                
                {/* Back, Today, Forward controls */}
                <div className="flex items-center gap-1">
                  <button className="p-0.5 rounded border border-slate-200 text-slate-500 hover:bg-slate-50">
                    <ChevronLeft size={8} className="stroke-[2.5]" />
                  </button>
                  <button className="px-2 py-0.5 rounded border border-slate-200 text-slate-700 text-[7px] font-bold">
                    Today
                  </button>
                  <button className="p-0.5 rounded border border-slate-200 text-slate-500 hover:bg-slate-50">
                    <ChevronRight size={8} className="stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Day Headers row */}
              <div className="grid grid-cols-7 text-center text-[5.5px] font-extrabold text-slate-400 py-1 tracking-wider border-b border-slate-100/40">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>

              {/* Day Cells Grid */}
              <div className="grid grid-cols-7 gap-y-[1px] gap-x-[1px] bg-slate-50 p-[1px] rounded mt-1.5">
                {/* Offset Sunday */}
                <div className="p-0.5 bg-white min-h-[16px]" />

                {/* Days 1 to 30 */}
                {Array.from({ length: 30 }, (_, index) => {
                  const day = index + 1;
                  const isSelected = selectedDay === day;
                  
                  // Set precise dot patterns shown in user image
                  let dots: any = null;
                  if (day === 10) {
                    dots = <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#94a3b8]" />;
                  } else if (day === 17) {
                    dots = <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />;
                  } else if (day === 18) {
                    dots = (
                      <div className="flex gap-[1.5px] justify-center mt-[0.5px]">
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                      </div>
                    );
                  } else if (day === 19) {
                    dots = (
                      <div className="flex gap-[1.5px] justify-center mt-[0.5px]">
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                      </div>
                    );
                  } else if (day === 24) {
                    dots = (
                      <div className="flex gap-[1.5px] justify-center mt-[0.5px]">
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                        <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />
                      </div>
                    );
                  } else if (day === 25) {
                    dots = <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#7c3aed]" />;
                  }

                  return (
                    <div 
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`bg-white p-0.5 pt-1 pb-1 flex flex-col items-center justify-between cursor-pointer rounded transition-all min-h-[18px] ${
                        isSelected 
                          ? "ring-[1.2px] ring-[#7c3aed] bg-[#faf9ff] z-10" 
                          : "hover:bg-slate-50"
                      }`}
                    >
                      {day === 16 ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[7px] font-black leading-none">
                          16
                        </span>
                      ) : (
                        <span className={`text-[7px] font-bold ${isSelected ? "text-[#7c3aed]" : "text-slate-700"}`}>
                          {day}
                        </span>
                      )}
                      
                      {/* Space for dot cues */}
                      <div className="h-[3px] flex items-center justify-center mt-0.5">
                        {dots}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 2. Appointments Schedule Section Header */}
            <div>
              <div className="flex justify-between items-baseline mb-1.5 px-0.5 text-left">
                <span className="text-[9.5px] font-black text-slate-800">
                  {selectedDay === 18 ? "Thursday 18 June" : `June ${selectedDay}, 2026`}
                </span>
                <span className="text-[7px] text-slate-400 font-semibold uppercase tracking-wider">
                  {activeDayAppts.length} Appointments
                </span>
              </div>

              {/* Single item/appointments feed list */}
              <div className="space-y-2">
                {activeDayAppts.length > 0 ? (
                  activeDayAppts.map((appt, i) => (
                    <div 
                      key={i}
                      className="bg-white border border-slate-100 p-2.5 rounded-xl shadow-3xs hover:shadow-2xs transition-shadow"
                    >
                      {/* High-fidelity detail header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8.5px] font-black font-mono text-slate-900">{appt.time.split(" ")[0]}</span>
                          <span className="text-[6px] text-slate-400 uppercase font-black bg-slate-100/80 px-1 py-0.2 rounded-sm">{appt.duration}</span>
                        </div>
                        <span className="bg-[#e6fbf2] text-[#059669] px-1.5 py-0.2 rounded-sm text-[6px] font-black tracking-wide uppercase">
                          {appt.status}
                        </span>
                      </div>
                      
                      {/* Patient Name Section with user thumbnail placeholder */}
                      <div className="mt-1.8 flex items-center gap-2">
                        <div className="w-[15px] h-[15px] rounded-full bg-slate-100/90 flex items-center justify-center border border-slate-200">
                          <User size={8} className="text-slate-500" />
                        </div>
                        <div className="text-left">
                          <span className="text-[8.5px] font-extrabold text-slate-800 block leading-tight">{appt.patient}</span>
                          <span className="text-[7px] text-slate-500 font-semibold flex items-center gap-1 mt-0.5 leading-none">
                            <Video size={7.5} className="text-[#7c3aed] stroke-[2.2]" />
                            {appt.method}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white border border-slate-100 border-dashed p-4 rounded-xl text-center flex flex-col items-center justify-center">
                    <span className="text-xs">📂</span>
                    <span className="text-[8px] font-bold text-slate-400 mt-1">No appointments found</span>
                    <span className="text-[6.5px] text-slate-300">Tap calendar days to schedule</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Solid White Navigation Tab Bar exactly as shown in screenshot */}
          <div className="bg-white border-t border-slate-100 shrink-0 py-1 flex items-center justify-between px-3">
            
            {/* Tab 1: Home */}
            <div className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
              <Home size={11} className="text-slate-700 stroke-[2]" />
              <span className="text-[5.5px] font-semibold text-slate-600 mt-0.5">Home</span>
            </div>

            {/* Tab 2: Calendar - Active in photo with purple dot below label */}
            <div className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer transition-all relative">
              <CalendarIcon size={11} className="text-[#7c3aed] stroke-[2.2]" />
              <span className="text-[5.5px] font-extrabold text-[#7c3aed] mt-0.5">Calendar</span>
              
              {/* Active purple dot located below calendar label */}
              <span className="w-1 h-1 rounded-full bg-[#7c3aed] mt-[1.5px]" />
            </div>

            {/* Tab 3: Bookings */}
            <div className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer opacity-40 hover:opacity-100">
              <ChevronRightSquare size={11} className="text-slate-700 stroke-[2]" />
              <span className="text-[5.5px] font-semibold text-slate-600 mt-0.5">Bookings</span>
            </div>

            {/* Tab 4: Clients */}
            <div className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer opacity-40 hover:opacity-100">
              <Users size={11} className="text-slate-700 stroke-[2]" />
              <span className="text-[5.5px] font-semibold text-slate-600 mt-0.5">Clients</span>
            </div>

            {/* Tab 5: Me */}
            <div className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer opacity-40 hover:opacity-100">
              <img 
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=80"
                alt="Me avatar thumbnail"
                className="w-[12px] h-[12px] rounded-full object-cover border-[0.5px] border-slate-300"
                referrerPolicy="no-referrer"
              />
              <span className="text-[5.5px] font-semibold text-slate-600 mt-0.5">Me</span>
            </div>
          </div>

          {/* Android Soft key bar at absolute bottom */}
          <div className="bg-[#fbfcff] border-t border-slate-100 shrink-0 h-[20px] grid grid-cols-3 items-center text-center select-none text-slate-400">
            {/* Soft key 1: Recents ||| */}
            <div className="flex gap-[1.5px] justify-center items-center h-full opacity-60">
              <span className="w-[1px] h-[7px] bg-slate-500 rounded-sm" />
              <span className="w-[1px] h-[7px] bg-slate-500 rounded-sm" />
              <span className="w-[1px] h-[7px] bg-slate-500 rounded-sm" />
            </div>
            
            {/* Soft key 2: Home circular key */}
            <div className="flex justify-center items-center h-full opacity-60">
              <div className="w-[7px] h-[7px] rounded-full border border-slate-500" />
            </div>

            {/* Soft key 3: Back arrow < */}
            <div className="flex justify-center items-center h-full opacity-60 text-[8.5px] font-semibold text-slate-500 font-sans tracking-widest">
              &lt;
            </div>
          </div>

        </div>

      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#070512] flex flex-col justify-center items-center">
      
      {/* Dynamic Purple Spotlight & Grid Floor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(58,18,105,0.4)_0%,rgba(7,5,18,1)_70%)] pointer-events-none" />
      
      {/* Glowing horizontal laser backdrop */}
      <div className="absolute top-[68%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-uppercase mb-3 block">
            Seamless Management
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-cyan-400">Looks</span>
          </h2>
          <p className="body-muted max-w-lg mx-auto">
            Run your practice with clarity and confidence. Manage appointments, records, billing, and reporting in one unified workspace.
          </p>
        </div>

        {/* Studio Product Shelf Layout with laptop & mobile in light theme */}
        <div className="w-full flex flex-col items-center px-4 sm:px-0">
          
          <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 xl:gap-8">
            
            {/* 1. PHOTOREALISTIC MACBOOK PRO WRAPPER */}
            <div className="w-[680px] shrink-0 origin-top scale-[0.45] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-100 -mx-[187px] sm:-mx-[102px] md:-mx-[68px] lg:-mx-[34px] xl:mx-0 -mb-[249px] sm:-mb-[136px] md:-mb-[91px] lg:-mb-[45px] xl:mb-0 z-10 flex justify-center">
              <div className="relative w-[680px] shrink-0 select-none group">
              
              {/* Laptop Screen Body Bezel */}
              <div className="relative bg-[#000000] rounded-t-[20px] rounded-b-[4px] border border-gray-800 p-[10px] pb-[16px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8)]">
                {/* Thin inner protective screen border */}
                <div className="relative w-full aspect-[16/10] bg-[#e2e8f0] rounded-[10px] overflow-hidden border border-gray-900/60">
                  <RecreatedLaptopScreen />
                  
                  {/* Glass Sheen layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.04] pointer-events-none" />
                </div>
                
                {/* Camera notch cutout at the center top */}
                <div className="absolute left-1/2 top-[10px] -translate-x-1/2 w-16 h-3 bg-black rounded-b-md flex items-center justify-center gap-1.5 opacity-90">
                  <span className="w-1 h-1 rounded-full bg-blue-500/80" />
                  <span className="w-0.5 h-0.5 rounded-full bg-gray-500/80" />
                </div>
                
                {/* Aluminum Screen Stand Bezel - center with "MacBook Pro" signature */}
                <div className="absolute bottom-0 left-[10px] right-[10px] h-[16px] bg-[#06060c] flex items-center justify-center border-t border-white/[0.03]">
                  <span className="text-[7.5px] font-sans text-gray-500 font-medium tracking-[0.2em] uppercase opacity-75">
                    MacBook Pro
                  </span>
                </div>
              </div>

              {/* Realistic Aluminum Base Stand Wedge */}
              <div className="relative h-[12px] bg-gradient-to-b from-[#1c1c24] via-[#2d2d38] to-[#121217] rounded-b-[18px] border-t border-white/[0.2] shadow-lg flex items-center justify-center px-[40px]">
                {/* Center thumb depression groove */}
                <div className="w-[80px] h-[4px] bg-[#0c0c10] border-b border-white/[0.05] rounded-b-md" />
              </div>
              
              {/* Rubber Base Stand feet shadows */}
              <div className="absolute left-[3%] right-[3%] -bottom-[4px] h-[4px] bg-[#000000]/60 rounded-full blur-[2px] pointer-events-none" />

              {/* 1b. PREMIUM STUDIO MIRROR-REFLECTION (Below the product shelf line) */}
              <div className="hidden lg:block absolute top-[100%] left-0 right-0 pointer-events-none opacity-30 scale-y-[-1] select-none [mask-image:linear-gradient(to_top,rgba(0,0,0,0.8)_0%,transparent_35%)] z-0">
                {/* Reflected Screen Bezel */}
                <div className="relative bg-[#000000] rounded-t-[20px] rounded-b-[4px] p-[10px] pb-[16px] blur-[1px]">
                  <div className="relative w-full aspect-[16/10] bg-[#0c0a1a] rounded-[10px] overflow-hidden">
                    <RecreatedLaptopScreen />
                  </div>
                </div>
                {/* Reflected Stand Wedge */}
                <div className="h-[12px] bg-gradient-to-b from-[#1c1c24] to-[#121217] rounded-b-[18px]" />
              </div>

            </div>
            </div>

            {/* 2. PHOTOREALISTIC IPHONE 15 PRO WRAPPER */}
            <div className="relative w-[190px] select-none z-20 mt-12 md:mt-0 scale-[1.35] md:scale-100 origin-top mb-28 md:mb-0 mx-auto md:mx-0">
              
              {/* Titanium frame exterior with subtle high-contrast rim */}
              <div className="relative bg-[#1f1d29] border-[1.5px] border-zinc-700 rounded-[38px] shadow-[0_25px_50px_-8px_rgba(0,0,0,1)] p-[6px]">
                
                {/* Outer hardware buttons */}
                <div className="absolute left-[-2px] top-[100px] w-[2px] h-[22px] bg-zinc-600 rounded-l" />
                <div className="absolute left-[-2px] top-[130px] w-[2px] h-[22px] bg-zinc-600 rounded-l" />
                <div className="absolute right-[-2px] top-[115px] w-[2px] h-[32px] bg-zinc-600 rounded-r" />

                {/* Bezel & screen glass */}
                <div className="relative bg-[#000000] rounded-[32px] overflow-hidden border-[4.5px] border-black aspect-[9/19.5] flex flex-col justify-between">
                  <RecreatedPhoneScreen />
                  
                  {/* Dynamic Island Capsule overlay */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-16 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                    <span className="w-1 h-1 bg-zinc-900 rounded-full" />
                  </div>
                  
                  {/* Swipe Home Indicator light line */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-400 rounded-full z-20 pointer-events-none" />
                  
                  {/* Glass Reflection sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.03] pointer-events-none" />
                </div>
              </div>

              {/* 2b. PREMIUM IPHONE STUDIO MIRROR-REFLECTION (Below floor line) */}
              <div className="hidden lg:block absolute top-[100%] left-0 right-0 pointer-events-none opacity-30 scale-y-[-1] select-none [mask-image:linear-gradient(to_top,rgba(0,0,0,0.8)_0%,transparent_35%)] z-0">
                <div className="bg-[#1f1d29] rounded-[38px] p-[6px] blur-[1px]">
                  <div className="bg-[#000000] rounded-[32px] border-[4px] border-black aspect-[9/19.5]">
                    <RecreatedPhoneScreen />
                  </div>
                </div>
              </div>

            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
};

export default HowItLooks;
