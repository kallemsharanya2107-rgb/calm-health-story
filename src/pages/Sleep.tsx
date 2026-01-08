import { motion } from "framer-motion";
import { Moon, Plus, Bed, Sun } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader, HealthCardValue } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";

const weeklyData = [
  { day: "Mon", hours: 7.5, quality: "good" },
  { day: "Tue", hours: 6.5, quality: "fair" },
  { day: "Wed", hours: 8.0, quality: "great" },
  { day: "Thu", hours: 7.0, quality: "good" },
  { day: "Fri", hours: 6.0, quality: "fair" },
  { day: "Sat", hours: 8.5, quality: "great" },
  { day: "Sun", hours: 7.5, quality: "good" },
];

const getQualityColor = (quality: string) => {
  switch (quality) {
    case "great":
      return "bg-primary";
    case "good":
      return "bg-sleep";
    case "fair":
      return "bg-muted-foreground";
    default:
      return "bg-muted";
  }
};

const SleepPage = () => {
  const avgSleep = (weeklyData.reduce((acc, d) => acc + d.hours, 0) / weeklyData.length).toFixed(1);
  const lastNight = weeklyData[weeklyData.length - 1];

  return (
    <AppLayout>
      <SectionIntro
        title="Sleep Records"
        description="Sleep affects everything—from energy to medication effectiveness. This record focuses on consistency rather than ideal numbers."
        icon={<Moon className="h-6 w-6 text-sleep" />}
        affirmation="Rest is not a reward. It's a necessity."
      />

      {/* Log Entry Button */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Button className="gap-2 bg-sleep hover:bg-sleep/90 text-primary-foreground">
          <Plus className="h-4 w-4" />
          Log Last Night's Sleep
        </Button>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <HealthCard category="sleep" delay={0.15}>
          <HealthCardHeader
            icon={<Bed className="h-5 w-5 text-sleep" />}
            title="Last Night"
            subtitle="Sunday, Jan 7"
          />
          <HealthCardValue value={lastNight.hours} unit="hours" size="lg" />
          <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium capitalize bg-sleep-light text-sleep`}>
            {lastNight.quality} quality
          </span>
        </HealthCard>

        <HealthCard category="sleep" delay={0.2}>
          <HealthCardHeader
            icon={<Moon className="h-5 w-5 text-sleep" />}
            title="Weekly Average"
            subtitle="Last 7 days"
          />
          <HealthCardValue value={avgSleep} unit="hours" size="lg" />
          <p className="mt-2 text-xs text-muted-foreground">
            Consistent pattern maintained
          </p>
        </HealthCard>

        <HealthCard category="sleep" delay={0.25}>
          <HealthCardHeader
            icon={<Sun className="h-5 w-5 text-activity" />}
            title="Sleep Schedule"
            subtitle="Your rhythm"
          />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Bedtime</span>
              <span className="text-sm font-medium text-foreground">10:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Wake time</span>
              <span className="text-sm font-medium text-foreground">6:00 AM</span>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Weekly Chart */}
      <HealthCard delay={0.3}>
        <HealthCardHeader
          icon={<Moon className="h-5 w-5 text-sleep" />}
          title="This Week"
          subtitle="Sleep duration by day"
        />
        
        <div className="flex items-end justify-between gap-2 h-48 mt-4">
          {weeklyData.map((day, index) => {
            const height = (day.hours / 10) * 100;
            return (
              <motion.div
                key={day.day}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.5, ease: "easeOut" }}
                className="relative flex-1 flex flex-col items-center"
              >
                <div
                  className={`w-full rounded-t-lg ${getQualityColor(day.quality)} transition-colors`}
                  style={{ height: "100%" }}
                />
                <div className="absolute -top-6 text-xs font-medium text-foreground">
                  {day.hours}h
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{day.day}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Great</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-sleep" />
            <span className="text-muted-foreground">Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-muted-foreground" />
            <span className="text-muted-foreground">Fair</span>
          </div>
        </div>
      </HealthCard>
    </AppLayout>
  );
};

export default SleepPage;
