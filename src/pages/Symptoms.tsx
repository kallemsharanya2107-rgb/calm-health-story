import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";
import { FileText, Plus, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const symptoms = [
  {
    id: 1,
    name: "Mild headache",
    severity: "mild",
    duration: "2 hours",
    date: "Jan 7, 2026",
    notes: "Resolved after rest and water",
    relatedFactors: ["Poor sleep", "Dehydration"],
  },
  {
    id: 2,
    name: "Fatigue",
    severity: "moderate",
    duration: "Half day",
    date: "Jan 5, 2026",
    notes: "Improved after increasing sleep",
    relatedFactors: ["5.5 hours sleep"],
  },
  {
    id: 3,
    name: "Muscle tension",
    severity: "mild",
    duration: "Ongoing",
    date: "Jan 3, 2026",
    notes: "Neck and shoulders, likely posture related",
    relatedFactors: ["Desk work"],
  },
  {
    id: 4,
    name: "Stomach discomfort",
    severity: "mild",
    duration: "1 hour",
    date: "Dec 30, 2025",
    notes: "After taking Metformin without food",
    relatedFactors: ["Medication timing"],
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "severe":
      return "bg-destructive/10 text-destructive border-destructive/30";
    case "moderate":
      return "bg-symptoms-light text-symptoms border-symptoms/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const SymptomsPage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Symptoms Log"
        description="Symptoms provide context that numbers alone cannot. Logging them helps identify patterns and connections over time."
        icon={<FileText className="h-6 w-6 text-symptoms" />}
        affirmation="Listening to your body is a form of intelligence."
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Button className="gap-2 bg-symptoms hover:bg-symptoms/90 text-primary-foreground">
          <Plus className="h-4 w-4" />
          Log Symptom
        </Button>
      </motion.div>

      {/* Symptom List */}
      <div className="space-y-4">
        {symptoms.map((symptom, index) => (
          <motion.div
            key={symptom.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + index * 0.08 }}
          >
            <HealthCard category="symptoms" className="cursor-pointer hover:shadow-elevated transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-symptoms-light shrink-0">
                    <AlertCircle className="h-5 w-5 text-symptoms" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{symptom.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{symptom.notes}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {symptom.relatedFactors.map((factor, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm text-muted-foreground">{symptom.date}</p>
                    <p className="text-xs text-muted-foreground">{symptom.duration}</p>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${getSeverityColor(symptom.severity)}`}>
                    {symptom.severity}
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </HealthCard>
          </motion.div>
        ))}
      </div>

      {/* Pattern Notice */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <HealthCard className="bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
              <AlertCircle className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">Pattern noticed</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Your headaches and fatigue often occur after nights with less than 6 hours of sleep. 
                Prioritizing rest might help reduce these symptoms.
              </p>
            </div>
          </div>
        </HealthCard>
      </motion.div>
    </AppLayout>
  );
};

export default SymptomsPage;
