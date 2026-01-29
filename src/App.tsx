import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIConsultant from "./pages/AIConsultant";
import MedicineCabinet from "./pages/MedicineCabinet";
import MapPage from "./pages/MapPage";
import HealthArticles from "./pages/HealthArticles";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultant" element={<AIConsultant />} />
          <Route path="/cabinet" element={<MedicineCabinet />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/articles" element={<HealthArticles />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
