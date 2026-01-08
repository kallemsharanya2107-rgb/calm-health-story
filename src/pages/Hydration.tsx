import { motion } from "framer-motion";
import { Droplets, Plus } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";

const dailyGoal = 8;
const currentIntake = 6;
const glasses = Array.from({ length: dailyGoal }, (_, i) => i < currentIntake);

const HydrationPage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Hydration Records"
        description="Staying hydrated supports circulation, digestion, and medication absorption. This log helps you build awareness, not pressure."
        icon={<Droplets className="h-6 w-6 text-hydration" />}
        affirmation="Caring for your body can be as simple as a glass of water."
      />

      {/* Quick Add */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex gap-3"
      >
        <Button className="gap-2 bg-hydration hover:bg-hydration/90 text-primary-foreground">
          <Plus className="h-4 w-4" />
          Add Glass
        </Button>
        <Button variant="outline" className="gap-2 border-hydration text-hydration hover:bg-hydration hover:text-primary-foreground">
          <Droplets className="h-4 w-4" />
          Custom Amount
        </Button>
      </motion.div>

      {/* Today's Progress */}
      <HealthCard category="hydration" className="mb-6" delay={0.15}>
        <HealthCardHeader
          icon={<Droplets className="h-5 w-5 text-hydration" />}
          title="Today's Hydration"
          subtitle="Keep it up—you're doing great"
        />
        
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl font-semibold text-foreground">{currentIntake}</span>
          <span className="text-xl text-muted-foreground">/ {dailyGoal} glasses</span>
        </div>

        {/* Glass visualization */}
        <div className="flex gap-2 mb-4">
          {glasses.map((filled, index) => (
            <motion.button
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={`flex h-14 w-10 items-end justify-center rounded-b-lg border-2 transition-all duration-300 ${
                filled
                  ? "bg-hydration/20 border-hydration"
                  : "bg-secondary border-border hover:border-hydration/50"
              }`}
            >
              {filled && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "80%" }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  className="w-full rounded-b bg-hydration"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-3 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentIntake / dailyGoal) * 100}%` }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="h-full rounded-full bg-hydration"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {dailyGoal - currentIntake} more glasses to reach your daily goal
        </p>
      </HealthCard>

      {/* Weekly Summary */}
      <HealthCard delay={0.3}>
        <HealthCardHeader
          icon={<Droplets className="h-5 w-5 text-hydration" />}
          title="Weekly Overview"
          subtitle="Your hydration patterns"
        />
        
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
            const dayIntake = [7, 8, 6, 8, 7, 5, 6][index];
            const percentage = (dayIntake / dailyGoal) * 100;
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="text-center"
              >
                <div className="h-24 bg-secondary rounded-lg overflow-hidden flex flex-col justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${percentage}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    className={`w-full ${percentage >= 100 ? "bg-primary" : "bg-hydration"}`}
                  />
                </div>
                <p className="mt-2 text-xs font-medium text-foreground">{dayIntake}</p>
                <p className="text-xs text-muted-foreground">{day}</p>
              </motion.div>
            );
          })}
        </div>
      </HealthCard>
    </AppLayout>
  );
};

export default HydrationPage;
