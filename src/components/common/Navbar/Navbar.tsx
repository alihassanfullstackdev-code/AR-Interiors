import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { motion, AnimatePresence } from "motion/react";
import Button from "../../ui/Button/Button";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = location.pathname === "/";

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHome) {
      handleScroll(); // Initial check
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Always solid on inner pages
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close Mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="font-display text-xl md:text-2xl font-bold tracking-[0.2em] text-white">
              AR{" "}
              <span className="text-[#D4AF37] group-hover:text-[#E8C84A] transition-colors duration-200">
                INTERIOR
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-sans text-xs font-semibold tracking-wider uppercase relative py-2 text-white/80 hover:text-[#D4AF37] transition-all duration-200 group"
                >
                  {link.name}
                  {/* Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Utility Items */}
          <div className="hidden lg:flex items-center gap-5">
            {/* "Contact" */}
            <Button
              to="/contact"
              variant="outline"
              className="px-6 py-3 border-[#D4AF37]/35"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Utility triggers (Hamburger) */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Hamburger trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors z-[9999]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#1A1A1A] z-[9985] flex flex-col justify-between py-24 px-10 border-l border-[#D4AF37]/10"
          >
            {/* Background design accents */}
            <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />

            {/* Links loop */}
            <nav className="flex flex-col gap-6 mt-6">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-2xl font-medium tracking-wide flex items-center justify-between group py-1.5 ${
                        isActive ? "text-[#D4AF37]" : "text-white/85"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isActive
                            ? "text-[#D4AF37] translate-x-1"
                            : "text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer Row inside mobile menu */}
            <div className="border-t border-white/5 pt-8 mt-12">
              <Button
                to="/contact"
                variant="primary"
                className="w-full text-center py-4 mb-6"
              >
                Contact
              </Button>

              <div className="text-center text-white/45 font-sans text-xs tracking-wider">
                <p>{siteConfig.contact.phoneReadable}</p>
                <p className="mt-1">{siteConfig.contact.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
