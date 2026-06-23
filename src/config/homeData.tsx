import {
  Clock,
  CalendarX,
  FolderSearch,
  Wallet,
  Settings,
  Users,
  CalendarCheck,
  FileText,
  CreditCard,
  BarChart,
  Building,
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
    title: "Session notes take too long and are often delayed",
    icon: Clock,
  },
  {
    id: "prob-2",
    title: "Scheduling conflicts and missed appointments disrupt workflow",
    icon: CalendarX,
  },
  {
    id: "prob-3",
    title: "Client records are scattered across files and devices",
    icon: FolderSearch,
  },
  {
    id: "prob-4",
    title: "Manual billing and payments create inconsistencies",
    icon: Wallet,
  },
  {
    id: "prob-5",
    title: "Using multiple tools slows down daily operations",
    icon: Settings,
  }
];

export const SOLUTION_FEATURES: FeatureItem[] = [
  {
    id: "sol-1",
    title: "Client management",
    icon: Users,
  },
  {
    id: "sol-2",
    title: "Appointment scheduling",
    icon: CalendarCheck,
  },
  {
    id: "sol-3",
    title: "Clinical notes (SOAP, structured templates, AI-assisted)",
    icon: FileText,
  },
  {
    id: "sol-4",
    title: "Billing & payments (M-Pesa, Card)",
    icon: CreditCard,
  },
  {
    id: "sol-5",
    title: "Practice analytics",
    icon: BarChart,
  },
  {
    id: "sol-6",
    title: "Multi-user clinic management",
    icon: Building,
  }
];
