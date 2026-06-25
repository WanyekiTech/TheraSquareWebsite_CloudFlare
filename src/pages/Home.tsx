
import { HeroSection, TrustedBy, PricingSection, FAQ, FinalCTA } from "@components/shared";
import { MetricsBar, PlatformPreview, WorkflowTabs, SetupSteps, ChallengeSection, SolutionSection } from "@components/home";
import { AnimatedSection } from "@components/wrappers";
import { SectionDivider } from "@components/ui";

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Metrics Bar */}
      <MetricsBar />

      <SectionDivider />

      {/* Trusted Partner Logo Strip */}
      <TrustedBy />

      <SectionDivider />

      {/* The Challenge */}
      <AnimatedSection>
        <ChallengeSection />
      </AnimatedSection>

      <SectionDivider colorClass="via-destructive/30" />

      {/* The Solution */}
      <AnimatedSection>
        <SolutionSection />
      </AnimatedSection>

      <SectionDivider />

      {/* For Clients, Therapists, & Admins Grid */}
      <AnimatedSection>
        <WorkflowTabs />
      </AnimatedSection>

      <SectionDivider />

      {/* How it works visual showcase */}
      <AnimatedSection>
        <PlatformPreview />
      </AnimatedSection>

      {/* Numbered setup stages */}
      <SetupSteps />

      <SectionDivider />

      {/* Interactive Pricing Cards */}
      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>

      <SectionDivider />

      {/* FAQ Accordion component */}
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <SectionDivider />

      {/* Conversion Banner Section */}
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
    </div>
  );
};

export default Home;
