import { motion } from "framer-motion";
import { Clock, Pill, Heart, Moon, Droplets, FileText, Activity, Filter } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    date: "Today",
    events: [
      { icon: <Heart className="h-4 w-4" />, category: "vitals", title: "Blood pressure recorded", detail: "120/80 mmHg", time: "10:30 AM" },
      { icon: <Pill className="h-4 w-4" />, category: "medication", title: "Vitamin D taken", detail: "2000 IU", time: "8:00 AM" },
      { icon: <Pill className="h-4 w-4" />, category: "medication", title: "Metformin taken", detail: "500mg - morning dose", time: "8:00 AM" },
      { icon: <Pill className="h-4 w-4" />, category: "medication", title: "Lisinopril taken", detail: "10mg", time: "8:00 AM" },
    ],
  },
  {
    date: "Yesterday",
    events: [
      { icon: <Moon className="h-4 w-4" />, category: "sleep", title: "Sleep recorded", detail: "7.5 hours - good quality", time: "7:00 AM" },
      { icon: <Droplets className="h-4 w-4" />, category: "hydration", title: "Daily hydration goal met", detail: "8 glasses", time: "6:00 PM" },
      { icon: <FileText className="h-4 w-4" />, category: "symptoms", title: "Mild headache logged", detail: "Resolved after rest", time: "2:00 PM" },
      { icon: <Activity className="h-4 w-4" />, category: "activity", title: "Activity goal reached", detail: "8,432 steps", time: "8:00 PM" },
    ],
  },
  {
    date: "Jan 6, 2026",
    events: [
      { icon: <Heart className="h-4 w-4" />, category: "vitals", title: "Blood glucose checked", detail: "98 mg/dL - fasting", time: "7:30 AM" },
      { icon: <Pill className="h-4 w-4" />, category: "medication", title: "All medications taken", detail: "4 of 4", time: "8:00 PM" },
    ],
  },
  {
    date: "Jan 5, 2026",
    events: [
      { icon: <FileText className="h-4 w-4" />, category: "symptoms", title: "Fatigue noted", detail: "Low energy, resolved next day", time: "3:00 PM" },
      { icon: <Moon className="h-4 w-4" />, category: "sleep", title: "Short sleep night", detail: "5.5 hours - stress related", time: "6:00 AM" },
    ],
  },
];

const categoryColors: Record<string, string> = {
  medication: "bg-medication-light text-medication border-medication/30",
  vitals: "bg-vitals-light text-vitals border-vitals/30",
  sleep: "bg-sleep-light text-sleep border-sleep/30",
  hydration: "bg-hydration-light text-hydration border-hydration/30",
  activity: "bg-activity-light text-activity border-activity/30",
  symptoms: "bg-symptoms-light text-symptoms border-symptoms/30",
};

const TimelinePage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Health Timeline"
        description="Health unfolds over time. This timeline shows how different parts of your health connect—medications, symptoms, vitals, and daily patterns."
        icon={<Clock className="h-6 w-6 text-primary" />}
        affirmation="Progress is easier to see when you look at the whole story."
      />

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex flex-wrap gap-2"
      >
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" />
          All Events
        </Button>
        <Button variant="ghost" size="sm" className="text-medication">Medications</Button>
        <Button variant="ghost" size="sm" className="text-vitals">Vitals</Button>
        <Button variant="ghost" size="sm" className="text-sleep">Sleep</Button>
        <Button variant="ghost" size="sm" className="text-hydration">Hydration</Button>
        <Button variant="ghost" size="sm" className="text-symptoms">Symptoms</Button>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-8">
        {timelineEvents.map((day, dayIndex) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 + dayIndex * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 sticky top-0 bg-background py-2 z-10">
              {day.date}
            </h3>
            
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
              
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + dayIndex * 0.1 + eventIndex * 0.05 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-5 flex h-6 w-6 items-center justify-center rounded-full border ${categoryColors[event.category]}`}
                    >
                      {event.icon}
                    </div>
                    
                    {/* Event card */}
                    <div className="rounded-xl bg-card p-4 shadow-soft border border-border/50 hover:shadow-card transition-shadow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">{event.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{event.detail}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{event.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <Button variant="outline" className="text-muted-foreground">
          Load earlier events
        </Button>
      </motion.div>
    </AppLayout>
  );
};

export default TimelinePage;
