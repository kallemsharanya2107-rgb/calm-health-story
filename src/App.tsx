import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
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
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/medications"
              element={
                <ProtectedRoute>
                  <Medications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/conditions"
              element={
                <ProtectedRoute>
                  <Conditions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity"
              element={
                <ProtectedRoute>
                  <Activity />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sleep"
              element={
                <ProtectedRoute>
                  <Sleep />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hydration"
              element={
                <ProtectedRoute>
                  <Hydration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/weight"
              element={
                <ProtectedRoute>
                  <Weight />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vitals"
              element={
                <ProtectedRoute>
                  <Vitals />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cycle"
              element={
                <ProtectedRoute>
                  <Cycle />
                </ProtectedRoute>
              }
            />
            <Route
              path="/symptoms"
              element={
                <ProtectedRoute>
                  <Symptoms />
                </ProtectedRoute>
              }
            />
            <Route
              path="/timeline"
              element={
                <ProtectedRoute>
                  <Timeline />
                </ProtectedRoute>
              }
            />
            <Route
              path="/assistant"
              element={
                <ProtectedRoute>
                  <Assistant />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
