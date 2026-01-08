import { motion } from "framer-motion";
import { Plus, Pill, Droplets, Heart, Moon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { icon: <Pill className="h-4 w-4" />, label: "Log medication", color: "bg-medication-light text-medication hover:bg-medication hover:text-primary-foreground" },
  { icon: <Droplets className="h-4 w-4" />, label: "Add water", color: "bg-hydration-light text-hydration hover:bg-hydration hover:text-primary-foreground" },
  { icon: <Heart className="h-4 w-4" />, label: "Record vitals", color: "bg-vitals-light text-vitals hover:bg-vitals hover:text-primary-foreground" },
  { icon: <Moon className="h-4 w-4" />, label: "Log sleep", color: "bg-sleep-light text-sleep hover:bg-sleep hover:text-primary-foreground" },
  { icon: <FileText className="h-4 w-4" />, label: "Note symptom", color: "bg-symptoms-light text-symptoms hover:bg-symptoms hover:text-primary-foreground" },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <h2 className="text-sm font-medium text-muted-foreground mb-3">Quick Actions</h2>
      <div className="flex flex-wrap gap-2">
        {actions.map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + index * 0.05 }}
          >
            <Button
              variant="ghost"
              className={`h-9 gap-2 rounded-full px-4 transition-all duration-300 ${action.color}`}
            >
              {action.icon}
              <span className="text-sm">{action.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
