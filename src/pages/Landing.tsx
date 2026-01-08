import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Pill,
  Moon,
  Activity,
  Droplets,
  Brain,
  Shield,
  TrendingUp,
  Calendar,
  FileText,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Pill className="h-6 w-6" />,
    title: "Medication Tracking",
    description: "Never miss a dose with intelligent reminders and adherence tracking.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Vitals Monitoring",
    description: "Track blood pressure, heart rate, glucose levels, and more in one place.",
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: "Sleep Analysis",
    description: "Understand your sleep patterns and their impact on your overall health.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Activity Logging",
    description: "Monitor daily movement, steps, and exercise to stay active.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Hydration Tracking",
    description: "Stay hydrated with simple daily water intake monitoring.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Health Assistant",
    description: "Get personalized insights and answers about your health data.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Women's Health",
    description: "Menstrual cycle tracking with symptom and pattern recognition.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Symptom Logging",
    description: "Record symptoms and identify patterns over time.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Health Timeline",
    description: "See your complete health story in one comprehensive timeline.",
  },
];

const benefits = [
  "Secure, encrypted health data storage",
  "Evidence-based health insights",
  "Customizable tracking for your needs",
  "Export reports for healthcare providers",
  "Gender-inclusive health content",
  "Privacy-first architecture",
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">MedSyncAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Health Journey,
              <br />
              <span className="text-primary">Thoughtfully Tracked</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              MedSyncAI helps you understand your health through intelligent tracking,
              personalized insights, and compassionate design. Because managing health
              should feel supportive, not overwhelming.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Track Your Health
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health tracking tools designed with care and attention to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Built with Your Privacy and Wellbeing in Mind
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe health tracking should be empowering, not anxiety-inducing.
                Our platform focuses on understanding patterns and progress, not perfection.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 border border-primary/20">
                <Shield className="h-16 w-16 text-primary mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Your Data, Your Control
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use bank-level encryption to protect your health information.
                  Your data is never shared without explicit permission, and you can
                  export or delete it at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of people who are tracking their health with compassion and clarity.
          </p>
          <Link to="/signup">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Start Free Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required. Start tracking in minutes.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">MedSyncAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Taking care of yourself is a daily practice, not a destination.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
