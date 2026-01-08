import { motion } from "framer-motion";
import { Pill, Heart, Moon, Droplets, Activity, CheckCircle2 } from "lucide-react";
import { HealthCard, HealthCardHeader, HealthCardValue } from "@/components/ui/health-card";

const stats = [
  {
    category: "medication" as const,
    icon: <Pill className="h-5 w-5 text-medication" />,
    title: "Medications",
    subtitle: "Today's adherence",
    value: "3/4",
    unit: "taken",
    status: "1 remaining",
  },
  {
    category: "vitals" as const,
    icon: <Heart className="h-5 w-5 text-vitals" />,
    title: "Heart Rate",
    subtitle: "Latest reading",
    value: "72",
    unit: "bpm",
    trend: "stable" as const,
  },
  {
    category: "sleep" as const,
    icon: <Moon className="h-5 w-5 text-sleep" />,
    title: "Sleep",
    subtitle: "Last night",
    value: "7.5",
    unit: "hours",
    trend: "up" as const,
  },
  {
    category: "hydration" as const,
    icon: <Droplets className="h-5 w-5 text-hydration" />,
    title: "Hydration",
    subtitle: "Today's intake",
    value: "6",
    unit: "glasses",
    status: "2 more to goal",
  },
  {
    category: "activity" as const,
    icon: <Activity className="h-5 w-5 text-activity" />,
    title: "Activity",
    subtitle: "Steps today",
    value: "6,234",
    unit: "steps",
    trend: "up" as const,
  },
];

export function QuickStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {stats.map((stat, index) => (
        <HealthCard key={stat.title} category={stat.category} delay={index * 0.08}>
          <HealthCardHeader
            icon={stat.icon}
            title={stat.title}
            subtitle={stat.subtitle}
          />
          <HealthCardValue
            value={stat.value}
            unit={stat.unit}
            trend={stat.trend}
            size="md"
          />
          {stat.status && (
            <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              {stat.status}
            </p>
          )}
        </HealthCard>
      ))}
    </div>
  );
}
