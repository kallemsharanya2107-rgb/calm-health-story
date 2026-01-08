import { motion } from "framer-motion";
import { Pill, Plus, Check, Clock, X, ChevronRight } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard, HealthCardHeader } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";

const medications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    purpose: "Blood pressure management",
    startDate: "Jan 15, 2024",
    status: "active",
    todayStatus: "taken",
    adherence: 92,
    notes: "Take in the morning with food",
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    purpose: "Blood sugar management",
    startDate: "Mar 3, 2024",
    status: "active",
    todayStatus: "taken",
    adherence: 88,
    notes: "Take with meals to reduce stomach upset",
  },
  {
    id: 3,
    name: "Vitamin D",
    dosage: "2000 IU",
    frequency: "Once daily",
    purpose: "Supplement",
    startDate: "Feb 1, 2024",
    status: "active",
    todayStatus: "taken",
    adherence: 95,
    notes: "Optional - take with fatty food for better absorption",
  },
  {
    id: 4,
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    purpose: "Cholesterol management",
    startDate: "Jan 15, 2024",
    status: "active",
    todayStatus: "pending",
    adherence: 85,
    notes: "Take in the evening",
  },
];

const MedicationsPage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="Medication Records"
        description="Medications work best when taken consistently and understood clearly. This section keeps a precise record of what you take, why you take it, and how regularly you're able to follow your schedule."
        icon={<Pill className="h-6 w-6 text-medication" />}
        affirmation="Taking care of your health is a process, not a test. Every dose you take matters."
      />

      {/* Today's Schedule */}
      <HealthCard category="medication" className="mb-6" delay={0.1}>
        <HealthCardHeader
          icon={<Clock className="h-5 w-5 text-medication" />}
          title="Today's Schedule"
          subtitle="January 8, 2026"
          action={
            <Button className="gap-2 bg-medication hover:bg-medication/90 text-primary-foreground">
              <Plus className="h-4 w-4" />
              Add Medication
            </Button>
          }
        />
        
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {medications.map((med, index) => (
            <motion.div
              key={med.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className={`relative rounded-xl p-4 border transition-all duration-300 ${
                med.todayStatus === "taken"
                  ? "bg-medication-light border-medication/30"
                  : "bg-secondary border-border hover:border-medication/50"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    med.todayStatus === "taken"
                      ? "bg-medication text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {med.todayStatus === "taken" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{med.frequency}</span>
              </div>
              
              <h4 className="font-semibold text-foreground mb-1">{med.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{med.dosage}</p>
              <p className="text-xs text-muted-foreground">{med.purpose}</p>
              
              {med.todayStatus !== "taken" && (
                <Button
                  size="sm"
                  className="w-full mt-3 bg-medication hover:bg-medication/90 text-primary-foreground"
                >
                  Mark as taken
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </HealthCard>

      {/* Medication List */}
      <h2 className="text-lg font-semibold text-foreground mb-4">All Medications</h2>
      <div className="space-y-3">
        {medications.map((med, index) => (
          <motion.div
            key={med.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }}
          >
            <HealthCard className="cursor-pointer hover:shadow-elevated transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medication-light">
                    <Pill className="h-6 w-6 text-medication" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {med.name}
                      <span className="ml-2 font-normal text-muted-foreground">{med.dosage}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">{med.purpose}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-foreground">{med.adherence}%</p>
                    <p className="text-xs text-muted-foreground">Adherence</p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-sm text-muted-foreground">Since {med.startDate}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      med.status === "active"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {med.status}
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

export default MedicationsPage;
