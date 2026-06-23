/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Navbar, Footer } from "@components/layout";

// Lazy loaded routes for performance (code-splitting)
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const ForTherapists = lazy(() => import("./pages/ForTherapists"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Signup = lazy(() => import("./pages/Signup"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

// Simple fallback loader during chunk loading
const Loader = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-purple-900 border-t-[var(--primary-light)] rounded-full animate-spin"></div>
  </div>
);

// Scroll behaviors handler
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// Master Layout with conditional Header/Footer matching premium SaaS designs
function AppContent() {
  const location = useLocation();
  const isAuthPage = ["/signup"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#06040D] text-white">
      {/* Reset view scroll state */}
      <ScrollToTop />

      {/* Conditionally display translucent navigation Header */}
      {!isAuthPage && <Navbar />}

      {/* Main viewport area */}
      <main className="flex-grow flex flex-col">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/for-therapists" element={<ForTherapists />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Conditionally display footer layout */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
