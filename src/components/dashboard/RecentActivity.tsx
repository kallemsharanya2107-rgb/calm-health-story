import { motion } from "framer-motion";
import { Clock, Pill, Heart, Moon, Droplets, FileText } from "lucide-react";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";

const activities = [
  {
    icon: <Heart className="h-4 w-4 text-vitals" />,
    title: "Blood pressure recorded",
    subtitle: "120/80 mmHg",
    time: "2 hours ago",
    category: "vitals",
  },
  {
    icon: <Pill className="h-4 w-4 text-medication" />,
    title: "Vitamin D taken",
    subtitle: "2000 IU - daily supplement",
    time: "4 hours ago",
    category: "medication",
  },
  {
    icon: <Droplets className="h-4 w-4 text-hydration" />,
    title: "Hydration logged",
    subtitle: "2 glasses of water",
    time: "5 hours ago",
    category: "hydration",
  },
  {
    icon: <Moon className="h-4 w-4 text-sleep" />,
    title: "Sleep recorded",
    subtitle: "7.5 hours - good quality",
    time: "8 hours ago",
    category: "sleep",
  },
  {
    icon: <FileText className="h-4 w-4 text-symptoms" />,
    title: "Symptom logged",
    subtitle: "Mild headache - resolved",
    time: "Yesterday",
    category: "symptoms",
  },
];

export function RecentActivity() {
  return (
    <HealthCard delay={0.4}>
      <HealthCardHeader
        icon={<Clock className="h-5 w-5 text-primary" />}
        title="Recent Activity"
        subtitle="Your health timeline"
      />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.08 }}
              className="flex items-start gap-4 pl-2"
            >
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-border shadow-soft">
                {activity.icon}
              </div>
              <div className="flex-1 pt-1">
                <p className="font-medium text-foreground text-sm">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
              </div>
              <p className="text-xs text-muted-foreground pt-1">{activity.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <p className="mt-4 text-xs italic text-muted-foreground pt-4 border-t border-border">
        Progress is easier to see when you look at the whole story.
      </p>
    </HealthCard>
  );
}
