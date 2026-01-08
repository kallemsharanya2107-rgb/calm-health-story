import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";
import { Stethoscope, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const conditions = [
  {
    name: "Hypertension",
    status: "active",
    diagnosedDate: "January 2024",
    medications: ["Lisinopril 10mg"],
    notes: "Well controlled with current medication",
  },
  {
    name: "Type 2 Diabetes",
    status: "active",
    diagnosedDate: "March 2024",
    medications: ["Metformin 500mg"],
    notes: "Diet and exercise recommended alongside medication",
  },
  {
    name: "High Cholesterol",
    status: "active",
    diagnosedDate: "January 2024",
    medications: ["Atorvastatin 20mg"],
    notes: "Monitoring with regular lipid panels",
  },
  {
    name: "Vitamin D Deficiency",
    status: "resolved",
    diagnosedDate: "February 2024",
    medications: ["Vitamin D 2000 IU (ongoing)"],
    notes: "Levels normalized, continuing supplementation",
  },
];

const ConditionsPage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Health Conditions"
        description="This section keeps track of the health conditions you're managing. It helps connect symptoms, medications, and lifestyle data into a clearer picture."
        icon={<Stethoscope className="h-6 w-6 text-primary" />}
        affirmation="Understanding your health makes you an active participant, not just a patient."
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Condition
        </Button>
      </motion.div>

      <div className="space-y-4">
        {conditions.map((condition, index) => (
          <motion.div
            key={condition.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + index * 0.08 }}
          >
            <HealthCard className="cursor-pointer hover:shadow-elevated transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{condition.name}</h3>
                    <p className="text-sm text-muted-foreground">Diagnosed: {condition.diagnosedDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden md:block text-right">
                    <p className="text-sm text-muted-foreground">{condition.medications.join(", ")}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                      condition.status === "active"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {condition.status}
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </HealthCard>
          </motion.div>
        ))}
      </div>
    </AppLayout>
  );
};

export default ConditionsPage;
