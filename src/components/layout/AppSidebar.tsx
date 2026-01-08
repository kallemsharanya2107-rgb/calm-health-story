import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Pill,
  Heart,
  Moon,
  Droplets,
  Activity,
  Scale,
  Calendar,
  FileText,
  Clock,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Pill, label: "Medications", path: "/medications" },
  { icon: Stethoscope, label: "Conditions", path: "/conditions" },
  { icon: Activity, label: "Activity", path: "/activity" },
  { icon: Moon, label: "Sleep", path: "/sleep" },
  { icon: Droplets, label: "Hydration", path: "/hydration" },
  { icon: Scale, label: "Weight", path: "/weight" },
  { icon: Heart, label: "Vitals", path: "/vitals" },
  { icon: Calendar, label: "Cycle", path: "/cycle" },
  { icon: FileText, label: "Symptoms", path: "/symptoms" },
  { icon: Clock, label: "Timeline", path: "/timeline" },
  { icon: Sparkles, label: "AI Assistant", path: "/assistant" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">MedSyncAI</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                >
                  <NavLink
                    to={item.path}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                      }`}
                    />
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 h-8 w-1 rounded-r-full bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Footer affirmation */}
        <div className="border-t border-sidebar-border p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            "Taking care of yourself is a daily practice, not a destination."
          </p>
        </div>
      </div>
    </aside>
  );
}
