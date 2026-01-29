import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Pill, 
  Map, 
  BookOpen, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Activity,
  Brain,
  Heart,
  Stethoscope,
  Sparkles
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";

const features = [
  {
    icon: Bot,
    title: "AI Medical Consultant",
    description: "Chat with our Gemini-powered AI assistant to get instant health insights and guidance.",
    link: "/consultant",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Activity,
    title: "Symptom Tracker",
    description: "Log daily symptoms, track severity trends, and monitor your health over time.",
    link: "/symptom-tracker",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Heart,
    title: "First Aid Guide",
    description: "Step-by-step emergency procedures for CPR, choking, burns, and more.",
    link: "/first-aid",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Pill,
    title: "Medicine Cabinet",
    description: "Store and manage your medications with expiration tracking and alerts.",
    link: "/cabinet",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Map,
    title: "Find Nearby Care",
    description: "Locate pharmacies, hospitals, and clinics near you with detailed information.",
    link: "/map",
    color: "bg-medical-blue/10 text-medical-blue",
  },
  {
    icon: BookOpen,
    title: "Health Education",
    description: "Access trusted health articles in Russian and Kazakh with expert insights.",
    link: "/articles",
    color: "bg-medical-pulse/10 text-medical-pulse",
  },
];

const stats = [
  { value: "24/7", label: "AI Available" },
  { value: "99+", label: "Languages" },
  { value: "Safe", label: "& Private" },
  { value: "Free", label: "To Use" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Health Assistant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Your Personal
              <br />
              <span className="text-gradient">Health Companion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Get instant health insights, manage your medications, and find nearby care—
              all powered by advanced AI technology designed with your safety in mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/consultant">
                <Button size="lg" className="medical-gradient shadow-medical hover:shadow-glow transition-all duration-300 gap-2 text-base px-8">
                  <Bot className="w-5 h-5" />
                  Start Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/articles">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8">
                  <BookOpen className="w-5 h-5" />
                  Explore Articles
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 relative max-w-4xl mx-auto"
          >
            <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12 bg-muted/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="pt-12 p-6 grid md:grid-cols-3 gap-4">
                {/* Chat preview */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-xs">
                      <p className="text-sm">Hello! I'm your AI health assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-xs">
                      <p className="text-sm">I've been having headaches for the past few days...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-sm">
                      <p className="text-sm">I understand. Let me ask you a few questions to better understand your symptoms...</p>
                    </div>
                  </div>
                </div>
                {/* Side panel */}
                <div className="hidden md:flex flex-col gap-3">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-success" />
                      <span className="text-xs font-medium text-success">Risk Level: Low</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Initial assessment suggests minor concern.</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">Suggested Actions</span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Stay hydrated</li>
                      <li>• Rest in quiet environment</li>
                      <li>• Monitor symptoms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-card rounded-xl shadow-lg border border-border flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-medical-pulse animate-heartbeat" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-14 h-14 bg-card rounded-xl shadow-lg border border-border flex items-center justify-center"
            >
              <Brain className="w-7 h-7 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <DisclaimerBanner />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for
              <br />
              <span className="text-gradient">Better Health Management</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive tools designed to help you understand your health, manage medications, 
              and connect with healthcare providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={feature.link}>
                    <div className="group h-full bg-card hover:bg-card/80 rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-medical transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Built with Your
                <br />
                <span className="text-gradient">Safety in Mind</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We understand that health information is sensitive. That's why we've designed 
                Disease Detector with safety, privacy, and accuracy as our top priorities.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Privacy First", desc: "Your health data stays on your device" },
                  { icon: Zap, title: "Instant Insights", desc: "Get AI-powered responses in seconds" },
                  { icon: Users, title: "Expert-Reviewed", desc: "Content reviewed by medical professionals" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl medical-gradient flex items-center justify-center">
                    <Activity className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">Health Report</h4>
                    <p className="text-sm text-muted-foreground">Generated by AI</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Risk Assessment</span>
                      <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">Low Risk</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Based on your symptoms, the risk level appears low.</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium mb-2 block">Possible Conditions</span>
                    <div className="flex flex-wrap gap-2">
                      {["Tension Headache", "Dehydration", "Eye Strain"].map((tag) => (
                        <span key={tag} className="text-xs bg-background px-2 py-1 rounded-full border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <span className="text-sm font-medium mb-2 block">Recommended Actions</span>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>✓ Stay hydrated - drink 8 glasses of water</li>
                      <li>✓ Take regular breaks from screens</li>
                      <li>✓ Consider over-the-counter pain relief</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden"
          >
            <div className="absolute inset-0 medical-gradient opacity-5" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Start your health journey today with our AI-powered assistant. 
                Get instant insights, manage medications, and find care near you.
              </p>
              <Link to="/consultant">
                <Button size="lg" className="medical-gradient shadow-medical hover:shadow-glow transition-all duration-300 gap-2 text-base px-8">
                  <Bot className="w-5 h-5" />
                  Start Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
