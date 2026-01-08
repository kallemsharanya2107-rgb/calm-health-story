import { AppLayout } from "@/components/layout/AppLayout";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { MedicationReminders } from "@/components/dashboard/MedicationReminders";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { WellnessInsight } from "@/components/dashboard/WellnessInsight";

const Index = () => {
  return (
    <AppLayout>
      <WelcomeHeader />
      <QuickActions />
      <QuickStats />
      
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <MedicationReminders />
        <div className="space-y-6">
          <RecentActivity />
          <WellnessInsight />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
