import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HealthCategory = "medication" | "vitals" | "sleep" | "hydration" | "activity" | "weight" | "cycle" | "symptoms" | "default";

interface HealthCardProps {
  children: ReactNode;
  category?: HealthCategory;
  className?: string;
  delay?: number;
}

const categoryStyles: Record<HealthCategory, string> = {
  medication: "border-l-4 border-l-medication",
  vitals: "border-l-4 border-l-vitals",
  sleep: "border-l-4 border-l-sleep",
  hydration: "border-l-4 border-l-hydration",
  activity: "border-l-4 border-l-activity",
  weight: "border-l-4 border-l-weight",
  cycle: "border-l-4 border-l-cycle",
  symptoms: "border-l-4 border-l-symptoms",
  default: "",
};

export function HealthCard({ children, category = "default", className, delay = 0 }: HealthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className={cn(
        "rounded-xl bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-elevated",
        categoryStyles[category],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface HealthCardHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function HealthCardHeader({ icon, title, subtitle, action }: HealthCardHeaderProps) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

interface HealthCardValueProps {
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "stable";
  size?: "sm" | "md" | "lg";
}

export function HealthCardValue({ value, unit, trend, size = "lg" }: HealthCardValueProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-baseline gap-2">
      <span className={cn("font-semibold text-foreground", sizeClasses[size])}>{value}</span>
      {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      {trend && (
        <span
          className={cn(
            "text-xs font-medium",
            trend === "up" && "text-primary",
            trend === "down" && "text-destructive",
            trend === "stable" && "text-muted-foreground"
          )}
        >
          {trend === "up" && "↑"}
          {trend === "down" && "↓"}
          {trend === "stable" && "→"}
        </span>
      )}
    </div>
  );
}

interface HealthCardAffirmationProps {
  children: ReactNode;
}

export function HealthCardAffirmation({ children }: HealthCardAffirmationProps) {
  return (
    <p className="mt-4 text-sm italic text-muted-foreground border-t border-border pt-4">
      {children}
    </p>
  );
}
