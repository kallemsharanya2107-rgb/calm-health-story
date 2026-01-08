import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionIntroProps {
  title: string;
  description: string;
  icon?: ReactNode;
  affirmation?: string;
}

export function SectionIntro({ title, description, icon, affirmation }: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            {icon}
          </div>
        )}
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      </div>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
      {affirmation && (
        <p className="mt-4 text-sm italic text-primary/80 bg-primary/5 rounded-lg px-4 py-3 max-w-xl">
          "{affirmation}"
        </p>
      )}
    </motion.div>
  );
}
