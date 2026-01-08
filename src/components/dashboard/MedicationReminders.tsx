import { motion } from "framer-motion";
import { Pill, Check, Clock } from "lucide-react";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";

const medications = [
  {
    name: "Lisinopril",
    dosage: "10mg",
    time: "8:00 AM",
    purpose: "Blood pressure",
    taken: true,
  },
  {
    name: "Metformin",
    dosage: "500mg",
    time: "8:00 AM",
    purpose: "Blood sugar",
    taken: true,
  },
  {
    name: "Vitamin D",
    dosage: "2000 IU",
    time: "12:00 PM",
    purpose: "Supplement",
    taken: true,
  },
  {
    name: "Atorvastatin",
    dosage: "20mg",
    time: "8:00 PM",
    purpose: "Cholesterol",
    taken: false,
  },
];

export function MedicationReminders() {
  return (
    <HealthCard category="medication" delay={0.3}>
      <HealthCardHeader
        icon={<Pill className="h-5 w-5 text-medication" />}
        title="Today's Medications"
        subtitle="Track your daily doses"
        action={
          <Button variant="ghost" size="sm" className="text-xs">
            View all
          </Button>
        }
      />
      
      <div className="space-y-3">
        {medications.map((med, index) => (
          <motion.div
            key={med.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className={`flex items-center justify-between rounded-lg p-3 transition-colors ${
              med.taken ? "bg-medication-light" : "bg-secondary"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  med.taken
                    ? "bg-medication text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {med.taken ? <Check className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {med.name} <span className="text-muted-foreground font-normal">· {med.dosage}</span>
                </p>
                <p className="text-xs text-muted-foreground">{med.purpose}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{med.time}</p>
              {!med.taken && (
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-1 h-7 text-xs border-medication text-medication hover:bg-medication hover:text-primary-foreground"
                >
                  Mark taken
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-4 text-xs italic text-muted-foreground pt-4 border-t border-border">
        Taking care of your health is a process, not a test. Every dose you take matters.
      </p>
    </HealthCard>
  );
}
