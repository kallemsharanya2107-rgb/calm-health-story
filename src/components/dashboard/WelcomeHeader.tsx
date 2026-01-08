import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, Moon as MoonIcon } from "lucide-react";

function getGreeting(): { text: string; icon: JSX.Element } {
  const hour = new Date().getHours();
  if (hour < 6) return { text: "Good night", icon: <MoonIcon className="h-5 w-5 text-sleep" /> };
  if (hour < 12) return { text: "Good morning", icon: <Sun className="h-5 w-5 text-activity" /> };
  if (hour < 18) return { text: "Good afternoon", icon: <Cloud className="h-5 w-5 text-hydration" /> };
  return { text: "Good evening", icon: <MoonIcon className="h-5 w-5 text-sleep" /> };
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function WelcomeHeader() {
  const greeting = getGreeting();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
        {greeting.icon}
        <span>{formatDate()}</span>
      </div>
      <h1 className="text-3xl font-semibold text-foreground mb-2">
        {greeting.text}
      </h1>
      <p className="text-muted-foreground max-w-lg">
        Here's your health summary. Take a moment to check in with yourself—small steps lead to meaningful change.
      </p>
    </motion.div>
  );
}
