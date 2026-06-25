
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

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* Trusted Partner Logo Strip */}
      <TrustedBy />

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* The Challenge */}
      <AnimatedSection>
        <ChallengeSection />
      </AnimatedSection>

      <AnimatedSection>
        <SectionDivider colorClass="via-destructive/30" />
      </AnimatedSection>

      {/* The Solution */}
      <AnimatedSection>
        <SolutionSection />
      </AnimatedSection>

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* For Clients, Therapists, & Admins Grid */}
      <AnimatedSection>
        <WorkflowTabs />
      </AnimatedSection>

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* How it works visual showcase */}
      <AnimatedSection>
        <PlatformPreview />
      </AnimatedSection>

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* Numbered setup stages */}
      <SetupSteps />

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* Interactive Pricing Cards */}
      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* FAQ Accordion component */}
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection>
        <SectionDivider />
      </AnimatedSection>

      {/* Conversion Banner Section */}
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
    </div>
  );
};

export default Home;
