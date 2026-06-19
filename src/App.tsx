import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import { ThemeProvider } from "./context/ThemeContext";

import LoadingScreen from "./components/common/LoadingScreen/LoadingScreen";
import ScrollProgress from "./components/common/ScrollProgress/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import WhatsAppButton from "./components/common/WhatsAppButton/WhatsAppButton";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Reset loading timer on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // 2.2 seconds loading animation

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to top on routing changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6] transition-colors duration-300 flex flex-col justify-between">
      {/* Scroll indicator bar */}
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="flex flex-col min-h-screen">
            {/* Header Navbar */}
            <Navbar />

            {/* Main Application routing hub */}
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route
                    path="/portfolio/:slug"
                    element={<ProjectDetailPage />}
                  />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Global Footer */}
            <Footer />

            {/* Floating assistance keys */}
            <ScrollToTop />
            <WhatsAppButton />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
