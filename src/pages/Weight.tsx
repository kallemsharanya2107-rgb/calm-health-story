import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader, HealthCardValue } from "@/components/ui/health-card";
import { Scale, Plus, TrendingDown, TrendingUp, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const currentWeight = 165;
const startWeight = 172;
const goalWeight = 160;
const currentBMI = 24.2;

const weightHistory = [
  { date: "Jan 8", weight: 165 },
  { date: "Jan 1", weight: 166 },
  { date: "Dec 25", weight: 168 },
  { date: "Dec 18", weight: 169 },
  { date: "Dec 11", weight: 170 },
  { date: "Dec 4", weight: 171 },
];

const WeightPage = () => {
  const weightChange = startWeight - currentWeight;
  const toGoal = currentWeight - goalWeight;

  return (
    <AppLayout>
      <SectionIntro
        title="Weight & BMI Records"
        description="Weight and BMI are medical reference points—not measures of worth. This record focuses on change over time, not judgment."
        icon={<Scale className="h-6 w-6 text-weight" />}
        affirmation="Your body is allowed to change. Health is not static."
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Button className="gap-2 bg-weight hover:bg-weight/90 text-primary-foreground">
          <Plus className="h-4 w-4" />
          Log Weight
        </Button>
      </motion.div>

      {/* Current Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <HealthCard category="weight" delay={0.15}>
          <p className="text-sm text-muted-foreground mb-2">Current Weight</p>
          <HealthCardValue value={currentWeight} unit="lbs" size="lg" />
        </HealthCard>

        <HealthCard category="weight" delay={0.2}>
          <p className="text-sm text-muted-foreground mb-2">BMI</p>
          <HealthCardValue value={currentBMI} size="lg" />
          <span className="mt-2 inline-block rounded-full bg-weight-light px-2 py-0.5 text-xs font-medium text-weight">
            Healthy range
          </span>
        </HealthCard>

        <HealthCard category="weight" delay={0.25}>
          <p className="text-sm text-muted-foreground mb-2">Change</p>
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-primary" />
            <HealthCardValue value={`-${weightChange}`} unit="lbs" size="lg" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Since tracking started</p>
        </HealthCard>

        <HealthCard category="weight" delay={0.3}>
          <p className="text-sm text-muted-foreground mb-2">To Goal</p>
          <HealthCardValue value={toGoal} unit="lbs" size="lg" />
          <p className="mt-1 text-xs text-muted-foreground">Goal: {goalWeight} lbs</p>
        </HealthCard>
      </div>

      {/* History */}
      <HealthCard delay={0.35}>
        <HealthCardHeader
          icon={<Scale className="h-5 w-5 text-weight" />}
          title="Recent Entries"
          subtitle="Your weight over time"
        />

        <div className="space-y-3">
          {weightHistory.map((entry, index) => (
            <motion.div
              key={entry.date}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
            >
              <span className="text-sm text-muted-foreground">{entry.date}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">{entry.weight} lbs</span>
                {index < weightHistory.length - 1 && (
                  <span className={`text-xs ${entry.weight < weightHistory[index + 1].weight ? "text-primary" : "text-muted-foreground"}`}>
                    {entry.weight < weightHistory[index + 1].weight ? (
                      <TrendingDown className="h-4 w-4" />
                    ) : entry.weight > weightHistory[index + 1].weight ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <Minus className="h-4 w-4" />
                    )}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </HealthCard>
    </AppLayout>
  );
};

export default WeightPage;
