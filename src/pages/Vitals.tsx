import { motion } from "framer-motion";
import { Heart, Plus, TrendingDown, TrendingUp, Minus } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader, HealthCardValue } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";

const vitals = [
  {
    id: 1,
    name: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    trend: "stable" as const,
    lastRecorded: "2 hours ago",
    normal: true,
  },
  {
    id: 2,
    name: "Heart Rate",
    value: "72",
    unit: "bpm",
    trend: "stable" as const,
    lastRecorded: "2 hours ago",
    normal: true,
  },
  {
    id: 3,
    name: "Blood Glucose",
    value: "95",
    unit: "mg/dL",
    trend: "down" as const,
    lastRecorded: "4 hours ago",
    normal: true,
  },
  {
    id: 4,
    name: "Oxygen Saturation",
    value: "98",
    unit: "%",
    trend: "stable" as const,
    lastRecorded: "Yesterday",
    normal: true,
  },
];

const recentReadings = [
  { date: "Jan 8, 2026", time: "10:30 AM", bp: "120/80", hr: "72", glucose: "95" },
  { date: "Jan 7, 2026", time: "8:15 AM", bp: "118/78", hr: "68", glucose: "102" },
  { date: "Jan 6, 2026", time: "9:00 AM", bp: "122/82", hr: "74", glucose: "98" },
  { date: "Jan 5, 2026", time: "8:45 AM", bp: "119/79", hr: "70", glucose: "100" },
  { date: "Jan 4, 2026", time: "10:00 AM", bp: "121/81", hr: "71", glucose: "97" },
];

const getTrendIcon = (trend: "up" | "down" | "stable") => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-vitals" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-primary" />;
    default:
      return <Minus className="h-4 w-4 text-muted-foreground" />;
  }
};

const VitalsPage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Vitals Records"
        description="Vital signs offer important clues about how your body is responding to treatment, stress, and daily life. This section helps you track patterns over time."
        icon={<Heart className="h-6 w-6 text-vitals" />}
        affirmation="Noticing your body is an act of care, not worry."
      />

      {/* Quick Entry Button */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Button className="gap-2 bg-vitals hover:bg-vitals/90 text-primary-foreground">
          <Plus className="h-4 w-4" />
          Record New Vitals
        </Button>
      </motion.div>

      {/* Current Vitals Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {vitals.map((vital, index) => (
          <HealthCard key={vital.id} category="vitals" delay={0.15 + index * 0.08}>
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-medium text-muted-foreground">{vital.name}</p>
              {getTrendIcon(vital.trend)}
            </div>
            <HealthCardValue value={vital.value} unit={vital.unit} size="lg" />
            <p className="mt-2 text-xs text-muted-foreground">{vital.lastRecorded}</p>
            {vital.normal && (
              <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Normal range
              </span>
            )}
          </HealthCard>
        ))}
      </div>

      {/* Recent Readings Table */}
      <HealthCard delay={0.4}>
        <HealthCardHeader
          icon={<Heart className="h-5 w-5 text-vitals" />}
          title="Recent Readings"
          subtitle="Your vitals history"
        />
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Time</th>
                <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Blood Pressure</th>
                <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Heart Rate</th>
                <th className="pb-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Glucose</th>
              </tr>
            </thead>
            <tbody>
              {recentReadings.map((reading, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="py-3 text-sm text-foreground">{reading.date}</td>
                  <td className="py-3 text-sm text-muted-foreground">{reading.time}</td>
                  <td className="py-3 text-sm font-medium text-foreground">{reading.bp} mmHg</td>
                  <td className="py-3 text-sm font-medium text-foreground">{reading.hr} bpm</td>
                  <td className="py-3 text-sm font-medium text-foreground">{reading.glucose} mg/dL</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </HealthCard>
    </AppLayout>
  );
};

export default VitalsPage;
