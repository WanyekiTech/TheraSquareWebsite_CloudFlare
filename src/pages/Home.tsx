import { motion } from "motion/react";
import HeroSection from "../components/hero/HeroSection";
import TrustedBy from "../components/home/TrustedBy";
import MetricsBar from "../components/home/MetricsBar";
import HowItWorksVisual from "../components/home/HowItWorksVisual";
import RolesTabs from "../components/home/RolesTabs";
import HowItWorksSteps from "../components/home/HowItWorksSteps";
import PricingSection from "../components/home/PricingSection";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import AnimatedSection from "../components/AnimatedSection";

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Partner Logo Strip */}
      <TrustedBy />

      {/* Metrics Bar */}
      <MetricsBar />

      {/* For Clients, Therapists, & Admins Grid */}
      <AnimatedSection>
        <RolesTabs />
      </AnimatedSection>

      {/* How it works visual showcase */}
      <AnimatedSection>
        <HowItWorksVisual />
      </AnimatedSection>

      {/* Numbered setup stages */}
      <HowItWorksSteps />

      {/* Interactive Pricing Cards */}
      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>

      {/* FAQ Accordion component */}
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      {/* Conversion Banner Section */}
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
    </div>
  );
};

export default Home;
