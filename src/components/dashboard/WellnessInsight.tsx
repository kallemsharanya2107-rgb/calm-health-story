import { motion } from "framer-motion";
import { Sparkles, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";

const insights = [
  {
    type: "positive" as const,
    icon: <CheckCircle2 className="h-4 w-4" />,
    title: "Great sleep consistency",
    description: "You've maintained a regular sleep schedule for 5 days. This supports your medication effectiveness.",
  },
  {
    type: "neutral" as const,
    icon: <TrendingUp className="h-4 w-4" />,
    title: "Activity trending up",
    description: "Your step count increased by 15% this week. Any movement counts—your body remembers effort.",
  },
  {
    type: "gentle" as const,
    icon: <AlertCircle className="h-4 w-4" />,
    title: "Hydration reminder",
    description: "You're 2 glasses behind your usual pace. Staying hydrated supports your circulation and digestion.",
  },
];

const typeStyles = {
  positive: "bg-primary/10 text-primary border-primary/20",
  neutral: "bg-activity-light text-activity border-activity/20",
  gentle: "bg-hydration-light text-hydration border-hydration/20",
};

export function WellnessInsight() {
  return (
    <HealthCard delay={0.5}>
      <HealthCardHeader
        icon={<Sparkles className="h-5 w-5 text-primary" />}
        title="Wellness Insights"
        subtitle="Personalized observations"
      />
      
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className={`rounded-lg border p-4 ${typeStyles[insight.type]}`}
          >
            <div className="flex items-center gap-2 mb-2">
              {insight.icon}
              <p className="font-medium text-sm">{insight.title}</p>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">{insight.description}</p>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-4 text-xs italic text-muted-foreground pt-4 border-t border-border">
        Listening to your body is a form of intelligence.
      </p>
    </HealthCard>
  );
}
