import {
  FolderSearch,
  CalendarX,
  Clock,
  Wallet,
  TrendingDown,
  Users,
  CalendarCheck,
  FileText,
  CreditCard,
  BarChart,
  LucideIcon
} from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const PROBLEM_STATEMENTS: FeatureItem[] = [
  {
    id: "prob-1",
    title: "Client records and critical follow-ups easily fall through the cracks",
    icon: FolderSearch,
  },
  {
    id: "prob-2",
    title: "Scheduling conflicts and missed appointments disrupt your daily workflow",
    icon: CalendarX,
  },
  {
    id: "prob-3",
    title: "Writing session notes takes too much time and delays your day",
    icon: Clock,
  },
  {
    id: "prob-4",
    title: "Manual billing and payment collection create frustrating inconsistencies",
    icon: Wallet,
  },
  {
    id: "prob-5",
    title: "Managing a growing practice and tracking revenue becomes chaotic",
    icon: TrendingDown,
  }
];

export const SOLUTION_FEATURES: FeatureItem[] = [
  {
    id: "sol-1",
    title: "Centralized Client Management",
    icon: Users,
  },
  {
    id: "sol-2",
    title: "Smart Appointment Scheduling",
    icon: CalendarCheck,
  },
  {
    id: "sol-3",
    title: "AI-Powered Clinical Notes (Voice Dictation, SOAP, BIRP, DAP)",
    icon: FileText,
  },
  {
    id: "sol-4",
    title: "Integrated Billing & Payments (M-Pesa, Card)",
    icon: CreditCard,
  },
  {
    id: "sol-5",
    title: "Practice Analytics & Multi-User Management",
    icon: BarChart,
  }
];
