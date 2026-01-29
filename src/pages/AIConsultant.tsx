import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  Send, 
  Image as ImageIcon, 
  Mic, 
  MicOff,
  Loader2,
  User,
  AlertTriangle,
  Shield,
  ArrowRight,
  Paperclip,
  X,
  Activity,
  Stethoscope,
  Clock
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  image?: string;
  report?: AIReport;
}

interface AIReport {
  riskLevel: "low" | "medium" | "high";
  possibleConditions: string[];
  recommendations: string[];
  whenToSeeDoctor: string;
}

const sampleResponses: { keywords: string[]; report: AIReport; response: string }[] = [
  {
    keywords: ["headache", "head", "pain"],
    report: {
      riskLevel: "low",
      possibleConditions: ["Tension Headache", "Dehydration", "Eye Strain"],
      recommendations: [
        "Stay hydrated - drink plenty of water",
        "Take regular breaks from screens",
        "Rest in a quiet, dark room",
        "Consider over-the-counter pain relief if needed"
      ],
      whenToSeeDoctor: "If headaches persist for more than a week, are severe, or accompanied by fever, vision changes, or confusion."
    },
    response: "Based on what you've described, this sounds like it could be a tension headache, which is quite common. Here's my assessment:"
  },
  {
    keywords: ["fever", "temperature", "hot"],
    report: {
      riskLevel: "medium",
      possibleConditions: ["Viral Infection", "Flu", "Common Cold"],
      recommendations: [
        "Rest and stay hydrated",
        "Monitor your temperature regularly",
        "Take fever-reducing medication if above 38.5°C",
        "Avoid strenuous activity"
      ],
      whenToSeeDoctor: "If fever exceeds 39°C, lasts more than 3 days, or is accompanied by severe symptoms like difficulty breathing or chest pain."
    },
    response: "Fever is your body's natural response to fighting infection. Here's what I've assessed based on your symptoms:"
  },
  {
    keywords: ["rash", "skin", "itchy", "bump"],
    report: {
      riskLevel: "medium",
      possibleConditions: ["Allergic Reaction", "Contact Dermatitis", "Eczema"],
      recommendations: [
        "Avoid scratching the affected area",
        "Apply a cool compress",
        "Try an over-the-counter antihistamine",
        "Use fragrance-free moisturizers"
      ],
      whenToSeeDoctor: "If the rash spreads rapidly, is accompanied by difficulty breathing, or doesn't improve within a few days."
    },
    response: "Skin conditions can have many causes. Based on your description, here's my assessment:"
  }
];

export default function AIConsultant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm your AI health assistant. I'm here to help you understand your symptoms and provide general health information. You can type your symptoms, upload an image, or use voice input. How can I assist you today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): { response: string; report?: AIReport } => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const sample of sampleResponses) {
      if (sample.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return { response: sample.response, report: sample.report };
      }
    }

    return {
      response: "Thank you for sharing that information. While I can provide general health guidance, I'd need more specific details about your symptoms to give you a proper assessment. Could you describe:\n\n• What symptoms are you experiencing?\n• How long have you had them?\n• Are there any other related symptoms?\n\nRemember, this is for informational purposes only and doesn't replace professional medical advice.",
    };
  };

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
      image: selectedImage || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSelectedImage(null);
    setIsLoading(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const { response, report } = generateResponse(input);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
      report,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would use the Web Speech API
    if (!isRecording) {
      setTimeout(() => {
        setInput("I've been feeling tired and having headaches for the past few days.");
        setIsRecording(false);
      }, 2000);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "bg-success/10 text-success border-success/20";
      case "medium": return "bg-warning/10 text-warning border-warning/20";
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-4">
        <div className="container mx-auto px-4 h-full flex flex-col" style={{ height: "calc(100vh - 6rem)" }}>
          {/* Header */}
          <div className="py-4 border-b border-border mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl medical-gradient flex items-center justify-center shadow-medical">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-display text-xl font-semibold">AI Health Consultant</h1>
                  <p className="text-sm text-muted-foreground">Powered by advanced medical AI</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Online
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-4">
            <DisclaimerBanner compact />
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto space-y-4 pb-4 scrollbar-hide">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div className={`max-w-2xl ${message.role === "user" ? "order-first" : ""}`}>
                    <div
                      className={`rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-muted rounded-tl-none"
                      }`}
                    >
                      {message.image && (
                        <img
                          src={message.image}
                          alt="Uploaded"
                          className="max-w-xs rounded-lg mb-2"
                        />
                      )}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    
                    {/* AI Report Card */}
                    {message.report && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 bg-card border border-border rounded-xl p-4 space-y-4"
                      >
                        {/* Risk Level */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getRiskColor(message.report.riskLevel)}`}>
                          <Shield className="w-4 h-4" />
                          <span className="text-sm font-medium capitalize">
                            {message.report.riskLevel} Risk Level
                          </span>
                        </div>

                        {/* Possible Conditions */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Stethoscope className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Possible Conditions</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {message.report.possibleConditions.map((condition, i) => (
                              <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                                {condition}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Recommendations */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Activity className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Recommended Actions</span>
                          </div>
                          <ul className="space-y-1">
                            {message.report.recommendations.map((rec, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                <ArrowRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* When to See Doctor */}
                        <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="w-4 h-4 text-warning" />
                            <span className="text-sm font-medium text-warning">When to See a Doctor</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{message.report.whenToSeeDoctor}</p>
                        </div>
                      </motion.div>
                    )}
                    
                    <p className="text-xs text-muted-foreground mt-1 px-1">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-none p-4">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Analyzing your symptoms...</span>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Selected Image Preview */}
          {selectedImage && (
            <div className="relative inline-block mb-2">
              <img src={selectedImage} alt="Selected" className="h-20 rounded-lg" />
              <Button
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 w-6 h-6"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                className="flex-shrink-0"
              >
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button
                variant={isRecording ? "destructive" : "outline"}
                size="icon"
                onClick={toggleRecording}
                className="flex-shrink-0"
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Describe your symptoms..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={(!input.trim() && !selectedImage) || isLoading}
                className="medical-gradient shadow-medical flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Press Enter to send • Upload images or use voice for hands-free input
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
