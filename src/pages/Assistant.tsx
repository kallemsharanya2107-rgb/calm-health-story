import { motion } from "framer-motion";
import { Sparkles, Send, MessageCircle, Lightbulb, AlertTriangle } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { HealthCard } from "@/components/ui/health-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestedQuestions = [
  "What do my vitals trends show this week?",
  "How has my medication adherence been?",
  "Explain my latest lab results",
  "Are there patterns in my symptoms?",
];

const sampleConversation = [
  {
    role: "assistant",
    message:
      "Hello! I'm here to help you understand your health records. I can explain trends, answer questions about your medications, and help you prepare for appointments. What would you like to know?",
  },
  {
    role: "user",
    message: "How has my blood pressure been this week?",
  },
  {
    role: "assistant",
    message:
      "Based on your recent readings, your blood pressure has been stable and within a healthy range. Over the past 7 days:\n\n• Average: 120/79 mmHg\n• Highest: 122/82 mmHg (Jan 6)\n• Lowest: 118/78 mmHg (Jan 7)\n\nThese readings suggest your current treatment is working well. Your consistency in taking Lisinopril at the same time each morning may be contributing to this stability.",
  },
];

const AssistantPage = () => {
  return (
    <AppLayout>
      <SectionIntro
        title="AI Health Assistant"
        description="Your assistant helps explain your health records and patterns. It provides insights based on your data, but does not replace professional medical advice."
        icon={<Sparkles className="h-6 w-6 text-primary" />}
        affirmation="Asking questions is part of taking care of yourself."
      />

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex items-start gap-3 rounded-lg bg-activity-light border border-activity/20 p-4"
      >
        <AlertTriangle className="h-5 w-5 text-activity shrink-0 mt-0.5" />
        <p className="text-sm text-activity">
          This assistant provides educational information based on your health records. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider for medical concerns.
        </p>
      </motion.div>

      {/* Chat Interface */}
      <HealthCard delay={0.15} className="mb-6">
        {/* Conversation */}
        <div className="space-y-4 mb-6 min-h-[300px]">
          {sampleConversation.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Health Assistant</span>
                  </div>
                )}
                <p className="text-sm whitespace-pre-line">{msg.message}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-3">
          <Input
            placeholder="Ask about your health records..."
            className="flex-1 rounded-full border-border bg-secondary"
          />
          <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </HealthCard>

      {/* Suggested Questions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Suggested questions</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((question, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 + index * 0.05 }}
              className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
            >
              {question}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  );
};

export default AssistantPage;
