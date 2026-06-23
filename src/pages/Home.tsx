
import { HeroSection, TrustedBy, PricingSection, FAQ, FinalCTA } from "@components/shared";
import { MetricsBar, HowItLooks, RolesTabs, HowItWorksSteps, ProblemStatement, SolutionSection } from "@components/home";
import { AnimatedSection } from "@components/wrappers";

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Partner Logo Strip */}
      <TrustedBy />

      {/* The Challenge */}
      <AnimatedSection>
        <ProblemStatement />
      </AnimatedSection>

      {/* The Solution */}
      <AnimatedSection>
        <SolutionSection />
      </AnimatedSection>

      {/* Metrics Bar */}
      <MetricsBar />

      {/* For Clients, Therapists, & Admins Grid */}
      <AnimatedSection>
        <RolesTabs />
      </AnimatedSection>

      {/* How it works visual showcase */}
      <AnimatedSection>
        <HowItLooks />
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
