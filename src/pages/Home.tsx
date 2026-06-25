
import { HeroSection, TrustedBy, PricingSection, FAQ, FinalCTA } from "@components/shared";
import { MetricsBar, PlatformPreview, WorkflowTabs, SetupSteps, ChallengeSection, SolutionSection } from "@components/home";
import { AnimatedSection } from "@components/wrappers";

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Metrics Bar */}
      <MetricsBar />

      {/* Trusted Partner Logo Strip */}
      <TrustedBy />

      {/* The Challenge */}
      <AnimatedSection>
        <ChallengeSection />
      </AnimatedSection>

      {/* The Solution */}
      <AnimatedSection>
        <SolutionSection />
      </AnimatedSection>

      {/* For Clients, Therapists, & Admins Grid */}
      <AnimatedSection>
        <WorkflowTabs />
      </AnimatedSection>

      {/* How it works visual showcase */}
      <AnimatedSection>
        <PlatformPreview />
      </AnimatedSection>

      {/* Numbered setup stages */}
      <SetupSteps />

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
