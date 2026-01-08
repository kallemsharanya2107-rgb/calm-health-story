import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";
import { Calendar, Plus, Droplet, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const currentCycle = {
  day: 14,
  phase: "Ovulation",
  nextPeriod: "12 days",
  cycleLength: 28,
};

const symptoms = [
  { name: "Mild cramps", severity: "low" },
  { name: "Increased energy", severity: "positive" },
];

const CyclePage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Women's Health & Menstrual Records"
        description="Menstrual cycles reflect hormonal, physical, and emotional health. This section records patterns to support understanding—not prediction pressure."
        icon={<Calendar className="h-6 w-6 text-cycle" />}
        affirmation="Your cycle is information, not an inconvenience."
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex gap-3"
      >
        <Button className="gap-2 bg-cycle hover:bg-cycle/90 text-primary-foreground">
          <Droplet className="h-4 w-4" />
          Log Period
        </Button>
        <Button variant="outline" className="gap-2 border-cycle text-cycle hover:bg-cycle hover:text-primary-foreground">
          <Plus className="h-4 w-4" />
          Add Symptom
        </Button>
      </motion.div>

      {/* Current Cycle Status */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <HealthCard category="cycle" delay={0.15}>
          <p className="text-sm text-muted-foreground mb-2">Cycle Day</p>
          <span className="text-4xl font-semibold text-foreground">{currentCycle.day}</span>
          <p className="mt-1 text-xs text-muted-foreground">of {currentCycle.cycleLength} days</p>
        </HealthCard>

        <HealthCard category="cycle" delay={0.2}>
          <p className="text-sm text-muted-foreground mb-2">Current Phase</p>
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-cycle" />
            <span className="text-xl font-semibold text-foreground">{currentCycle.phase}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Peak fertility window</p>
        </HealthCard>

        <HealthCard category="cycle" delay={0.25}>
          <p className="text-sm text-muted-foreground mb-2">Next Period</p>
          <span className="text-xl font-semibold text-foreground">~{currentCycle.nextPeriod}</span>
          <p className="mt-1 text-xs text-muted-foreground">Based on your average</p>
        </HealthCard>

        <HealthCard category="cycle" delay={0.3}>
          <p className="text-sm text-muted-foreground mb-2">Today's Symptoms</p>
          <div className="space-y-1">
            {symptoms.map((symptom, i) => (
              <span
                key={i}
                className={`inline-block mr-2 rounded-full px-2 py-0.5 text-xs font-medium ${
                  symptom.severity === "positive"
                    ? "bg-primary/10 text-primary"
                    : "bg-cycle-light text-cycle"
                }`}
              >
                {symptom.name}
              </span>
            ))}
          </div>
        </HealthCard>
      </div>

      {/* Cycle Calendar Placeholder */}
      <HealthCard delay={0.35}>
        <HealthCardHeader
          icon={<Calendar className="h-5 w-5 text-cycle" />}
          title="Cycle Overview"
          subtitle="Your menstrual calendar"
        />

        <div className="grid grid-cols-7 gap-2 mt-4">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
            <div key={i} className="text-center text-xs font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 28 }, (_, i) => {
            const day = i + 1;
            const isPeriod = day <= 5;
            const isOvulation = day >= 12 && day <= 16;
            const isToday = day === 14;
            
            return (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.01 }}
                className={`aspect-square flex items-center justify-center rounded-full text-sm transition-colors ${
                  isPeriod
                    ? "bg-cycle text-primary-foreground"
                    : isOvulation
                    ? "bg-cycle-light text-cycle"
                    : isToday
                    ? "ring-2 ring-cycle text-foreground font-medium"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {day}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-cycle" />
            <span className="text-muted-foreground">Period</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-cycle-light" />
            <span className="text-muted-foreground">Fertile window</span>
          </div>
        </div>
      </HealthCard>
    </AppLayout>
  );
};

export default CyclePage;
