import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Medications from "./pages/Medications";
import Conditions from "./pages/Conditions";
import Activity from "./pages/Activity";
import Sleep from "./pages/Sleep";
import Hydration from "./pages/Hydration";
import Weight from "./pages/Weight";
import Vitals from "./pages/Vitals";
import Cycle from "./pages/Cycle";
import Symptoms from "./pages/Symptoms";
import Timeline from "./pages/Timeline";
import Assistant from "./pages/Assistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/hydration" element={<Hydration />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/vitals" element={<Vitals />} />
          <Route path="/cycle" element={<Cycle />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
