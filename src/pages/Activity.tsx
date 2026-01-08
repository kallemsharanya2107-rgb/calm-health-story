import { motion } from "framer-motion";
import { Activity, Plus, TrendingUp, Footprints, Timer, Flame } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader, HealthCardValue } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";

const todayStats = [
  { icon: <Footprints className="h-5 w-5 text-activity" />, label: "Steps", value: "6,234", goal: "10,000" },
  { icon: <Timer className="h-5 w-5 text-activity" />, label: "Active Minutes", value: "32", goal: "30" },
  { icon: <Flame className="h-5 w-5 text-activity" />, label: "Calories", value: "287", goal: "400" },
];

const weeklySteps = [
  { day: "Mon", steps: 8432 },
  { day: "Tue", steps: 6218 },
  { day: "Wed", steps: 9876 },
  { day: "Thu", steps: 7654 },
  { day: "Fri", steps: 5432 },
  { day: "Sat", steps: 11234 },
  { day: "Sun", steps: 6234 },
];

const ActivityPage = () => {
  const maxSteps = Math.max(...weeklySteps.map((d) => d.steps));

  return (
    <AppLayout>
      <SectionIntro
        title="Activity & Movement"
        description="Daily movement supports heart health, mood, and recovery. This log helps you notice patterns over time, not chase numbers."
        icon={<Activity className="h-6 w-6 text-activity" />}
        affirmation="Any movement counts. Your body remembers effort, not perfection."
      />

      {/* Log Button */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Button className="gap-2 bg-activity hover:bg-activity/90 text-primary-foreground">
          <Plus className="h-4 w-4" />
          Log Workout
        </Button>
      </motion.div>

      {/* Today's Stats */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        {todayStats.map((stat, index) => (
          <HealthCard key={stat.label} category="activity" delay={0.15 + index * 0.08}>
            <div className="flex items-center gap-3 mb-3">
              {stat.icon}
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">/ {stat.goal}</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min((parseInt(stat.value.replace(",", "")) / parseInt(stat.goal.replace(",", ""))) * 100, 100)}%`,
                }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="h-full rounded-full bg-activity"
              />
            </div>
          </HealthCard>
        ))}
      </div>

      {/* Weekly Steps Chart */}
      <HealthCard delay={0.4}>
        <HealthCardHeader
          icon={<TrendingUp className="h-5 w-5 text-activity" />}
          title="This Week's Steps"
          subtitle="Daily movement patterns"
        />

        <div className="flex items-end justify-between gap-3 h-48 mt-4">
          {weeklySteps.map((day, index) => {
            const height = (day.steps / maxSteps) * 100;
            const isToday = day.day === "Sun";
            return (
              <motion.div
                key={day.day}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.5, ease: "easeOut" }}
                className="relative flex-1 flex flex-col items-center"
              >
                <div
                  className={`w-full rounded-t-lg transition-colors ${
                    isToday ? "bg-activity" : "bg-activity/50"
                  }`}
                  style={{ height: "100%" }}
                />
                <div className="absolute -top-6 text-xs font-medium text-foreground whitespace-nowrap">
                  {(day.steps / 1000).toFixed(1)}k
                </div>
                <div className={`mt-2 text-xs ${isToday ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  {day.day}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          Weekly average: <span className="font-medium text-foreground">7,869</span> steps
        </p>
      </HealthCard>
    </AppLayout>
  );
};

export default ActivityPage;
