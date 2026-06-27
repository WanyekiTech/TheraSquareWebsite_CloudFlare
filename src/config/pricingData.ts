export type PlanType = "Solo" | "Professional" | "Enterprise";
export type BillingCycle = "Monthly" | "Annual";

export interface PlanConfig {
  name: PlanType;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  cta: string;
  recommended: boolean;
}

export const PRICING_PLANS: PlanConfig[] = [
  {
    name: "Solo",
    tagline: "Best for solo therapists",
    priceMonthly: 2000,
    priceAnnual: 1600, // 20% savings
    features: [
      "Up to 500 clients",
      "1 therapist account",
      "50 AI notes/month",
      "Session booking & calendar",
      "M-Pesa & card payments",
      "2FA security",
      "Custom subdomain"
    ],
    cta: "Start Subscription",
    recommended: false
  },
  {
    name: "Professional",
    tagline: "Best for group practices",
    priceMonthly: 3000,
    priceAnnual: 2400,
    features: [
      "Unlimited clients",
      "3+ Therapist accounts",
      "2 Front office users",
      "200+ AI notes/month",
      "Session booking & calendar",
      "All core features included",
      "Custom subdomain",
      "Priority support"
    ],
    cta: "Start Subscription",
    recommended: true
  },
  {
    name: "Enterprise",
    tagline: "Best for large therapy organizations",
    priceMonthly: 8000,
    priceAnnual: 6400,
    features: [
      "Unlimited clients",
      "10+ Therapist accounts",
      "3+ Front office users",
      "500+ AI notes/month",
      "Session booking & calendar",
      "Everything in professional",
      "Custom domain/subdomain setup",
      "Dedicated account manager",
      "Custom scaling & usage",
      "Compliance support"
    ],
    cta: "Start Subscription",
    recommended: false
  }
];
