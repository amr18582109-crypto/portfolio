import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import SkillsPage from "@/pages/SkillsPage";
import JourneyPage from "@/pages/JourneyPage";
import BusinessPage from "@/pages/BusinessPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        <CustomCursor />
        <Sidebar />
        <div className="md:pl-16 pb-16 md:pb-0">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
